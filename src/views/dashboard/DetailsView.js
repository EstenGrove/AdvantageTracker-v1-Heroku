import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { adlColors } from "../../helpers/utils_styles";
import { useForm } from "../../utils/useForm";
import { useCounter } from "../../utils/useCounter";
import { useSpeechRecognition } from "../../utils/useSpeechRecognition";
import { updateTrackingTasks } from "../../helpers/utils_scheduled";
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
import CreateTaskForm from "../../components/app/CreateTaskForm";

// **TODOS**:
// 1. REASSESS NOTES TEXTAREA NOT SHOWING WHEN REASSESS CHECKBOX IS SELECTED

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
	const {
		dispatch,
		category,
		currentUser,
		scheduledTasks,
		trackingTasks,
		currentResident
	} = props.location.state;
	const { showTaskModal, setShowTaskModal } = props;
	// useForm: ONLY USED FOR CREATING NEW TASKS,
	// UPDATING TASKS IS HANDLED INSIDE THE <TasksPanel/>
	const { formState, handleChange, handleCheckbox } = useForm({
		// Create task values
		newTaskName: "",
		newTaskADL: "",
		newTaskNote: "",
		newTaskShift: ""
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
	} = useSpeechRecognition(true, true); // CONSIDER MOVING DOWN THE TREE INTO CHILD COMPONENT(S)

	// handles setting priority value
	console.log("currentUser", currentUser);
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
					<TasksPanel
						scheduledTasks={scheduledTasks}
						trackingTasks={trackingTasks}
						currentResident={currentResident}
						currentUser={currentUser}
						dispatch={dispatch}
					/>
				</PanelLG>
			</section>

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
