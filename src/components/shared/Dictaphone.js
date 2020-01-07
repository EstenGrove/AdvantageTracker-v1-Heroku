import React, { useEffect, useState, useReducer } from "react";
import styles from "../css/Dictaphone.module.scss";
import sprite from "../../assets/media.svg";
import RecordButton from "./RecordButton";
import StopButton from "./StopButton";
// microphone4 & microphone-slash
// controller-record, controller-stop, controller-play, controller-paus, // save11

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Config Options:
// 1. interimResults = true -- (this records the "in-between" words instead of only the final result)
// 2. continuous = true -- keep stream active *after* user has stopped talking

const Dictaphone = ({ grammars = [], config = {} }) => {
  const [dictaphone, setDictaphone] = useState({
    isSupported: "SpeechRecognition" in window ? true : false,
    isRecording: false,
    transcript: [],
    final: null
  });
  const [recog, setRecog] = useState(new window.SpeechRecognition());
  const { isRecording, isSupported } = dictaphone;

  const processRecording = e => {
    recog.onresult = e => {
      let interimTranscript = "";
      let finalTranscript = ""; // string value from the final speech object
      const interimText = e.results[0][0].transcript;
      const isFinal = e.results[0].isFinal; // boolean value

      if (isFinal) {
        finalTranscript += e.results[0][0].transcript;
        setDictaphone({
          ...dictaphone,
          isRecording: false,
          final: finalTranscript
        });
        return finalTranscript;
      } else {
        setDictaphone({
          ...dictaphone,
          isRecording: true,
          transcript: interimText
        });
        return (interimTranscript += interimText);
      }
    };
  };

  const startRecording = e => {
    recog.interimResults = true;
    recog.continuous = true;
    recog.start();
    setDictaphone({
      ...dictaphone,
      isRecording: true
    });
    return processRecording(e);
  };

  const stopRecording = () => {
    recog.stop();
    return setDictaphone({
      ...dictaphone,
      isRecording: false
    });
  };

  return (
    <>
      <div className={styles.Dictaphone}>
        <div className={styles.Dictaphone_inner}>
          <RecordButton
            isRecording={isRecording}
            startRecording={e => startRecording(e)}
          />
          {isRecording && <StopButton stopRecording={e => stopRecording(e)} />}
        </div>
      </div>
      {/* {mapTranscriptToUI()} */}
    </>
  );
};

export default Dictaphone;
