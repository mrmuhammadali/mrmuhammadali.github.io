// libs
import React from "react";

// src
import styles from "./Title.css";

export default ({ content, className }) => (
  <h1 className={[styles.root, className].join(" ")}>{content}</h1>
);
