// libs
import React from "react";

// src
import { CATEGORIES } from "./data";
import styles from "./Categories.css";

export default ({ activeCategory, onCategoryClick }) => (
  <ul className={styles.root}>
    {CATEGORIES.map((category, index) => (
      <li
        key={index}
        className={[
          styles.listItem,
          activeCategory === index && styles.active
        ].join(" ")}
        onClick={onCategoryClick.bind(this, index)}
      >
        {category}
      </li>
    ))}
  </ul>
);
