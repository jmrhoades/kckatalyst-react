import React, { useEffect } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";

import MenuPageNav from "./menu-page-nav";
import MenuSocialNav from "./menu-social-nav";

const variants = {
    open: {
      x: "0%",
    },
    closed: {
      x: "100%",
    }
};

const transition = {
    type: "spring",
    stiffness: 400,
    damping: 40
}

function Menu({ open, setOpen, ...props }) {

    const isHidden = open ? true : false;
 
    function escapeKeyHandler(event) {
        if (event.keyCode === 27 && !isHidden) {
            setOpen(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('keydown', escapeKeyHandler);
        return () => {
            window.removeEventListener('keydown', escapeKeyHandler);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <MenuContainer open={open} aria-hidden={!isHidden} {...props}>
            
            <MenuOverlay onClick={() => setOpen(!open)} />
            
            <SiteNav
                aria-label="Site Navigation" 
                open={open}
                variants={variants}
                animate={open ? "open" : "closed"}
                initial={"closed"}
                transition={transition}
            >
                <MenuPageNav />
                <MenuSocialNav />

            </SiteNav>
        </MenuContainer>
    )
}

export default Menu;

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    pointer-events: ${props => props.open ? "auto" : "none"};
    z-index: 3;
`;

const MenuOverlay = styled.div`    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;        
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
`;

const SiteNav = styled(motion.nav)`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 375px;
    height: 100%;
    background-color: ${props => props.theme.colors.red};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

