import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';

import { Footer } from "./footer/footer";


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
      transition: {
        duration: 0.0001,
      }
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
      key={props.key}
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
`;

const PageContent = styled(motion.div)`
  padding-top: 10em;
  padding-bottom: 4em;
`;

export default Page;