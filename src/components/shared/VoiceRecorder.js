import React, { useEffect, useState } from "react";
import { main } from "../../helpers/utils_styles";
import styles from "../../css/shared/VoiceRecorder.module.scss";
import ButtonSM from "./ButtonSM";

const startBtn = {
	backgroundColor: main.green,
	color: "#ffffff",
	borderRadius: ".5rem"
};
const stopBtn = {
	backgroundColor: main.red,
	color: "#ffffff",
	borderRadius: ".5rem"
};

const VoiceRecorder = ({
	isListening,
	isSupported,
	recording,
	start,
	stop,
	handleChange,
	children
}) => {
	const withProps = React.Children.map(children, child => {
		return React.cloneElement(child, {
			val: recording,
			handleChange: handleChange
		});
	});

	if (!isSupported) {
		return null;
	}
	return (
		<article className={styles.VoiceRecorder}>
			<section className={styles.VoiceRecorder_input}>
				{withProps}
				{isListening && <div className={styles.VoiceRecorder_input_pulse} />}
			</section>
			<section className={styles.VoiceRecorder_controls}>
				<ButtonSM handleClick={start} customStyles={startBtn}>
					Start Recording
				</ButtonSM>
				<ButtonSM handleClick={stop} customStyles={stopBtn}>
					Stop Recording
				</ButtonSM>
			</section>
		</article>
	);
};

export default VoiceRecorder;
