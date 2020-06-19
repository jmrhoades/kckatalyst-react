import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";


function About(props) {
  return (
    <Page>
      <Helmet>
        <title>Kevin Carroll — About</title>
      </Helmet>
      <PageContentWidth>
        <PageHeader>
          About
      </PageHeader>
      </PageContentWidth>
    </Page>
  )
}

export default About;