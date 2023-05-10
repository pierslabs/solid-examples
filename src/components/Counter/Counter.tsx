import { Component, createSignal } from "solid-js";
import styles from "./Counter.module.css";

export type CounterProps = {};

const Counter: Component<CounterProps> = () => {
  const [value, setValue] = createSignal(0);

  return (
    <div class={styles.counter}>
      <div class={styles.title}>
        <h2>Counter</h2>
        <h4>///</h4>
      </div>
      <hr />
      <br />
      <div class={styles.container}>
        <div class={styles.buttonContainer}>
          <button
            class="btn btn-primary"
            onclick={() => setValue((prev) => prev + 1)}
          >
            add 1
          </button>
          <button
            class="btn btn-primary"
            onclick={() => setValue((prev) => prev - 1)}
          >
            Substract 1
          </button>
        </div>
        <div class={styles.card}>{value}</div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Counter;
