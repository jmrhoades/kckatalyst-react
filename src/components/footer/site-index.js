import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LinkSmallCaps } from "../../styled/smallcaps";

export function SiteIndex() {
    return (
        <Index>
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
                <NavItem><Link to="/onstage">Onstage</Link></NavItem>
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
        </Index>
    )
}

const Index = styled.footer`
    
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(3, 1fr);

    @media (min-width: 514px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (min-width: 960px) {
        grid-template-rows: repeat(3, auto);
        grid-template-columns: auto auto auto auto;
    }
`;

const Question = styled.div`

    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 4;

    @media (min-width: 514px) {
        grid-column-end: 5;
    }

    @media (min-width: 960px) {
        grid-column-end: 2;
        padding-right: 40px;
    }

    h4 {
        color: ${props => props.theme.colors.black};
        line-height: 1.25;
        padding-bottom: 48px;
        text-align: left;
        @media (min-width: 1114px) {
            line-height: 2.2em;
            padding-bottom: 0;
        }
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
    grid-column-end: 4;
    text-align: center;
    padding-top: 48px;

    @media (min-width: 514px) {
        grid-row: 2;
        grid-column-end: 2;
        text-align: left;
        padding-top: 0;
    }

    @media (min-width: 960px) {
        grid-row: 3;
        grid-column-end: 5;
        text-align: center;
        padding-top: 48px;
    }
`;

const NavListA = styled.ul`
    grid-row: 2;
    grid-column: 1;

    @media (min-width: 514px) {
        grid-column: 2;
    }

    @media (min-width: 960px) {
        grid-row: 1;
    }
`;

const NavListB = styled.ul`
    grid-row: 2;
    grid-column: 2;

    @media (min-width: 514px) {
        grid-column: 3;
    }

    @media (min-width: 960px) {
        grid-row: 1;
    }
`;

const NavListC = styled.ul`
    grid-row: 2;
    grid-column: 3;

    @media (min-width: 514px) {
        grid-column: 4;
    }

    @media (min-width: 960px) {
        grid-row: 1;
    }
`;

const NavItem = styled.li`
        
    @media (min-width: 514px) {
        padding-left: 30px;
    }
 
    a {
        font-family: ${props => props.theme.fonts.body};
        color: ${props => props.theme.colors.black};
        font-size: ${props => props.theme.typography.small};
        line-height: 200%;
        position: relative;
        text-decoration: none;

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
    grid-column-end: 5;
    text-align: center;
    font-size: ${props => props.theme.typography.xsmall};
    color: ${props => props.theme.colors.gray};
    padding-top: 64px;
    padding-bottom: 16px;
`;


