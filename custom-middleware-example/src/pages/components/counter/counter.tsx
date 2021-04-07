import React from 'react';
import styles from './counter.module.css';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const Counter = (props: CounterProps) => {

  const { count, increment, decrement } = {...props};

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
      </div>
    </div>
  );
};
