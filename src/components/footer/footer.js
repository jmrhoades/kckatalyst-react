import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LinkSmallCaps } from "../../styled/link-smallcaps";

function Footer() {
    return (
        <Foot>
            <Question>
                <h4>What’s <em>your</em> red rubber ball?!</h4>
            </Question>
            <LetsTalkContainer>
                <LinkSmallCaps href="mailto:kim@kevincarrollkatalyst.com">Let’s Talk</LinkSmallCaps>
            </LetsTalkContainer>
            <NavListA>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/about">About</Link></NavItem>
                <NavItem><Link to="/coaching">Coaching</Link></NavItem>
            </NavListA>
            <NavListB>
                <NavItem><Link to="/on-stage">On Stage</Link></NavItem>
                <NavItem><Link to="/books">Books</Link></NavItem>
                <NavItem><a href="mailto:kim@kevincarrollkatalyst.com">Contact</a></NavItem>
            </NavListB>
            <NavListC>
                <NavItem><a href="https://twitter.com/kckatalyst">Twitter</a></NavItem>
                <NavItem><a href="https://instagram.com/kckatalyst">Instagram</a></NavItem>
                <NavItem><a href="https://www.linkedin.com/in/kevincarrollkatalyst/">LinkedIn</a></NavItem>
            </NavListC>
            <Copyright>
                Copyright Kevin Carroll 2020. All rights reserved.
            </Copyright>
        </Foot>
    )
}

const Foot = styled.footer`
    
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto 1fr auto 1fr auto;

    max-width: 1280px;
    margin: 0 auto;

    @media (min-width: 514px) {
        grid-template-columns: auto auto auto auto auto auto;
    }
    
    @media (min-width: 980px) {
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto auto auto;
    }
`;

const Question = styled.div`

    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 6;


    @media (min-width: 514px) {
        grid-row: 1;
        grid-column-end: 7;
    }

    @media (min-width: 980px) {
        grid-column-end: 3;
        padding-top: 28px;
    }

    h4 {
        color: ${props => props.theme.colors.black};
        line-height: 1.25;
        padding-bottom: 48px;
    }

    em {
        color: ${props => props.theme.colors.red};
        font-style: normal;
        font-family: ${props => props.theme.fonts.bodyItalic};
    }
`;

const LetsTalkContainer = styled.div`
    grid-row: 3;
    grid-column-start: 1;
    grid-column-end: 6;
    text-align: center;
    padding-top: 48px;

    @media (min-width: 514px) {
        grid-row: 2;
        grid-column-end: 2;
        text-align: left;
        padding-top: 0;
    }

    @media (min-width: 980px) {
        grid-row: 3;
        grid-column-end: 6;
        text-align: center;
        padding-top: 48px;
    }
`;

const NavListA = styled.ul`
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 2;

    @media (min-width: 514px) {
        grid-column-start: 4;
        grid-column-end: 5;
    }

    @media (min-width: 980px) {
        grid-row: 1;
        grid-column-start: 3;
        grid-column-end: 4;
    }
`;

const NavListB = styled.ul`
    grid-row: 2;
    grid-column-start: 3;
    grid-column-end: 4;

    @media (min-width: 514px) {
        grid-column-start: 5;
        grid-column-end: 6;
    }

    @media (min-width: 980px) {
        grid-row: 1;
        grid-column-start: 4;
        grid-column-end: 5;
    }
`;

const NavListC = styled.ul`
    grid-row: 2;
    grid-column-start: 5;

    @media (min-width: 514px) {
        grid-column-start: 6;
        grid-column-end: 7;
    }

    @media (min-width: 980px) {
        grid-row: 1;
        grid-column-start: 5;
        grid-column-end: 6;
    }
`;

const NavItem = styled.li`
    a {
        font-family: ${props => props.theme.fonts.body};
        color: ${props => props.theme.colors.black};
        font-size: 0.7894736842em;
        line-height: 200%;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            background-color: ${props => props.theme.colors.red};
            height: 2px;
            transform: scaleX(0);
            opacity: 0;
            transition: all ease-in-out 0.2s;
            transform-origin: 0 0;
        }

        &:hover {
            &::after {
                opacity: 1;
                transform: scaleX(1.0);
            }
        }
    }
`;

const Copyright = styled.div`
    grid-row: 4;
    grid-column-start: 1;
    grid-column-end: 6;
    text-align: center;
    font-size: 0.6315789474em;
    color: ${props => props.theme.colors.gray};
    padding-top: 64px;
    padding-bottom: 16px;
`;

export default Footer;
