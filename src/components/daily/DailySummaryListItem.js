import React from "react";
import {
	isEmptyObj,
	isEmptyArray,
	isEmptyVal
} from "../../helpers/utils_types";
import {
	isCompleted,
	isMissedEvent,
	addEllipsis,
	replaceNullWithMsg
} from "../../helpers/utils_processing";
import { hasProp } from "../../helpers/utils_tasks";
import { statusReducer } from "../../helpers/utils_styles";
import styles from "../../css/daily/DailySummaryListItem.module.scss";
import sprite from "../../assets/icon-bar.svg";
import { isScheduledTask } from "../../helpers/utils_scheduled";

// COUNT: should be the # of notes/comments for a given task
// CONSIDER ADDING HELPER FOR GRAB THE TASK NOTES

const getSubtaskCount = task => {
	if (isEmptyObj(task)) return 0;
	if (!isScheduledTask(task)) return 0;
	if (isEmptyArray(task.ShiftTasks)) return 0;
	return task?.ShiftTasks?.length;
};

const getTaskDescription = task => {
	if (hasProp(task, "AssessmentUnscheduleTaskId")) {
		return replaceNullWithMsg(addEllipsis(task.Notes, 30), "No description");
	}
	return replaceNullWithMsg(addEllipsis(task.TaskDescription, 30), "No desc");
};

const DailySummaryListItem = ({ task }) => {
	return (
		<li
			className={
				isCompleted(task)
					? styles.DailySummaryListItem_isCompleted
					: styles.DailySummaryListItem
			}
			title={task.TaskDescription}
		>
			<section className={styles.DailySummaryListItem_details}>
				<div className={styles.DailySummaryListItem_details_desc}>
					{getTaskDescription(task)}
				</div>
			</section>
			<div className={styles.DailySummaryListItem_item}>
				<div
					title={task.TaskStatus}
					className={styles.DailySummaryListItem_item_status}
					style={replaceNullWithMsg(statusReducer(task.TaskStatus), "PENDING")}
				>
					<div className={styles.DailySummaryListItem_item_status_badge}></div>
				</div>
				{/* # OF SUBTASKS - CHECKMARK ICON */}
				<svg
					className={styles.DailySummaryListItem_item_icon}
					title={`${getSubtaskCount(task)} scheduled subtasks`}
				>
					<use xlinkHref={`${sprite}#icon-check_box`}></use>
				</svg>
				<span
					className={styles.DailySummaryListItem_item_count}
					title={`${getSubtaskCount(task)} scheduled subtasks`}
				>
					{getSubtaskCount(task)}
				</span>

				<svg
					className={styles.DailySummaryListItem_item_icon}
					title={`${isEmptyVal(task?.TaskNotes ?? task?.Notes) ? 0 : 1} notes`}
				>
					<use xlinkHref={`${sprite}#icon-comments2`}></use>
				</svg>
				{/* WILL BE THE NUMBER OF NOTES FOR A TASK ITEM */}
				<span className={styles.DailySummaryListItem_item_count}>
					{isEmptyVal(task?.TaskNotes ?? task?.Notes) ? 0 : 1}
				</span>
			</div>
		</li>
	);
};

export default DailySummaryListItem;
