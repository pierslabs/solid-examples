import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Counter } from "./components/Counter";
import { Fetching } from "./Fetching";

const App: Component = () => {
  return (
    <div>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" width={50} />

        <h1>olid todo app</h1>
      </header>
      <section>
        <Counter />
      </section>
      <section>
        <Fetching />
      </section>
    </div>
  );
};

export default App;
