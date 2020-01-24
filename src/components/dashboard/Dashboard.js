import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "../../css/dashboard/Dashboard.module.scss";

// DASHBOARD VIEWS //
import CalendarView from "../../views/dashboard/CalendarView";
import ResidentInfoView from "../../views/dashboard/ResidentInfoView";
import DailyView from "../../views/dashboard/DailyView";
import DetailsView from "../../views/dashboard/DetailsView";
import SummaryView from "../../views/dashboard/SummaryView";
import SettingsView from "../../views/dashboard/SettingsView";
import PastDueView from "../../views/dashboard/PastDueView";

const Dashboard = props => {
	return (
		<>
			<main className={styles.Dashboard}>
				{/* DASHBOARD ROUTES */}
				<Switch>
					<Route exact path="/dashboard/daily" component={DailyView} />
					<Route path="/dashboard/daily/details/:id" component={DetailsView} />
					<Route path="/dashboard/calendar" component={CalendarView} />
					<Route path="/dashboard/summary" component={SummaryView} />
					<Route path="/dashboard/pastdue" component={PastDueView} />
					<Route path="/dashboard/residentinfo" component={ResidentInfoView} />
					<Route path="/dashboard/settings" component={SettingsView} />
				</Switch>
			</main>
		</>
	);
};

export default Dashboard;

Dashboard.defaultProps = {};

Dashboard.propTypes = {};
