import styles from './counter.module.css';

interface CounterProps {
  count: number;
  dispatch: ({ type }: { type: string }) => void;
}

export const Counter = (props: CounterProps) => {

  const { count, dispatch } = { ...props };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
      </div>
    </div>
  );
};
