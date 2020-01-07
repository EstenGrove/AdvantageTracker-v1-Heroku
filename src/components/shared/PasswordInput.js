import React, { useState } from "react";
import styles from "../../css/shared/PasswordInput.module.scss";

const PasswordInput = ({ label, id, name, handleChange, required = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.PasswordInput}>
      <label htmlFor={id} className={styles.PasswordInput_label}>
        {label}
      </label>
      <div className={styles.PasswordInput_wrapper}>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          onChange={handleChange}
          className={styles.PasswordInput_wrapper_input}
          required={required}
        />
        <svg
          className={styles.PasswordInput_wrapper_icon}
          onClick={toggleShowPassword}
        >
          <use
            xlinkHref={`/showhide.svg/#icon-view-${
              showPassword ? "hide" : "show"
            }`}
          />
        </svg>
      </div>
    </div>
  );
};

export default PasswordInput;
