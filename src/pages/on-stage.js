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
      </PageContentWidth>

    </Page>
  )
}

export default OnStage;