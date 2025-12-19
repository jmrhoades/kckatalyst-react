import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import AspectBox from "../aspect-box";
import { LazyImage } from "../lazy-image";
import { RouteLinkSmallCaps } from "../../styled/smallcaps";


export function OutNow() {
    return (
        <HomeOutNow>
            <HomeOutNowHeader>Out Now</HomeOutNowHeader>
            <HomeOutNowImagesContainer>
                <Link to="/books/a-kids-book-about-belonging">
                    <HomeOutNowImages>
                        <HomeOutNowImageB>
                            <AspectBox ratio={0.7142857143}>
                                <LazyImage src="/images/books/a-kids-book-about-belonging/a-kids-book-about-belonging-kevin.jpg" alt="Kevin Carroll from A Kids Book About Belonging" />
                            </AspectBox>
                        </HomeOutNowImageB>
                        <HomeOutNowImageA>
                            <AspectBox ratio={0.7142857143}>
                                <LazyImage src="/images/books/a-kids-book-about-belonging/a-kids-book-about-belonging-child.jpg" alt="Child from A Kids Book About Belonging" />
                            </AspectBox>
                        </HomeOutNowImageA>
                    </HomeOutNowImages>
                </Link>
            </HomeOutNowImagesContainer>
            <HomeOutNowLink>
                <RouteLinkSmallCaps to="/books/a-kids-book-about-belonging">A Kids Book About Belonging</RouteLinkSmallCaps>
            </HomeOutNowLink>
        </HomeOutNow>
    )
}


const HomeOutNow = styled.section`

`;

const HomeOutNowImagesContainer = styled.div`
  overflow: hidden;
  margin-bottom: 2em;
`;

const HomeOutNowImages = styled.div`
  position: relative;
  left: 50%;
  width: 558px;
  height: 500px;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 668px;
    height: 520px;
    overflow: hidden;
  }
`;

const HomeOutNowImageA = styled.div`
  position: absolute;
  width: 375px;
  height: 268px;
  top: 0;
  left: -125px;
  border: 30px solid ${props => props.theme.colors.white};
  box-sizing: content-box;
  @media (min-width: 768px) {
    left: -80px;
    border-width: 40px;
  }
`;

const HomeOutNowImageB = styled.div`
  position: absolute;
  width: 375px;
  height: 268px;
  bottom: 0;
  right: 0;
`;

const HomeOutNowHeader = styled.h5`

`;

const HomeOutNowLink = styled.div`
  padding: 2em;
  max-width: 544px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
