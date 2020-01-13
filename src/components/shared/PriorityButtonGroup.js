import React from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/shared/PriorityButtonGroup.module.scss";
import PriorityButton from "./PriorityButton";

const PriorityButtonGroup = ({ handleClick, val }) => {
	return (
		<section className={styles.PriorityButtonGroup}>
			<PriorityButton
				id="priorityNote"
				name="priorityNone"
				label="NONE"
				isChecked={val === "NONE"}
				handleClick={() => handleClick("NONE")}
			/>
			<PriorityButton
				id="priorityLow"
				name="priorityLow"
				label="!"
				isChecked={val === "LOW"}
				handleClick={() => handleClick("LOW")}
			/>
			<PriorityButton
				id="priorityMedium"
				name="priorityMedium"
				label="!!"
				isChecked={val === "MEDIUM"}
				handleClick={() => handleClick("MEDIUM")}
			/>
			<PriorityButton
				id="priorityHigh"
				name="priorityHigh"
				label="!!!"
				isChecked={val === "HIGH"}
				handleClick={() => handleClick("HIGH")}
			/>
		</section>
	);
};

export default PriorityButtonGroup;

PriorityButtonGroup.propTypes = {
	val: PropTypes.string,
	handleClick: PropTypes.func
};
