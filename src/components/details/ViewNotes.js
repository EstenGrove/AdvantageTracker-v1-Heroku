import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import styles from "../../css/details/ViewNotes.module.scss";
import sprite from "../../assets/tasks.svg";
import TaskNotesList from "./TaskNotesList";

// NEED TO FILTER FOR ADL AND TASK
// CURRENTLY SHOW ALL NOTES REGARDLESS OF ACTIVE CATEGORY OR ACTIVE TASK

const ViewNotes = ({ notes = [], ...rest }) => {
	const [showNotes, setShowNotes] = useState(false);
	return (
		<section className={styles.ViewNotes}>
			{!isEmptyArray(notes) && (
				<div
					className={styles.ViewNotes_toggle}
					onClick={() => setShowNotes(!showNotes)}
				>
					<svg className={styles.ViewNotes_toggle_icon}>
						<use xlinkHref={`${sprite}#icon-news`} />
					</svg>
					<span className={styles.ViewNotes_toggle_text}>
						{showNotes ? "Hide" : "View"} All Notes/Comments
					</span>
				</div>
			)}
			{!isEmptyArray(notes) && showNotes && (
				<div className={styles.ViewNotes_notes}>
					<TaskNotesList notes={notes} {...rest} />
				</div>
			)}
		</section>
	);
};

export default ViewNotes;

ViewNotes.defaultProps = {
	notes: []
};
ViewNotes.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object)
};
