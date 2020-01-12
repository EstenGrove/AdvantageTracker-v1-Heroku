import React from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/shared/RecordButton.module.scss";
import sprite from "../../assets/media.svg";

const RecordButton = ({ isRecording, startRecording }) => {
  return (
    <div
      className={
        isRecording ? styles.RecordButton_recording : styles.RecordButton
      }
      onClick={e => startRecording(e)}
    >
      <h4 className={styles.RecordButton}>Start</h4>
      <svg className={styles.RecordButton_icon}>
        <use xlinkHref={`${sprite}#icon-controller-record`}></use>
      </svg>
    </div>
  );
};

export default RecordButton;

RecordButton.propTypes = {
  isRecording: PropTypes.bool,
  startRecording: PropTypes.func
};
