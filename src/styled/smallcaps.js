import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SmallCapsHeading = styled.h6`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    color: ${props => props.theme.colors.black};
    margin-bottom: 1em;
`;

export const LinkSmallCaps = styled.a`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    box-shadow: inset 0 -2.5px 0 ${props => props.theme.colors.red};
    text-decoration: none;

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.red};
        outline-offset: 2px;
    }
`;

export const RouteLinkSmallCaps = styled(Link)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    box-shadow: inset 0 -2.5px 0 ${props => props.theme.colors.red};
    text-decoration: none;

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.red};
        outline-offset: 2px;
    }
`;
