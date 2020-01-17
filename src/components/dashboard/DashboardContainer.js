import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/dashboard/DashboardContainer.module.scss";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Modal from "../shared/Modal";

// REQUIREMENTS:
// 1. Needs to be aware of <Sidebar/> open/close state
// 2. Expands/Collapses based on <Sidebar/> state

const DashboardContainer = ({ state, dispatch, isExpanded, handleSidebar }) => {
	const [showTaskModal, setShowTaskModal] = useState(false);
	return (
		<>
			<div className={styles.DashboardContainer}>
				<Sidebar
					isExpanded={isExpanded}
					handleSidebar={handleSidebar}
					setShowTaskModal={setShowTaskModal}
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
