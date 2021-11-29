import React from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import IconButton from "@material-ui/core/IconButton";
import useScrollPosition from "@react-hook/window-scroll";

import { useStyles } from "./ScrollTop.styles";

export const ScrollTop = () => {
  const styles = useStyles();
  const scrollY = useScrollPosition(60);

  if (scrollY < 450) return null;

  return (
    <IconButton
      role="button"
      className={styles.root}
      size="small"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <ArrowUpward className={styles.icon} />
    </IconButton>
  );
};
