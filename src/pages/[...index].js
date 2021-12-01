import React from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@react-hook/media-query";

import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { ScrollTop } from "../components/ScrollTop";

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

const PageHome = () => {
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
      >
        <body className={shouldPreferDarkMode ? "dark" : "light"} />
      </Helmet>
      <About />
      <Portfolio />
      <ScrollTop />
    </>
  );
};

export default PageHome;
