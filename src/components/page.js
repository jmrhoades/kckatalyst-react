import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';

import Footer from "./footer/footer";


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
      <Footer />
    </PageWrap>
  )
}

const PageWrap = styled(motion.div)`
  position: absolute;
  width: 100%;

  padding: 16px;
  @media (min-width: 375px) {
    padding: 32px;
  }

  @media (min-width: 414px) {
    padding: 48px;
  }

  @media (min-width: 640px) {
    padding: 56px;
  }

  @media (min-width: 768px) {
    padding: 64px;
  }
`;

const PageContent = styled(motion.div)`
  padding-bottom: 12em;
`;

export default Page;