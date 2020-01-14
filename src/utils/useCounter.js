import { useState } from "react";

export const useCounter = (minCount = 0, maxCount = 120) => {
  const [count, setCount] = useState(minCount);

  const increment = () => {
    const int = parseInt(count, 10);
    return int < maxCount ? setCount(count + 1) : setCount(maxCount);
  };

  const decrement = () => {
    if (count > minCount) {
      return setCount(count - 1);
    }
  };

  const handleCountBlur = e => {
    const { value } = e.target;
    if (value.trim() === "") {
      return setCount(0);
    }
  };

  const handleCountChange = e => {
    const { value } = e.target;
    const specialCaseEmpty = value.trim() === "";
    if (specialCaseEmpty) {
      // allow deleting chars
      return setCount(value);
    } else {
      // prevent non-numeric values
      const int = parseInt(value, 10);
      if (!isNaN(int)) {
        return int < maxCount ? setCount(int) : setCount(maxCount);
      }
    }
  };

  return {
    count,
    increment,
    decrement,
    handleCountChange,
    handleCountBlur
  };
};
