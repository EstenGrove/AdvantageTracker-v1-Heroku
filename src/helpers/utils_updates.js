import { isEmptyVal, isEmptyObj } from "./utils_types";
import { findStatusID } from "./utils_status";
import { findPriorityID } from "./utils_priority";
import { findShiftID } from "./utils_shifts";

const updateTaskRecord = (vals, record) => {
	return {
		...record,
		AssessmentTaskStatusId: findStatusID(vals.status),
		CompletedAssessmentShiftId: findShiftID(vals.shift),
		AssessmentPriorityId: findPriorityID(vals.priority),
		SignedBy: vals.signature,
		Notes: vals.taskNotes
	};
};
// consider using for mapping user-generated values to the correct value in the task record???
const handleTaskNotes = vals => {
	if (isEmptyVal(vals.reassessNotes)) return vals.taskNotes;
	return `${vals.taskNotes} <br/> Reassess Notes: ${vals.reassessNotes}`;
};

// handle mapping form vals to task record based off of task status.
const handleStatusResolution = (vals, task, status = "PENDING") => {
	switch (status) {
		case "PENDING": {
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: 4,
				FollowUpDate: vals.followUpDate,
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: false,
				IsFinal: false,
				IsActive: true
			};
		}
		case "COMPLETE": {
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: findShiftID(vals.shift),
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: true,
				IsFinal: isEmptyVal(vals.FollowUpDate) ? true : false,
				IsActive: true
			};
		}
		case "NOT-COMPLETE": {
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: 4,
				FollowUpDate: vals.followUpDate,
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: false,
				IsFinal: false,
				IsActive: true
			};
		}

		case "IN-PROGRESS": {
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: 4,
				FollowUpDate: vals.followUpDate,
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: false,
				IsFinal: false,
				IsActive: true
			};
		}
		case "MISSED-EVENT": {
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: findShiftID(vals.shift),
				FollowUpDate: vals.followUpDate,
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: false,
				IsFinal: true,
				IsActive: true
			};
		}
		default:
			// defaults to "NOT-COMPLETE"
			return {
				...task,
				AssessmentTaskStatusId: findStatusID(vals.status),
				AssessmentPriorityId: findPriorityID(vals.priority),
				CompletedAssessmentShiftId: 4,
				FollowUpDate: vals.followUpDate,
				SignedBy: vals.signature,
				Notes: handleTaskNotes(vals),
				IsCompleted: false,
				IsFinal: false,
				IsActive: true
			};
	}
};

const markAsMissedEvent = (vals, record) => {
	return {
		...record,
		AssessmentTaskStatusId: findStatusID("MISSED-EVENT"),
		CompletedAssessmentShiftId: 0,
		SignedBy: vals.signature,
		Notes: vals.reassess ? handleTaskNotes(vals) : vals.taskNotes
	};
};

export {
	updateTaskRecord,
	handleTaskNotes,
	handleStatusResolution,
	markAsMissedEvent
};
