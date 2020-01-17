import React from "react";
import styles from "../../css/details/TaskShiftList.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyObj } from "../../helpers/utils_types";
import { handleShiftLabel } from "../../helpers/utils_shifts";
import sprite from "../../assets/tasks.svg";
import { getCompletedCount } from "./SubtaskCount";

// NOTE: IN ORDER TO UPDATE TASKSHIFTENTRY UPDATE THE "IsCheck" property!!
// REFACTOR COMPONENT TO SHOW:
// AM: # of subtasks
// PM: # of subtasks
// NOC: # of subtasks

// MAP THRU THE Shifts
// THEN COUNT THE ShiftTasks for each Shift and display a count.

export const TaskShiftEntry = ({ task, shift = {} }) => {
	if (isEmptyArray(task.Shifts)) {
		return (
			<div className={styles.EMPTY}>
				<h4 className={styles.EMPTY_MSG}>No task shifts</h4>
			</div>
		);
	}
	return (
		<div className={styles.TaskShiftEntry}>
			<h6 className={styles.TaskShiftEntry_shift}>
				{handleShiftLabel(task, shift)}
			</h6>
			<p className={styles.TaskShiftEntry_subtaskCount}>
				{getCompletedCount(task.ShiftTasks)}
			</p>
		</div>
	);
};

TaskShiftEntry.defaultProps = {
	shift: {}
};

TaskShiftEntry.propTypes = {
	shift: PropTypes.object,
	viewShiftNotes: PropTypes.func
};

const TaskShiftList = ({ task = {} }) => {
	const { Shifts: shifts } = task;
	if (isEmptyObj(task)) return;
	return (
		<div className={styles.TaskShiftList}>
			{shifts &&
				shifts.map((shift, index) => (
					<TaskShiftEntry
						key={`${shift.AssessmentTrackingTaskShiftId}`}
						shift={shift}
						task={task}
					/>
				))}
		</div>
	);
};

export default TaskShiftList;

TaskShiftList.defaultProps = {
	task: {}
};

TaskShiftList.propTypes = {
	task: PropTypes.object
};
