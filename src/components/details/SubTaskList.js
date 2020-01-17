import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/details/SubtaskList.module.scss";
import ButtonSM from "../shared/ButtonSM";
import SubtaskItem from "./SubtaskItem";

const SubtaskList = ({ task = {}, vals, markSubtask, addNewSubtask }) => {
  if (isEmptyArray(task.ShiftTasks)) {
    return (
      <section className={styles.SubtaskList}>
        <h4 className={styles.SubtaskList_EMPTY}>No subtasks</h4>
        <ButtonSM handleClick={addNewSubtask}>
          <b>+</b> Create Subtask
        </ButtonSM>
      </section>
    );
  }
  return (
    <section className={styles.SubtaskList}>
      {task.ShiftTasks &&
        task.ShiftTasks.map((subtask, index) => (
          <SubtaskItem
            key={`${subtask.AssessmentTrackingTaskShiftSubTaskId}_${index}`}
            subtask={subtask}
            markSubtask={markSubtask}
            val={vals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
          />
        ))}
    </section>
  );
};

export default SubtaskList;

SubtaskList.defaultProps = {};

SubtaskList.propTypes = {
  task: PropTypes.object,
  addNewSubtask: PropTypes.func
};
