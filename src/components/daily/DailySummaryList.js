import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/daily/DailySummaryList.module.scss";
import DailySummaryListItem from "./DailySummaryListItem";
import { isScheduledTask } from "../../helpers/utils_tasks";

const addTitle = tasks => {
	if (isEmptyArray(tasks)) return "";
	if (isScheduledTask(tasks[0])) return "SCHEDULED_TASKS";
	return "UNSCHEDULED_TASKS";
};

const DailySummaryList = ({ tasks = [] }) => {
	if (isEmptyArray(tasks)) {
		return <span>No tasks today</span>;
	}
	return (
		<ul className={styles.DailySummaryList} title={addTitle(tasks)}>
			{tasks &&
				tasks.length &&
				tasks.map((task, index) => (
					<DailySummaryListItem
						task={task}
						key={
							task?.AssessmentTrackingTaskId ??
							task?.AssessmentUnscheduleTaskId + index
						}
					/>
				))}
		</ul>
	);
};

export default DailySummaryList;

DailySummaryList.defaultProps = {
	tasks: []
};

DailySummaryList.propTypes = {
	tasks: PropTypes.array,
	category: PropTypes.object
};
