import React, { useState, useEffect } from "react";
import styles from "../css/SearchButton.module.scss";

const SearchButton = ({ text, action, addIcon = false, handleClick }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timer;

    if (!isMounted) {
      return;
    }

    if (isLoading) {
      timer = setTimeout(() => {
        setIsDisabled(false);
        setIsLoading(false);
      }, 2000);
    }
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isLoading]);

  const clickHandler = e => {
    e.persist();
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);
    console.log("button clicked...");
    return handleClick(e);
  };

  return (
    <button
      className={styles.SearchButton}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {isLoading ? action : text}
      {addIcon && (
        <svg className={styles.SearchButton_icon}>
          <use xlinkHref={`/search.svg/#icon-search`} />
        </svg>
      )}
    </button>
  );
};

export default SearchButton;
