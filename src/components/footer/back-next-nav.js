import React from "react";
import styled from 'styled-components';
import { PageContentPadding } from "../../styled/page-content-width";


import {
    Route,
    Switch,
    Link
} from "react-router-dom";

export function BackNextNav() {
    return (
        <LinksWrap>
        <PageContentPadding>
        <Switch>

            <Route exact path="/">
                <Links backTo="/books" backTitle="Books" nextTo="/about" nextTitle="About" />
            </Route>

            <Route exact path="/about">
                <Links backTo="/" backTitle="Home" nextTo="/coaching" nextTitle="Coaching" />
            </Route>

            <Route exact path="/coaching">
                <Links backTo="/about" backTitle="About" nextTo="/on-stage" nextTitle="On Stage" />
            </Route>

            <Route exact path="/on-stage">
                <Links backTo="/coaching" backTitle="Coaching" nextTo="/books" nextTitle="Books" />
            </Route>

            <Route exact path="/books/a-kids-book-about-belonging">
                <Links backTo="/books" backTitle="Books" nextTo="/books/whats-your-red-rubber-ball" nextTitle="What's Your Red Rubber Ball?!" />
            </Route>

            <Route exact path="/books/whats-your-red-rubber-ball">
                <Links backTo="/books/a-kids-book-about-belonging" backTitle="A Kids Book About Belonging" nextTo="/books/the-red-rubber-ball-at-work" nextTitle="The Red Rubber Ball At Work" />
            </Route>

            <Route exact path="/books/the-red-rubber-ball-at-work">
                <Links backTo="/books/whats-your-red-rubber-ball" backTitle="What's Your Red Rubber Ball?!" nextTo="/books/rules-of-the-red-rubber-ball" nextTitle="Rules of the Red Rubber Ball" />
            </Route>

            <Route exact path="/books/rules-of-the-red-rubber-ball">
                <Links backTo="/books/the-red-rubber-ball-at-work" backTitle="The Red Rubber Ball At Work" nextTo="/" nextTitle="Home" />
            </Route>

            <Route exact path="/books">
                <Links backTo="/on-stage" backTitle="On Stage" nextTo="/books/a-kids-book-about-belonging" nextTitle="A Kids Book About Belonging" />
            </Route>

        </Switch>
        </PageContentPadding>
        </LinksWrap>
    )
}

function Links({ backTo, backTitle, nextTo, nextTitle, ...props }) {
    return (
        <LinksContainer>
            <BackLink to={backTo} title={backTitle} />
            <NextLink to={nextTo} title={nextTitle} />
        </LinksContainer>
    )
}

function BackLink({ to, title, ...props }) {
    return (
        <LinkItemBack>
            <Link to={to}>
                <span>
                    <Arrow rotate={180} />
                </span>
                <span>
                    {title}
                </span>
            </Link>
        </LinkItemBack>
    )
}

function NextLink({ to, title, ...props }) {
    return (
        <LinkItemNext>
            <Link to={to}>
                <span>
                    {title}
                </span>
                <span>
                    <Arrow rotate={0} />
                </span>
            </Link>
        </LinkItemNext>
    )
}

const LinksWrap = styled.div`
    margin-bottom: 3em;
    padding-bottom: 3em;
    padding-top: 3em;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
`;

const LinksContainer = styled.ul`

    
    @media (min-width: 514px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
    }

    li a {
        display: flex;
        flex-direction: row;
        min-height: 80px;
        font-family: ${props => props.theme.fonts.heading};
        font-size: ${props => props.theme.typography.small};
        letter-spacing: 0.05em;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 1.2;
        color: ${props => props.theme.colors.black};
        span {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
`;

const LinkItemBack = styled.li`
    grid-column-start: 1;

    a {
        justify-content: flex-start;

        svg {
            margin-right: 40px;
        }
    }
`;

const LinkItemNext = styled.li`
    grid-column-start: 2;

    a {
        justify-content: flex-end;
        svg {
            margin-left: 40px;
        }
    }
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
