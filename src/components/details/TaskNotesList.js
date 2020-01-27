import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/details/TaskNotesList.module.scss";
import ButtonSM from "../shared/ButtonSM";
import sprite from "../../assets/showhide.svg";
import { themeColors } from "../../helpers/utils_styles";

const moreBtn = {
	backgroundColor: themeColors.main.main,
	color: "#ffffff",
	borderRadius: "5rem",
	cursor: "pointer"
};

const TaskNotesList = ({ task = {}, notes = [] }) => {
	const [showMore, setShowMore] = useState(false);
	return (
		<article className={styles.TaskNotesList}>
			<section className={styles.TaskNotesList_inner}>
				{/*  */}
				{/*  */}
				{/*  */}
			</section>
			<ButtonSM
				handleClick={() => setShowMore(!showMore)}
				customStyles={moreBtn}
			>
				<svg className={styles.TaskNotesList_icon}>
					<use
						xlinkHref={`${sprite}#icon-view-${showMore ? "hide" : "show"}`}
					></use>
				</svg>{" "}
				<span>Show More</span>
			</ButtonSM>
			<section className={styles.TaskNotesList_viewMore}></section>
		</article>
	);
};

export default TaskNotesList;

TaskNotesList.defaultProps = {
	task: {},
	notes: []
};

TaskNotesList.propTypes = {
	task: PropTypes.object.isRequired,
	notes: PropTypes.array.isRequired
};
