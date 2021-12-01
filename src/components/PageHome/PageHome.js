import React from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@react-hook/media-query";

import { About } from "../About";
import { Portfolio } from "../Portfolio";
import { ScrollTop } from "../ScrollTop";

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

export const PageHome = () => {
  const shouldPreferDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <>
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
      >
        <body className={shouldPreferDarkMode ? "dark" : "light"} />
      </Helmet>
      <About />
      <Portfolio />
      <ScrollTop />
    </>
  );
};
