import React from "react";

import useScrollPosition from "@react-hook/window-scroll";

import ArrowUp from "../Icons/ArrowUp";
import * as styles from "./ScrollTop.module.css";

export const ScrollTop = () => {
  const scrollY = useScrollPosition(60);

  if (scrollY < 450) return null;

  return (
    <button
      className={["iconButton", styles.root].join(" ")}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <ArrowUp className={styles.icon} />
    </button>
  );
};
