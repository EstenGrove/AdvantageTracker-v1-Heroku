import React, { useEffect, useState, useContext } from "react";
import styles from "../../css/app/AuthenticatedView.module.scss";
import { PropTypes } from "prop-types";
import { AuthContext } from "../../state/AuthContext";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { logout } from "../../helpers/utils_auth";
import {
  getInitialResource,
  syncResourceToState
} from "../../helpers/utils_requests";
import { isEmptyVal } from "../../helpers/utils_types";
import { handleResidentSelection } from "../../helpers/utils_residents";

const AuthenticatedView = ({ history }) => {
  const { authData } = useContext(AuthContext);
  const { state, dispatch } = useContext(GlobalStateContext);

  const [isExpanded, setIsExpanded] = useState(true);
  const [currentResident, setCurrentResident] = useState({});

  const handleSidebar = () => setIsExpanded(!isExpanded);

  // handles expanding/shrinking container based on Sidebar's width
  const customStyles = {
    paddingLeft: isExpanded ? "22rem" : "0"
  };

  const handleLogout = async e => {
    const { token } = authData;
    const wasSuccessful = await logout(token);
    if (wasSuccessful) {
      return history.replaceState("/");
    }
    return alert("Something went wrong. Please try again.");
  };

  const handleInitialResource = async () => {
    const resource = await getInitialResource(authData, state, dispatch);
    return syncResourceToState({ ...resource, authData }, state, dispatch);
  };

  const selectResident = e => {
    const { value } = e.target;
    if (isEmptyVal(value)) return setCurrentResident({});

    // parses text value, finds resident by id sets local state
    return handleResidentSelection(
      value,
      state.globals.residents,
      setCurrentResident
    );
  };

  useEffect(() => {
    // prevents memory leaks (DO NOT REMOVE!!)
    let isMounted = true;

    if (!isMounted) {
      return;
    }
    handleInitialResource();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.AuthenticatedView}>
      {/* NAVBAR */}
      <section
        className={styles.AuthenticatedView_dashboard}
        style={customStyles}
      >
        <header className={styles.AuthenticatedView_dashboard_header}>
          {/* -----REMOVE BELOW THIS LINE AFTER PROJECT INIT----- */}
          <h1 className="title">Application Boilerplate</h1>
          <h4 className="subtitle">
            A custom boilerplate for ALA App structure w/ included deps and
            auth.
          </h4>
          {/* -----REMOVE ABOVE THIS LINE AFTER PROJECT INIT----- */}

          {/* RESIDENT DROPDOWN */}
          {/* DASHBOARD NAV */}
          {/* RESIDENT CARD???? */}
        </header>
        {/* DASHBOARD CONTAINER */}
      </section>
      {/*  */}
    </div>
  );
};

export default AuthenticatedView;

AuthenticatedView.defaultProps = {};

AuthenticatedView.propTypes = {
  history: PropTypes.object
};
