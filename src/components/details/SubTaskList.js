import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import { getSubtaskByShiftID } from "../../helpers/utils_subtasks";
import styles from "../../css/details/SubtaskList.module.scss";
import ButtonSM from "../shared/ButtonSM";
import SubtaskItem from "./SubtaskItem";

// CONSIDER DISLAYING THE SUBTASKS BY THEIR SCHEDULED SHIFT
// ie: "AM" -- "PM" -- "NOC"

const SubtaskList = ({
  task = {},
  vals = {},
  shift,
  markSubtask,
  addNewSubtask
}) => {
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
    <article className={styles.SubtaskList}>
      {/* AM */}
      <section className={styles.SubtaskList_byShift}>
        <h4 className={styles.SubtaskList_title}>AM</h4>
        {!isEmptyArray(getSubtaskByShiftID(task.ShiftTasks, 1)) &&
          getSubtaskByShiftID(task.ShiftTasks, 1).map((subtask, index) => (
            <SubtaskItem
              key={`${subtask.AssessmentTrackingTaskShiftSubTaskId}_${index}`}
              subtask={subtask}
              markSubtask={markSubtask}
              val={vals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
            />
          ))}
      </section>
      {/* PM */}
      <section className={styles.SubtaskList_byShift}>
        <h4 className={styles.SubtaskList_title}>PM</h4>
        {!isEmptyArray(getSubtaskByShiftID(task.ShiftTasks, 2)) &&
          getSubtaskByShiftID(task.ShiftTasks, 2).map((subtask, index) => (
            <SubtaskItem
              key={`${subtask.AssessmentTrackingTaskShiftSubTaskId}_${index}`}
              subtask={subtask}
              markSubtask={markSubtask}
              val={vals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
            />
          ))}
      </section>
      {/* NOC */}
      <section className={styles.SubtaskList_byShift}>
        <h4 className={styles.SubtaskList_title}>NOC</h4>
        {!isEmptyArray(getSubtaskByShiftID(task.ShiftTasks, 3)) &&
          getSubtaskByShiftID(task.ShiftTasks, 3).map((subtask, index) => (
            <SubtaskItem
              key={`${subtask.AssessmentTrackingTaskShiftSubTaskId}_${index}`}
              subtask={subtask}
              markSubtask={markSubtask}
              val={vals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
            />
          ))}
      </section>
    </article>
  );
};

export default SubtaskList;

SubtaskList.defaultProps = {
  vals: {},
  task: {}
};

SubtaskList.propTypes = {
  task: PropTypes.object,
  vals: PropTypes.object,
  shift: PropTypes.string.isRequired,
  addNewSubtask: PropTypes.func, // create new Subtask
  markSubtask: PropTypes.func.isRequired // status a subtask via <CheckboxSM/>
};
