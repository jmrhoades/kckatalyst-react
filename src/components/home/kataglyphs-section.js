import React from "react";
import styled from 'styled-components';
import { KataglyphsIcons, ApplePodcastsIcon, SpotifyIcon, GooglePodcastsIcon } from "../header/kataglyphs-icons";
import AspectBox from "../aspect-box";
import { bottomSpace } from "../../theme/global-styles";

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
      
      <h6>Listen</h6>
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

      <h6>Watch</h6>
      <VideoContainer>
      <AspectBox>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          title="KATAGLYPHS"
          src="https://www.youtube-nocookie.com/embed/MJj_gpRJViE?modestbranding=1&fs=1"
          frameBorder="0"
        />
      </AspectBox>
      </VideoContainer>


    </HomePodcast>
  )
}

const HomePodcast = styled.div`
  margin-bottom: ${bottomSpace};
  position: relative;
  text-align: center;

  h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding-bottom: 1em;
  }
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
  margin-left: auto;
  margin-right: auto;
`;

const HomePodcastParagraph = styled.p`
    padding-bottom: 1em;
    text-align: center;
`;

const HomePodcastsLinks = styled.ul`
  margin-bottom: 0em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
`;

const HomePodcastsLinkItem = styled.li`
  margin-bottom: 1em;
  a { 
    display: inline-block;
    text-decoration: none;
    line-height: 40px;
    padding: 0 1em;
    svg {
      width: 29px;
      display: inline-block;
      transform: translateY(9px);
    }
  }
`;

const HomePodcastsLinkTitle = styled.h6`
  padding: 0.25em 0.5em 0;
  line-height: 1.1;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.red};
  @media (min-width: 860px) {
    display: inline-block;
  }
`;

const VideoContainer = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;


