import styled from 'styled-components';
import { Link } from "react-router-dom";

const width = "180px";

export const OutlineLink = styled.a`
    display: inline-block;
    position: relative;
    width: ${width};
    line-height: 1;
    text-align: center;
    padding: 14px 0 12px;
   
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    
    color: ${props => props.theme.colors.red};
    border: 2px solid ${props => props.theme.colors.red};

    &:hover, &:focus-visible {
        background-color: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.red};
        outline-offset: 2px;
    }
`;

export const OutlineRouterLink = styled(Link)`
    display: block;
    position: relative;
    line-height: 1;
    text-align: center;
    padding: 18px 0 16px;
    text-decoration: none;
    
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    
    color: ${props => props.theme.colors.black};
    border: 2px solid ${props => props.theme.colors.red};

    &:hover, &:focus-visible {
        background-color: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};
    }

    &:focus-visible {
        outline: 2px solid ${props => props.theme.colors.red};
        outline-offset: 2px;
    }
`;