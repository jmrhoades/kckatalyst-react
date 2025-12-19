import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import { PageContentWidth } from "../styled/page-content-width";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { BooksList } from "../components/home/books-list";
import { CoverImage } from "../components/cover-image";
import { bottomSpace } from "../theme/global-styles";
import { FeaturedVideo } from "../components/home/featured-video";
import { OutlineRouterLink } from "../styled/outline-link";


function Home(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll Katalyst</title>
      </Helmet>

      <CoverImage
        ratio={1536 / 2304}
        src={"/images/on-stage/on-stage-cover-02.jpg"}
        alt="Kevin Carroll speaking on stage"
      />

      <PageContentWidth>
        <HomeIntroParagraph>
          Kevin Carroll, the Katalyst, is on a mission to empower greatness in individuals and organizations through the power of positivity, creativity and play. Since 2004, more than 350,000 people from 200+ corporations, 150+ non-profit organizations, and dozens of schools around the world have been inspired by Kevin’s dynamic speaking engagements, coaching, facilitating and content creation.
        </HomeIntroParagraph>
      </PageContentWidth>

      <PageContentWidth>
        <HomeBioContainer>
          <HomeBioImage>
            <AspectBox ratio={1.5}>
              <LazyImage src="/images/home/kevincarroll-portrait-3.jpg" alt="Kevin Carroll portrait" />
            </AspectBox>
          </HomeBioImage>
          <HomeBioParagraph>
            <p>Kevin is an author + instigator of inspiration + creative catalyst who brings a playful curiosity, a keen understanding of human nature and a lifelong love of competition to all of his endeavors. Kevin has given multiple TED talks and written four highly successful books published by ESPN, Disney Press, McGraw-Hill and A Kids Book About. He has helped turn creative ideas into reality for Fortune 500 companies, professional sports leagues, and global non-profits. Widely acclaimed for his desire and ability to change the world using play + positivity as a catalyst for positive change and self-improvement.</p>
          </HomeBioParagraph>
        </HomeBioContainer>
      </PageContentWidth>

      <PageContentWidth>
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

       <FeaturedVideo />
        <BooksList />

      </PageContentWidth>
    </Page >
  )
}

const HomeIntroParagraph = styled.div`
  margin-bottom: 3em;
`;

const HomeBioContainer = styled.div``;

const HomeBioImage = styled.div`
  max-width: 544px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4em;
`;

const HomeBioParagraph = styled.div``;

const HomePageLinks = styled.div`
  margin-bottom: ${bottomSpace};
`;

const PageLinksHeader = styled.h5`
  margin-bottom: 1em;
`;

const PageLinks = styled.ul``;

const PageLink = styled.li`
    margin-bottom: 1.5em;
`;

export default Home;

