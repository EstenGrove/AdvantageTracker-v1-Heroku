import React from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/details/TaskList.module.scss";
import TaskItem from "./TaskItem";

const TaskList = ({
	tasks = [],
	vals,
	viewDetails,
	handleSubtask,
	handleShiftStatus
}) => {
	if (isEmptyArray(tasks)) {
		return (
			<article className={styles.EMPTY}>
				<h4 className={styles.EMPTY_MSG}>No tasks found.</h4>
			</article>
		);
	}
	return (
		<article className={styles.TaskList}>
			{tasks &&
				tasks.map((task, index) => (
					<TaskItem
						task={task}
						key={`${task.AssessmentTrackingTaskId}_${index}`}
						values={vals}
						handleSubtask={handleSubtask}
						handleShiftStatus={handleShiftStatus}
						viewDetails={() => viewDetails(task)}
					/>
				))}
		</article>
	);
};

export default TaskList;

TaskList.defaultProps = {
	tasks: []
};

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object),
	vals: PropTypes.object,
	handleSubtask: PropTypes.func
};
