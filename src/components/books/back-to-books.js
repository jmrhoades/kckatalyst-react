import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export function BackToBooks() {
    return (
        <Outer to="/books">
            <Arrow viewBox="0 0 24 14">
                <path d="M8 13L2 7L8 1" />
                <path d="M2 7H24" />
            </Arrow>
            <Message>
                Books
            </Message>
        </Outer>
    )
}

const Outer = styled(Link)`
    position: relative;
    display: inline-block;
    margin-bottom: 1em;
    line-height: 1;
    text-decoration: none;
`;

const Message = styled.span`
    padding-left: 40px;
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.red};
`;


const Arrow = styled.svg`
    width: 24px;
    height: 14px;
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    fill: transparent;
    stroke-width: 2px;
    stroke: ${props => props.theme.colors.red}
`;

 
