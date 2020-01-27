import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import { isScheduledTask, getTaskID } from "../../helpers/utils_tasks";
import styles from "../../css/daily/DailySummaryList.module.scss";
import DailySummaryListItem from "./DailySummaryListItem";

const addTitle = tasks => {
	if (isEmptyArray(tasks)) return "";
	if (isScheduledTask(tasks[0])) return "SCHEDULED_TASKS";
	return "UNSCHEDULED_TASKS";
};

const DailySummaryList = ({ tasks = [], category = {}, notes = [] }) => {
	if (isEmptyArray(tasks)) {
		return <span>No tasks today</span>;
	}
	return (
		<ul className={styles.DailySummaryList} title={addTitle(tasks)}>
			{!isEmptyArray(tasks) &&
				tasks.map((task, index) => (
					<DailySummaryListItem
						task={task}
						key={getTaskID(task) + index}
						notes={notes}
					/>
				))}
		</ul>
	);
};

export default DailySummaryList;

DailySummaryList.defaultProps = {
	tasks: [],
	notes: [],
	category: {}
};

DailySummaryList.propTypes = {
	tasks: PropTypes.array,
	notes: PropTypes.array,
	category: PropTypes.object
};
