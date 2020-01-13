import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
// libs
import { withRouter, useRouteMatch, NavLink } from "react-router-dom";
import { format } from "date-fns";
// utils
import {
	getCount,
	getCompletedCount,
	getPercentage,
	getRemaining
} from "../../helpers/utils_processing";
import { isEmptyArray, isEmptyObj } from "../../helpers/utils_types";
import {
	checkCategoryNaming,
	checkForADLPoints
} from "../../helpers/utils_categories";
// styles/sprites
import sprite from "../../assets/icon-bar.svg";
import styles from "../../css/daily/DailySummaryCard.module.scss";
// components
import DailySummaryList from "./DailySummaryList";

// ADD TOTAL ADL POINTS FROM ADLCARELEVEL array

const DailySummaryCard = ({
	hasBeenUpdated = false,
	category,
	day,
	currentResident,
	trackingTasks = [],
	scheduledTasks = [],
	unscheduledTasks = [],
	menu,
	history
}) => {
	const match = useRouteMatch();

	const [isOpen, setIsOpen] = useState(false);
	const [taskCounts, setTaskCounts] = useState({
		total: scheduledTasks.length,
		complete: getCompletedCount(scheduledTasks, "COMPLETE"),
		pending: getCount(scheduledTasks, "PENDING"),
		missedEvent: getCount(scheduledTasks, "MISSED-EVENT"),
		notComplete: getCount(scheduledTasks, "NOT-COMPLETE"),
		inProgress: getCount(scheduledTasks, "IN-PROGRESS"),
		remaining: getRemaining(scheduledTasks, "COMPLETE")
	});

	const [percentages, setPercentages] = useState({
		total: scheduledTasks.length,
		complete: getPercentage(scheduledTasks.length, taskCounts.complete),
		pending: getPercentage(scheduledTasks.length, taskCounts.pending),
		missedEvent: getPercentage(scheduledTasks.length, taskCounts.missedEvent),
		notComplete: getPercentage(scheduledTasks.length, taskCounts.notComplete),
		inProgress: getPercentage(scheduledTasks.length, taskCounts.inProgress)
	});

	useEffect(() => {
		if (hasBeenUpdated) {
			setTaskCounts({
				total: scheduledTasks.length,
				complete: getCompletedCount(scheduledTasks, "COMPLETE"),
				pending: getCount(scheduledTasks, "PENDING"),
				missedEvent: getCount(scheduledTasks, "MISSED-EVENT"),
				notComplete: getCount(scheduledTasks, "NOT-COMPLETE"),
				inProgress: getCount(scheduledTasks, "IN-PROGRESS"),
				remaining: getRemaining(scheduledTasks, "COMPLETE")
			});
			return setPercentages({
				total: scheduledTasks.length,
				complete: getPercentage(scheduledTasks.length, taskCounts.complete),
				pending: getPercentage(scheduledTasks.length, taskCounts.pending),
				missedEvent: getPercentage(
					scheduledTasks.length,
					taskCounts.missedEvent
				),
				notComplete: getPercentage(
					scheduledTasks.length,
					taskCounts.notComplete
				),
				inProgress: getPercentage(scheduledTasks.length, taskCounts.inProgress)
			});
		}
	}, [
		hasBeenUpdated,
		taskCounts.complete,
		taskCounts.inProgress,
		taskCounts.missedEvent,
		taskCounts.notComplete,
		taskCounts.pending,
		scheduledTasks
	]);

	return (
		<div className={styles.DailySummaryCard}>
			<section className={styles.DailySummaryCard_top}>
				<div className={styles.DailySummaryCard_top_date}>
					<h4 className={styles.DailySummaryCard_top_date_adl}>
						{checkCategoryNaming(category.AdlCategoryType)}
					</h4>
					<time className={styles.DailySummaryCard_top_date_title}>
						{format(day, "MMM. Do, YYYY")}
					</time>
				</div>
				<svg
					className={styles.DailySummaryCard_top_icon}
					onClick={() => setIsOpen(!isOpen)}
				>
					<use xlinkHref={`${sprite}#icon-dots-three-horizontal`}></use>
				</svg>
				{/* SIDE MENU */}
				{isOpen && (
					<aside className={styles.DailySummaryCard_menu}>
						<div className={styles.DailySummaryCard_menu_close}>
							<svg
								className={styles.DailySummaryCard_menu_close_icon}
								onClick={() => setIsOpen(!isOpen)}
							>
								<use xlinkHref={`${sprite}#icon-clearclose`}></use>
							</svg>
						</div>
						{/* PREVIOUSLY match.path */}
						<NavLink
							to={{
								pathname: `${match.url}/details/${category.AdlCategoryType}`,
								state: {
									currentResident: currentResident,
									category: category,
									scheduledTasks: scheduledTasks,
									trackingTasks: trackingTasks
								}
							}}
						>
							View Today's <strong>{category.AdlCategoryType}</strong> Details
						</NavLink>
						<p className={styles.DailySummaryCard_menu_item}>
							Mark all tasks complete
						</p>
					</aside>
				)}
			</section>
			<section className={styles.DailySummaryCard_inner}>
				<div className={styles.DailySummaryCard_inner_tile}>
					<h4 className={styles.DailySummaryCard_inner_tile_heading}>Total</h4>
					<h4
						className={styles.DailySummaryCard_inner_tile_val}
						value={taskCounts.total}
					>
						{!isEmptyArray(scheduledTasks) ? taskCounts.total : 0}
					</h4>
				</div>
				<div className={styles.DailySummaryCard_inner_tile}>
					<h4 className={styles.DailySummaryCard_inner_tile_heading}>
						Completed
					</h4>
					<h4
						className={styles.DailySummaryCard_inner_tile_val_green}
						value={taskCounts.total}
					>
						{!isEmptyArray(scheduledTasks) ? taskCounts.complete : 0}
					</h4>
				</div>
				<div className={styles.DailySummaryCard_inner_tile}>
					<h4 className={styles.DailySummaryCard_inner_tile_heading}>
						Pending
					</h4>
					<h4
						className={styles.DailySummaryCard_inner_tile_val_red}
						value={taskCounts.total}
					>
						{!isEmptyArray(scheduledTasks) ? taskCounts.pending : 0}
					</h4>
				</div>
				<div className={styles.DailySummaryCard_inner_tile}>
					<h4 className={styles.DailySummaryCard_inner_tile_heading}>
						Total Points
					</h4>
					<h4
						className={styles.DailySummaryCard_inner_tile_val_red}
						value={taskCounts.total}
					>
						{!isEmptyObj(category) ? checkForADLPoints(category) : 0}
					</h4>
				</div>
			</section>
			<section className={styles.DailySummaryCard_tasks}>
				<DailySummaryList tasks={scheduledTasks} category={category} />
			</section>
		</div>
	);
};
export default withRouter(DailySummaryCard);
DailySummaryCard.defaultProps = {
	hasBeenUpdated: false,
	scheduledTasks: [],
	unscheduledTasks: []
};
DailySummaryCard.propTypes = {
	hasBeenUpdated: PropTypes.bool,
	category: PropTypes.object.isRequired,
	day: PropTypes.instanceOf(Date).isRequired,
	scheduledTasks: PropTypes.array,
	unscheduledTasks: PropTypes.array
};
