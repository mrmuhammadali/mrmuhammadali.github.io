// libs
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";

// src
import { About } from "../About";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Header } from "../Header";
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
  const about = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);

  const handleNavButtonClick = (section) => {
    const scroll = (ref) => {
      window.scroll({ top: ref.current.offsetTop - 50, behavior: "smooth" });
    };
    if (section === "about") {
      scroll(about);
    } else if (section === "contact") {
      scroll(contact);
    } else {
      scroll(portfolio);
    }
  };

  return (
    <div>
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
            href:
              "https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300&display=swap",
          },
        ]}
      />
      <Header
        className={styles.header}
        onNavButtonClick={handleNavButtonClick}
      />
      <About ref={about} />
      <Portfolio ref={portfolio} />
      <Contact ref={contact} />
      <Footer />
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
