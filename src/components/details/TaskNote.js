import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { distanceInWordsToNow } from "date-fns";
import styles from "../../css/details/TaskNote.module.scss";
import sprite from "../../assets/buttons.svg";

// REQUIREMENTS:
// 1. USER WHO POSTED THE NOTE
// 2. DATE IT WAS ADDED
// 3. LAST MODIFIED (IF MODIFIED)

const TaskNote = ({ note = {} }) => {
	console.log(distanceInWordsToNow(note.EntryDate));
	return (
		<section className={styles.TaskNote}>
			<div className={styles.TaskNote_note}>
				<p className={styles.TaskNote_note_entry}>{note.Notes}</p>
			</div>
			<div className={styles.TaskNote_postedBy}>
				<svg className={styles.TaskNote_postedBy_icon}>
					<use xlinkHref={`${sprite}#icon-comments2`} />
				</svg>
				<span className={styles.TaskNote_postedBy_user}>
					Created by{" "}
					<b>
						<NavLink to={`/dashboard/settings/${note.CreatedBy}`}>
							{note.InitialBy}
						</NavLink>
					</b>
				</span>
			</div>
			<div className={styles.TaskNote_timestamp}>
				<div className={styles.TaskNote_timestamp_date}>
					Posted {distanceInWordsToNow(note.EntryDate)} ago
				</div>
			</div>
		</section>
	);
};

export default TaskNote;

TaskNote.defaultProps = {
	note: {}
};

TaskNote.propTypes = {
	note: PropTypes.object
};
