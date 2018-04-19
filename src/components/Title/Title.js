// @flow
// libs
import React from "react";

// src
import styles from "./Title.css";

type Props = {
  content: string,
  className: string,
}

export default ({ content, className }: Props) => (
  <h1 className={[styles.root, className].join(" ")}>{content}</h1>
);
