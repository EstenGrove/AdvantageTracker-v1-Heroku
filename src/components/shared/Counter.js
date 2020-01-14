import React from "react";
import styles from "../../css/shared/Counter.module.scss";

const Counter = ({
  label,
  name,
  id,
  count,
  increment,
  decrement,
  handleCountChange,
  handleCountBlur
}) => {
  return (
    <div className={styles.Counter}>
      <label htmlFor={id} className={styles.Counter_label}>
        {label}
      </label>
      <section className={styles.Counter_wrapper}>
        <button
          type="button"
          className={styles.Counter_wrapper_btn}
          onClick={decrement}
        >
          -
        </button>
        <input
          id={id}
          name={name}
          type="text"
          value={count}
          onChange={handleCountChange}
          onBlur={handleCountBlur}
          className={styles.Counter_wrapper_input}
        />
        <button
          type="button"
          className={styles.Counter_wrapper_btn}
          onClick={increment}
        >
          +
        </button>
      </section>
    </div>
  );
};

export default Counter;
