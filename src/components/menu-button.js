import React from "react";
import styled from 'styled-components';

function MenuButton({ open, setOpen, ...props }) {
    const isExpanded = open ? true : false;

    return (
    <Button aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <div>
            <span />
            <span />
            <span />
        </div>
    </Button>
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

    div {
        width: 33px;
        position: relative;
        top: 2px;
        left: 10px;
    }

  span {
    display: block;
    height: 3px;
    margin-bottom: 6px;
    position: relative;
    background: ${props => props.open ? props.theme.colors.white : props.theme.colors.red};
    border-radius: 3px;
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;

    :nth-child(1) {
        transform-origin: 100% 0%;
        transform: ${({ open }) => open ? "rotate(-45deg) translate(0, -3px)" : "rotate(0) translate(0, 0)"};
    }

    :nth-child(2) {
        transform-origin: 100% 50%;
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? "scale(0, 1.0)" : "scale(1.0, 1.0)"};
    }

    :nth-child(3) {
        transform-origin: 100% 100%;
        transform: ${({ open }) => open ? "rotate(45deg) translate(0, 3px)" : "rotate(0deg) translate(0, 0)"};
    }
  }
`;

