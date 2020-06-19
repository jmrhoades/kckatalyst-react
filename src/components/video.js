import React from "react";
import styled from 'styled-components';

export function Video({ poster, src, ...props }) {
    return (
        <VideoContainer>
            <video controls preload="metadata" poster={poster}>
                <source src={src} type="video/mp4" />
            </video>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 5em;
`;
