import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";

const IconMenuVariants = {
    open: {
        scale: 0,
        opacity: 0,
    },
    closed: {
        scale: 1,
        opacity: 1,
    }
};

const IconCloseVariants = {
    open: {
        scale: 1,
        opacity: 1,
    },
    closed: {
        scale: 0,
        opacity: 0,
    }
};

function MenuButton({ open, setOpen, ...props }) {
    const isExpanded = open ? true : false;

    return (
        <Button aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>

            <IconMenu viewBox="0 0 44 44" variants={IconMenuVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                <line x1="5.5" y1="11.5" x2="38.5" y2="11.5" />
                <line x1="5.5" y1="21.5" x2="38.5" y2="21.5" />
                <line x1="5.5" y1="31.5" x2="38.5" y2="31.5" />
            </IconMenu>

            <IconClose viewBox="0 0 44 44" variants={IconCloseVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                <path d="M10 34L34 10" />
                <path d="M10 10L34 34" />
            </IconClose>

        </Button >
    )
}


export default MenuButton;


const Button = styled.button`
    width: 64px;
    height: 64px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
`;

const IconMenu = styled(motion.svg)` 
    width: 44px;
    height: 44px;
    position: absolute;
    top: 10px;
    left: 10px;
    stroke: ${props => props.theme.colors.red};
    stroke-width: 3px;
    stroke-linecap: round;
`;

const IconClose = styled(motion.svg)` 
    width: 44px;
    height: 44px;
    position: absolute;
    top: 10px;
    left: 10px;
    stroke: ${props => props.theme.colors.white};
    stroke-width: 3px;
    stroke-linecap: round;
`;

