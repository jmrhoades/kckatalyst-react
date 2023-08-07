import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import { TopQuote, Testimonial } from "../components/quote";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { Experiences, ExperiencesTitle, ExperiencesLead, ExperienceTitle } from "../styled/experiences-list";
import { CoverImage } from "../components/cover-image";
import { SeparatorHeading } from "../styled/separator-heading";
import { bottomSpace } from "../theme/global-styles";

function OnStage(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — Onstage</title>
      </Helmet>

      <PageContentWidth>
        <PageHeader>
          Onstage
        </PageHeader>
      </PageContentWidth>

      <CoverImage
        ratio={1535 / 2312}
        src={"/images/on-stage/on-stage-cover-05.jpg"}
      />

      <PageContentWidth>
        <OnStageTopQuote
          quote="Those who tell the stories rule the world"
          by="Native American proverb"
        />
      </PageContentWidth>

      <PageContentWidth>

        <Experiences>
          <ExperiencesTitle>Focus Areas</ExperiencesTitle>
          <ExperiencesLead><span>Storytelling</span> <span>Leadership</span> <span>Peak Performance</span> <span>Innovation</span> <span>Teamwork</span> <span>Professional Achievement</span> <span>Reinvention</span> <span>Host + Facilitator</span></ExperiencesLead>
        </Experiences>

        <Experiences>
          <ExperiencesTitle>Talks</ExperiencesTitle>
          <ul>
            <li>
              <ExperienceTitle>#REALTALK: The Power + Value of Storytelling!</ExperienceTitle>
              <p>Good stories surprise us. They stick in our minds and help us remember ideas and concepts in a way that numbers, data and text on a page/slide/screen do not. Those who tell good stories have an increasing advantage with their ability to connect with the audiences that matter most for their personal + professional endeavors. Individuals that share compelling stories will be able to spark, inspire and motivate others to collaborate/rally to turn ideas/hopes/aspirations into reality.</p>
            </li>
            <li>
              <ExperienceTitle>Play@Work: Unleashing Growth through Creativity and Innovation</ExperienceTitle>
              <p>As children our days were filled with productive play. What was entertaining was also instructive. Games of tag were exercises in planning, teamwork, strategy, design, decision-making, creativity, interpersonal communication and risk-taking. Play was serious business in our youth—and it should be even more serious business in our professional lives if we hope to unleash the creative genius that spurs organizational growth.</p>
            </li>
            <li>
              <ExperienceTitle>The PIVOT: Adopting a Game Changing Mindset</ExperienceTitle>
              <p>“Resilient people are everywhere. They are ordinary women and men, in every walk of life, who meet the definition of resilience set forth by American Psychological Association - adapting well in the face of adversity, trauma, tragedy, threats or significant sources of stress.” - Meg Jay. The tools, resources and best practices used by those that possess an uncanny ability to be resilient and overcome upheaval, uncertainty or difficult times can be taught and adopted. Learning the art + science of sustained determination (aka resilience) can provide a leader with the game changing mindset needed to face a challenging situation with grit, grace and studied confidence.</p>
            </li>
          </ul>
        </Experiences>

      </PageContentWidth>

      <PageContentWidth>
        <Image1>
          <AspectBox ratio={940 / 1408}>
            <LazyImage src="/images/on-stage/on-stage-blue-01.jpg" />
          </AspectBox>
        </Image1>
        <Image2>
          <AspectBox ratio={1308 / 920}>
            <LazyImage src="/images/on-stage/on-stage-blue-02.jpg" />
          </AspectBox>
        </Image2>
      </PageContentWidth>

      <PageContentWidth>
        <SeparatorHeading>
          Testimonials
      </SeparatorHeading>
      </PageContentWidth>

      <PageContentWidth>
        <Testimonial
          quote="Kevin is one of the best leaders, communicators and teachers I know. In every occasion that he has spoken on stage at STORY or led a workshop for our attendees, both virtually and in-person, the reviews and comments have all raved of his magic! He is consistently a favorite among our community consisting of some of the most creative storytellers in the world. He may have been considered the mayor of Nike, but we selfishly consider him the mayor at STORY as well!"
          by="Harris III"
          cite="Founder & CEO, Istoria Collective"
        />
      </PageContentWidth>

      <Image3>
        <AspectBox ratio={1600 / 2400}>
          <LazyImage src="/images/on-stage/on-stage-beige-01.jpg" />
        </AspectBox>
      </Image3>

      <PageContentWidth>
        <Testimonial
          quote="Kevin has been NACMA’s feature speaker for their convention the past two years. The energy and positivity that he conveys is authentic and infectious. Our members leave the session feeling the renewed sense of motivation needed in order to effectively plan for the next school year. KC inspired our membership to learn, grow, and not be complacent. Most importantly, he inspired them to positively impact their communities and campuses."
          by="Chelcie Abajian/Manager"
          cite="Affiliate Associations at National Association of Collegiate Directors of Athletics (NACDA)"
        />
      </PageContentWidth>

      <PageContentWidth>
        <ImagePortrait1>
          <AspectBox ratio={2000 / 1334}>
            <LazyImage src="/images/on-stage/on-stage-portrait-01.jpg" />
          </AspectBox>
        </ImagePortrait1>
        <ImagePortrait2>
          <AspectBox ratio={2000 / 1334}>
            <LazyImage src="/images/on-stage/on-stage-portrait-02.jpg" />
          </AspectBox>
        </ImagePortrait2>
      </PageContentWidth>

      <PageContentWidth>
        <Testimonial
          quote="Igniting and illuminating––Kevin has a spark of creative joy found in very few places. He coalesces teams around simple truths that we all know, but rarely tap. He’s a true bright moment for groups, companies, and more. We’d all be so lucky to regularly learn from, laugh with, and engage Kevin Carroll."
          by="Spencer Trierweiler"
          cite="VP + Group Creative Director at MOTIVE"
        />
      </PageContentWidth>

      <SportsContainer1>
        <SportsContainer1Wrap>
          <SportsImage1>
            <AspectBox ratio={462 / 750}>
              <LazyImage src="/images/on-stage/on-stage-sports-02.jpg" />
            </AspectBox>
          </SportsImage1>
          <SportsImage2>
            <AspectBox ratio={684 / 1024}>
              <LazyImage src="/images/on-stage/on-stage-sports-01.jpg" />
            </AspectBox>
          </SportsImage2>
        </SportsContainer1Wrap>
      </SportsContainer1>

      <PageContentWidth>
        <Testimonial
          quote="Kevin Carroll absolutely delivered a one of a kind presentation to our Marquette Men’s Basketball program. He is as good of a speaker as I have come across in my 25+ years involved in elite athletics. His storytelling, personal journey, and his professional experiences allow him to share important ideas, wisdom, and actionable items that both captivated our group and gave us a road map to individual and collective improvement. Kevin has left a lasting impact on our people and program."
          by="Steve Wojciechowski"
          cite="Head Coach, Marquette Men’s Basketball"
        />
      </PageContentWidth>

      <Image4>
        <AspectBox ratio={1600 / 2400}>
          <LazyImage src="/images/on-stage/on-stage-cover-03.jpg" />
        </AspectBox>
      </Image4>

      <PageContentWidth>
        <Testimonial
          quote="We are always looking for ways to get better, learn about ourselves, and understand what makes successful teams and people tick. Most importantly, I want the team to learn about things that can help off the floor, being more than an athlete. We had the opportunity to sit and listen to Kevin and his message. It was motivating. There is a different energy and vibe when he speaks. You learn, you laugh, and you leave inspired wanting more!"
          by="Archie Miller"
          cite="Head Coach, Indiana University Men’s Basketball"
        />
      </PageContentWidth>

      <PortraitContainer3>
        <PortraitContainer3Wrap>
          <ImagePortrait3>
            <AspectBox ratio={1024 / 819}>
              <LazyImage src="/images/on-stage/on-stage-portrait-04.jpg" />
            </AspectBox>
          </ImagePortrait3>
          <ImagePortrait4>
            <AspectBox ratio={1024 / 683}>
              <LazyImage src="/images/on-stage/on-stage-portrait-03.jpg" />
            </AspectBox>
          </ImagePortrait4>
          <ImagePortrait5>
            <AspectBox ratio={1024 / 683}>
              <LazyImage src="/images/on-stage/on-stage-portrait-05.jpg" />
            </AspectBox>
          </ImagePortrait5>
        </PortraitContainer3Wrap>
      </PortraitContainer3>

      <PageContentWidth>
        <Testimonial
          quote="I’ve had the pleasure of hearing Kevin's story regarding the Power of Play and the Rules of the Red Rubber Ball at both a national level through the National Association of Collegiate Marketing Administrators and at a local level when he joined our staff and student-athletes at Virginia Tech. Simply, it was one of the most powerful lessons that I and my colleagues have ever heard. Kevin's unique style allows him to address difficult issues head on while providing an inspirational message that the missing ingredient in the lives of many is fun explored through the creativity of play. If you're looking for someone to elevate your team, create an environment for people to be their authentic selves, and truly reach new heights, you've arrived exactly where you need to be."
          by="Brad Wurthman"
          cite="Senior Associate Athletics Director, Virginia Tech University"
        />
      </PageContentWidth>

      <ImageCover4>
        <AspectBox ratio={1365 / 2048}>
          <LazyImage src="/images/on-stage/on-stage-cover-04.jpg" />
        </AspectBox>
      </ImageCover4>

      <PageContentWidth>
        <Testimonial
          quote="My Inside Sales team at LAFC were given the pleasure to have a one hour discussion with Kevin about life, work, and best practices on how to handle adversity. With the uncertainty of our season’s schedule, due to the global pandemic, my team was finding it challenging to remain consistently positive and productive. Kevin’s presence, energy, and talking points immediately impacted my team’s attitude and outlook on everything that was going on. I received nothing but positive feedback from my team about the discussion. It was the exact type of conversation we needed to get ourselves back in the groove of things. Kevin, thank you so much for your time and for enlightening us."
          by="Vincent Villarreal"
          cite="Manager/Inside Sales, LAFC (Los Angeles Football Club)"
        />
      </PageContentWidth>

      <ImageLast>
        <AspectBox ratio={1}>
          <LazyImage src="/images/on-stage/on-stage-square-01.jpg" />
        </AspectBox>
      </ImageLast>


    </Page>
  )
}


// const CoverImage = styled.div`
//   min-width: 480px;
//   max-width: 1280px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 6em;
// `;

const OnStageTopQuote = styled(TopQuote)`
  max-width: 440px;
`;

const Image1 = styled.div`
    min-width: 400px;
    max-width: 704px;
    margin-right: auto;
    transform: translateX(-33%);
    position: relative;
    z-index: 1;

    @media (min-width: 980px) {
      transform: translateX(-25%);
    }
`;

const Image2 = styled.div`
    max-width: 460px;
    margin-left: auto;
    margin-bottom: ${bottomSpace};

    margin-top: -2em;
    transform: translateX(25%);

    @media (min-width: 480px) {
      margin-top: -4em;
    }

    @media (min-width: 640px) {
      margin-top: -6em;
    }
`;

const Image3 = styled.div`
  min-width: 480px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${bottomSpace};
`;

const ImagePortrait1 = styled.div`
    min-width: 200px;
    max-width: 360px;
    margin-right: auto;
    transform: translateX(-33%);
    margin-bottom: 2em;

    @media (min-width: 640px) {
      transform: translateX(-25%);
      max-width: 400px;
    }

    @media (min-width: 980px) {
      max-width: 460px;
    }

    @media (min-width: 1280px) {
      transform: translateX(-33%);
    }
`;

const ImagePortrait2 = styled.div`
    margin-left: auto;
    margin-bottom: ${bottomSpace};
    transform: translateX(25%);
    max-width: 360px;

    @media (min-width: 640px) {
      transform: translateX(33%);
      margin-top: -12em;
      max-width: 460px;
    }

    @media (min-width: 980px) {
      max-width: 460px;
      transform: translateX(25%);
    }

    @media (min-width: 1280px) {
      max-width: 667px;
      transform: translateX(38%);
    }
`;



const PortraitContainer3 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  margin-bottom: ${bottomSpace};
`;

const PortraitContainer3Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 40px;
  grid-template-rows: repeat(4, auto);
  row-gap: 40px;
`;

const ImagePortrait3 = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column: 1;
  align-self: end;
`;

const ImagePortrait4 = styled.div`
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column: 1;
`;

const ImagePortrait5 = styled.div`
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column: 2;
  overflow: hidden;
  position: relative;
`;

const Image4 = styled.div`
  min-width: 480px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${bottomSpace};
`;

const ImageCover4 = styled.div`
  min-width: 480px;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${bottomSpace};
`;

const ImageLast = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${bottomSpace};
`;

const SportsContainer1 = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;
  margin-bottom: ${bottomSpace};
`;

const SportsContainer1Wrap = styled.div`
`;

const SportsImage1 = styled.div`
  max-width: 375px;
  margin-left: auto;
  margin-bottom: 1em;
`;

const SportsImage2 = styled.div`
  max-width: 512px;
  transform: translateX(-25%);
  margin-bottom: 1em;
  @media (min-width: 780px) {
      margin-top: -6em;
    }
`;


export default OnStage;