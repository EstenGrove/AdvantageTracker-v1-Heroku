import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/details/SubtaskCount.module.scss";
import sprite from "../../assets/tasks.svg";

export const getCompletedCount = subtasks =>
	subtasks.filter(subtask => subtask.IsCheck || subtask.IsCompleted).length;

const SubtaskCount = ({ subtasks = [], addChecklist }) => {
	if (isEmptyArray(subtasks)) {
		return (
			<section className={styles.SubtaskCount}>
				<span className={styles.SubtaskCount_count}>No subtasks</span>
			</section>
		);
	}
	return (
		<section className={styles.SubtaskCount}>
			<div className={styles.SubtaskCount_top}>
				<svg className={styles.SubtaskCount_top_icon}>
					<use xlinkHref={`${sprite}#icon-check_box`}></use>
				</svg>
				<span className={styles.SubtaskCount_top_count}>
					{getCompletedCount(subtasks)}/{subtasks.length}
				</span>
			</div>
		</section>
	);
};

export default SubtaskCount;

SubtaskCount.defaultProps = {};

SubtaskCount.propTypes = {
	subtasks: PropTypes.arrayOf(PropTypes.object)
};
