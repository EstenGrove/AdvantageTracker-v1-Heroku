import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
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
	const [showModal, setShowModal] = useState(false);
	const [checklist, setChecklist] = useState([]);
	const { formState, handleChange, handleCheckbox } = useForm({
		// Create task values
		newTaskName: "",
		newTaskADL: "",
		newTaskNote: "",
		newTaskShift: ""
	});

	const addDataToTaskModel = (vals, model) => {
		const initModel = new ScheduledTaskModel();
		const taskModel = initModel.getModel();
	};

	const createNewTask = e => {
		e.preventDefault();
		const { newTaskADL, newTaskName, newTaskNote, newTaskShift } = formState;
		return console.log("Creating new task...");
	};

	const addChecklist = e => {
		e.preventDefault();
		return console.log("Adding checklist...");
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
						vals={formState.values}
						handleChange={handleChange}
						handleCheckbox={handleCheckbox}
						addChecklist={addChecklist}
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
