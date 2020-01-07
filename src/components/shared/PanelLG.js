import React from "react";
import styles from "../css/PanelLG.module.scss";

const PanelLG = ({ children, customStyles }) => {
  return (
    <div className={styles.PanelLG} style={customStyles}>
      {children}
    </div>
  );
};

export default PanelLG;
