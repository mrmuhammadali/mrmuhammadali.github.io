// libs
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// src
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const theme = createMuiTheme({ palette: { type: "dark" } });

export default () => (
  <MuiThemeProvider theme={theme}>
    {[<Header />, <About />, <Portfolio />, <Contact />, <Footer />]}
  </MuiThemeProvider>
);
