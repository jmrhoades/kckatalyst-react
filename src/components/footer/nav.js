import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export function BackNextNav() {
    return (
        <LinksContainer>
            <BackLink to="/books" title="Books" />
            <NextLink to="/books" title="Books" />
        </LinksContainer>
    )
}

const LinksContainer = styled.ul`
    
`;

function BackLink({ to, title, ...props }) {
    return (
        <LinkItemBack>
            <Arrow rotate={180} />
            <Link to={to}>{title}</Link>
        </LinkItemBack>
    )
}

const LinkItemBack = styled.li`
    
`;

function NextLink({ to, title, ...props }) {
    return (
        <LinkItemNext>
            <Link to={to}>{title}</Link>
            <Arrow rotate={0} />
        </LinkItemNext>
    )
}

const LinkItemNext = styled.li`
    
`;

export function Arrow({ rotate }) {
    return (
        <ArrowSVG viewBox="0 0 48 48" rotate={rotate}>
            <line x1="37" y1="14" x2="47" y2="24" />
            <line x1="47" y1="24" x2="37" y2="34" />
            <line x1="47" y1="24" x2="1.5" y2="24" />
        </ArrowSVG>
    )
}

export const ArrowSVG = styled.svg`
    fill: none;
    width: 48px;
    height: 48px;
    stroke-width: 2px;
    stroke: ${props => props.theme.colors.red};
    transform: rotate(${props => props.rotate}deg);
    stroke-linecap: round;
    stroke-linejoin: round;
`;
