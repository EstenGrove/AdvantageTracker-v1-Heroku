import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import Checkbox from "../shared/Checkbox";
import styles from "../../css/details/SubTaskList.module.scss";

const SubTask = ({ val, subtask, handleSubTask, label, ...rest }) => {
  return (
    <div className={styles.SubTaskEntry}>
      <Checkbox
        {...rest}
        val={val}
        checked={subtask.IsChecked}
        handleCheckbox={handleSubTask}
        label={label}
      />
    </div>
  );
};

export { SubTask };

SubTask.defaultProps = {};

SubTask.propTypes = {
  val: PropTypes.string.isRequired,
  subtask: PropTypes.object,
  handleSubTask: PropTypes.func,
  rest: PropTypes.any
};

const SubTaskList = ({ tasks }) => {
  const { ShiftTasks: shiftTasks } = tasks;
  if (isEmptyArray(shiftTasks)) {
    return (
      <article className={styles.EMPTY}>
        <h4 className={styles.EMPTY_MSG}>No subtasks</h4>
      </article>
    );
  }
  return (
    <article className={styles.SubTaskList}>
      {shiftTasks &&
        shiftTasks.map((shiftTask, index) => <SubTask subtask={shiftTask} />)}
    </article>
  );
};

export default SubTaskList;

SubTaskList.defaultProps = {
  subtasks: []
};

SubTaskList.propTypes = {
  subtasks: PropTypes.array
};
