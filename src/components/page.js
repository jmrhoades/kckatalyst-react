import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';

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
    ease: "anticipate",
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
        { props.children }
      </PageContent>
    </PageWrap>
  )
}

const PageWrap = styled(motion.div)`
  position: absolute;
`;

const PageContent = styled(motion.div)`
  padding: calc(0.5rem + 3vh) calc(0.5rem + 4vw);
`;

export default Page;