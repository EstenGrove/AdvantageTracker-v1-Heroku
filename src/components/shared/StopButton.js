import React from "react";
import styles from "../css/StopButton.module.scss";
import sprite from "../../assets/media.svg";

const StopButton = ({ isRecording, isStopped, stopRecording }) => {
  if (isStopped || !isRecording) {
    return null;
  }
  return (
    <>
      {isRecording && (
        <div className={styles.StopButton}>
          <svg
            className={styles.StopButton_icon}
            onClick={e => stopRecording(e)}
          >
            <use xlinkHref={`${sprite}#icon-stop2`}></use>
          </svg>
          <h4 className={styles.StopButton_label}>Stop Recording</h4>
        </div>
      )}
    </>
  );
};

export default StopButton;
