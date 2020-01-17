import React from "react";
import styles from "../../css/details/ShiftList.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyObj } from "../../helpers/utils_types";
import { handleShiftLabel } from "../../helpers/utils_shifts";
import sprite from "../../assets/tasks.svg";
import { getCompletedCount } from "./SubtaskCount";
import {
	groupByShift,
	findSubtasksByShift,
	countSubtasksByShiftID
} from "../../helpers/utils_subtasks";

// NOTE: IN ORDER TO UPDATE ShiftEntry UPDATE THE "IsCheck" property!!
// REFACTOR COMPONENT TO SHOW:
// AM: # of subtasks
// PM: # of subtasks
// NOC: # of subtasks

// MAP THRU THE Shifts
// THEN COUNT THE ShiftTasks for each Shift and display a count.

export const ShiftEntry = ({ task = {}, shift = {} }) => {
	console.group("<ShiftEntry/>");
	console.log("task", task);
	console.log("subtasks", task.ShiftTasks);
	console.log("shift", shift);
	console.groupEnd();

	if (isEmptyArray(task.Shifts)) {
		return (
			<div className={styles.EMPTY}>
				<h4 className={styles.EMPTY_MSG}>No task shifts</h4>
			</div>
		);
	}
	return (
		<div className={styles.ShiftEntry}>
			<h6 className={styles.ShiftEntry_shift}>
				{handleShiftLabel(task, shift)}
			</h6>
			<p className={styles.ShiftEntry_subtaskCount}>
				{countSubtasksByShiftID(task.ShiftTasks, shift.AssessmentShiftId)}
			</p>
		</div>
	);
};

ShiftEntry.defaultProps = {
	task: PropTypes.object,
	shift: {}
};

ShiftEntry.propTypes = {
	task: PropTypes.object.isRequired,
	shift: PropTypes.object.isRequired,
	viewShiftNotes: PropTypes.func
};

const ShiftList = ({ task = {} }) => {
	const { Shifts: shifts } = task;
	if (isEmptyObj(task)) return;
	return (
		<div className={styles.ShiftList}>
			{shifts &&
				shifts.map((shift, index) => (
					<ShiftEntry
						key={`${shift.AssessmentTrackingTaskShiftId}`}
						shift={shift}
						task={task}
					/>
				))}
		</div>
	);
};

export default ShiftList;

ShiftList.defaultProps = {
	task: {}
};

ShiftList.propTypes = {
	task: PropTypes.object
};
