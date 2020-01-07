import React from "react";
import styles from "../css/VoiceRecorder.module.scss";
import { PropTypes } from "prop-types";
import MicButton from "./MicButton";
import StopButton from "./StopButton";
import Textarea from "./Textarea";

const customStyles = {
  backgroundColor: "#eaecef"
};

const VoiceRecorder = ({
  // recordingVal, not needed???
  handleRecording,
  dictaphone,
  isSupported,
  isRecording,
  isStopped,
  startRecording,
  stopRecording,
  finalTranscript,
  interimTranscript
}) => {
  if (!isSupported) {
    return null;
  }
  return (
    <aside className={styles.VoiceRecorder}>
      <div className={styles.VoiceRecorder_input}>
        <Textarea
          maxChar={200}
          enableCharCount={true}
          val={isStopped ? finalTranscript : interimTranscript}
          label="Record a note (Speech-to-text)"
          name="voiceNote"
          id="voiceNote"
          handleChange={handleRecording}
          customStyles={customStyles}
        />
      </div>
      <div className={styles.VoiceRecorder_controls}>
        <MicButton isRecording={isRecording} startRecording={startRecording} />
        <StopButton
          isRecording={isRecording}
          isStopped={isStopped}
          stopRecording={stopRecording}
        />
      </div>
    </aside>
  );
};

export default VoiceRecorder;

VoiceRecorder.propTypes = {
  recordingHandler: PropTypes.func
};
