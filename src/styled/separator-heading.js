import styled from 'styled-components';

export const SeparatorHeading = styled.h5`
    font-family: ${props => props.theme.fonts.body};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.typography.scale6};
    padding-bottom: 1em;
    border-bottom: 2px dashed ${props => props.theme.colors.gray};
    margin-bottom: 2em;
`;
