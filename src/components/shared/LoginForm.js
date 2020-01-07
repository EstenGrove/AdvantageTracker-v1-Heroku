import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import styles from "../../css/shared/LoginForm.module.scss";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";

const LoginForm = ({ vals, handleChange, handleLogin, handleSignup }) => {
  const [isValid, setIsValid] = useState(
    vals.username !== "" && vals.password !== ""
  );

  return (
    <section className={styles.LoginForm}>
      <form className={styles.LoginForm_form}>
        <h4 className={styles.LoginForm_form_title}>Login</h4>
        <TextInput
          label="Username"
          val={vals.username}
          handleChange={handleChange}
          name="username"
          id="username"
          required={true}
        />
        <PasswordInput
          label="Password"
          val={vals.password}
          handleChange={handleChange}
          name="password"
          id="password"
          required={true}
        />
        <Button text="Login" handleClick={handleLogin} enableBtn={isValid} />
        <p className={styles.LoginForm_form_switch}>
          <button
            className={styles.LoginForm_form_switch_button}
            onClick={handleSignup}
          >
            Or Signup here!
          </button>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  vals: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func
};
