import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { PageContentWidth } from "../styled/page-content-width";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { KataglyphsSection } from "../components/home/kataglyphs-section";
import { BooksList } from "../components/home/books-list";
import { OutNow } from "../components/home/out-now";
import { MyStory } from "../components/home/my-story";


function Home(props) {
  return (
    <Page key={props.key}>

      <Helmet>
        <title>Kevin Carroll Katalyst</title>
      </Helmet>

      <HomeTopContainer>
        <HomeQuote>
          “My actions may seem small but, their collective impact will be great!”
        </HomeQuote>
        <HomeIntroPortrait>
          <AspectBox ratio={1.5}>
            <LazyImage src="/images/home/kevincarroll-portrait-3.jpg" />
          </AspectBox>
        </HomeIntroPortrait>
      </HomeTopContainer>


      <PageContentWidth>


        <MyStory />

        <HomeIntroParagraph>
          <p>Kevin Carroll is the acclaimed author of <Link to="/books/rules-of-the-red-rubber-ball">Rules of the Red Rubber Ball</Link>, <Link to="/books/whats-your-red-rubber-ball">What’s Your Red Rubber Ball?!</Link>, <Link to="/books/the-red-rubber-ball-at-work">The Red Rubber Ball at Work</Link> and <Link to="/books/the-red-rubber-ball-at-work">A Kids Book About Belonging</Link>. He travels the globe consulting and speaking about the role, value and importance of play in life; having a lifelong learner mindset; advancing the human condition in a positive way.</p>
        </HomeIntroParagraph>

        <HomePageLinks>
          <PageLinksHeader>Services</PageLinksHeader>
          <PageLinks>
            <PageLink>
              <OutlineRouterLink to="/coaching">Consulting / Coaching</OutlineRouterLink>
            </PageLink>
            <PageLink>
              <OutlineRouterLink to="/onstage">Speaking / Onstage</OutlineRouterLink>
            </PageLink>
          </PageLinks>
        </HomePageLinks>

        <KataglyphsSection />

        <BooksList />

        <OutNow />

      </PageContentWidth>
    </Page >
  )
}

const HomeTopContainer = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HomeIntroPortrait = styled.div`
  max-width: 544px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;
    @media (min-width: 960px) {
      width: 558px;
      grid-column: 1;
      grid-row: 1;
      margin-bottom: 0;
      margin-top: -4em;
    }
`;

const HomeQuote = styled.div`
    font-family: ${props => props.theme.fonts.bodyItalic};
    font-size:  ${props => props.theme.typography.scale4};
    line-height: 1.2;
    margin-bottom: 2em;
    text-align: center;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1em;

    @media (min-width: 960px) {
      grid-column: 2;
      grid-row: 1;
      text-align: left;
      
      margin: auto;
      padding: 0;
      padding-left: 40px;
      
    }
`;

const HomeIntroParagraph = styled.div`
  margin-bottom: 3em;
`;

const HomePageLinks = styled.div`
  margin-bottom: 6em;
`;

const PageLinksHeader = styled.h5`
  margin-bottom: 1em;
`;

const PageLinks = styled.ul`

  @media (min-width: 540px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }
`;

const PageLink = styled.li`
    margin-bottom: 1em;
`;

const OutlineRouterLink = styled(Link)`
    display: block;
    position: relative;
    line-height: 1;
    text-align: center;
    padding: 18px 0 16px;
    text-decoration: none;
    
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.typography.small};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    
    color: ${props => props.theme.colors.black};
    border: 2px solid ${props => props.theme.colors.red};

    &:hover{
        background-color: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};
    }
`;


export default Home;

