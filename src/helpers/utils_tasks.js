import { hasProperty, isEmptyArray, isEmptyVal } from "./utils_types";
import { format } from "date-fns";

const findTaskRecordByProp = (task, taskRecords, prop) => {
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
	if (hasProperty("AssessmentUnscheduleTaskId")) {
		return false;
	}
	return true;
};

const sortByIdAsc = (a, b, prop) => {
	return a[prop] - b[prop];
};

const sortTasksAsc = (tasks, prop) => {
	return [...tasks.sort((a, b) => sortByIdAsc(a, b, prop))];
};

export {
	findTaskRecordByProp,
	sortByIdAsc,
	sortTasksAsc,
	isScheduledTask,
	findTasksByDay,
	findTasksByADL,
	findTodaysTasks,
	findTodaysTasksByADL,
	findTasksByDayAndADL,
	findTaskRecordByID // match ADLCareTask w/ AssessmentTrackingTask record
};
