import styled from 'styled-components';

export const Quote = styled.div`
    font-family: ${props => props.theme.fonts.heading};
    font-size: 0.7894736842em;
    line-height: 1;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    border-bottom: 2px solid ${props => props.theme.colors.red};
`;
