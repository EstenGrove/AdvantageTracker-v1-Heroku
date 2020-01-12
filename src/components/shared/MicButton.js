import React from "react";
import sprite from "../../assets/media.svg";
import styles from "../../css/shared/MicButton.module.scss";

const MicButton = ({ isRecording, startRecording }) => {
  return (
    <div className={styles.MicButton}>
      <div className={styles.MicButton_inner} onClick={e => startRecording(e)}>
        <svg
          className={
            isRecording
              ? `${styles.MicButton_inner_icon} ${styles.recording}`
              : styles.MicButton_inner_icon
          }
        >
          <use xlinkHref={`${sprite}#icon-mic`}></use>
        </svg>
      </div>
      <h4 className={styles.MicButton_label}>
        {isRecording ? "Recording..." : "Click to record note"}
      </h4>
    </div>
  );
};

export default MicButton;
