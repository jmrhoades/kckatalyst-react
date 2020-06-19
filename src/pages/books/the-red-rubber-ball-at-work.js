import React from "react";
import Page from "../../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../styled/page-header";
import { PageContentWidth } from "../../styled/page-content-width";
import { BackToBooks } from "../../components/books/back-to-books";


export function TheRedRubberBallAtWork(props) {
  return (
    <Page>
      <Helmet>
        <title>The Red Rubber Ball At Work by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>
        <BackToBooks />
        <PageHeader>
          The Red Rubber Ball At Work
      </PageHeader>
      </PageContentWidth>
    </Page>
  )
}

