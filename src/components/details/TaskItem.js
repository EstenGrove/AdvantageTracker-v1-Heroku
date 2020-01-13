import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/details/TaskItem.module.scss";
import sprite from "../../assets/tasks.svg";

import { iconsReducer } from "../../helpers/utils_styles";
import {
	replaceNullWithMsg,
	addEllipsis
} from "../../helpers/utils_processing";
import { formatDate } from "../../helpers/utils_dates";
import TaskShiftList from "./TaskShiftList";
import SubTaskList from "./SubTaskList";
import ShiftTag from "../shared/ShiftTag";
import StatusBadge from "../shared/StatusBadge";
import Checkbox from "../shared/Checkbox";

// NEW REQUIREMENTS:
// 1. ADD SHIFTS FOR EACH TASK
// 2. ADD AN "ADD SUBTASK" BUTTON/ICON
// 3. ENABLE SUBTASKS TO BE SCHEDULED PER SHIFT
// 4. WRITE FUNCTION TO JOIN SUBTASKS WITH TASK RECORDS (IE ADLCARETASK)

const TaskItem = ({ viewDetails, addNote, task = {}, values = {} }) => {
	const [isCompleted, setIsCompleted] = useState(task.IsCompleted);

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
						style={iconsReducer(task.ADLCategory).styles}
					>
						<use
							xlinkHref={`${sprite}#icon-${
								iconsReducer(task.ADLCategory).icon
							}`}
						></use>
					</svg>
					<h2 className={styles.TaskItem_inner_category_title}>
						{replaceNullWithMsg(task.ADLCategory, "None")}
					</h2>
				</header>
				{/* ADL TASK DESCRIPTION - MIDDLE LEFT */}
				<article className={styles.TaskItem_inner_desc}>
					<h2 className={styles.TaskItem_inner_desc_title}>Description</h2>
					<p
						className={styles.TaskItem_inner_desc_text}
						title={task.TaskDescription}
					>
						{addEllipsis(
							replaceNullWithMsg(task.TaskDescription, "No description"),
							40
						)}
					</p>
				</article>
				{/* SHIFT - MIDDLE RIGHT */}
				<article className={styles.TaskItem_inner_middle}>
					<StatusBadge status={task.TaskStatus} isCompleted={task.IsCompleted}>
						{task.TaskStatus}
					</StatusBadge>
					<section className={styles.TaskItem_inner_middle_shift}>
						<i>
							Shift <b>{replaceNullWithMsg(task.Shift, "ANY")}</b>
						</i>
					</section>
				</article>
				{/* TASK SHIFTS */}
				{/* TASK SHIFTS */}
				{/* TASK SHIFTS */}
				{/* TASK SHIFTS */}
				<article className={styles.TaskItem_inner_bottom}>
					<section className={styles.TaskItem_inner_bottom_left}>
						<h2 className={styles.TaskItem_inner_bottom_title}>Shifts</h2>
						<TaskShiftList task={task} />
					</section>

					{/* SUB TASKLIST GOES HERE... */}
					{/* SUB TASKLIST GOES HERE... */}
					<section className={styles.TaskItem_inner_bottom_middle}>
						<h2 className={styles.TaskItem_inner_bottom_middle_title}>
							Subtasks
						</h2>
						{/* <SubTaskList task={task} /> */}
					</section>

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
						</div>
						<div className={styles.TaskItem_inner_bottom_right_menu}>
							<div>
								<svg className={styles.TaskItem_inner_bottom_right_menu_icon}>
									<use xlinkHref={`${sprite}#icon-createmode_editedit`}></use>
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
	markComplete: PropTypes.func.isRequired,
	addNote: PropTypes.func.isRequired,
	handleSubtask: PropTypes.func.isRequired,
	task: PropTypes.object.isRequired,
	values: PropTypes.object.isRequired
};
