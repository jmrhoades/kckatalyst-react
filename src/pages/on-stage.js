import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";

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

        “My Inside Sales team at LAFC were given the pleasure to have a one hour discussion with Kevin about life, work, and best practices on how to handle adversity. With the uncertainty of our season’s schedule, due to the global pandemic, my team was finding it challenging to remain consistently positive and productive. Kevin’s presence, energy, and talking points immediately impacted my team’s attitude and outlook on everything that was going on. I received nothing but positive feedback from my team about the discussion. It was the exact type of conversation we needed to get ourselves back in the groove of things. Kevin, thank you so much for your time and for enlightening us.” - 
Vincent Villarreal, Manager/Inside Sales, LAFC
(Los Angeles Football Club)





      </PageContentWidth>
    </Page>
  )
}

export default OnStage;