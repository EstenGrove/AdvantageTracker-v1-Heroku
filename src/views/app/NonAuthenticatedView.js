import React, { useContext } from "react";
import styles from "../../css/app/NonAuthenticatedView.module.scss";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
import { useForm } from "../../utils/useForm";
import { login } from "../../helpers/utils_auth";
import LoginForm from "../../components/shared/LoginForm";
import LoginPage from "../../components/pages/LoginPage";

const NonAuthenticatedView = ({ history }) => {
  const { setAuthData } = useContext(AuthContext);
  const { formState, handleChange } = useForm({
    username: "",
    password: ""
  });

  const handleLogin = async e => {
    e.preventDefault();
    const { username, password } = formState.values;
    const token = await login(username, password, "AdvantageTracker");

    if (token) {
      setAuthData({
        isAuthenticated: true,
        username: username,
        password: password,
        token: token
      });
      return history.replace("/dashboard/daily");
    }
    return alert("Oops. Something went wrong. Please try again.");
  };

  const handleSignup = e => {
    e.persist();
    e.preventDefault();
    return alert(
      "Sorry we're not taking new registrations at the moment. \n Try again later!"
    );
  };

  return (
    <div className={styles.NonAuthenticatedView}>
      <LoginPage>
        <LoginForm
          vals={formState.values}
          handleChange={handleChange}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          disableBtn={true}
        />
      </LoginPage>
    </div>
  );
};

export default withRouter(NonAuthenticatedView);

NonAuthenticatedView.defaultProps = {};

NonAuthenticatedView.propTypes = {
  children: PropTypes.any
};
