import React from "react";
import styled from 'styled-components';

import { KCLockUp, BoyAndBall, TedLogo, PodcastsIcon, PressIcon } from "./icons-and-logos";
import { clientsList } from "../data/clients";
import { tedVideosList } from "../data/ted-videos";
import { promotionalVideosList } from "../data/promotional-videos";
import { podcastsList } from "../data/podcasts";
import { pressList } from "../data/press";
import { Callout } from "../styled/call-out";
import { GroupedLinks, GroupedLinkItem, GroupedLinkAnchor, GroupedItemTitle, GroupedItemMeta, GroupedLinksTitle, GroupedLinksGroup, GroupedLinksGroupItem } from "../styled/grouped-links";

export const PressKit = () => {
    return (
        <Container>

            <Heading>
            <Lockup>
                <KCLockUp />
            </Lockup>
            </Heading>

            <Callout>
                Since 2004, more than <em>350,000</em> people from <em>200</em>+ corporations, <em>150</em>+ non-profit organizations, and dozens of schools around the world have been inspired by Kevin’s dynamic presentations.
            </Callout>

            <Intro>
                Kevin Carroll travels the world using his masterful story-telling skills to entertain, enlighten, and challenge business leaders and worldwide audiences. Using lessons garnered from the spirit and dynamics of play, Kevin helps them understand how to enliven and enrich their work lives, enhance innovation, and improve team dynamics and interpersonal communication.
            </Intro>

            <Heading>Onstage Clients Include</Heading>
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

            <GroupedLinks>
                {
                    promotionalVideosList.map(function (e, i) {
                        return (
                            <GroupedLinkItem key={i}>
                                {e.groupTitle &&
                                    <GroupedLinksTitle>
                                        {e.groupTitle}
                                    </GroupedLinksTitle>
                                }
                                {e.groupItems &&
                                    <GroupedLinksGroup>
                                        {e.groupItems.map(function (o, j) {
                                            return (
                                                <GroupedLinksGroupItem key={j}>
                                                    {!o.url && o.title &&
                                                        <span>{o.title}</span>
                                                    }
                                                    {o.url && o.title &&
                                                        <a href={o.url}>{o.title}</a>
                                                    }
                                                </GroupedLinksGroupItem>
                                            )
                                        })
                                        }
                                    </GroupedLinksGroup>
                                }
                                {e.url && e.title &&
                                    <GroupedLinkAnchor href={e.url}>
                                        <GroupedItemTitle>{e.title}</GroupedItemTitle>
                                    </GroupedLinkAnchor>
                                }
                                {!e.url && e.title &&
                                    <GroupedItemTitle>{e.title}</GroupedItemTitle>
                                }
                                {e.meta &&
                                    <GroupedItemMeta> ({e.meta})</GroupedItemMeta>
                                }
                            </GroupedLinkItem>
                        )
                    })
                }
            </GroupedLinks>

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
                                {!e.image && e.title &&
                                    <PressTitle>{e.title}</PressTitle>
                                }
                                {e.image && e.title &&
                                    <a href={e.image}><PressTitle>{e.title}</PressTitle></a>
                                }
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
        font-size: 85%;
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

