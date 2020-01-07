import React from "react";
import styles from "../css/CardSM.module.scss";

const CardSM = ({ children, customStyles }) => {
  return (
    <section className={styles.CardSM} style={customStyles}>
      <div className={styles.CardSM_inner}>{children}</div>
    </section>
  );
};

export default CardSM;
