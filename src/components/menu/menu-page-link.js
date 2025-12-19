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

const SiteNavLI = styled(motion.li)`
  a {
    display: block;
    text-align: center;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.body};
    text-decoration: none;

    &:focus-visible {
      outline: 2px solid ${props => props.theme.colors.white};
      outline-offset: 2px;
    }
  }
  font-size: ${props => props.theme.typography.scale5};
  line-height: 2.2;
`;

const MenuPageLink = (props) => {

  return (
    <SiteNavLI
      variants={variants}
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 1.0 }}
    >
      {props.anchor === false &&
        <Link to={props.to}>{props.title}</Link>
      }
      {props.anchor &&
        <a href={props.to}>{props.title}</a>
      }
    </SiteNavLI>
  );
};

export default MenuPageLink;




