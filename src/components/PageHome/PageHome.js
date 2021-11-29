// libs
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";

// src
import { About } from "../About";
import { Portfolio } from "../Portfolio";
import { useStyles } from "./PageHome.styles";
import { useTheme } from "../../utils/useTheme";

const keywords = [
  "Muhammad Ali",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "React.js",
  "React Native",
  "Next.js",
  "Gatsby",
  "Fullstack developer",
  "Software Engineer",
].join(", ");

function PageHomeInner(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Muhammad Ali"
        meta={[
          { charset: "UTF-8" },
          { name: "author", content: "Muhammad Ali" },
          { name: "description", content: "Fullstack Javascript developer" },
          { name: "keywords", content: keywords },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        link={[
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300&display=swap",
          },
        ]}
      />
      <About />
      <Portfolio />
    </div>
  );
}

export const PageHome = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <PageHomeInner />
    </ThemeProvider>
  );
};
