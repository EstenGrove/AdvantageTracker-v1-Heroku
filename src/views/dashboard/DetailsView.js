import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { GlobalStateContext } from "../../state/GlobalStateContext";
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
import { findTasksByADL } from "../../helpers/utils_tasks";

// **TODOS**:
// 1. REASSESS NOTES TEXTAREA NOT SHOWING WHEN REASSESS CHECKBOX IS SELECTED

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
	const { category, currentUser } = props.location.state;
	const { state, dispatch } = useContext(GlobalStateContext);
	const {
		categories,
		trackingTasks,
		scheduledTasks,
		currentResident
	} = state.globals;

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

	console.group("<DetailsView/>");
	console.log("category (from props of DailySummarycard)", category);
	console.log("currentUser (from props)", currentUser);
	console.log("scheduledTasks", scheduledTasks);
	console.groupEnd();

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
						scheduledTasks={findTasksByADL(
							scheduledTasks,
							category.AdlCategoryType
						)}
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
