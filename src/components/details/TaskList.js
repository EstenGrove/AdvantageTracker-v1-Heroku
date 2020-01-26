import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/details/TaskList.module.scss";
import TaskItem from "./TaskItem";
import ModalSM from "../shared/ModalSM";

const TaskList = ({
	isEditing, // true is EditTask modal is open
	tasks = [],
	vals,
	viewDetails,
	handleSubtask,
	handleShiftStatus
}) => {
	const [showAddNote, setShowAddNote] = useState(false);
	// CONSIDER LIFTING THIS UP INTO <TasksPanel/>
	const addNote = task => {
		setShowAddNote(true);
		console.log("adding note...");
	};

	if (isEmptyArray(tasks)) {
		return (
			<article className={styles.EMPTY}>
				<h4 className={styles.EMPTY_MSG}>No tasks found.</h4>
			</article>
		);
	}
	return (
		<>
			<article className={styles.TaskList}>
				{tasks &&
					tasks.map((task, index) => (
						<TaskItem
							task={task}
							key={`${task?.AssessmentTrackingTaskId ??
								task?.AssessmentUnscheduleTaskId}_${index}`}
							values={vals}
							handleSubtask={handleSubtask}
							handleShiftStatus={handleShiftStatus}
							viewDetails={() => viewDetails(task)}
							addNote={() => addNote(task)}
						/>
					))}
			</article>

			{showAddNote && !isEditing && (
				<ModalSM title="Add a Note" closeModal={() => setShowAddNote(false)}>
					{/*  */}
					{/*  */}
					{/*  */}
				</ModalSM>
			)}
		</>
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
	// addNote: PropTypes.func.isRequired // NO LONGER NEEDED???
};
