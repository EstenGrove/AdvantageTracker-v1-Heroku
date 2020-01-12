import React from "react";
import styles from "../../css/shared/Placeholder.module.scss";
import { PropTypes } from "prop-types";

const Placeholder = ({ msg, txtColor, size = "SM" }) => {
  const customStyles = {
    color: txtColor,
    fontSize: size === "SM" ? "1.6rem" : size === "MD" ? "2rem" : "3rem"
  };
  return (
    <article className={styles.Placeholder} style={customStyles}>
      {msg}
    </article>
  );
};

export default Placeholder;

Placeholder.defaultProps = {};

Placeholder.propTypes = {
  msg: PropTypes.string.isRequired
};
