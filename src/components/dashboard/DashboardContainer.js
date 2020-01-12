import React from "react";
import styles from "../../css/dashboard/DashboardContainer.module.scss";
import { PropTypes } from "prop-types";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

// REQUIREMENTS:
// 1. Needs to be aware of <Sidebar/> open/close state
// 2. Expands/Collapses based on <Sidebar/> state

const DashboardContainer = ({
  state,
  dispatch,
  isExpanded,
  handleSidebar,
  customStyles
}) => {
  return (
    <div className={styles.DashboardContainer}>
      <Sidebar
        isExpanded={isExpanded}
        handleSidebar={handleSidebar}
        state={state}
        dispatch={dispatch}
        currentResident={state.globals.currentResident}
        scheduledTasks={state.globals.scheduledTasks}
        unscheduledTasks={state.globals.unscheduledTasks}
        categories={state.globals.categories}
      />
      <Dashboard state={state} dispatch={dispatch} />
    </div>
  );
};

export default DashboardContainer;

DashboardContainer.defaultProps = {};

DashboardContainer.propTypes = {
  children: PropTypes.any
};
