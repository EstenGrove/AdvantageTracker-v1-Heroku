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
import { statusReducer } from "../../helpers/utils_styles";
import styles from "../../css/daily/DailySummaryListItem.module.scss";
import sprite from "../../assets/icon-bar.svg";

// COUNT: should be the # of notes/comments for a given task
// CONSIDER ADDING HELPER FOR GRAB THE TASK NOTES

const getSubtaskCount = task => {
	if (isEmptyObj(task)) return 0;
	if (isEmptyArray(task.ShiftTasks)) return 0;
	return task?.ShiftTasks?.length;
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
					{!task.TaskDescription
						? "No Description"
						: addEllipsis(task.TaskDescription, 40)}
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
					title={`${isEmptyVal(task.TaskNotes) ? 0 : 1} notes`}
				>
					<use xlinkHref={`${sprite}#icon-comments2`}></use>
				</svg>
				{/* WILL BE THE NUMBER OF NOTES FOR A TASK ITEM */}
				<span className={styles.DailySummaryListItem_item_count}>
					{isEmptyVal(task.TaskNotes) ? 0 : 1}
				</span>
			</div>
		</li>
	);
};

export default DailySummaryListItem;
