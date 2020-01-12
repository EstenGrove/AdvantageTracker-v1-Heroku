import React from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/details/AppliedFilters.module.scss";
import Checkbox from "../shared/Checkbox";

const customStyles = {
  width: "13rem"
};

const AppliedFilters = ({
  vals = {},
  categories = [],
  handleSearch,
  handleCheckbox,
  applyFilters,
  clearFilters
}) => {
  return (
    <div className={styles.AppliedFilters}>
      <section className={styles.AppliedFilters_topTile}>
        {/* SCHEDULED/UNSCHEDULED CHECKBOXES */}
        <div className={styles.AppliedFilters_topTile_wrapper}>
          <h4 className={styles.AppliedFilters_topTile_wrapper_heading}>
            Unscheduled Tasks
          </h4>
          <Checkbox
            val={vals.unscheduled}
            isChecked={vals.unscheduled}
            handleCheckbox={handleCheckbox}
            name="viewUnscheduled"
            id="viewUnscheduled"
            label="View Unscheduled Tasks"
          />
        </div>
        <div className={styles.AppliedFilters_topTile_wrapper}>
          <h4 className={styles.AppliedFilters_topTile_wrapper_heading}>
            Scheduled Tasks
          </h4>
          <Checkbox
            val={vals.scheduled}
            isChecked={vals.scheduled}
            handleCheckbox={handleCheckbox}
            name="viewScheduled"
            id="viewScheduled"
            label="View Scheduled Tasks"
          />
        </div>
      </section>
      <div className={styles.AppliedFilters_tileContainer}>
        <section className={styles.AppliedFilters_tileContainer_tile}>
          <h4 className={styles.AppliedFilters_tileContainer_tile_heading}>
            By Shift
          </h4>
          <div className={styles.AppliedFilters_tileContainer_tile_group}>
            <Checkbox
              val={vals.am}
              isChecked={vals.am}
              label="AM"
              name="am"
              id="am"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.pm}
              isChecked={vals.pm}
              label="PM"
              name="pm"
              id="pm"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.noc}
              isChecked={vals.noc}
              label="NOC"
              name="noc"
              id="noc"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.any}
              isChecked={vals.any}
              label="ANY"
              name="any"
              id="any"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
          </div>
        </section>

        <section className={styles.AppliedFilters_tileContainer_tile}>
          <h4 className={styles.AppliedFilters_tileContainer_tile_heading}>
            By Status
          </h4>
          <div className={styles.AppliedFilters_tileContainer_tile_group}>
            <Checkbox
              val={vals.byStatus_Complete}
              isChecked={vals.byStatus_Complete}
              label="Complete"
              name="byStatus_Complete"
              id="byStatus_Complete"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.byStatus_NotComplete}
              isChecked={vals.byStatus_NotComplete}
              label="Not-Complete"
              name="byStatus_NotComplete"
              id="byStatus_NotComplete"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.byStatus_Pending}
              isChecked={vals.byStatus_Pending}
              label="Pending"
              name="byStatus_Pending"
              id="byStatus_Pending"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
            <Checkbox
              val={vals.byStatus_MissedEvent}
              isChecked={vals.byStatus_MissedEvent}
              label="Missed-Event"
              name="byStatus_MissedEvent"
              id="byStatus_MissedEvent"
              handleCheckbox={handleCheckbox}
              customStyles={customStyles}
            />
          </div>
        </section>
      </div>
      <section className={styles.AppliedFilters_bottom}>
        <div className={styles.AppliedFilters_bottom_search}>
          <input
            type="text"
            name="TASK_SEARCH"
            id="TASK_SEARCH"
            className={styles.AppliedFilters_bottom_search_input}
            onChange={handleSearch}
            placeholder="Search for a task..."
          />
        </div>
        <div className={styles.AppliedFilters_bottom_controls}>
          <button
            className={styles.AppliedFilters_bottom_controls_clearBtn}
            onClick={clearFilters}
          >
            Clear
          </button>
          <button
            className={styles.AppliedFilters_bottom_controls_applyBtn}
            onClick={applyFilters}
          >
            Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppliedFilters;

AppliedFilters.defaultProps = {
  vals: PropTypes.object
};

AppliedFilters.propTypes = {
  vals: PropTypes.object,
  handleCheckbox: PropTypes.func,
  applyFilters: PropTypes.func,
  clearFilters: PropTypes.func
};
