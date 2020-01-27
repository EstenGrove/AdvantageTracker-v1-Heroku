import React, { useState } from "react";
import { isEmptyArray } from "../../helpers/utils_types";
import { isWithinRange, addDays, subDays } from "date-fns";
import sprite from "../../assets/showhide.svg";
import styles from "../../css/details/TaskNotesList.module.scss";
import ButtonSM from "../shared/ButtonSM";
import TaskNote from "./TaskNote";
import { getTaskID } from "../../helpers/utils_tasks";

const moreBtn = {
	color: "#ffffff",
	borderRadius: "5rem",
	maxWidth: "12rem",
	maxHeight: "4rem"
};

const getInitialNotesList = (notes, quantity) => {
	if (isEmptyArray(notes)) return [];
	if (notes.length <= quantity) return notes;
	return notes.slice(0, quantity);
};

const sortByDate = (notes, date = new Date()) => {
	if (isEmptyArray(notes)) return [];
	return notes.filter(note =>
		isWithinRange(subDays(date, 3), note.EntryDate, addDays(date, 7))
	);
};

const TaskNotesList = ({ notes = [] }) => {
	const [showMore, setShowMore] = useState(false);
	const [visibleList, setVisibleList] = useState(getInitialNotesList(notes, 2));

	const handleShowMore = e => {
		e.preventDefault();
		setShowMore(!showMore);
		setVisibleList(!showMore ? notes : getInitialNotesList(notes, 2));
	};

	return (
		<section className={styles.TaskNotesList}>
			<div className="TaskNotesList_inner">
				{visibleList &&
					visibleList.length &&
					visibleList.map((note, index) => (
						<TaskNote key={`${note[getTaskID(note)]}__${index}`} note={note} />
					))}
			</div>
			<div className={styles.TaskNotesList_showMore}>
				<ButtonSM
					handleClick={e => {
						handleShowMore(e);
					}}
					customStyles={moreBtn}
				>
					<svg className={styles.TaskNotesList_showMore_icon}>
						<use
							xlinkHref={`${sprite}#icon-view-${showMore ? "hide" : "show"}`}
						/>
					</svg>{" "}
					<span>Show {showMore ? "Less" : "More"}</span>
				</ButtonSM>
			</div>
		</section>
	);
};

export default TaskNotesList;
