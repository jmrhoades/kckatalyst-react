import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import { Quote } from "../components/quote";
import styled from 'styled-components';
import { Testimonial } from "../components/testimonial";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";

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

        <CoachingTopQuote>
        <Quote
          quote="I can not teach you... I can only help you explore yourself"
          by="Bruce Lee"
        />
        </CoachingTopQuote>
      </PageContentWidth>

      <CoachingTopImage>
        <AspectBox ratio={0.5625}>
          <LazyImage src="/images/coaching/coaching-cover-01-16x9.jpg" />
        </AspectBox>
      </CoachingTopImage>

      <PageContentWidth>

        <OpeningParagraph>
          <p>
            Kevin brings a playful curiosity + a lifelong love of learning + a competitive mindset to all of his endeavors. He sees humanistic potential + possibilities everywhere. He solves issues and challenges in surprising + unexpected ways.
          </p>
        </OpeningParagraph>

        <Experiences>
          <ExperiencesTitle>COACHING <span>/</span> CONSULTING EXPERIENCES:</ExperiencesTitle>
          <ExperiencesLead>executive leadership <span>/</span> human performance <span>/</span> reinvention</ExperiencesLead>
          <ul>
            <li>
              <ExperienceTitle>Executive Leadership Coaching: (1:1)</ExperienceTitle>
              <p>During these meetings, clear goals are set and a “bespoke” action plan is co-designed to achieve the desired outcomes.</p>
            </li>
            <li>
              <ExperienceTitle>Team Integration Workshops:<br />PLAY Is Serious Business!</ExperienceTitle>
              <p>Craft, connect, collaborate, engage and move attendees via dynamic + playful moments. Be ready to awaken the “KIDULT*” inside you! (*KIDULT = kid + adult.)</p>
            </li>
            <li>
              <ExperienceTitle>Professional In Residence:</ExperienceTitle>
              <p>subject matter expertise provided to an organization via onsite visits to amplify and/or support an agreed upon project/goal.</p>
            </li>
          </ul>
        </Experiences>

      </PageContentWidth>

      <CoachingBottomImage>
        <AspectBox ratio={0.8}>
          <LazyImage src="/images/coaching/coaching-group-01-5x4.jpg" />
        </AspectBox>
      </CoachingBottomImage>

    </Page>
  )
}

const CoachingTopImage = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
`;

const CoachingTopQuote = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

const CoachingBottomImage = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;

const OpeningParagraph = styled.div`
  padding-bottom: 3em;
`;

const Experiences = styled.section`
  li {
    margin-bottom: 1em;
  }

`;

const ExperiencesTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.scale4};
  line-height: 1.1;
  margin-bottom: 0.333em;
`;

const ExperiencesLead = styled.h4`
  font-family: ${props => props.theme.fonts.bodyItalic};
  font-size: ${props => props.theme.typography.scale6};
  line-height: 1.333;
  padding-bottom: 3em;
`;

const ExperienceTitle = styled.h5`
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.scale6};
  line-height: 1.333;
  margin-bottom: 0.5em;
  position: relative;
  &:before {
      content: "";
      width: 0.75em;
      height: 3px;
      background-color: ${props => props.theme.colors.black};
      display: block;
      position: absolute;
      left: -1.75em;
      top: 0.5em;
    }
`;




export default Coaching;



  
    
    
    
    
    
    