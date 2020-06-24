import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { PageContentWidth } from "../styled/page-content-width";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { KataglyphsIcons, ApplePodcastsIcon, SpotifyIcon, GooglePodcastsIcon } from "../components/kataglyphs-icons";
import { Quote } from "../components/quote";
import { RouteLinkSmallCaps } from "../styled/link-smallcaps";

function Home(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll Katalyst</title>
      </Helmet>

      <PageContentWidth>


        <HomeIntroPortrait>
          <AspectBox ratio={1.5}>
            <LazyImage src="/images/kevincarroll-portrait-3.jpg" />
          </AspectBox>
        </HomeIntroPortrait>

        <HomeIntroParagraph>
          <p>Kevin Carroll is the acclaimed author of <Link to="/books/rules-of-the-red-rubber-ball">Rules of the Red Rubber Ball</Link>, <Link to="/books/whats-your-red-rubber-ball">What’s Your Red Rubber Ball?!</Link>, <Link to="/books/the-red-rubber-ball-at-work">The Red Rubber Ball at Work</Link> and <Link to="/books/the-red-rubber-ball-at-work">A Kids Book About Belonging</Link>. He travels the globe consulting and speaking about the role, value and importance of play in life; having a lifelong learner mindset; advancing the human condition in a positive way.</p>
        </HomeIntroParagraph>


        <HomePodcast>

          <HomePodcastHeader>
            Limited Podcast Series!
          </HomePodcastHeader>

          <HomePodcastIconLink>
            <a href="http://kataglyphs.com">
              <KataglyphsIcons />
            </a>
          </HomePodcastIconLink>

          <HomeIntroQuote>
            <Quote
              quote="My actions may seem small but, their collective impact will be great!"
              by="anonymous"
            />
          </HomeIntroQuote>

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

        <HomeBooksList>
          <HomeBooksListHeader>My Books</HomeBooksListHeader>
          <HomeBooksListContainer>
            <HomeBooksListLink to="/books/rules-of-the-red-rubber-ball">
              <AspectBox ratio={1}>
                <LazyImage src="/images/booklist-rules-of-the-red-rubber-ball.jpg" />
              </AspectBox>
            </HomeBooksListLink>
            <HomeBooksListLink to="/books/whats-your-red-rubber-ball">
              <AspectBox ratio={1}>
                <LazyImage src="/images/booklist-whats-your-red-rubber-ball.jpg" />
              </AspectBox>
            </HomeBooksListLink>
            <HomeBooksListLink to="books/the-red-rubber-ball-at-work">
              <AspectBox ratio={1}>
                <LazyImage src="/images/booklist-the-red-rubber-ball-at-work.jpg" />
              </AspectBox>
            </HomeBooksListLink>
            <HomeBooksListLink to="books/a-kids-book-about-belonging">
              <AspectBox ratio={1}>
                <LazyImage src="/images/booklist-a-kids-book-about-belonging.jpg" />
              </AspectBox>
            </HomeBooksListLink>
          </HomeBooksListContainer>
        </HomeBooksList>

        <HomeOutNow>
          <HomeOutNowHeader>Out Now</HomeOutNowHeader>
          <HomeOutNowImagesContainer>
            <Link to="/books/a-kids-book-about-belonging">
              <HomeOutNowImages>
                <HomeOutNowImageB>
                  <AspectBox ratio={0.7142857143}>
                    <LazyImage src="/images/a-kids-book-about-belonging-kevin.jpg" />
                  </AspectBox>
                </HomeOutNowImageB>
                <HomeOutNowImageA>
                  <AspectBox ratio={0.7142857143}>
                    <LazyImage src="/images/a-kids-book-about-belonging-child.jpg" />
                  </AspectBox>
                </HomeOutNowImageA>
              </HomeOutNowImages>
            </Link>
          </HomeOutNowImagesContainer>
          <HomeOutNowLink>
            <RouteLinkSmallCaps to="/books/a-kids-book-about-belonging">A Kids Book About Belonging</RouteLinkSmallCaps>
          </HomeOutNowLink>
        </HomeOutNow>

      </PageContentWidth>
    </Page >
  )
}

const HomeIntroPortrait = styled.div`
  max-width: 544px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;
`;

const HomeIntroParagraph = styled.div`
  margin-bottom: 4em;
`;

const HomePodcast = styled.div`
  margin-bottom: 9em;
`;

const HomePodcastHeader = styled.h5`
  margin-bottom: 1em;
`;

const HomePodcastIconLink = styled.div`
  max-width: 544px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  padding: 0 1em;
`;

const HomeIntroQuote = styled.div`
  text-align: center;
  margin-bottom: -3em;
`;

const HomePodcastParagraph = styled.p`
  padding-bottom: 2em;
`;

const HomePodcastsLinks = styled.ul`
  margin-bottom: 3em;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }

`;

const HomePodcastsLinkItem = styled.li`
  margin-bottom: 1em;
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
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0 0 5px;
    color: ${props => props.theme.colors.black};
    padding: 0 0 5px;
    border-bottom: 2px solid ${props => props.theme.colors.red};
  }
`;

const HomeBooksList = styled.section`
  margin: 0 auto;
  padding-bottom: 3em;
  margin-bottom: 5em;
`;

const HomeBooksListHeader = styled.h5`
  margin-bottom: 1em;
`;

const HomeBooksListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;

  &:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }

  &:nth-child(2) {
    grid-row: 1;
    grid-column: 2;
  }

  &:nth-child(3) {
    grid-row: 2;
    grid-column: 1;
  }

  &:nth-child(4) {
    grid-row: 2;
    grid-column: 2;
  }
`;

const HomeBooksListLink = styled(Link)`
  
`;

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


export default Home;

