import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
  reset
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div>
      <button
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
