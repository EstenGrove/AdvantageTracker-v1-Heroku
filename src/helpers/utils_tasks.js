import {
	hasProperty,
	isEmptyArray,
	isEmptyVal,
	isEmptyObj
} from "./utils_types";
import { replaceNullWithMsg, addEllipsis } from "./utils_processing";
import { format } from "date-fns";

const findTaskRecordByProp = (task, taskRecords, prop) => {
	if (isEmptyObj(task)) return {};
	if (isEmptyArray(taskRecords)) return {};
	return taskRecords.reduce((acc, cur) => {
		if (cur[prop] === task[prop]) {
			acc = cur;
			return acc;
		}
		return acc;
	});
};

const findTasksByDay = (tasks, day) => {
	if (isEmptyArray(tasks)) return;
	if (isEmptyVal(day)) return;
	return tasks.filter((task, index) => {
		if (task.DayOfWeek === day) {
			return task;
		}
		return null;
	});
};

const findTodaysTasks = tasks => {
	if (isEmptyArray(tasks)) return;
	return tasks.filter(task => task.DayOfWeek === format(new Date(), "dddd"));
};

// find by category (ie "Dressing")
const findTasksByADL = (tasks, adl) => {
	if (isEmptyArray(tasks)) return;
	return tasks.filter(task => task.ADLCategory === adl);
};

// find by today and adl (ie "Wednesday" & "Dressing")
const findTodaysTasksByADL = (tasks, adl) => {
	if (isEmptyArray(tasks)) return;
	if (isEmptyVal(adl)) return "No ADL was provided.";
	return findTasksByADL(findTodaysTasks(tasks), adl);
};

const findTasksByDayAndADL = (tasks, day, adl) => {
	if (isEmptyArray(tasks)) return;
	if (isEmptyVal(day) || isEmptyVal(adl)) return;
	return findTasksByADL(findTasksByDay(tasks, day), adl);
};

// match ADLCareTask w/ AssessmentTrackingTask record
const findTaskRecordByID = (
	activeTask,
	records,
	prop = "AssessmentTrackingTaskId"
) => {
	return records.reduce((acc, cur) => {
		if (cur[prop] === activeTask[prop]) {
			acc = cur;
			return acc;
		}
		return acc;
	});
};

const isScheduledTask = task => {
	if (hasProp(task, "AssessmentUnscheduleTaskId")) {
		return false;
	}
	return true;
};

const isUnscheduledTask = task => {
	if (hasProp(task, "AssessmentUnscheduleTaskId")) {
		return true;
	}
	return false;
};

const sortByIdAsc = (a, b, prop) => {
	return a[prop] - b[prop];
};

const sortTasksAsc = (tasks, prop) => {
	return [...tasks.sort((a, b) => sortByIdAsc(a, b, prop))];
};
const hasProp = (obj, prop) => {
	if (obj.hasOwnProperty(prop)) return true;
	return false;
};

// determines if a task is "scheduled" or "unscheduled"
// and returns the appropriate task id.
const getTaskID = task => {
	return isScheduledTask(task)
		? "AssessmentTrackingTaskId"
		: "AssessmentUnscheduleTaskId";
};

// checks for notes in unscheduled tasks
const checkForNotes = (task, msg) => {
	if (isEmptyVal(task.Notes) && isEmptyVal(task.Description)) {
		return msg;
	}
	if (isEmptyVal(task.Notes)) {
		return replaceNullWithMsg(addEllipsis(task.Description, 30), msg);
	}
	return addEllipsis(task.Notes, 30);
};

const getTaskDescription = task => {
	if (!isScheduledTask(task)) {
		return checkForNotes(task, "No description");
	}
	return replaceNullWithMsg(
		addEllipsis(task.TaskDescription, 30),
		"No description"
	);
};

export {
	findTaskRecordByProp,
	sortByIdAsc,
	sortTasksAsc,
	findTasksByDay,
	findTasksByADL,
	findTodaysTasks,
	findTodaysTasksByADL,
	findTasksByDayAndADL,
	findTaskRecordByID // match ADLCareTask w/ AssessmentTrackingTask record
};

// tasks/unscheduled notes and description processing
export { getTaskDescription, checkForNotes };

// determining scheduled|unscheduled tasks and their ids
export { isScheduledTask, isUnscheduledTask, hasProp, getTaskID };
