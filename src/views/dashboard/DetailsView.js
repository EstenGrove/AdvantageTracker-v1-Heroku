import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

import { GlobalStateContext } from "../../state/GlobalStateContext";
import { adlColors } from "../../helpers/utils_styles";
import {
	ScheduledTask,
	ScheduledTaskShift,
	ScheduledShiftSubTask,
	ScheduledTaskNote
} from "../../helpers/utils_models";

import styles from "../../css/dashboard/DetailsView.module.scss";
import PanelLG from "../../components/shared/PanelLG";
import TasksPanel from "../../components/details/TasksPanel";

// **TODOS**:
// 1. REASSESS NOTES TEXTAREA NOT SHOWING WHEN REASSESS CHECKBOX IS SELECTED

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
	const { category, currentUser } = props.location.state;
	const { state, dispatch } = useContext(GlobalStateContext);
	const { hasLoaded, isLoading } = state.app;
	const {
		trackingTasks,
		scheduledTasks,
		scheduledTaskNotes,
		unscheduledTaskNotes,
		unscheduledTasks,
		currentResident
	} = state.globals;

	return (
		<>
			<section className={styles.DetailsView}>
				<h1 className="subtitle">
					<strong style={{ color: adlColors[category.AdlCategoryType] }}>
						{category.AdlCategoryType}
					</strong>{" "}
					Tasks For Today
				</h1>
				<PanelLG customStyles={{ backgroundColor: "#ffffff" }}>
					<TasksPanel
						scheduledTasks={scheduledTasks}
						scheduledTaskNotes={scheduledTaskNotes}
						unscheduledTasks={unscheduledTasks}
						unscheduledTaskNotes={unscheduledTaskNotes}
						trackingTasks={trackingTasks}
						currentResident={currentResident}
						currentUser={currentUser}
						dispatch={dispatch}
						state={state}
						category={category.AdlCategoryType}
						hasUpdated={hasLoaded}
					/>
				</PanelLG>
			</section>
		</>
	);
};

export default withRouter(DetailsView);

DetailsView.defaultProps = {};

DetailsView.propTypes = {
	props: PropTypes.object
};
