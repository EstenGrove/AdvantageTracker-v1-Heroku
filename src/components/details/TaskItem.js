import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/details/TaskItem.module.scss";
import sprite from "../../assets/tasks.svg";

import { adlIcons } from "../../helpers/utils_styles";
import {
	replaceNullWithMsg,
	addEllipsis
} from "../../helpers/utils_processing";
import {
	formatDate,
	isPastDue,
	formatTimeToNow
} from "../../helpers/utils_dates";
import { isEmptyArray, isEmptyVal } from "../../helpers/utils_types";

import ShiftTag from "../shared/ShiftTag";
import StatusBadge from "../shared/StatusBadge";
import SubtaskCount from "./SubtaskCount";
import ShiftList from "./ShiftList";
import { isScheduledTask } from "../../helpers/utils_tasks";
import { getCategoryNameFromID } from "../../helpers/utils_categories";

// NEW REQUIREMENTS:
// 1. HANDLES BOTH SCHEDULED AND UNSCHEDULED TASK ITEMS
// 2. LEVERAGE NULLISH COALESCING AND OPTIONAL CHAINING TO HANDLE SWITCHING BETWEEN BOTH

// checks if scheduled or unscheduled task
// then returns the formatted ADL Category
const getTaskCategory = task => {
	if (isScheduledTask(task)) {
		return replaceNullWithMsg(task.ADLCategory, "None");
	}
	return replaceNullWithMsg(
		getCategoryNameFromID(task.AssessmentCategoryId),
		"None"
	);
};

// returns the task description regardless whether it's a scheduled|unscheduled task item
const getTaskDescription = task => {
	return (
		task?.Description ??
		addEllipsis(replaceNullWithMsg(task.Notes, "No description"), 40)
	);
};

const TaskItem = ({ viewDetails, addNote, task = {}, values = {} }) => {
	const [isCompleted, setIsCompleted] = useState(task.IsCompleted);
	const [pastDue, setPastDue] = useState(isPastDue(task.TrackDate));

	return (
		<article
			className={isCompleted ? styles.TaskItem_isCompleted : styles.TaskItem}
			onClick={viewDetails}
		>
			<ShiftTag shift={task.Shift} />
			<section className={styles.TaskItem_inner}>
				{/* ADL CATEGORY - TOP LEFT */}
				<header className={styles.TaskItem_inner_category}>
					<svg
						className={styles.TaskItem_inner_category_icon}
						style={adlIcons[task.ADLCategory].styles}
					>
						<use
							xlinkHref={`${sprite}#icon-${adlIcons[task.ADLCategory].icon}`}
						></use>
					</svg>
					{/* --- ADL CATEGORY HEADING --- */}
					<h2 className={styles.TaskItem_inner_category_title}>
						{getTaskCategory(task)}
					</h2>
				</header>
				{/* ADL TASK DESCRIPTION - MIDDLE LEFT */}
				<article className={styles.TaskItem_inner_desc}>
					<h2 className={styles.TaskItem_inner_desc_title}>Description</h2>
					<p
						className={styles.TaskItem_inner_desc_text}
						title={getTaskDescription(task)}
					>
						{addEllipsis(getTaskDescription(task), 40)}
					</p>
				</article>
				{/* SHIFT - MIDDLE RIGHT */}
				<article className={styles.TaskItem_inner_middle}>
					<StatusBadge
						status={replaceNullWithMsg(task.TaskStatus, "PENDING")}
						isCompleted={task.IsCompleted}
					>
						{replaceNullWithMsg(task.TaskStatus, "PENDING")}
					</StatusBadge>
					<section className={styles.TaskItem_inner_middle_shift}>
						<i>
							Shift <b>{replaceNullWithMsg(task.Shift, "ANY")}</b>
						</i>
					</section>
				</article>
				{/* SHIFTS */}
				{/* SHIFTS */}
				{/* CORRESPONDS TO SHIFTSUBTASK RECORDS */}
				<article className={styles.TaskItem_inner_bottom}>
					<section className={styles.TaskItem_inner_bottom_left}>
						<h2 className={styles.TaskItem_inner_bottom_title}>
							Subtasks By Shift
						</h2>
						<ShiftList task={task} />
					</section>

					{/* SUB TASKLIST GOES HERE... */}
					{/* SUB TASKLIST GOES HERE... */}
					<section className={styles.TaskItem_inner_bottom_middle}>
						<h2 className={styles.TaskItem_inner_bottom_middle_title}>
							Subtasks
						</h2>
						<SubtaskCount subtasks={task.ShiftTasks} />
					</section>

					{/* DUE DATE- CHECK IS PAST DUE */}
					<section className={styles.TaskItem_inner_bottom_right}>
						<div className={styles.TaskItem_inner_bottom_right_due}>
							<h2 className={styles.TaskItem_inner_bottom_right_due_title}>
								Due Date
							</h2>
							<svg className={styles.TaskItem_inner_bottom_right_due_icon}>
								<use xlinkHref={`${sprite}#icon-event_note`}></use>
							</svg>
							<time className={styles.TaskItem_inner_bottom_right_due_date}>
								{formatDate(task.TrackDate)}
							</time>
							{pastDue && !isCompleted && (
								<span className={styles.red}>
									<b>{formatTimeToNow(task.TrackDate, new Date())}</b> Past Due
								</span>
							)}
						</div>
						<div className={styles.TaskItem_inner_bottom_right_menu}>
							<div onClick={() => addNote(task)}>
								<svg className={styles.TaskItem_inner_bottom_right_menu_icon}>
									<use xlinkHref={`${sprite}#icon-plus21`}></use>
								</svg>
								<span>Add Note</span>
							</div>
						</div>
					</section>
				</article>
			</section>
		</article>
	);
};

export default TaskItem;

TaskItem.defaultProps = {
	task: {},
	values: {}
};

TaskItem.propTypes = {
	// markComplete: PropTypes.func.isRequired, // NO LONGER NEEDED???
	addNote: PropTypes.func.isRequired,
	task: PropTypes.object.isRequired,
	values: PropTypes.object.isRequired
};
