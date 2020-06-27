import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { TopQuote, Quote } from "../components/quote";
import { LinkSmallCaps } from "../styled/link-smallcaps";

function About(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — About</title>
      </Helmet>

      <PageContentWidth>

        <PageHeader>
          About Kevin
        </PageHeader>

        <TopQuote
          quote="The master in the art of living makes little distinction between his work and his play…"
          by="James Michener"
        />

        <AboutPortrait1>
          <AspectBox ratio={1.4}>
            <LazyImage src="/images/kevincarroll-portrait-1.jpg" />
          </AspectBox>
        </AboutPortrait1>

        <AboutParagraph1>
          Kevin is an author + instigator of inspiration + creative catalyst. Kevin brings a playful curiosity, a keen understanding of human nature and a lifelong love of competition to all of his endeavors. Kevin is the author of four highly successful books published by ESPN, Disney Press, McGraw-Hill and A Kids Book About. He has helped turn creative ideas into reality for organizations such as Nike, Starbucks, adidas, Walt Disney, Target, Proctor & Gamble, Columbia Sportswear, Mattel, the National Basketball Association and many others. Kevin was named by SUCCESS magazine as one of 19 “SEERS – changing the world!” Kevin believes that play is serious business!
        </AboutParagraph1>

        <Quote
          quote="When I met Kevin, I saw a man who manages to preserve the wisdom of his inner child. This human ‘Katalyst’ is able to bring out of reality its magic and out of people its joy."
          by="Paulo Coelho, author and Alchemist"
        />

        <AboutPortrait2>
          <AspectBox ratio={1}>
            <LazyImage src="/images/kevincarroll-portrait-4.jpg" />
          </AspectBox>
        </AboutPortrait2>

        <AboutCenteredLink>
          <h6>Press Kit</h6>
          <LinkSmallCaps href="https://www.dropbox.com/s/ogoermwzvqb3yke/KC_PressKit_2020.pdf">KC’s Press Kit — PDF</LinkSmallCaps>
        </AboutCenteredLink>

        <AboutCenteredLink>
          <h6>Full Biography</h6>
          <LinkSmallCaps href="https://www.dropbox.com/s/st99oekgw3ps7dw/Kevin%20Carroll%20Katalyst%20BIO%202020.pdf?dl=0">Kevin Carroll Biography — PDF</LinkSmallCaps>
        </AboutCenteredLink>

        <AboutCenteredLink>
          <h6>For Inquiries, email</h6>
          <LinkSmallCaps href="mailto:kim@kevincarrollkatalyst.com">kim@kevincarrollkatalyst.com</LinkSmallCaps>
        </AboutCenteredLink>


      </PageContentWidth>
    </Page>
  )
}

const AboutPortrait1 = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 568px;
    margin-bottom: 5em;
`;

const AboutParagraph1 = styled.p`


`;

const AboutPortrait2 = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 568px;
    margin-bottom: 5em;
`;

const AboutCenteredLink = styled.div`
  text-align: center;
  margin-bottom: 3em;
`;


export default About;