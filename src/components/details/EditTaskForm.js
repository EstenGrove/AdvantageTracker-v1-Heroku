import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { STATUS, SHIFTS } from "../../helpers/utils_options";
import styles from "../../css/details/EditTaskForm.module.scss";
import sprite from "../../assets/showhide.svg";
import DropdownSelect from "../shared/DropdownSelect";
import DropdownSelectSM from "../shared/DropdownSelectSM";
import Checkbox from "../shared/Checkbox";
import Textarea from "../shared/Textarea";
import TextInput from "../shared/TextInput";
import StatefulButton from "../shared/StatefulButton";
import Counter from "../shared/Counter";
import PriorityButtonGroup from "../shared/PriorityButtonGroup";

const EditTaskForm = ({
	title,
	vals,
	setCount,
	handleChange,
	handleCheckbox,
	handlePriority,
	handleBlur,
	saveTaskUpdate
}) => {
	// handles hidden sections: additional options/reassess notes
	const [taskFormSections, setTaskFormSections] = useState({
		showAdditional: false,
		showReassess: false
	});
	return (
		<article className={styles.EditTaskForm}>
			<form className={styles.EditTaskForm_form}>
				<h2 className={styles.EditTaskForm_form_title}>{title}</h2>

				<DropdownSelect
					val={vals.status}
					label="Select a task status"
					name="status"
					id="status"
					placeholder="Select Status"
					options={STATUS}
					handleChange={handleChange}
				/>
				<DropdownSelectSM
					val={vals.shift}
					name="shift"
					id="shift"
					label="Shift"
					placeholder="Select shift"
					options={SHIFTS}
					handleChange={handleChange}
				/>
				<section className={styles.EditTaskForm_form_checkGroup}>
					<Checkbox
						val={vals.residentUnavailable}
						label="RESIDENT UNAVAILABLE"
						id="residentUnavailable"
						name="residentUnavailable"
						handleCheckbox={handleCheckbox}
					/>
					<Checkbox
						val={vals.requiresMedCheck}
						label="MED CHECK REQUIRED"
						id="requiresMedCheck"
						name="requiresMedCheck"
						handleCheckbox={handleCheckbox}
					/>
					<Checkbox
						val={vals.reassess}
						label="REASSESS (TASK)"
						id="reassess"
						name="reassess"
						handleCheckbox={handleCheckbox}
					/>

					<Textarea
						label="Notes/Comments"
						placeholder="Enter any notes or task related comments..."
						name="taskNotes"
						id="taskNotes"
						val={vals.taskNotes}
						handleChange={handleChange}
						enableCharCount={true}
						maxChar={250}
					/>

					{vals.reassess && (
						<div className={styles.EditTaskForm_form_checkGroup_reassess}>
							<Textarea
								label="Reassess Notes (REQUIRED)"
								placeholder="Please explain *why* this task should be reassessed..."
								id="reassessNotes"
								name="reassessNotes"
								val={vals.reassessNotes}
								addRequiredFlag={true}
								enableCharCount={true}
								maxChar={250}
								handleChange={handleChange}
							/>
						</div>
					)}
				</section>
				<section className={styles.EditTaskForm_form_toggleOptions}>
					<div
						className={styles.EditTaskForm_form_toggleOptions_label}
						onClick={() =>
							setTaskFormSections({
								...taskFormSections,
								showAdditional: !taskFormSections.showAdditional
							})
						}
					>
						{taskFormSections.showAdditional ? "Hide" : "Show"} Task Options
					</div>
					<svg className={styles.EditTaskForm_form_icon}>
						<use
							xlinkHref={`${sprite}#icon-view-${
								taskFormSections.showAdditional ? "hide" : "show"
							}`}
						></use>
					</svg>
				</section>
				<hr />
				{taskFormSections.showAdditional && (
					<section className={styles.EditTaskForm_form_additionalOptions}>
						<h2 className={styles.EditTaskForm_form_subtitle}>
							Additional Task Options
						</h2>
						<article
							className={styles.EditTaskForm_form_additionalOptions_items}
						>
							{/* ---------HIDDEN BY DEFAULT--------- */}
							{/* ADDITIONAL TASK OPTIONS (HIDDEN BY DEFAULT) */}
							{/* ACTUAL TIME TAKEN */}
							<Counter
								val={vals.minutes}
								label="How long did it take? (mins)"
								name="minutes"
								id="minutes"
							/>
							{/* FOLLOWUP-DATE */}
							{/* PRIORITY BUTTONS???? */}
							{/* NOTES TEXTBOX */}

							{/* ---------HIDDEN BY DEFAULT--------- */}
						</article>
					</section>
				)}

				{/* SHIFTTASKS/SUBTASKS */}
				<TextInput
					val={vals.signature}
					label="Employee Signature"
					placeholder="Please sign your name"
					name="signature"
					id="signature"
					handleChange={handleChange}
					addRequiredFlag={true}
					isRequired={true}
				/>

				<StatefulButton
					text="Save"
					action="Saving..."
					callback={saveTaskUpdate}
				/>
			</form>
		</article>
	);
};

export default EditTaskForm;

EditTaskForm.defaultProps = {};

EditTaskForm.propTypes = {
	saveTaskForm: PropTypes.func.isRequired
};
