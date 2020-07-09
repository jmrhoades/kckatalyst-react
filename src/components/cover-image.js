import React from "react";
import styled from "styled-components";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";

export const CoverImage = ({ratio, src, ...props}) => {
    return (
        <Outer>
        <Container>
            <AspectBox ratio={ratio}>
                <LazyImage src={src} />
            </AspectBox>
        </Container>
        </Outer>
    )
}


const Outer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;
`;

const Container = styled.div`
    position: relative;
    min-width: 600px;
    left: 50%;
    transform: translateX(-50%);
`;