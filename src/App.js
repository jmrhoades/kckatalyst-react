import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyles } from './global';
import { theme } from './theme';
import Home from "./pages/home";
import About from "./pages/about";
import Coaching from "./pages/coaching";
import OnStage from "./pages/on-stage";
import Books from "./pages/books/index";
import Menu from "./components/menu";
import MenuButton from "./components/menu-button";

function App() {

  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  const location = useLocation();
  useEffect(() => {
    if (open) {
      setOpen(false)
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/coaching">
              <Coaching />
            </Route>
            <Route path="/on-stage">
              <OnStage />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </Switch>
        </AnimatePresence>
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <MenuButton open={open} setOpen={setOpen} aria-controls={menuId} />
    </ThemeProvider>
  );
}

export default App;
