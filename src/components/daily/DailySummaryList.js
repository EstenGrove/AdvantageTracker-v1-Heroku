import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/daily/DailySummaryList.module.scss";
import DailySummaryListItem from "./DailySummaryListItem";

const DailySummaryList = ({ tasks = [] }) => {
	if (isEmptyArray(tasks)) {
		return <span>No tasks today</span>;
	}
	return (
		<ul className={styles.DailySummaryList}>
			{tasks &&
				tasks.length &&
				tasks.map((task, index) => (
					<DailySummaryListItem
						task={task}
						key={task.AssessmentTrackingTaskId}
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
