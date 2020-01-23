import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { useSpeechRecognition } from "../../utils/useSpeechRecognition";
import {
	ScheduledTaskModel,
	ScheduledSubtaskModel
} from "../../helpers/utils_models";
import styles from "../../css/dashboard/DashboardContainer.module.scss";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Modal from "../shared/Modal";
import CreateTaskForm from "../app/CreateTaskForm";

// REQUIREMENTS:
// 1. Needs to be aware of <Sidebar/> open/close state
// 2. Expands/Collapses based on <Sidebar/> state
// 3. CREATE TASK MODAL *HAS* TO BE HERE OTHER WISE YOU CAN'T CREATE A TASK FROM ANY VIEW (ROUTE)

const DashboardContainer = ({ state, dispatch, isExpanded, handleSidebar }) => {
	const { currentResident } = state.globals;
	const [showModal, setShowModal] = useState(false);
	const [checklist, setChecklist] = useState([]); // for subtasks
	const { formState, setFormState, handleChange, handleCheckbox } = useForm({
		// Create task values
		newTaskCategory: "",
		newTaskName: "",
		newTaskADL: "",
		newTaskNote: "",
		newTaskVoiceNote: "",
		newTaskShift: "",
		newTaskPriority: "NONE",
		newTaskFollowUpDate: "",
		newTaskSignature: ""
	});
	const {
		isListening,
		isSupported,
		start,
		stop,
		final
	} = useSpeechRecognition({ continuous: true, interimResults: true });

	const addDataToTaskModel = (vals, model) => {
		const initModel = new ScheduledTaskModel();
		const taskModel = initModel.getModel();
		initModel.setProperty("AssessmentCategoryId");
	};

	const createNewTask = e => {
		e.preventDefault();
		const { newTaskADL, newTaskName, newTaskNote, newTaskShift } = formState;
		return console.log("Creating new task...");
	};

	const saveNewTask = e => {
		e.preventDefault();
		console.log("saveNewTask was invoked...");
	};

	const addChecklist = e => {
		e.preventDefault();
		return console.log("Adding checklist...");
	};

	const handlePriority = priority => {
		return setFormState({
			...formState,
			values: {
				...formState.values,
				newTaskPriority: priority
			}
		});
	};

	return (
		<>
			<div className={styles.DashboardContainer}>
				<Sidebar
					isExpanded={isExpanded}
					handleSidebar={handleSidebar}
					setShowModal={setShowModal}
					state={state}
					dispatch={dispatch}
					currentResident={state.globals.currentResident}
					scheduledTasks={state.globals.scheduledTasks}
					unscheduledTasks={state.globals.unscheduledTasks}
					categories={state.globals.categories}
				/>
				<Dashboard state={state} dispatch={dispatch} />
			</div>
			{/* MODAL AND CREATETETASKFORM WAS HERE PREVIOUSLY */}

			{showModal && (
				<Modal title="Create Task" closeModal={() => setShowModal(false)}>
					<CreateTaskForm
						currentResident={currentResident}
						vals={formState.values}
						handleChange={handleChange}
						handleCheckbox={handleCheckbox}
						handlePriority={handlePriority}
						addChecklist={addChecklist}
						saveNewTask={saveNewTask}
						handleEditTranscript={handleChange}
						// {...rest} for <VoiceRecorder/>
						isListening={isListening}
						isSupported={isSupported}
						start={start}
						stop={stop}
						final={final}
					/>
				</Modal>
			)}
		</>
	);
};

export default DashboardContainer;

DashboardContainer.defaultProps = {};

DashboardContainer.propTypes = {
	state: PropTypes.object,
	dispatch: PropTypes.func,
	isExpanded: PropTypes.bool.isRequired,
	handleSidebar: PropTypes.func.isRequired,
	customStyles: PropTypes.object,
	children: PropTypes.any
};
