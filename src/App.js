// libs
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// src
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import styles from "./App.css";

const theme = createMuiTheme({ palette: { type: "dark" } });

export default () => (
  <MuiThemeProvider theme={theme}>
    <div className={styles.root}>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  </MuiThemeProvider>
);
