import React from "react";
import styles from "../../css/shared/Counter.module.scss";
import { PropTypes } from "prop-types";

const Counter = ({ label, count, setCount }) => {
	const increment = () => setCount(count + 1);

	const decrement = () => {
		if (count <= 0) {
			return setCount(0);
		}
		return setCount(count - 1);
	};

	return (
		<div className={styles.Counter}>
			<label className={styles.Counter_label}>{label}</label>
			<section className={styles.Counter_counter}>
				<button className={styles.Counter_counter_btn} onClick={decrement}>
					-
				</button>
				<div className={styles.Counter_counter_input}>{count}</div>
				<button className={styles.Counter_counter_btn} onClick={increment}>
					+
				</button>
			</section>
		</div>
	);
};

export default Counter;

Counter.defaultProps = {};

Counter.propTypes = {
	label: PropTypes.string,
	count: PropTypes.number,
	setCount: PropTypes.func // state setter
};
