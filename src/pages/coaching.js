import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import { TopQuote } from "../components/quote";
import styled from 'styled-components';
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { Experiences, ExperiencesTitle, ExperiencesLead, ExperienceTitle } from "../styled/experiences-list";

function Coaching(props) {
  return (
    <Page key={props.key}>

      <Helmet>
        <title>Kevin Carroll — Coaching</title>
      </Helmet>

      
        <PageContentWidth>
          <PageHeader>
            Coaching
        </PageHeader>
          <CoachingTopQuote
            quote="I can not teach you... I can only help you explore yourself"
            by="Bruce Lee"
          />
        </PageContentWidth>
        <CoverImage>
          <AspectBox ratio={5 / 7}>
            <LazyImage src="/images/coaching/coaching-cover-02-7x5.jpg" />
          </AspectBox>
        </CoverImage>
      

      <PageContentWidth>

        <OpeningParagraph>
          <p>
            Kevin brings a playful curiosity + a lifelong love of learning + a competitive mindset to all of his endeavors. He sees humanistic potential + possibilities everywhere. He solves issues and challenges in surprising + unexpected ways.
          </p>
        </OpeningParagraph>

        <Experiences>
          <ExperiencesTitle>COACHING <span>/</span> CONSULTING EXPERIENCES</ExperiencesTitle>
          <ExperiencesLead>Executive Leadership. Human Performance. Reinvention.</ExperiencesLead>
          <ul>
            <li>
              <ExperienceTitle>Executive Leadership Coaching (1:1)</ExperienceTitle>
              <p>During these meetings, clear goals are set and a “bespoke” action plan is co-designed to achieve the desired outcomes.</p>
            </li>
            <li>
              <ExperienceTitle>Team Integration Workshops: PLAY Is Serious Business!</ExperienceTitle>
              <p>Craft, connect, collaborate, engage and move attendees via dynamic + playful moments. Be ready to awaken the “KIDULT*” inside you! (*KIDULT = kid + adult.)</p>
            </li>
            <li>
              <ExperienceTitle>Professional In Residence</ExperienceTitle>
              <p>Subject matter expertise provided to an organization via onsite visits to amplify and/or support an agreed upon project/goal.</p>
            </li>
          </ul>
        </Experiences>

      </PageContentWidth>

      <CoachingBottomImage1>
        <AspectBox ratio={0.6669921875}>
          <LazyImage src="/images/coaching/coaching-group-02.jpg" />
        </AspectBox>
      </CoachingBottomImage1>

      <CoachingBottomImage2>
        <AspectBox ratio={0.6669921875}>
          <LazyImage src="/images/coaching/coaching-hug.jpg" />
        </AspectBox>
      </CoachingBottomImage2>

    </Page>
  )
}

const CoachingTopQuote = styled(TopQuote)`
  max-width: 540px;
`;

const CoverImage = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
`;

const CoachingBottomImage1 = styled.div`
    max-width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5em;

    @media (min-width: 640px) {
      transform: translateX(-33%);
    }
`;

const CoachingBottomImage2 = styled.div`
    max-width: 512px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 640px) {
      transform: translateX(33%);
    }
`;

const OpeningParagraph = styled.div`
  padding-bottom: 3em;
`;



export default Coaching;









