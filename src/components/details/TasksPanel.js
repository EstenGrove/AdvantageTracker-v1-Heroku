import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useForm } from "../../utils/useForm";
import styles from "../../css/details/TasksPanel.module.scss";
import sprite2 from "../../assets/buttons.svg";
import StatefulButton from "../shared/StatefulButton";
import Modal from "../shared/Modal";
import AppliedFilters from "./AppliedFilters";
import TaskDetails from "./TaskDetails";

const btnStyles = {
  backgroundColor: "hsla(170, 100%, 39%, 1)",
  color: "#ffffff"
};

const TasksPanel = ({
  scheduledTasksUpdateCount = 0,
  saveChanges,
  children
}) => {
  const [showAppliedFilters, setShowAppliedFilters] = useState(false);

  const { formState, handleCheckbox, handleChange } = useForm({
    unscheduled: true,
    scheduled: true,
    am: false,
    pm: false,
    noc: false,
    any: false,
    search: "" // search by ADL, task description
  });

  // displays pending task changes
  const changeFormatter = count => {
    if (count !== 1) return `${count} task updates are pending`;
    return `${count} task update is pending`;
  };

  return (
    <>
      <main className={styles.TasksPanel}>
        <div className={styles.TasksPanel_top}>
          <section className={styles.TasksPanel_top_actionsSection}>
            <span className={styles.TasksPanel_top_actionsSection_title}>
              Current Tasks
            </span>
            <svg
              className={styles.TasksPanel_top_actionsSection_icon}
              onClick={() => setShowAppliedFilters(!showAppliedFilters)}
            >
              <use xlinkHref={`${sprite2}#icon-tune`}></use>
            </svg>
          </section>
          {/* TASK FILTERS SECTION */}
          {showAppliedFilters && (
            <section className={styles.TasksPanel_top_filtering}>
              <div className={styles.TasksPanel_top_filtering_title}>
                Filters
              </div>
              <AppliedFilters
                vals={formState.values}
                handleCheckbox={handleCheckbox}
                handleSearch={handleChange}
              />
            </section>
          )}
          {/* VARIOUS EDITING ACTIONS GO HERE */}
          <section className={styles.TasksPanel_top_controlsSection}>
            <div
              className={styles.TasksPanel_top_controlsSection_completedCount}
            >
              {`${changeFormatter(scheduledTasksUpdateCount)}`}
            </div>
            <section className={styles.TasksPanel_top_controlsSection_save}>
              <StatefulButton
                key="saveButton"
                action="Saving task(s)..."
                text="Save your changes?"
                customStyles={btnStyles}
                callback={saveChanges}
              />
            </section>
          </section>
        </div>
        {/* TASKLIST & TASKS ARE PASSED AS CHILDREN */}
        <section className={styles.TasksPanel_inner}>{children}</section>
      </main>
    </>
  );
};

export default TasksPanel;

TasksPanel.defaultProps = {
  tasks: [],
  markedForCompletion: [],
  scheduledTasksUpdateCount: 0
};

TasksPanel.propTypes = {
  formState: PropTypes.object,
  authData: PropTypes.object,
  tasks: PropTypes.array, // of objects or empty array
  markComplete: PropTypes.func,
  markedForCompletion: PropTypes.array, // not needed??? may remove later???
  scheduledTasksUpdateCount: PropTypes.number,
  saveChanges: PropTypes.func
};
