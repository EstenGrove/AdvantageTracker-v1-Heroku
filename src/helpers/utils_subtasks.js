import { test } from "./utils_env.js";
import { scheduledTasks } from "./utils_endpoints.js";
import { isEmptyArray } from "./utils_types";
import { findShiftID, findShiftName } from "./utils_shifts";
// gets a count of the current ShiftSubTask records
const getSubtaskCount = async token => {
	let url = test.base + scheduledTasks.count.shiftSubTask;

	try {
		const request = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: "Basic " + btoa(test.user + ":" + test.password),
				SecurityToken: token,
				"Content-Type": "application/json"
			}
		});
		const response = await request.json();
		return response.Data;
	} catch (err) {
		console.log("Oops. An error occurred " + err);
		return err.message;
	}
};

// ##TODO:
// 1. CONSIDER PASSING CALLBACK FOR ERROR HANDLING
const updateSubtask = async (token, subtask) => {
	let url = test.base + scheduledTasks.save.shiftSubTask;

	try {
		const request = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: "Basic " + btoa(test.user + ":" + test.password),
				SecurityToken: token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(subtask)
		});
		const response = await request.json();
		return response.Data;
	} catch (err) {
		console.log("Oops. An error occurred " + err);
		return err.message;
	}
};

const updateSubtaskMany = async (token, subtasks) => {
	let url = test.base + scheduledTasks.save.shiftSubTaskMany;

	try {
		const request = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: "Basic " + btoa(test.user + ":" + test.password),
				SecurityToken: token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(subtasks)
		});
		const response = await request.json();
		return response.Data;
	} catch (err) {
		console.log("Oops. An error occurred " + err);
		return err.message;
	}
};

const deleteSubtask = async (token, subtask) => {
	let url = test.base + scheduledTasks.delete.shiftSubTask;
	url +=
		"?" +
		new URLSearchParams({
			"db-meta": "Advantage",
			source: "AssessmentTrackingTaskShiftSubTask"
		});
	url +=
		"&AssessmentTrackingTaskShiftSubTaskId=" +
		subtask.AssessmentTrackingTaskShiftSubTaskId;

	try {
		const request = await fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: "Basic " + btoa(test.user + ":" + test.password),
				SecurityToken: token,
				"Content-Type": "application/json"
			},
			body: JSON.stringify(subtask)
		});
		const response = await request.json();
		return response.Data;
	} catch (err) {
		console.log("Oops. An error occurred " + err);
		return err.message;
	}
};

/**
 * @description - Helper fn that formats, and joins a set of values into a URL query string.
 * @param {string} key - A string-based param key to join with each param value
 * @param {array} params - An array of param values to joined with a key.
 * @returns {string} - Returns "&key=param1&key=param2"
 *
 * @example
 *  // returns "id=1&id=2&id=3&id=4"
 * serializeIDs('id', [1, 2, 3, 4]);
 */
const serializeIDs = (key, params) => {
	return params.reduce((acc, cur) => acc.concat(`${key}=` + cur), []).join("");
};

const deleteSubtaskMany = async (token, ids) => {
	let url = test.base + scheduledTasks.delete.shiftSubTaskMany;
	url +=
		"?" +
		new URLSearchParams({
			"db-meta": "Advantage",
			source: "AssessmentTrackingTaskShiftSubTask"
		});
	url += "&" + serializeIDs("AssessmentTrackingTaskShiftSubTaskId", ids);

	try {
		const request = await fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: "Basic " + btoa(test.user + ":" + test.password),
				SecurityToken: token,
				"Content-Type": "application/json"
			}
		});
		const response = await request.json();
		return response.Data;
	} catch (err) {
		console.log("Oops. An error occurred " + err);
		return err.message;
	}
};

// FIELDS TO UPDATE:
// 1. IsCheck
// 2. Notes
// 3. Description ????? - comes pre-populated already ???
// 4. AssessmentReasonId
// 5. AssessmentResolutionId
// 6. AssessmentTaskStatusId ?????
// 7. AssessmentPriorityId
// 8. CompletedDate
// 9. FollowUpDate
// 10. SignedBy
// 11. InitialBy
// 12. IsCompleted
// 13. IsFinal
// 14. IsActive

// returns empty object if no ShiftTasks,
// otherwise returns object with ShiftTaskIds as key and IsCheck value as the value.
// {3804: false, 3805: true, ...}
const createSubtaskVals = task => {
	if (isEmptyArray(task.ShiftTasks)) return {};
	const { ShiftTasks: subtasks } = task;
	return subtasks.reduce((acc, cur) => {
		const { AssessmentTrackingTaskShiftSubTaskId: id, IsCheck } = cur;
		const accClone = {
			...acc,
			[id]: IsCheck
		};
		acc = accClone;
		return acc;
	}, {});
};

// list: subtasks
// iteratee: prop to sort by within object
const groupByShift = (subtasks, iteratee) => {
	if (isEmptyArray(subtasks)) return {};
	return subtasks.reduce((shiftMap, item) => {
		const shiftID = findShiftName(iteratee(item));
		if (!shiftMap[shiftID]) {
			shiftMap[shiftID] = [];
		}
		shiftMap[shiftID].push(item);
		return shiftMap;
	}, {});
};

// accepts a string-form shift (ie "AM", "PM", "NOC")
const countSubtasksByShift = (subtasks, shift) => {
	if (isEmptyArray(subtasks)) return 0;
	return subtasks.filter(x => x.AssessmentShiftId === findShiftID(shift))
		.length;
};

// accepts a shiftID (ie 1, 2, 3)
const countSubtasksByShiftID = (subtasks, shiftID) => {
	if (isEmptyArray(subtasks)) return 0;
	return subtasks.filter(x => x.AssessmentShiftId === shiftID).length;
};

// filters by AssessmentShiftId
const getSubtaskByShiftID = (subtasks, shiftID) => {
	if (isEmptyArray(subtasks)) return [];
	return subtasks.filter(subtask => subtask.AssessmentShiftId === shiftID);
};

export {
	createSubtaskVals,
	groupByShift,
	countSubtasksByShift,
	countSubtasksByShiftID,
	getSubtaskByShiftID
};

// UPDATE FETCH UTILS
export {
	getSubtaskCount,
	updateSubtask, // 1
	updateSubtaskMany, // 1 or more
	deleteSubtask, // 1
	deleteSubtaskMany // 1 or more
};
