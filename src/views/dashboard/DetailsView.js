import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { adlColors } from "../../helpers/utils_styles";
import styles from "../../css/dashboard/DetailsView.module.scss";
import PanelLG from "../../components/shared/PanelLG";
import Modal from "../../components/shared/Modal";
import TasksPanel from "../../components/details/TasksPanel";
import TaskList from "../../components/details/TaskList";
import TaskDetails from "../../components/details/TaskDetails";

// DETAILS VIEW - CHILD ROUTE OF THE <DailyView/> route
const DetailsView = props => {
	const { category, scheduledTasks } = props.location.state;
	const [showModal, setShowModal] = useState(false);
	const [activeTask, setActiveTask] = useState({});

	const viewDetails = task => {
		setShowModal(true);
		setActiveTask(task);
		console.group("viewDetails Modal");
		console.log("task", task);
		console.log("activeTask", activeTask);
		console.groupEnd();
	};

	return (
		<>
			<section className={styles.DetailsView}>
				<h1 className="subtitle">
					<strong style={{ color: adlColors[category.AdlCategoryType] }}>
						{category.AdlCategoryType}
					</strong>{" "}
					Tasks For Today
				</h1>
				<PanelLG customStyles={{ backgroundColor: "#ffffff" }}>
					<TasksPanel>
						<TaskList tasks={scheduledTasks} viewDetails={viewDetails} />
					</TasksPanel>
				</PanelLG>
			</section>

			{showModal && (
				<Modal title="Edit/Update Task" closeModal={() => setShowModal(false)}>
					<TaskDetails task={activeTask} />
				</Modal>
			)}
		</>
	);
};

export default withRouter(DetailsView);

DetailsView.defaultProps = {};

DetailsView.propTypes = {
	props: PropTypes.object
};
