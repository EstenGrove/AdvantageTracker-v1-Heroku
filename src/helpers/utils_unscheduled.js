import { test } from "./utils_env";
import { unscheduledTasks } from "./utils_endpoints";

/**
 * @description "CREATE" request to create and save one or more new task records
 * @param {string} token base64 encoded auth token
 * @param {object} params query params; includes DB and table name
 * @param {array} tasks array of AssessmentUnscheduleTask models with updated values to save to database
 */
const saveUnscheduledTasks = async (token, params, tasks) => {
  let url = test.base + unscheduledTasks.save.task;
  if (params) url += "?" + new URLSearchParams(params);

  try {
    const request = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(test.user + ":" + test.password),
        SecurityToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tasks)
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log("An error occurred", err);
    return err.message;
  }
};

/**
 * @description - Fetches a residents' unscheduled task records.
 * @param {string} token - base64 encoded SecurityToken
 * @param {object} params - request params in object form w/ key/value pairs
 * @param {number} residentID - numeric resident id
 */
const getUnscheduledTasks = async (token, residentID) => {
  let url = test.base + unscheduledTasks.get.task;
  url +=
    "?" +
    new URLSearchParams({
      "db-meta": "Advantage",
      source: "AssessmentUnscheduleTask"
    });
  url += "&residentId=" + residentID;

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
    console.log("An error occurred", err);
    return err.message;
  }
};

// returns the AssessmentUnscheduleTaskId
const updateUnscheduledTask = async (token, params, tasks) => {
  let url = test.base + unscheduledTasks.update.task;
  url += "?" + new URLSearchParams(params);

  try {
    const request = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(test.user + ":" + test.password),
        SecurityToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tasks)
    });
    const response = await request.json();
    return response.Data;
  } catch (err) {}
};

const deleteUnscheduledTask = async (token, params, tasks) => {
  let url = test.base + unscheduledTasks.delete.task;
  url += "?" + new URLSearchParams(params);

  try {
    const request = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa(test.user + ":" + test.password),
        SecurityToken: token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tasks)
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log("An error occurred " + err.message);
    return err;
  }
};

export {
  saveUnscheduledTasks,
  getUnscheduledTasks,
  updateUnscheduledTask,
  deleteUnscheduledTask
};
