import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth, PageContentPadding } from "../styled/page-content-width";
import { TopQuote } from "../components/quote";
import styled from 'styled-components';
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { Experiences, ExperiencesTitle, ExperiencesLead, ExperienceTitle } from "../styled/experiences-list";
import { LinkSmallCaps } from "../styled/smallcaps";
import { bottomSpace } from "../theme/global-styles";


const VirtualOption = () => {
  return (
    <VOptionContainer>
      (Virtual Option Available)
    </VOptionContainer>
  )
}

const VOptionContainer = styled.div`
  font-family: ${props => props.theme.fonts.bodyItalic};
  text-transform: none;
  color: ${props => props.theme.colors.red};
`;

function Coaching(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — Coaching</title>
      </Helmet>

      <PageContentWidth>
        <PageHeader>
          Coaching
        </PageHeader>
      </PageContentWidth>


      <SectionTop>

        <SectionTopImages>
          <AspectBox ratio={2 / 3}>
            <LazyImage src="/images/coaching/coachin-top-images-01.jpg" alt="Kevin Carroll coaching session" />
          </AspectBox>
          <AspectBox ratio={2 / 3}>
            <LazyImage src="/images/coaching/coachin-top-images-02.jpg" alt="Kevin Carroll coaching session" />
          </AspectBox>
          <AspectBox ratio={2 / 3}>
            <LazyImage src="/images/coaching/coachin-top-images-03.jpg" alt="Kevin Carroll coaching session" />
          </AspectBox>
        </SectionTopImages>

        <SectionTopQuote>
          <PageContentPadding>
            <TopQuote quote="I can not teach you... I can only help you explore yourself"
              by="Bruce Lee" />
          </PageContentPadding>
        </SectionTopQuote>

      </SectionTop>


      <PageContentWidth>

        <OpeningParagraph>
          <p>
            Kevin brings a playful curiosity + a lifelong love of learning + a competitive mindset to all of his endeavors. He sees humanistic potential + possibilities everywhere. He solves issues and challenges in surprising + unexpected ways.
          </p>
        </OpeningParagraph>

        <Experiences>
          <ExperiencesTitle>COACHING &amp; CONSULTING</ExperiencesTitle>
          <ExperiencesLead>Executive Leadership. Human Performance. Reinvention.</ExperiencesLead>
          <ul>
            <li>
              <ExperienceTitle>
                Executive Leadership Coaching (1:1)
                <VirtualOption />
              </ExperienceTitle>
              <p>During these meetings, clear goals are set and a “bespoke” action plan is co-designed to achieve the desired outcomes.</p>
            </li>
            <li>
              <ExperienceTitle>PLAY Is Serious Business!<br />TEAM INTEGRATION WORKSHOPS <VirtualOption /></ExperienceTitle>
              <p>Connect, engage and move attendees via dynamic + playful moments. Be ready to awaken the “KIDULT” (Kid + Adult) inside you via these dynamic + playful experiences: </p>
              <ul>
                <li>“KIDULT” CREATIVE TIME: team ideation + collaboration exercise.</li>
                <li>“KIDULT” RECESS TIME: a purposeful play experience via a series of “intentional” games + activities.</li>
                <li>“KIDULT” STORY TIME: create a short poem by answering a series of insightful questions.</li>
              </ul>
              <p>RESULTS: teamwork, collaboration, improved creative confidence!</p>


            </li>
            <li>
              <ExperienceTitle>Professional “Thinker” In Residence<VirtualOption /></ExperienceTitle>
              <p>Subject matter expertise provided to an organization via onsite visits to amplify and/or support an agreed upon project/goal.</p>
            </li>
          </ul>
        </Experiences>

        <BottomCenteredLinks>
          <h6>Download</h6>
          <BottomCenteredLink>
            <DownloadLink href="https://www.coursera.org/account/accomplishments/specialization/JZJSUYXKPZAD">
              FOUNDATIONS OF POSITIVE PSYCHOLOGY SPECIALIZATION Certificate
              <span>by University of Pennsylvania on Coursera</span>
            </DownloadLink>
          </BottomCenteredLink>
          <BottomCenteredLink>
            <LinkSmallCaps href="/downloads/83817_KC_Coaching_PDF_r3.pdf">KC’s Coaching Services — PDF</LinkSmallCaps>
          </BottomCenteredLink>
        </BottomCenteredLinks>

      </PageContentWidth>

    </Page>
  )
}

const BottomCenteredLinks = styled.div`
  margin-bottom: ${bottomSpace};
  text-align: center;
  h6 {
    margin-bottom: 1em;
  }
`;

const BottomCenteredLink = styled.div`
  margin-bottom: 1.5em;
`;


const SectionTop = styled.div`

`;

const SectionTopImages = styled.div`
    >div {
      margin-bottom: 1em;
    }


    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1em;

      >div {
        margin-bottom: 0;
      }
      >div:nth-child(1) {
        grid-column: 2;
        grid-row: 1;
      }
      >div:nth-child(2) {
        grid-column: 1;
        grid-row: 1;
      }
      >div:nth-child(3) {
        grid-column: 3;
        grid-row: 1;
      }
    }
`;

const SectionTopQuote = styled.div`
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2em;
`;


const OpeningParagraph = styled.div`
  padding-bottom: 3em;
`;

const DownloadLink = styled(LinkSmallCaps)`

  span {
    display: block;
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.typography.body};
    letter-spacing: 0;
    text-transform: none;
    line-height: 2;
    padding: 0 0 5px;
    box-shadow: none;
  }
`


export default Coaching;









