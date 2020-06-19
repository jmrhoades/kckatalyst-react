import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";


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
    </Page>
  )
}

export default Coaching;