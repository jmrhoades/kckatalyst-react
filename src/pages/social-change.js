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

export const SportForSocialChange = (props) => {
  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — Sport For Social Change</title>
      </Helmet>

      <PageContentWidth>
        <PageHeader>
            Sport For Social Change
        </PageHeader>
      </PageContentWidth>
      

    </Page>
  )
}

