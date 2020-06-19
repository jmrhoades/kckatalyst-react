import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyles } from './styled/global-styles';
import { theme } from './styled/theme';
import Home from "./pages/home";
import About from "./pages/about";
import Coaching from "./pages/coaching";
import OnStage from "./pages/on-stage";
import { Books } from "./pages/books/index";
import { AKidsBookAboutBelonging } from "./pages/books/a-kids-book-about-belonging";
import { WhatsYourRedRubberBall } from "./pages/books/whats-your-red-rubber-ball";
import { TheRedRubberBallAtWork } from "./pages/books/the-red-rubber-ball-at-work";
import { RulesOfTheRedRubberBall } from "./pages/books/rules-of-the-red-rubber-ball";
import Menu from "./components/menu/menu";
import MenuButton from "./components/menu/menu-button";
import Header from "./components/header/header";


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
        <Header />
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
            <Route path="/books/a-kids-book-about-belonging">
              <AKidsBookAboutBelonging />
            </Route>
            <Route path="/books/whats-your-red-rubber-ball">
              <WhatsYourRedRubberBall />
            </Route>
            <Route path="/books/the-red-rubber-ball-at-work">
              <TheRedRubberBallAtWork />
            </Route>
            <Route path="/books/rules-of-the-red-rubber-ball">
              <RulesOfTheRedRubberBall />
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
