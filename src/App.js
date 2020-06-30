import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyles } from './theme/global-styles';
import { theme } from './theme/theme';
import Home from "./pages/home";
import About from "./pages/about";
import Coaching from "./pages/coaching";
import OnStage from "./pages/onstage";
import { Books } from "./pages/books/index";
import { AKidsBookAboutBelonging } from "./pages/books/a-kids-book-about-belonging";
import { WhatsYourRedRubberBall } from "./pages/books/whats-your-red-rubber-ball";
import { TheRedRubberBallAtWork } from "./pages/books/the-red-rubber-ball-at-work";
import { RulesOfTheRedRubberBall } from "./pages/books/rules-of-the-red-rubber-ball";
import Menu from "./components/menu/menu";
import MenuButton from "./components/menu/menu-button";
import Header from "./components/header/header";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


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
        <ScrollToTop />
        <Header />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home key="page-home" />
            </Route>
            <Route path="/about">
              <About key="page-about" />
            </Route>
            <Route path="/coaching">
              <Coaching key="page-coaching" />
            </Route>
            <Route path="/onstage">
              <OnStage key="page-onstage" />
            </Route>
            <Route path="/books/a-kids-book-about-belonging">
              <AKidsBookAboutBelonging key="page-books-a-kids-about-belonging" />
            </Route>
            <Route path="/books/whats-your-red-rubber-ball">
              <WhatsYourRedRubberBall key="page-books-whats-your-red-rubber-ball" />
            </Route>
            <Route path="/books/the-red-rubber-ball-at-work">
              <TheRedRubberBallAtWork key="page-books-the-red-rubber-ball-at-work" />
            </Route>
            <Route path="/books/rules-of-the-red-rubber-ball">
              <RulesOfTheRedRubberBall key="page-books-rules-of-the-red-rubber-ball" />
            </Route>
            <Route path="/books">
              <Books key="page-books" />
            </Route>
          </Switch>
        </AnimatePresence>
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <MenuButton open={open} setOpen={setOpen} aria-controls={menuId} />
    </ThemeProvider>
  );
}



export default App;
