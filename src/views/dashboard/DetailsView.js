import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { adlColors } from "../../helpers/utils_styles";
import { useForm } from "../../utils/useForm";
import { useCounter } from "../../utils/useCounter";
import { useSpeechRecognition } from "../../utils/useSpeechRecognition";
import {
	updateTrackingTasks,
	getTrackingTasks
} from "../../helpers/utils_scheduled";
import {
	ScheduledTask,
	ScheduledTaskShift,
	ScheduledShiftSubTask,
	ScheduledTaskNote
} from "../../helpers/utils_models";
import { findRecordAndUpdate } from "../../helpers/utils_updates";
import { createSubtaskVals } from "../../helpers/utils_subtasks";

import styles from "../../css/dashboard/DetailsView.module.scss";
import PanelLG from "../../components/shared/PanelLG";
import Modal from "../../components/shared/Modal";
import TasksPanel from "../../components/details/TasksPanel";
import TaskList from "../../components/details/TaskList";
import TaskDetails from "../../components/details/TaskDetails";
import EditTaskForm from "../../components/details/EditTaskForm";
import CreateTaskForm from "../../components/app/CreateTaskForm";
import SubtaskList from "../../components/details/SubTaskList";

// **TODOS**:
// 1. REASSESS NOTES TEXTAREA NOT SHOWING WHEN REASSESS CHECKBOX IS SELECTED

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
	const {
		dispatch,
		category,
		scheduledTasks,
		trackingTasks,
		currentResident
	} = props.location.state;
	const [showModal, setShowModal] = useState(false);
	const { showTaskModal, setShowTaskModal } = props;
	const [activeTask, setActiveTask] = useState({});
	const {
		count,
		increment,
		decrement,
		handleCountChange,
		handleCountBlur
	} = useCounter(0, 120);

	const { formState, setFormState, handleChange, handleCheckbox } = useForm({
		status: "",
		shift: "",
		reason: "",
		taskNotes: "",
		signature: "",
		followUpDate: "",
		residentUnavailable: false,
		requiresMedCheck: false,
		reassess: false,
		reassessNotes: "",
		minutes: 0,
		priority: "",
		// Create task values
		newTaskName: "",
		newTaskADL: "",
		newTaskNote: "",
		newTaskShift: "",
		// Subtask values
		...createSubtaskVals(activeTask)
	});
	const {
		isSupported,
		isRecording,
		isStopped,
		dictaphone,
		interimTranscript,
		finalTranscript,
		startRecording,
		stopRecording,
		handleRecording
	} = useSpeechRecognition(true, true);

	// opens modal and sets active task
	const viewDetails = task => {
		setShowModal(true);
		setActiveTask(task);
	};

	const saveTaskUpdate = async e => {
		e.persist();
		e.preventDefault();
		const { values } = formState;
		const updatedRecord = findRecordAndUpdate(
			values,
			activeTask,
			trackingTasks
		);
		// update server-side
		const success = await updateTrackingTasks(
			currentResident.token,
			updatedRecord
		);
		if (success) {
			return dispatch({
				type: "UPDATE"
			});
		}
	};

	// handles setting priority value
	const handlePriority = priority => {
		return setFormState({
			...formState,
			values: {
				...formState.values,
				priority: priority
			}
		});
	};

	return (
		<>
			<section className={styles.DetailsView}>
				<h1 className="subtitle">
					<strong style={{ color: adlColors[category.AdlCategoryType] }}>
						{category.AdlCategoryType}
					</strong>{" "}
					Tasks For Today
				</h1>
				<PanelLG customStyles={{ backgroundColor: "#ffffff" }}>
					<TasksPanel>
						<TaskList tasks={scheduledTasks} viewDetails={viewDetails} />
					</TasksPanel>
				</PanelLG>
			</section>

			{showModal && (
				<Modal title="Edit/Update Task" closeModal={() => setShowModal(false)}>
					<TaskDetails task={activeTask}>
						{/* SUBTASK ITEMS & NOTES */}
						<SubtaskList task={activeTask} />
						<EditTaskForm
							title="Update task"
							vals={formState.values}
							handleChange={handleChange}
							handleCheckbox={handleCheckbox}
							handlePriority={handlePriority}
							saveTaskUpdate={saveTaskUpdate}
							count={count}
							increment={increment}
							decrement={decrement}
							handleCountChange={handleCountChange}
							handleCountBlur={handleCountBlur}
						/>
					</TaskDetails>
				</Modal>
			)}

			{showTaskModal && (
				<Modal title="Create Task" closeModal={() => setShowTaskModal(false)}>
					<CreateTaskForm
						vals={formState.values}
						handleChange={handleChange}
						handleCheckbox={handleCheckbox}
						handleRecording={handleRecording}
						isSupported={isSupported}
						isRecording={isRecording}
						isStopped={isStopped}
						dictaphone={dictaphone}
						interimTranscript={interimTranscript}
						finalTranscript={finalTranscript}
						startRecording={startRecording}
						stopRecording={stopRecording}
					/>
				</Modal>
			)}
		</>
	);
};

export default withRouter(DetailsView);

DetailsView.defaultProps = {};

DetailsView.propTypes = {
	props: PropTypes.object
};
