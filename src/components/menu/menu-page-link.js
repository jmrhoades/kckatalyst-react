import * as React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const SiteNavA = styled(Link)`
    font-size: 40px;
    display: block;
    text-align: center;
    line-height: 2.2;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.body};
    text-decoration: none;
`;

const MenuPageLink = (props) => {
  
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 1.0 }}
    >
      <SiteNavA to={props.to}>{props.title}</SiteNavA>
    </motion.li>
  );
};

export default MenuPageLink;




