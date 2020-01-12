import React from "react";
import { isEmptyObj } from "../../helpers/utils_types";
import { addEllipsis } from "../../helpers/utils_processing";
import { statusReducer } from "../../helpers/utils_styles";
import styles from "../../css/daily/DailySummaryListItem.module.scss";
import sprite from "../../assets/icon-bar.svg";

// COUNT: should be the # of notes/comments for a given task

const getShiftTaskCount = task => {
  if (isEmptyObj(task)) return 0;
  return task.ShiftTasks.length;
};

const DailySummaryListItem = ({ task }) => {
  return (
    <li className={styles.DailySummaryListItem} title={task.TaskDescription}>
      <section className={styles.DailySummaryListItem_details}>
        <div className={styles.DailySummaryListItem_details_desc}>
          {addEllipsis(task.TaskDescription, 40)}
        </div>
      </section>
      <div className={styles.DailySummaryListItem_item}>
        <div
          title={task.TaskStatus}
          className={styles.DailySummaryListItem_item_status}
          style={statusReducer(task.TaskStatus)}
        >
          <div className={styles.DailySummaryListItem_item_status_badge}></div>
        </div>
        <svg className={styles.DailySummaryListItem_item_icon}>
          <use xlinkHref={`${sprite}#icon-access_alarmalarm`}></use>
        </svg>
        <span className={styles.DailySummaryListItem_item_count}>
          {getShiftTaskCount(task)}
        </span>

        <svg className={styles.DailySummaryListItem_item_icon}>
          <use xlinkHref={`${sprite}#icon-comments2`}></use>
        </svg>
        {/* WILL BE THE NUMBER OF NOTES FOR A TASK ITEM */}
        <span className={styles.DailySummaryListItem_item_count}>{2}</span>
      </div>
    </li>
  );
};

export default DailySummaryListItem;
