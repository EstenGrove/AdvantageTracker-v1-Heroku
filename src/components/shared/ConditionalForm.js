import React, { useState, useEffect } from "react";
import styles from "../../css/shared/ConditionalForm.module.scss";

const ConditionalForm = ({
  mainInput,
  condition = false,
  children,
  ...props
}) => {
  const childWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { props: props })
  );
  return (
    <article className={styles.ConditionalForm}>
      <section className={styles.ConditionalForm_mainInput}>
        {mainInput}
      </section>
      {condition && (
        <section className={styles.ConditionalForm_conditionalInput}>
          {childWithProps}
        </section>
      )}
    </article>
  );
};

export default ConditionalForm;
