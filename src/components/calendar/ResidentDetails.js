import React, { useRef, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";
import { replaceNullWithMsg } from "../../helpers/utils_processing";
import { useOutsideClick } from "../../utils/useOutsideClick";
import styles from "../../css/calendar/ResidentDetails.module.scss";
import sprite from "../../assets/resident-details.svg";
import resImg from "../../assets/resImage.png";
import ResidentPhoto from "../../components/app/ResidentPhoto";

const ResidentDetails = ({ currentResident }) => {
	const menuRef = useRef();
	const [showMenu, setShowMenu] = useState(false);
	const { isOutside } = useOutsideClick(menuRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		if (isOutside) {
			return setShowMenu(false);
		}

		return () => {
			isMounted = false;
		};
	}, [isOutside]);

	return (
		<header className={styles.ResidentDetails} ref={menuRef}>
			<section className={styles.ResidentDetails_photo}>
				<ResidentPhoto imgSize="MD" imgSrc={resImg} />
			</section>
			<section className={styles.ResidentDetails_info}>
				<h2 className={styles.ResidentDetails_info_title}>
					{currentResident.firstName + " " + currentResident.lastName}
				</h2>
				<h4 className={styles.ResidentDetails_info_subtitle}>
					Age: {currentResident.age}
				</h4>
				<h6 className={styles.ResidentDetails_info_subtext}>
					Unit: {currentResident.unit}
				</h6>
			</section>
			<section className={styles.ResidentDetails_details}>
				<h2 className={styles.ResidentDetails_details_title}>Height/Weight</h2>
				<h6 className={styles.ResidentDetails_details_subtext}>
					Height: {replaceNullWithMsg(currentResident.height, "NA")}
				</h6>
				<h6 className={styles.ResidentDetails_details_subtext}>
					Weight: {replaceNullWithMsg(currentResident.weight, "NA")}
				</h6>
			</section>
			<section className={styles.ResidentDetails_dates}>
				<h2 className={styles.ResidentDetails_dates_title}>Due Dates</h2>
				<h6 className={styles.ResidentDetails_dates_subtext}>
					MD Report:{" "}
					{replaceNullWithMsg(
						format(currentResident.mdReportDue, "MM/DD/YYYY"),
						"NA"
					)}
				</h6>
				<h6 className={styles.ResidentDetails_dates_subtext}>
					Service Plan:{" "}
					{replaceNullWithMsg(
						format(currentResident.servicePlanDue, "MM/DD/YYYY"),
						"NA"
					)}
				</h6>
			</section>
			<section className={styles.ResidentDetails_mobile}>
				<svg
					className={styles.ResidentDetails_mobile_icon}
					onClick={() => setShowMenu(!showMenu)}
				>
					<use xlinkHref={`${sprite}#icon-dots-three-horizontal`}></use>
				</svg>
				{showMenu && (
					<aside className={styles.ResidentDetails_mobile_menu}>
						<h6 className={styles.ResidentDetails_mobile_menu_title}>
							Options
						</h6>
						<div className={styles.ResidentDetails_mobile_menu_item}>
							<NavLink to="/dashboard/residentinfo">
								View Resident Details
							</NavLink>
						</div>
					</aside>
				)}
			</section>
		</header>
	);
};

export default ResidentDetails;

ResidentDetails.defaultProps = {};

ResidentDetails.propTypes = {
	currentResident: PropTypes.object
};
