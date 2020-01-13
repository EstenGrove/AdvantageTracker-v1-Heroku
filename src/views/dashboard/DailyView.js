import React, { useContext } from "react";
import styles from "../../css/dashboard/DailyView.module.scss";
import { PropTypes } from "prop-types";

import { GlobalStateContext } from "../../state/GlobalStateContext";
import { isEmptyArray } from "../../helpers/utils_types";
import {
	findTasksByADL,
	findTodaysTasksByADL
} from "../../helpers/utils_scheduled";
import { adlColors } from "../../helpers/utils_styles";
import Spinner from "../../components/shared/Spinner";
import ContainerLG from "../../components/shared/ContainerLG";
import Row from "../../components/shared/Row";
import CardSM from "../../components/shared/CardSM";
import DailySummaryCard from "../../components/daily/DailySummaryCard";
import DetailsView from "./DetailsView";

// REQUIRED PROPS:
// 1. resident data
// 2. ALL tasks (scheduled/unscheduled)

// ADD PLACEHOLDER FOR EMPTY DATA

const DailyView = props => {
	const {
		state: {
			app: { isLoading },
			globals: { currentResident, scheduledTasks, unscheduledTasks, categories }
		}
	} = useContext(GlobalStateContext);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div className={styles.DailyView}>
			<h1 className={styles.DailyView_title}>Today's Agenda</h1>
			<ContainerLG>
				<Row rowHeight="auto" rowSpacing="space-evenly" wrapItems="wrap">
					{categories &&
						categories.map((adl, index) => (
							<CardSM
								customStyles={{
									borderTop: `2px solid ${adlColors[adl.AdlCategoryType]}`
								}}
								key={`${adl.AdlId}_${index}`}
							>
								<DailySummaryCard
									key={`${adl.AdlId}_${adl.AdlCategoryId}`}
									scheduledTasks={findTasksByADL(
										scheduledTasks,
										adl.AdlCategoryType
									)}
									category={adl}
									day={new Date()}
								/>
							</CardSM>
						))}
				</Row>
			</ContainerLG>
		</div>
	);
};

export default DailyView;

DailyView.defaultProps = {
	scheduledTasks: [],
	unscheduledTasks: [],
	categories: []
};

DailyView.propTypes = {
	currentResident: PropTypes.object,
	scheduledTasks: PropTypes.arrayOf(PropTypes.object),
	unscheduledTasks: PropTypes.arrayOf(PropTypes.object),
	categories: PropTypes.arrayOf(PropTypes.object)
};
