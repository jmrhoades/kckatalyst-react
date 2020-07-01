import React from "react";
import styled from 'styled-components';

import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { KCLockUp, BoyAndBall, TedLogo, PodcastsIcon, PressIcon } from "./icons-and-logos";
import { clientsList } from "../data/clients";
import { tedVideosList } from "../data/ted-videos";
import { promotionalVideosList } from "../data/promotional-videos";
import { podcastsList } from "../data/podcasts";
import { pressList } from "../data/press";

export const PressKit = () => {
    return (
        <Container>

            <Lockup>
                <KCLockUp />
            </Lockup>

            <Callout>
                Since 2004, more than <em>350,000</em> people from <em>200</em>+ corporations, <em>150</em>+ non-profit organizations, and dozens of schools around the world have been inspired by Kevin’s dynamic presentations.
            </Callout>

            <Intro>
                Kevin Carroll travels the world using his masterful story-telling skills to entertain, enlighten, and challenge business leaders and worldwide audiences. Using lessons garnered from the spirit and dynamics of play, Kevin helps them understand how to enliven and enrich their work lives, enhance innovation, and improve team dynamics and interpersonal communication.
            </Intro>

            <Callout>
                <em>Sport is universal,</em> an inclusive international language teaching leadership, cooperation, and exemplary behavior in both victory and defeat.
            </Callout>

            <Heading>SPORT FOR SOCIAL CHANGE</Heading>
            <SportForChangeParagraph>Kevin has traveled the world sharing his message of the Red Rubber Ball and the power of play. When people hear Kevin’s message, they often want others to know what sport and play look like in their culture, on their playgrounds. People have shared stories of their own Red Rubber Balls and the actual balls from their playgrounds. People want their story to become a part of the journey, knowing that Kevin’s ball collection traverses the world’s longitudes and latitudes.</SportForChangeParagraph>
            <SportForChangeParagraph>Kevin has dedicated his life to advancing sport and play as vehicles for social change. Among his many public speaking engagements, Kevin was invited to address the United Nations at the launch of its Year of Sports for Development and Peace in 2005. He was subsequently appointed as a Special Advisor to the humanitarian group Right to Play, which designs global sport and play programs for children and communities affected by war, poverty, and disease. Kevin is also involved with The Homeless World Cup, a program for socially-excluded homeless people and people living in poverty, promoting lasting change through the development of street soccer worldwide and a top quality, well-recognized annual tournament.</SportForChangeParagraph>

            <BallsGrid>
                <AspectBox ratio={1}>
                    <LazyImage src="/images/about/balls-grid-380.jpg" />
                </AspectBox>
            </BallsGrid>

            <Heading>Clients Include</Heading>
            <Clients>
                {
                    clientsList.map(function (e, i) {
                        return <Client key={i}>{e}</Client>
                    })
                }
            </Clients>

            <Heading>
                <TedLogo />
                &amp; Kevin Carroll
            </Heading>
            <TedVideos>
                {
                    tedVideosList.map(function (e, i) {
                        return (
                            <TedVideo key={i}>
                                <VideoTitle href={e.url}><span>{e.title}</span></VideoTitle>
                                <VideoYear>{e.year}</VideoYear>
                            </TedVideo>
                        )
                    })
                }
            </TedVideos>

            <Heading>
                <BoyAndBall />
                PROMOTIONAL VIDEOS &amp; IMAGE GALLERIES
            </Heading>
            <PromotionalVideos>
                {
                    promotionalVideosList.map(function (e, i) {
                        return (
                            <PromotionalVideo key={i}>
                                {e.groupTitle &&
                                    <PromotionalVideoGroupTitle>
                                        {e.groupTitle}
                                    </PromotionalVideoGroupTitle>
                                }
                                {e.groupItems &&
                                    <PromotionalVideoGroup>
                                        {e.groupItems.map(function (o, j) {
                                            return (
                                                <PromotionalVideoGroupItem key={j}>
                                                    {!o.url && o.title &&
                                                        <span>{o.title}</span>
                                                    }
                                                    {o.url && o.title &&
                                                        <a href={o.url}>{o.title}</a>
                                                    }
                                                </PromotionalVideoGroupItem>
                                            )
                                        })
                                        }
                                    </PromotionalVideoGroup>
                                }
                                {e.url && e.title &&
                                    <PromotionalVideoLink href={e.url}>
                                        <PromotionalVideoTitle>{e.title}</PromotionalVideoTitle>
                                    </PromotionalVideoLink>
                                }
                                {!e.url && e.title &&
                                    <PromotionalVideoTitle>{e.title}</PromotionalVideoTitle>
                                }
                                {e.meta &&
                                    <PromotionalMeta> ({e.meta})</PromotionalMeta>
                                }
                            </PromotionalVideo>
                        )
                    })
                }
            </PromotionalVideos>

            <Heading>
                <PodcastsIcon />
                PODCASTS
            </Heading>
            <PromotionalVideos>
                {
                    podcastsList.map(function (e, i) {
                        return (
                            <PromotionalVideo key={i}>
                                {e.groupTitle &&
                                    <PromotionalVideoGroupTitle>
                                        {e.groupTitle}
                                    </PromotionalVideoGroupTitle>
                                }
                                {e.groupItems &&
                                    <PromotionalVideoGroup>
                                        {e.groupItems.map(function (o, j) {
                                            return (
                                                <PromotionalVideoGroupItem key={j}>
                                                    {!o.url && o.title &&
                                                        <span>{o.title}</span>
                                                    }
                                                    {o.url && o.title &&
                                                        <a href={o.url}>{o.title}</a>
                                                    }
                                                </PromotionalVideoGroupItem>
                                            )
                                        })
                                        }
                                    </PromotionalVideoGroup>
                                }
                                {e.url && e.title &&
                                    <PromotionalVideoLink href={e.url}>
                                        <PromotionalVideoTitle>{e.title}</PromotionalVideoTitle>
                                    </PromotionalVideoLink>
                                }
                                {!e.url && e.title &&
                                    <PromotionalVideoTitle>{e.title}</PromotionalVideoTitle>
                                }
                                {e.meta &&
                                    <PromotionalMeta> ({e.meta})</PromotionalMeta>
                                }
                            </PromotionalVideo>
                        )
                    })
                }
            </PromotionalVideos>

            <Heading>
                <PressIcon />
                PRESS ARTICLES
            </Heading>
            <PressArticles>
                {
                    pressList.map(function (e, i) {
                        return (
                            <PressArticle key={i}>
                                <PressName>{e.name}</PressName>
                                <PressTitle>{e.title}</PressTitle>
                            </PressArticle>
                        )
                    })
                }
            </PressArticles>

        </Container>
    )
}

const Container = styled.div`
    li {
        font-size: ${props => props.theme.typography.small};
    }
`;

const Lockup = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
`;

const Callout = styled.div`
  font-size: ${props => props.theme.typography.scale6};
  color: ${props => props.theme.colors.red};
  text-align: center;
  max-width: 510px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
  em {
    font-size: 150%;
    line-height: 1;
  }
`;

const Heading = styled.h5`
    font-family: ${props => props.theme.fonts.body};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.typography.scale6};
    padding-bottom: 1em;
    border-bottom: 2px dashed ${props => props.theme.colors.gray};
    margin-bottom: 2em;
`;

const BallsGrid = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    margin-bottom: 4em;
`;

const SportForChangeParagraph = styled.p`
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
`;

const Clients = styled.ul`
    column-count: 2;
    column-gap: 2em;
    margin-bottom: 5em;
    @media (min-width: 640px) {
        column-count: 3;
    }
`;

const Client = styled.li`
    text-align: center;
`;

const Intro = styled.p`
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
    padding-bottom: 5em;  
`;

const TedVideos = styled.ul`
    margin-bottom: 5em;
    @media (min-width: 640px) {
        column-count: 2;
        column-gap: 4em;
    }
`;

const TedVideo = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    color: ${props => props.theme.colors.black};
`;

const VideoTitle = styled.a`
    padding-right: 3em;
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

const VideoYear = styled.span`
    color: ${props => props.theme.colors.gray};
`;




const PromotionalVideos = styled.ul`
    margin-bottom: 5em;
    
    @media (min-width: 800px) {
        column-count: 2;
        column-gap: 4em;
    }
`;

const PromotionalVideo = styled.li`
    color: ${props => props.theme.colors.black};
    line-height: 1.2;
    margin-bottom: 1.5em;
`;

const PromotionalVideoLink = styled.a`
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

const PromotionalVideoTitle = styled.span`
 
`;

const PromotionalMeta = styled.span`
    font-family: ${props => props.theme.fonts.bodyItalic};
    color: ${props => props.theme.colors.gray};
`

const PromotionalVideoGroupTitle = styled.span`
    display: block;
    padding-bottom: 0.5em;
`;

const PromotionalVideoGroup = styled.ul`
    margin-left: 1em;
`;

const PromotionalVideoGroupItem = styled.li`
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


const PressArticles = styled.ul`
    margin-bottom: 5em;
    @media (min-width: 640px) {
        column-count: 2;
        column-gap: 4em;
    }
`;

const PressArticle = styled.li`
    display: grid;
    grid-template-columns: 4em 1fr;
    column-gap: 4em;
    margin-bottom: 1em;
    color: ${props => props.theme.colors.black};
    line-height: 1.2;
`;

const PressName = styled.p`
    padding-bottom: 0;
`;

const PressTitle = styled.p`
    padding-bottom: 0;
    font-family: ${props => props.theme.fonts.bodyItalic};
    color: ${props => props.theme.colors.gray};
`;

