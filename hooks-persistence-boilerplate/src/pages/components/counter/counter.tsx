import React, { useState } from 'react';
import styles from './counter.module.css';

export const Counter = () => {

  const [count, setCount] = useState<number>(0);

  const handleIncrement = (count: number) => () => {
    setCount(count + 1);
  };

  const handleDecrement = (count: number) => () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement(count)}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement(count)}
        >
          -
        </button>
      </div>
    </div>
  );
};
