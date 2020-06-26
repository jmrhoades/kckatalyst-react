import React from "react";
import styled from 'styled-components';

export function Testimonial({ quote, by, cite, ...props }) {
    return (
        <Container>
            <QuoteBody>
                “{quote}”
            </QuoteBody>
            <Attribution>
                &mdash; {by}
                {cite &&
                    <Cite>, {cite}</Cite>
                }
            </Attribution>
        </Container>
    )
}

const Container = styled.figure`
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 5em;
`;

const QuoteBody = styled.blockquote`
    font-family: ${props => props.theme.fonts.bodyItalic};
    font-size:  ${props => props.theme.typography.scale5};
`;

const Attribution = styled.figcaption`
    color: ${props => props.theme.colors.gray};
    padding-top: 1em;
    font-size: ${props => props.theme.typography.small};
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    
    padding-bottom: 5px;
    color: ${props => props.theme.colors.red};
    
`;

const Cite = styled.cite`

`;