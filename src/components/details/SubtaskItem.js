import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { isEmptyVal } from "../../helpers/utils_types";
import styles from "../../css/details/SubtaskItem.module.scss";
import sprite from "../../assets/tasks.svg";
import sprite2 from "../../assets/notes.svg";
import sprite3 from "../../assets/buttons.svg";
import Checkbox from "../shared/Checkbox";

// REQUIREMENTS:
// - [x] IF HAS "NOTES" THEN SHOW "NOTES ICON"
// - [x] IF DOES NOT HAVE NOTES, THEN SHOW "ADD NOTE" BUTTON
// - [x] ADD "DELETE/REMOVE" ICON
// - [ ] EDIT TEXT LABEL FEATURE - IE EDIT <Checkbox/> LABEL (DESCRIPTION PROPERTY)
//      - [ ] CONSIDER EDITING THE SHIFTTASK "DESCRIPTION" PROPERTY
// - [ ] CHANGE "NOTES" ICON
// - [ ] ADD "DELETE NOTES" ICON
// - [ ] ADD "DELETE NOTES" FEATURE
//      - PASS THE SUBTASK ID AND CLEAR THE "NOTES" FIELD

const SubtaskItem = ({ val, subtask, markSubtask, deleteSubtask, addNote }) => {
  const [hasNote, setHasNote] = useState(!isEmptyVal(subtask?.Notes));
  const [viewingNotes, setViewingNotes] = useState(false);
  // NOT IMPLEMENTED YET...
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section
      className={val ? styles.SubtaskItem_isCompleted : styles.SubtaskItem}
    >
      <div className={styles.SubtaskItem_inner}>
        <Checkbox
          name={subtask.AssessmentTrackingTaskShiftSubTaskId}
          id={subtask.AssessmentTrackingTaskShiftSubTaskId}
          val={val}
          defaultVal={subtask.IsCheck}
          label={subtask.Description}
          handleCheckbox={markSubtask}
          addStrike={true}
        />
        <div
          className={styles.SubtaskItem_inner_delete}
          onClick={() => deleteSubtask(subtask)}
        >
          <svg className={styles.SubtaskItem_inner_delete_icon}>
            <use xlinkHref={`${sprite3}#icon-clearclose`}></use>
          </svg>
        </div>
      </div>
      {hasNote && (
        <div
          className={styles.SubtaskItem_notesSection}
          onClick={() => setViewingNotes(!viewingNotes)}
        >
          <svg className={styles.SubtaskItem_notesSection_icon}>
            <use xlinkHref={`${sprite2}#icon-notebook-text`}></use>
          </svg>
          <span>{viewingNotes ? "Hide" : "View"} Notes</span>
        </div>
      )}
      {!hasNote && (
        <div
          className={styles.SubtaskItem_notesSection}
          onClick={() => addNote(subtask)}
        >
          <svg className={styles.SubtaskItem_notesSection_icon}>
            <use xlinkHref={`${sprite}#icon-plus21`}></use>
          </svg>
          <span>Add Notes</span>
        </div>
      )}
      {viewingNotes && (
        <div className={styles.SubtaskItem_viewNotes}>
          <h4 className={styles.SubtaskItem_viewNotes_header}>Notes</h4>
          <p className={styles.Subtaskitem_viewNotes_text}>{subtask.Notes}</p>
        </div>
      )}
    </section>
  );
};

export default SubtaskItem;

SubtaskItem.defaultProps = {};

SubtaskItem.propTypes = {
  subtask: PropTypes.object,
  markSubtask: PropTypes.func.isRequired,
  addNote: PropTypes.func
};
