import React from "react";
import styled from 'styled-components';
import AspectBox from "../aspect-box";
import { bottomSpace } from "../../theme/global-styles";

export function FeaturedVideo() {
  return (

    <Wrap>
      <h6>Featured Video</h6>
      <p>Catching Up With Kevin Carroll – A Member Spotlight by First Tech Federal Credit Union</p>
      <VideoContainer>
      <AspectBox>
        <iframe
            id="vimeo_503191219"
            title="Catching Up With Kevin Carroll"
            src="https://player.vimeo.com/video/503191219?color=bdbdbd&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
        />
        <script src="https://player.vimeo.com/api/player.js"></script>
      </AspectBox>
      </VideoContainer>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: ${bottomSpace};
  position: relative;

  & h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding-bottom: 1em;
  }

  & p {
      line-height: 1.3;
      padding-bottom: 1.5em;
  }
`;

const VideoContainer = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

