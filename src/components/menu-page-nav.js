import * as React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import MenuPageLink from "./menu-page-link";


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const SiteNavUL = styled(motion.ul)`
  margin-top: -100px;
`;

const paths = {
    "Home": "/",
    "About": "/about",
    "Coaching": "/coaching",
    "On Stage": "/on-stage",
    "Books": "/books",
}

const MenuPageNav = () => {

    return (
        <SiteNavUL variants={variants}>
            {Object.keys(paths).map((key, i) => (
                <MenuPageLink i={i} key={i} to={paths[key]} title={key} />
            ))}
        </SiteNavUL>
    );
};

export default MenuPageNav;




