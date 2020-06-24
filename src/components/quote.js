import React from "react";
import styled from 'styled-components';

export function Quote({ quote, by, ...props }) {
    return (
        <QuoteContainer>
            <QuoteBody>
                “{quote}”
            </QuoteBody>
            <Attribution>
                — {by}
            </Attribution>
        </QuoteContainer>
    )
}

const QuoteContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 5em;
`;

const QuoteBody = styled.div`
    font-family: ${props => props.theme.fonts.bodyItalic};
    font-size:  ${props => props.theme.typography.scale5};
`;

const Attribution = styled.div`
    color: ${props => props.theme.colors.gray};
    padding-top: 1em;

    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    
    padding-bottom: 5px;
    color: ${props => props.theme.colors.red};
    
`;


