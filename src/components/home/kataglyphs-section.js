import React from "react";
import styled from 'styled-components';
import { KataglyphsIcons, ApplePodcastsIcon, SpotifyIcon, GooglePodcastsIcon } from "../kataglyphs-icons";
import Home from "../../pages/home";



export function KataglyphsSection() {
    return (

        <HomePodcast>
            <HomePodcastOutline />

            <HomePodcastHeader>
                Limited Podcast Series!
            </HomePodcastHeader>

            <HomePodcastIconLink>
                <a href="http://kataglyphs.com">
                    <KataglyphsIcons />
                </a>
            </HomePodcastIconLink>

            <HomePodcastParagraph>
                <a href="http://kataglyphs.com">KATAGLYPHS</a> is a auditory + visual “TIME CAPSULE” filled with the lifelong lessons + unexpected wisdom that I learned from the community of human catalysts that raised me.
            </HomePodcastParagraph>

            

            <HomePodcastsLinks>
                <HomePodcastsLinkItem>
                    <a href="https://podcasts.apple.com/us/podcast/kataglyphs-podcast/id1504525762?ls=1">
                        <ApplePodcastsIcon />
                        <HomePodcastsLinkTitle><span>Apple Podcasts</span></HomePodcastsLinkTitle>
                    </a>
                </HomePodcastsLinkItem>
                <HomePodcastsLinkItem>
                    <a href="https://podcasts.google.com/?feed=aHR0cDovL2thdGFnbHlwaHMubGlic3luLmNvbS9yc3M&ved=0CAAQ4aUDahcKEwjw_8Hqp83oAhUAAAAAHQAAAAAQFA">
                        <GooglePodcastsIcon />
                        <HomePodcastsLinkTitle><span>Google Podcasts</span></HomePodcastsLinkTitle>
                    </a>
                </HomePodcastsLinkItem>
                <HomePodcastsLinkItem>
                    <a href="https://open.spotify.com/show/2TOUhE6qc0C7yOzB2Xbe8d">
                        <SpotifyIcon />
                        <HomePodcastsLinkTitle><span>Spotify</span></HomePodcastsLinkTitle>
                    </a>
                </HomePodcastsLinkItem>
            </HomePodcastsLinks>

           

        </HomePodcast>
    )
}



const HomePodcast = styled.div`
  margin-bottom: 6em;
  position: relative;
`;

const HomePodcastOutline = styled.div`
    position: absolute;
    top: -2em;
    bottom: -2em;
    left: -2em;
    right: -2em;
    border: 2px solid ${props => props.theme.colors.gray};
    pointer-events: none;
    display: none;
`;

const HomePodcastHeader = styled.h5`
  margin-bottom: 1em;
`;

const HomePodcastIconLink = styled.div`
  max-width: 344px;
  margin-bottom: 2em;
`;

const HomePodcastParagraph = styled.p`
    padding-bottom: 1em;
`;

const HomePodcastsLinks = styled.ul`
  margin-bottom: 2em;

  @media (min-width: 640px) {
    display: flex;
    justify-content: flex-start;
  }

`;

const HomePodcastsLinkItem = styled.li`
  margin-bottom: 1em;
  margin-right: 1em;
  a { 
    display: flex;
    text-decoration: none;
    line-height: 40px;
    vertical-align: middle;
    svg {
      width: 29px;
    }
  }
`;

const HomePodcastsLinkTitle = styled.h6`
  display: inline-block;
  padding: 0 0.5em;
  span {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    
  }
`;




