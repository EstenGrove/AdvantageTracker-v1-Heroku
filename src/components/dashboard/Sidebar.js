import React from "react";
import { NavLink, withRouter, useRouteMatch } from "react-router-dom";
import { PropTypes } from "prop-types";
import styles from "../../css/dashboard/Sidebar.module.scss";
import sprite from "../../assets/sidebar.svg";
import Button from "../shared/Button";

// **IMPLEMENT MOBILE SIDEBAR**
// PASS STATE (ie resident, tasks via routes)

const Sidebar = ({
  isExpanded,
  handleSidebar,
  handleNewTaskModal,
  state,
  scheduledTasks,
  unscheduledTasks,
  currentResident,
  categories
}) => {
  const match = useRouteMatch(); // required for nested routes & link

  const expandedSidebar = (
    <aside className={styles.Sidebar}>
      <section className={styles.Sidebar_top}>
        <svg className={styles.Sidebar_top_icon} onClick={handleSidebar}>
          <use xlinkHref={`${sprite}#icon-dots-three-horizontal`}></use>
        </svg>
      </section>
      <section className={styles.Sidebar_inner}>
        <ul className={styles.Sidebar_inner_list}>
          <li className={styles.Sidebar_inner_list_newTask}>
            <button
              className={styles.Sidebar_inner_list_newTask_btn}
              onClick={handleNewTaskModal}
            >
              Create Task
            </button>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={{
                pathname: `${match.url}/daily`,
                state: {
                  state: state,
                  currentResident: state.globals.currentResident,
                  scheduledTasks: state.globals.scheduledTasks,
                  unscheduledTasks: state.globals.unscheduledTasks,
                  categories: state.globals.categories
                }
              }}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_note`}></use>
              </svg>
              <div>Daily View</div>
            </NavLink>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={`${match.url}/calendar`}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_available`}></use>
              </svg>
              <div>Calendar</div>
            </NavLink>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={`${match.url}/summary`}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use
                  xlinkHref={`${sprite}#icon-insert_chartpollassessment`}
                ></use>
              </svg>
              <div>Summary</div>
            </NavLink>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={`${match.url}/pastdue`}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_busy`}></use>
              </svg>
              <div>Past Due</div>
            </NavLink>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={`${match.url}/residentinfo`}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-perm_contact_calendar`}></use>
              </svg>
              <div>Resident</div>
            </NavLink>
          </li>
          <li className={styles.Sidebar_inner_list_item}>
            <NavLink
              exact
              to={`${match.url}/settings`}
              activeClassName={styles.active}
            >
              <svg className={styles.Sidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-settings1`}></use>
              </svg>
              <div>Settings</div>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );

  const collapsedSidebar = (
    <aside className={styles.CollapsedSidebar}>
      <section className={styles.CollapsedSidebar_top}>
        <svg
          className={styles.CollapsedSidebar_top_icon}
          onClick={handleSidebar}
        >
          <use xlinkHref={`${sprite}#icon-dots-three-horizontal`}></use>
        </svg>
      </section>
      <section className={styles.CollapsedSidebar_inner}>
        <ul className={styles.CollapsedSidebar_inner_list}>
          <li className={styles.CollapsedSidebar_inner_list_newTask}>
            <button
              className={styles.CollapsedSidebar_inner_list_newTask_btn}
              onClick={handleNewTaskModal}
            >
              <svg
                className={styles.CollapsedSidebar_inner_list_newTask_btn_icon}
              >
                <use xlinkHref={`${sprite}#icon-plus21`}></use>
              </svg>
            </button>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink to={`${match.url}/daily`} activeClassName={styles.active}>
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_note`}></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Daily View
              </div>
            </NavLink>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink
              to={`${match.url}/calendar`}
              activeClassName={styles.active}
            >
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_available`}></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Calendar
              </div>
            </NavLink>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink
              to={`${match.url}/summary`}
              activeClassName={styles.active}
            >
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use
                  xlinkHref={`${sprite}#icon-insert_chartpollassessment`}
                ></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Summary
              </div>
            </NavLink>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink
              to={`${match.url}/pastdue`}
              activeClassName={styles.active}
            >
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-event_busy`}></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Past Due
              </div>
            </NavLink>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink
              to={`${match.url}/residentinfo`}
              activeClassName={styles.active}
            >
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-perm_contact_calendar`}></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Resident
              </div>
            </NavLink>
          </li>
          <li className={styles.CollapsedSidebar_inner_list_item}>
            <NavLink
              to={`${match.url}/settings`}
              activeClassName={styles.active}
            >
              <svg className={styles.CollapsedSidebar_inner_list_item_icon}>
                <use xlinkHref={`${sprite}#icon-settings1`}></use>
              </svg>
              <div className={styles.CollapsedSidebar_inner_list_item_text}>
                Settings
              </div>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );

  const mobileSidebar = (
    <aside className={styles.MobileSidebar}>
      <ul className={styles.MobileSidebar_inner}>
        {/*  TASK BUTTON */}
        <li className={styles.MobileSidebar_inner_item} title="Create a task">
          <svg
            className={styles.MobileSidebar_inner_item_newTask}
            onClick={handleNewTaskModal}
          >
            <use xlinkHref={`${sprite}#icon-plus21`}></use>
          </svg>
        </li>
        <li className={styles.MobileSidebar_inner_item}>
          <svg className={styles.MobileSidebar_inner_item_icon}>
            <use xlinkHref={`${sprite}#icon-event_note`}></use>
          </svg>
        </li>
        <li className={styles.MobileSidebar_inner_item}>
          <svg className={styles.MobileSidebar_inner_item_icon}>
            <use xlinkHref={`${sprite}#icon-event_available`}></use>
          </svg>
        </li>

        <li className={styles.MobileSidebar_inner_item}>
          <svg className={styles.MobileSidebar_inner_item_icon}>
            <use xlinkHref={`${sprite}#icon-insert_chartpollassessment`}></use>
          </svg>
        </li>
        <li className={styles.MobileSidebar_inner_item}>
          <svg className={styles.MobileSidebar_inner_item_icon}>
            <use xlinkHref={`${sprite}#icon-event_busy`}></use>
          </svg>
        </li>
        <li className={styles.MobileSidebar_inner_item}>
          <svg className={styles.MobileSidebar_inner_item_icon}>
            <use xlinkHref={`${sprite}#icon-settings`}></use>
          </svg>
        </li>
      </ul>
    </aside>
  );

  return <>{isExpanded ? expandedSidebar : collapsedSidebar}</>;
};

export default withRouter(Sidebar);

Sidebar.defaultProps = {};

Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  handleSidebar: PropTypes.func.isRequired,
  handleNewTaskModal: PropTypes.func.isRequired
};
