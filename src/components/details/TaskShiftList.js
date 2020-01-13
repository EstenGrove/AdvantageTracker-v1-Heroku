import React from "react";
import styles from "../../css/details/TaskShiftList.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyObj } from "../../helpers/utils_types";
import { findShiftName, handleShiftLabel } from "../../helpers/utils_shifts";
import Checkbox from "../shared/Checkbox";
import sprite from "../../assets/tasks.svg";

// NOTE: IN ORDER TO UPDATE TASKSHIFTENTRY UPDATE THE "IsCheck" property!!
// **REFACTOR COMPONENT AFTER APP IS FINISHED!!!**

export const TaskShiftEntry = ({
	task,
	shift = {},
	handleStatus,
	viewShiftNotes
}) => {
	if (isEmptyArray(task.Shifts)) {
		return (
			<div className={styles.EMPTY}>
				<h4 className={styles.EMPTY_MSG}>No task shifts</h4>
			</div>
		);
	}
	return (
		<div
			className={styles.TaskShiftEntry}
			// onClick={() => handleStatus(task, shift)} // MAYBE USE LATER?????
		>
			<Checkbox
				label={handleShiftLabel(task, shift)}
				val={shift.IsCheck}
				customStyles={{ marginBottom: "0" }}
				id={`taskShift_${task.AssessmentTrackingTaskId}_${shift.AssessmentTrackingTaskShiftId}`}
				name={`taskShift_${task.AssessmentTrackingTaskId}_${shift.AssessmentTrackingTaskShiftId}`}
			/>
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

const TaskShiftList = ({ task = {}, handleStatus }) => {
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
