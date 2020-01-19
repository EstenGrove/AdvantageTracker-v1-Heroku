import { isEmptyArray } from "./utils_types";

// #CALCULATIONS
const getPercentage = (count, completed) => {
	return Math.round(((completed / count) * 100).toFixed(2)) + "%";
};

const getAvg = arr => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

// get various counts: COMPLETED, PENDING, NOT-COMPLETE, MISSED-EVENT
const getCount = (tasks, status) => {
	return tasks.filter((task, index) => task.TaskStatus === status).length;
};

const getIsCompletedCount = tasks => {
	return tasks.filter(task => task.IsCompleted).length;
};

// params: "list" - array of objects
// "prop" - a property in each array item's object
// "val" - the value that each "prop" should equal.
const getCountByProp = (list, prop, val) => {
	return list.filter((item, index) => item[prop] === val).length;
};

// pass a condition you DONT wont to match (ie all that DONT meet condition)
const getRemaining = (list, condition) => {
	return list.filter((item, index) => item.TaskStatus !== condition).length;
};

const getCompletedCount = tasks => {
	if (isEmptyArray(tasks)) return 0;
	return tasks.filter(
		task => task.IsCompleted || task.TaskStatus === "COMPLETE"
	).length;
};

//  #STRING HELPERS
// will slice a string at a desired length an add a "..."
const addEllipsis = (val, desiredLength) => {
	if (val.length <= desiredLength) return val;
	return val.slice(0, desiredLength) + "...";
};

// #DATA TYPE HELPERS
const replaceNullWithMsg = (val, msg) => {
	if (!val || val === null) return msg;
	return val;
};

const getRandomNumArbitrary = (min, max) => {
	return Math.random() * (max - min) + min;
};

const groupBy = (list, iteratee) => {
	return list.reduce((acc, item) => {
		const keyToSortBy = iteratee(item);
		if (!acc[keyToSortBy]) {
			acc[keyToSortBy] = [];
		}
		acc[keyToSortBy].push(item);
		return acc;
	}, {});
};

export {
	getCompletedCount,
	getPercentage,
	getAvg,
	getRemaining,
	getCount,
	getCountByProp,
	addEllipsis,
	replaceNullWithMsg,
	getRandomNumArbitrary,
	getIsCompletedCount,
	groupBy
};
