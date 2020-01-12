import React from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ADL_COLOR_MAP } from "../../helpers/utils_styles";
import styles from "../../css/dashboard/DetailsView.module.scss";
import PanelLG from "../../components/shared/PanelLG";
import TasksPanel from "../../components/details/TasksPanel";
import TaskList from "../../components/details/TaskList";

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
  const { category, scheduledTasks } = props.location.state;

  return (
    <section className={styles.DetailsView}>
      <h1 className="subtitle">
        <strong style={{ color: ADL_COLOR_MAP[category.AdlCategoryType] }}>
          {category.AdlCategoryType}
        </strong>{" "}
        Tasks For Today
      </h1>
      <PanelLG customStyles={{ backgroundColor: "#ffffff" }}>
        <TasksPanel>
          <TaskList tasks={scheduledTasks} />
        </TasksPanel>
      </PanelLG>
    </section>
  );
};

export default withRouter(DetailsView);

DetailsView.defaultProps = {};

DetailsView.propTypes = {
  props: PropTypes.object
};
