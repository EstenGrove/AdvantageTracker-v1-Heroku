import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import {
	getSubtaskByShiftID,
	createSubtaskVals,
	findAndUpdateSubtask,
	findSubtaskRecord
} from "../../helpers/utils_subtasks";
import styles from "../../css/details/SubtaskList.module.scss";
import ButtonSM from "../shared/ButtonSM";
import SubtaskItem from "./SubtaskItem";

// FINISH HANDLING SUBTASK UPDATES
// IE. IsCheck, IsCompleted, adding Notes

// CONSIDERATIONS:
// 1. CONSIDER CREATING NEW SUBTASKS WITHIN THE LIST AND DISPATCHING TO STATE

const SubtaskList = ({ task = {}, dispatch }) => {
	const [subtaskVals, setSubtaskVals] = useState({
		...createSubtaskVals(task)
	});

	const addNewSubtask = () => {
		console.log("Adding new subtask");
	};

	// handle marking subtask checkbox
	const markSubtask = e => {
		const { name, checked } = e.target;
		setSubtaskVals({
			...subtaskVals,
			[name]: checked
		});
		const { ShiftTasks } = task;
		const activeSubtask = findSubtaskRecord(name, [...ShiftTasks]);

		console.group("markSubtask");
		console.log("ShiftTasks", ShiftTasks);
		console.log("name", name);
		console.log("<SubtaskList/>: activeSubtask", activeSubtask);
		console.groupEnd();
		// return updateState()
	};

	// accepts the updated sub task record as a param
	const updateState = updatedSubtask => {
		return dispatch({
			type: "MARK_SUBTASK",
			data: {
				activeSubtask: {
					...updatedSubtask,
					IsCompleted: !updatedSubtask.IsCompleted
				}
			}
		});
	};

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
							val={subtaskVals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
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
							val={subtaskVals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
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
							val={subtaskVals[subtask.AssessmentTrackingTaskShiftSubTaskId]}
						/>
					))}
			</section>
		</article>
	);
};

export default SubtaskList;

SubtaskList.defaultProps = {
	task: {}
};

SubtaskList.propTypes = {
	task: PropTypes.object,
	dispatch: PropTypes.func,
	addNewSubtask: PropTypes.func // create new Subtask, consider handling locally instead of lifting up into parent
};
