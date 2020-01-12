import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import styles from "../../css/dashboard/Dashboard.module.scss";

// DASHBOARD VIEWS //
import CalendarView from "../../views/dashboard/CalendarView";
import ResidentInfoView from "../../views/dashboard/ResidentInfoView";
import DailyView from "../../views/dashboard/DailyView";
import DetailsView from "../../views/dashboard/DetailsView";
import SummaryView from "../../views/dashboard/SummaryView";
import SettingsView from "../../views/dashboard/SettingsView";
import PastDueView from "../../views/dashboard/PastDueView";

const Dashboard = () => {
  return (
    <main className={styles.Dashboard}>
      <h1 className={styles.Dashboard_subtitle}>Today's Agenda</h1>

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
  );
};

export default Dashboard;

Dashboard.defaultProps = {};

Dashboard.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func
};
