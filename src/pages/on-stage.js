import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import { Quote } from "../components/quote";
import { Testimonial } from "../components/testimonial";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";

function OnStage(props) {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — On Stage</title>
      </Helmet>

      <PageContentWidth>

        <PageHeader>
          On Stage
        </PageHeader>

        <Quote
          quote="Those who tell the stories rule the world"
          by="Native American proverb"
        />

        <div>
          <h4>Focus Areas:</h4>
          <p>Storytelling. Leadership. Peak Performance. Innovation. Teamwork. Professional Achievement. Reinvention.</p>
        </div>

        <div>

          <h4>Talks</h4>

          <h5>#REALTALK: The Power + Value of Storytelling!</h5>
          <p>Good stories surprise us. They stick in our minds and help us remember ideas and concepts in a way that numbers, data and text on a page/slide/screen do not. Those who tell good stories have an increasing advantage with their ability to connect with the audiences that matter most for their personal + professional endeavors. Individuals that share compelling stories will be able to spark, inspire and motivate others to collaborate/rally to turn ideas/hopes/aspirations into reality.</p>

          <h5>Play@Work: Unleashing Growth through Creativity and Innovation</h5>
          <p>As children our days were filled with productive play. What was entertaining was also instructive. Games of tag were exercises in planning, teamwork, strategy, design, decision-making, creativity, interpersonal communication and risk-taking. Play was serious business in our youth—and it should be even more serious business in our professional lives if we hope to unleash the creative genius that spurs organizational growth.</p>

          <h5>The PIVOT: Adopting a Game Changing Mindset During Difficult Times</h5>
          <p>“Resilient people are everywhere. They are ordinary women and men, in every walk of life, who meet the definition of resilience set forth by American Psychological Association - adapting well in the face of adversity, trauma, tragedy, threats or significant sources of stress.” - Meg Jay. The tools, resources and best practices used by those that possess an uncanny ability to be resilient and overcome upheaval, uncertainty or difficult times can be taught and adopted. Learning the art + science of sustained determination (aka resilience) can provide a leader with the game changing mindset needed to face a challenging situation with grit, grace and studied confidence.</p>

        </div>

        <Testimonial
          quote="Kevin is one of the best leaders, communicators and teachers I know. In every occasion that he has spoken on stage at STORY or led a workshop for our attendees, both virtually and in-person, the reviews and comments have all raved of his magic! He is consistently a favorite among our community consisting of some of the most creative storytellers in the world. He may have been considered the mayor of Nike, but we selfishly consider him the mayor at STORY as well!"
          by="Harris III"
          cite="Founder & CEO, Istoria Collective"
        />

        <Testimonial
          quote="Kevin has been NACMA’s feature speaker for their convention the past two years. The energy and positivity that he conveys is authentic and infectious. Our members leave the session feeling the renewed sense of motivation needed in order to effectively plan for the next school year. KC inspired our membership to learn, grow, and not be complacent. Most importantly, he inspired them to positively impact their communities and campuses."
          by="Chelcie Abajian/Manager"
          cite="Affiliate Associations at National Association of Collegiate Directors of Athletics (NACDA)"
        />

        <Testimonial
          quote="Igniting and illuminating––Kevin has a spark of creative joy found in very few places. He coalesces teams around simple truths that we all know, but rarely tap. He’s a true bright moment for groups, companies, and more. We’d all be so lucky to regularly learn from, laugh with, and engage Kevin Carroll."
          by="Spencer Trierweiler"
          cite="VP + Group Creative Director at MOTIVE"
        />

        <Testimonial
          quote="Kevin Carroll absolutely delivered a one of a kind presentation to our Marquette Men’s Basketball program. He is as good of a speaker as I have come across in my 25+ years involved in elite athletics. His storytelling, personal journey, and his professional experiences allow him to share important ideas, wisdom, and actionable items that both captivated our group and gave us a road map to individual and collective improvement. Kevin has left a lasting impact on our people and program."
          by="Steve Wojciechowski"
          cite="Head Coach, Marquette Men’s Basketball"
        />

        <Testimonial
          quote="We are always looking for ways to get better, learn about ourselves, and understand what makes successful teams and people tick. Most importantly, I want the team to learn about things that can help off the floor, being more than an athlete. We had the opportunity to sit and listen to Kevin and his message. It was motivating. There is a different energy and vibe when he speaks. You learn, you laugh, and you leave inspired wanting more!"
          by="Archie Miller"
          cite="Head Coach, Indian University Men’s Basketball"
        />

        <Testimonial
          quote="I've had the pleasure of hearing Kevin's story regarding the Power of Play and the Rules of the Red Rubber Ball at both a national level through the National Association of Collegiate Marketing Administrators and at a local level when he joined our staff and student-athletes at Virginia Tech. Simply, it was one of the most powerful lessons that I and my colleagues have ever heard. Kevin's unique style allows him to address difficult issues head on while providing an inspirational message that the missing ingredient in the lives of many is fun explored through the creativity of play. If you're looking for someone to elevate your team, create an environment for people to be their authentic selves, and truly reach new heights, you've arrived exactly where you need to be."
          by="Brad Wurthman"
          cite="Senior Associate Athletics Director, Virginia Tech University"
        />

        <Testimonial
          quote="My Inside Sales team at LAFC were given the pleasure to have a one hour discussion with Kevin about life, work, and best practices on how to handle adversity. With the uncertainty of our season’s schedule, due to the global pandemic, my team was finding it challenging to remain consistently positive and productive. Kevin’s presence, energy, and talking points immediately impacted my team’s attitude and outlook on everything that was going on. I received nothing but positive feedback from my team about the discussion. It was the exact type of conversation we needed to get ourselves back in the groove of things. Kevin, thank you so much for your time and for enlightening us."
          by="Vincent Villarreal"
          cite="Manager/Inside Sales, LAFC (Los Angeles Football Club)"
        />

      </PageContentWidth>
    </Page>
  )
}

export default OnStage;