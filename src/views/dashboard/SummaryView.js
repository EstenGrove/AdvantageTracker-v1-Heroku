import React from "react";
import styles from "../../css/dashboard/SummaryView.module.scss";
import { PropTypes } from "prop-types";

// REQUIREMENTS:
// 1. HEIGHT/WEIGHT
// 2. VITALS
// 3. COMPLETION/EXCEPTION REPORT(S)

const SummaryView = ({ currentResident = {}, currentUser, vitals = [] }) => {
	return (
		<section className={styles.SummaryView}>
			<header className={styles.SummaryView_header}>
				{/*  */}
				{/*  */}
			</header>
			<main className={styles.SummaryView_container}>
				{/*  */}
				{/*  */}
				{/*  */}
			</main>
			<footer className={styles.SummaryView_footer}>
				{/*  */}
				{/*  */}
				{/*  */}
			</footer>
		</section>
	);
};

export default SummaryView;

SummaryView.defaultProps = {};

SummaryView.propTypes = {};
