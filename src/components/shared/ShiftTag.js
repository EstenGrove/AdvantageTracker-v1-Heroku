import React from "react";
import styles from "../../css/shared/ShiftTag.module.scss";
import { PropTypes } from "prop-types";

const ShiftTag = ({ shift, bgcolor }) => {
  return (
    <div className={styles.ShiftTag} style={{ backgroundColor: bgcolor }}>
      <div className={styles.ShiftTag_shift}>{shift}</div>
    </div>
  );
};

export default ShiftTag;

ShiftTag.propTypes = {
  shift: PropTypes.string.isRequired,
  bgcolor: PropTypes.string
};
