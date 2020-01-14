import React, { useState } from "react";
import styles from "../../css/app/CreateTaskForm.module.scss";
import { PropTypes } from "prop-types";
import { SHIFTS, ADLS } from "../../helpers/utils_options";

import sprite from "../../assets/show-hide.svg";
import TextInput from "../shared/TextInput";
import Textarea from "../shared/Textarea";
import DropdownSelect from "../shared/DropdownSelect";
import DropdownSelectSM from "../shared/DropdownSelectSM";
import ButtonSM from "../shared/ButtonSM";
import { themeColors } from "../../helpers/utils_styles";

// ##TODOS:
// 1. CONSIDER ADDING "RECURRING TASK" AS AN OPTION
//  1A. ENABLES CREATING A RECURRING TASK FOR A SPECIFIC TIME/DAY/CATEGORY
//  2A. ENABLE RANGE FOR RECURRING TASK TO RE-OCCUR (IE, OCCURS DAILY FOR A WEEK ETC.)

const CreateTaskForm = ({
  title,
  vals,
  categories,
  activeCategory,
  handleChange,
  handleCheckbox,
  createNewTask
}) => {
  const [formSections, setFormSections] = useState({
    showAdditional: false,
    addChecklist: false
  });

  // CREATE CUSTOM COMPONENT ABSTRACTION ??????
  const addChecklist = () => {
    console.log("Create a checklist...");
  };

  return (
    <article className={styles.CreateTaskForm}>
      <form className={styles.CreateTaskForm_form}>
        <h2 className={styles.CreateTaskForm_form_title}>{title}</h2>
        {/* PICK AN ADL CATEGORY - DEFAULTS TO CURRENT CATEGORY */}
        <DropdownSelect
          val={vals.newTaskADL}
          label="Select an ADL"
          name="newTaskADL"
          id="newTaskADL"
          placeholder="Select ADL..."
          handleChange={handleChange}
          options={ADLS}
        />
        {/* SCHEDULED A SHIFT */}
        <DropdownSelectSM
          val={vals.newTaskShift}
          label="Schedule Shift"
          name="newTaskShift"
          id="newTaskShift"
          placeholder="Pick a shift..."
          handleChange={handleChange}
          options={SHIFTS}
        />
        {/* PICK A DATE FOR THE TASK - DEFAULTS TO TODAY - (IE FOLLOWUP DATE) */}
        {/* REPLACE TEXTAREA W/ <VoiceRecorder/> - (IF SUPPORTED!!!) */}
        <Textarea
          label="Add a Note"
          placeholder="Enter any notes/comments..."
          id="newTaskNote"
          name="newTaskNote"
          val={vals.newTaskNote}
          addRequiredFlag={true}
          enableCharCount={true}
          maxChar={250}
          handleChange={handleChange}
        />
        {/* TOGGLE - MORE OPTIONS */}
        <section className={styles.CreateTaskForm_form_toggleOptions}>
          <div
            className={styles.CreateTaskForm_form_toggleOptions_label}
            onClick={() =>
              setFormSections({
                ...formSections,
                showAdditional: !formSections.showAdditional
              })
            }
          >
            {formSections.showAdditional ? "Hide" : "Show"} More Options
          </div>
          <svg className={styles.CreateTaskForm_form_icon}>
            <use
              xlinkHref={`${sprite}#icon-view-${
                formSections.showAdditional ? "hide" : "show"
              }`}
            ></use>
          </svg>
        </section>
        {/* ADDITIONAL OPTIONS */}
        {/* ADD CHECKLIST/SUBTASK */}
        {/* ADD NOTES/COMMENTS */}
        {formSections.showAdditional && (
          <section className={styles.CreateTaskForm_form_moreOptions}>
            <ButtonSM
              handleClick={addChecklist}
              customStyles={{ backgroundColor: themeColors.main.green }}
            >
              <b>+</b> Add Checklist
            </ButtonSM>
            {/* ADD CHECKLIST, SUBTASK ETC... */}
            {/* ADD CHECKLIST, SUBTASK ETC... */}
            {/* ADD CHECKLIST, SUBTASK ETC... */}
          </section>
        )}
      </form>
    </article>
  );
};

export default CreateTaskForm;

CreateTaskForm.defaultProps = {};

CreateTaskForm.propTypes = {
  vals: PropTypes.object,
  handleChange: PropTypes.func,
  handleCheckbox: PropTypes.func,
  createNewTask: PropTypes.func
};
