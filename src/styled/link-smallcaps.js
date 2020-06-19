import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LinkSmallCaps = styled.a`
    font-family: ${props => props.theme.fonts.heading};
    font-size: 0.7894736842em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.red};
`;

export const RouteLinkSmallCaps = styled(Link)`
   font-family: ${props => props.theme.fonts.heading};
    font-size: 0.7894736842em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.red};
`;
