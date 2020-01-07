import React from "react";
import styles from "../css/Checkbox.module.scss";
import { PropTypes } from "prop-types";

const Checkbox = ({ label, name, id, val, handleCheckbox }) => {
	return (
		<div className={styles.Checkbox}>
			<input
				value={val}
				type="checkbox"
				name={name}
				id={id}
				checked={val}
				className={styles.Checkbox_checkbox}
				onChange={handleCheckbox}
			/>
			<label htmlFor={id} className={styles.Checkbox_label}>
				{label}
			</label>
		</div>
	);
};
export default Checkbox;

Checkbox.defaultProps = {
	readOnly: false,
	defaultVal: false
};

Checkbox.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string.isRequired,
	val: PropTypes.string.isRequired,
	handleCheckbox: PropTypes.func.isRequired
};
