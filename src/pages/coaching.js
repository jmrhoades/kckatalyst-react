import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import { Quote } from "../components/quote";


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

        <Quote
          quote="I can not teach you... I can only help you explore yourself"
          by="Bruce Lee"
        />

        <div>

          Kevin brings a playful curiosity + a lifelong love of learning + a competitive mindset to all of his endeavors. He sees humanistic potential + possibilities everywhere. He solves issues and challenges in surprising + unexpected ways.

          COACHING/CONSULTING EXPERIENCES:
          executive leadership/human performance/reinvention

          Executive Leadership Coaching: (1:1)
          During these meetings, clear goals are set and a “bespoke” action plan is
          co-designed to achieve the desired outcomes.

          Team Integration Workshops - PLAY Is Serious Business! Experiences
          Craft, connect, collaborate, engage and move attendees via dynamic + playful moments. Be ready to awaken the “KIDULT*” inside you! (*KIDULT = kid + adult.)

          Professional In Residence: subject matter expertise provided to an organization via onsite visits to amplify and/or support an agreed upon project/goal.

        </div>

      </PageContentWidth>
    </Page>
  )
}

export default Coaching;