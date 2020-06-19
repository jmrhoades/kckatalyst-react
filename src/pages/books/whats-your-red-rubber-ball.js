import React from "react";
import Page from "../../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../styled/page-header";
import { PageContentWidth } from "../../styled/page-content-width";
import { BackToBooks } from "../../components/books/back-to-books";

export function WhatsYourRedRubberBall(props) {
  return (
    <Page>
      <Helmet>
        <title>What's Your Red Rubber Ball by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>
        <BackToBooks />
        <PageHeader>
          What's Your Red Rubber Ball
      </PageHeader>
      </PageContentWidth>
    </Page>
  )
}

