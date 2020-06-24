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

const MenuLabelVariants = {
    open: {
        opacity: 0,
        transition: {
            duration: 0.1,
        }
    },
    closed: {
        opacity: 1,
        transition: {
            delay: 0.1,
        }
    }
};

function MenuButton({ open, setOpen, ...props }) {
    const isExpanded = open ? true : false;

    return (
        <Button aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <IconContainer>
                <IconMenu viewBox="0 0 44 44" variants={IconMenuVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                    <line x1="5.5" y1="11.5" x2="38.5" y2="11.5" />
                    <line x1="15.5" y1="21.5" x2="38.5" y2="21.5" />
                    <line x1="5.5" y1="31.5" x2="38.5" y2="31.5" />
                </IconMenu>
                <IconClose viewBox="0 0 44 44" variants={IconCloseVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                    <path d="M10 34L34 10" />
                    <path d="M10 10L34 34" />
                </IconClose>
            </IconContainer>
            <Label variants={MenuLabelVariants} animate={open ? "open" : "closed"} initial={"closed"}>
                Menu
            </Label>
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

    @media (min-width: 768px) {
        width: 88px;
        height: 88px;
    }
`;

const IconContainer = styled.div`
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        stroke-width: 2px;
        stroke-linecap: round;
    }

`;

const IconMenu = styled(motion.svg)` 
    stroke: ${props => props.theme.colors.red};
`;

const IconClose = styled(motion.svg)` 
    stroke: ${props => props.theme.colors.white};
`;

const Label = styled(motion.span)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    color: ${props => props.theme.colors.black};
    visibility: hidden;
    position: absolute;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
    @media (min-width: 414px) {
        visibility: visible;
    }
    @media (min-width: 768px) {
        left: -28px;
    }
`;
