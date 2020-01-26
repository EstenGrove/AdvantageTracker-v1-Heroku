import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import { useSpeechRecognition } from "../../utils/useSpeechRecognition";
import {
	ScheduledTaskModel,
	ScheduledSubtaskModel
} from "../../helpers/utils_models";
import { mapUpdatesToModel } from "../../helpers/utils_unscheduled";
import styles from "../../css/dashboard/DashboardContainer.module.scss";

import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Modal from "../shared/Modal";
import CreateTaskForm from "../app/CreateTaskForm";

// REQUIREMENTS:
// 1. Needs to be aware of <Sidebar/> open/close state
// 2. Expands/Collapses based on <Sidebar/> state
// 3. CREATE TASK MODAL *HAS* TO BE HERE OTHER WISE YOU CAN'T CREATE A TASK FROM ANY VIEW (ROUTE)

const DashboardContainer = ({
	state,
	dispatch,
	isExpanded,
	handleSidebar,
	history
}) => {
	const { currentResident } = state.globals;
	const { user } = state;
	const [showModal, setShowModal] = useState(false);
	const [checklist, setChecklist] = useState([]); // for subtasks
	const {
		isListening,
		isSupported,
		start,
		stop,
		final
	} = useSpeechRecognition({ continuous: true, interimResults: true });
	const { formState, setFormState, handleChange, handleCheckbox } = useForm({
		// Create task values
		newTaskCategory: "",
		newTaskName: "",
		newTaskADL: "",
		newTaskNote: "",
		newTaskVoiceNote: final,
		newTaskShift: "",
		newTaskPriority: "NONE",
		newTaskFollowUpDate: "",
		newTaskSignature: ""
	});

	const createNewTask = e => {
		e.preventDefault();
		const updatedModel = mapUpdatesToModel(
			{ ...formState.values, final: final },
			currentResident.ResidentId,
			user.userID
		);
		console.log("updatedModel", updatedModel);
		console.log("CREATING UNSCHEDULED TASK...SUCCESS!");
		// DISPATCH NEW UNSCHEDULED TASK ACTION TO THE GLOBAL STORE
		// SEND UPDATE TO SERVER

		return dispatch({
			type: "CREATE_TASK",
			data: {
				newTask: {
					...updatedModel
				}
			}
		});
	};

	const saveNewTask = e => {
		e.preventDefault();
		console.log("saveNewTask was invoked...");
		return createNewTask(e);
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
						//
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

export default withRouter(DashboardContainer);

DashboardContainer.defaultProps = {};

DashboardContainer.propTypes = {
	state: PropTypes.object,
	dispatch: PropTypes.func,
	isExpanded: PropTypes.bool.isRequired,
	handleSidebar: PropTypes.func.isRequired,
	customStyles: PropTypes.object,
	children: PropTypes.any
};
