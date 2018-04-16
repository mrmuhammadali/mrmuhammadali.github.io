// libs
import React from "react";

// src
import Detail from "./Detail";
import Profile from "./Profile";
import styles from "./About.css";
import Title from "../Title";

export default () => (
  <section className={styles.root}>
    <header className={styles.header}>
      <Title content="Muhammad Ali" />
      <h3 className={styles.tagline}>
        Fullstack developer aiming to build a brand.
      </h3>
    </header>
    <Profile />
    <Detail />
  </section>
);
