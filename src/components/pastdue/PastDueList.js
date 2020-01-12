import React from "react";
import styles from "../../css/pastdue/PastDueList.module.scss";
import { PropTypes } from "prop-types";

const PastDueList = ({ list = [] }) => {
  return (
    <div className={styles.PastDueList}>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default PastDueList;

PastDueList.defaultProps = {
  list: []
};

PastDueList.propTypes = {
  list: PropTypes.array
};
