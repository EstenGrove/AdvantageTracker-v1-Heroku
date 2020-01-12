import React from "react";
import styles from "../../css/dashboard/DashboardNav.module.scss";
import sprite from "../../assets/carets-arrows.svg";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";

const DashboardNav = ({ history }) => {
  const goBack = () => {
    return history.goBack();
  };
  const goForward = () => {
    return history.goForward();
  };
  return (
    <nav className={styles.DashboardNav}>
      <button className={styles.DashboardNav_btn} onClick={goBack}>
        <svg className={styles.DashboardNav_btn_icon}>
          <use xlinkHref={`${sprite}#icon-arrow_back`}></use>
        </svg>
      </button>
      <button className={styles.DashboardNav_btn} onClick={goForward}>
        <svg className={styles.DashboardNav_btn_icon}>
          <use xlinkHref={`${sprite}#icon-arrow_forward`}></use>
        </svg>
      </button>
    </nav>
  );
};

export default withRouter(DashboardNav);

DashboardNav.defaultProps = {};

DashboardNav.propTypes = {
  history: PropTypes.object
};
