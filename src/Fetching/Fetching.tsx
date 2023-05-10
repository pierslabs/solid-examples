import { Component, createEffect, createSignal } from "solid-js";
import styles from "./Fetching.module.css";

export type FetchingProps = {};

interface Character {
  name: string;
  image: string;
}

const Fetching: Component<FetchingProps> = () => {
  const [characters, setCharacters] = createSignal([]);
  createEffect(async () => {
    // Todo: https://rickandmortyapi.com/documentation/#rest
    const res = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );

    const data = await res.json();

    setCharacters(data.result);
  });

  return (
    <div class={styles.Fetching}>
      <div class={styles.title}>
        <h2>Fetching</h2>
        <h4>///</h4>
      </div>
      <hr />
      <br />

      <div class={styles.container}>
        <div class={styles.container}>
          <input
            type="text"
            class="form-control"
            placeholder="Find Character"
          />
          <button class="btn btn-primary btn-outline">Push for fetch</button>
        </div>
      </div>
      <br />
      <h3>Data:</h3>

      <hr />
    </div>
  );
};

export default Fetching;
