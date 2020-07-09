import styled from 'styled-components';
import { bottomSpace } from "../theme/global-styles";

export const GroupedLinks = styled.ul`
    margin-bottom: ${bottomSpace};
    
    @media (min-width: 800px) {
        column-count: 2;
        column-gap: 4em;
    }
`;

export const GroupedLinkItem = styled.li`
    color: ${props => props.theme.colors.black};
    line-height: 1.2;
    margin-bottom: 1.5em;
`;

export const GroupedLinkAnchor = styled.a`
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    span {
        box-shadow: inset 0 -1.5px 0 ${props => props.theme.colors.red};
    }
    &:hover {
        color: ${props => props.theme.colors.red};
    }
`;

export const GroupedItemTitle = styled.span`
 
`;

export const GroupedItemMeta = styled.span`
    font-family: ${props => props.theme.fonts.bodyItalic};
    color: ${props => props.theme.colors.gray};
`

export const GroupedLinksTitle = styled.span`
    display: block;
    padding-bottom: 0.5em;
`;

export const GroupedLinksGroup = styled.ul`
    margin-left: 1em;
`;

export const GroupedLinksGroupItem = styled.li`
    position: relative;
    margin-bottom: 0.5em;
    &:before {
        content: "";
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: ${props => props.theme.colors.red};
        position: absolute;
        left: -12px;
        top: 0.4em;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.black};
        font-family: ${props => props.theme.fonts.body};
        box-shadow: inset 0 -1.5px 0 ${props => props.theme.colors.red};
        &:hover {
            color: ${props => props.theme.colors.red};
        }
    }
}
`;