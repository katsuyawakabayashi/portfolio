import React, { useState, useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles, GlobalStyle } from "./themes.js";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <StyledApp className="Monrope">
          <GlobalStyles />

          {/* <Navbar toggle={toggle} />
          <Dropdown
            isOpen={isOpen}
            toggle={toggle}
            themeToggler={themeToggler}
          /> */}
          <Switch className="font-loader">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
