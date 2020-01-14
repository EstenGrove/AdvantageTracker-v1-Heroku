import { test } from "./utils_env.js";
import { scheduledTasks } from "./utils_endpoints.js";

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
