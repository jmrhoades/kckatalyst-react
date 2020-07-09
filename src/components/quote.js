import React from "react";
import styled from 'styled-components';
import { bottomSpace } from "../theme/global-styles";

export function Quote({ quote, by, ...props }) {
    return (
        <QuoteContainer className={props.className}>
            <QuoteBody>
                “{quote}”
            </QuoteBody>
            <QuoteAttribution>
                {by}
            </QuoteAttribution>
        </QuoteContainer>
    )
}

export function TopQuote({ quote, by, ...props }) {
    return (
        <TopQuoteContainer className={props.className}>
            <TopQuoteBody>
                “{quote}”
            </TopQuoteBody>
            {by &&
                <TopQuoteAttribution>
                    {by}
                </TopQuoteAttribution>
            }
        </TopQuoteContainer>
    )
}

export function Testimonial({ quote, by, cite, ...props }) {
    return (
        <TestimonialContainer className={props.className}>
            <TestimonialBody>
                “{quote}”
            </TestimonialBody>
            <TestimonialAttribution>
                {by}
                {cite &&
                    <TestimonialCite>{cite}</TestimonialCite>
                }
            </TestimonialAttribution>
        </TestimonialContainer>
    )
}




const QuoteContainer = styled.figure`
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: ${bottomSpace};
    display: block;
`;

const QuoteBody = styled.blockquote`
    font-family: ${props => props.theme.fonts.bodyItalic};
    padding-bottom: 1em;
`;

const QuoteAttribution = styled.div`
    font-size: ${props => props.theme.typography.small};
    font-family: ${props => props.theme.fonts.heading};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1;
    color: ${props => props.theme.colors.red};
    position: relative;
    padding-left: 1.5em;
    &::before {
        content: "—";
        display: block;
        position: absolute;
        left: 0;
    }
`;




const TopQuoteContainer = styled(QuoteContainer)`
    max-width: 100%;
    text-align: center;
`;

const TopQuoteBody = styled(QuoteBody)`
    font-size:  ${props => props.theme.typography.scale5};
`;

const TopQuoteAttribution = styled(QuoteAttribution)`
    &::before {
        content: "—";
        display: inline-block;
        position: relative;
        margin-left: -2em;
        padding-right: 0.5em;
        
    }
`;



const TestimonialContainer = styled(QuoteContainer)`
   
`;

const TestimonialBody = styled(QuoteBody)`
    
`;

const TestimonialAttribution = styled(QuoteAttribution)`
    
`;

const TestimonialCite = styled.cite`
    display: block;
    color: ${props => props.theme.colors.black};
    padding-top: 0.25em;
    max-width: 600px;
    line-height: 1.2;
`;


