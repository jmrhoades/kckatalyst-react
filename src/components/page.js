import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';

import Footer from "./footer/footer";
import { BackNextNav } from "./footer/nav";


function Page(props) {

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
  };

  return (
    <PageWrap
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <PageContent>
        {props.children}
      </PageContent>
      <BackNextNav />
      <Footer />
    </PageWrap>
  )
}

const PageWrap = styled(motion.div)`
  position: absolute;
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;
  
  @media (min-width: 375px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 414px) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (min-width: 640px) {
    padding-left: 56px;
    padding-right: 56px;
  }

  @media (min-width: 768px) {
    padding-left: 56px;
    padding-right: 56px;
  }
`;

const PageContent = styled(motion.div)`
  padding-top: 10em;
  padding-bottom: 12em;
`;

export default Page;