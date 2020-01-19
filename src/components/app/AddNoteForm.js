import React from "react";
import styles from "../../css/app/AddNoteForm.module.scss";
import { PropTypes } from "prop-types";

const AddNote = ({ vals, handleChange, handleAddNote }) => {
	return (
		<article className={styles.AddNote}>
			{/*  */}
			{/*  */}
			{/*  */}
		</article>
	);
};

export default AddNote;

AddNote.defaultProps = {};

AddNote.propTypes = {
	handleChange: PropTypes.func,
	handleAddNote: PropTypes.func // submit handler
};
