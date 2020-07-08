import React from "react";
import Page from "../components/page";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { PageHeader } from "../styled/page-header";
import { PageContentWidth } from "../styled/page-content-width";
import AspectBox from "../components/aspect-box";
import { LazyImage } from "../components/lazy-image";
import { Callout } from "../styled/call-out";
import { BoyAndBall } from "../components/icons-and-logos";
import { GroupedLinks, GroupedLinkItem, GroupedLinkAnchor, GroupedItemTitle, GroupedItemMeta, GroupedLinksTitle, GroupedLinksGroup, GroupedLinksGroupItem } from "../styled/grouped-links";
import { socialChangeList } from "../data/social-change";

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

        <BallsGrid>
          <AspectBox ratio={1}>
            <LazyImage src="/images/about/balls-grid-380.jpg" />
          </AspectBox>
        </BallsGrid>

        <Callout>
          <em>Sport is universal,</em> an inclusive international language teaching leadership, cooperation, and exemplary behavior in both victory and defeat.
        </Callout>

        <SportForChangeParagraph>Kevin has traveled the world sharing his message of the Red Rubber Ball and the power of play. When people hear Kevin’s message, they often want others to know what sport and play look like in their culture, on their playgrounds. People have shared stories of their own Red Rubber Balls and the actual balls from their playgrounds. People want their story to become a part of the journey, knowing that Kevin’s ball collection traverses the world’s longitudes and latitudes.</SportForChangeParagraph>

        <SportForChangeParagraph>Kevin has dedicated his life to advancing sport and play as vehicles for social change. Among his many public speaking engagements, Kevin was invited to address the United Nations at the launch of its Year of Sports for Development and Peace in 2005. He was subsequently appointed as a Special Advisor to the humanitarian group Right to Play, which designs global sport and play programs for children and communities affected by war, poverty, and disease. Kevin is also involved with The Homeless World Cup, a program for socially-excluded homeless people and people living in poverty, promoting lasting change through the development of street soccer worldwide and a top quality, well-recognized annual tournament.</SportForChangeParagraph>

      </PageContentWidth>

      <PageContentWidth>
        <Container>

          <Heading>
            <BoyAndBall />
            VIDEOS, IMAGES &amp; PRESS
          </Heading>

          <GroupedLinks>
            {
              socialChangeList.map(function (e, i) {
                return (
                  <GroupedLinkItem key={i}>
                    {e.groupTitle &&
                      <GroupedLinksTitle>
                        {e.groupTitle}
                      </GroupedLinksTitle>
                    }
                    {e.groupItems &&
                      <GroupedLinksGroup>
                        {e.groupItems.map(function (o, j) {
                          return (
                            <GroupedLinksGroupItem key={j}>
                              {!o.url && o.title &&
                                <span>{o.title}</span>
                              }
                              {o.url && o.title &&
                                <a href={o.url}>{o.title}</a>
                              }
                            </GroupedLinksGroupItem>
                          )
                        })
                        }
                      </GroupedLinksGroup>
                    }
                    {e.url && e.title &&
                      <GroupedLinkAnchor href={e.url}>
                        <GroupedItemTitle>{e.title}</GroupedItemTitle>
                      </GroupedLinkAnchor>
                    }
                    {!e.url && e.title &&
                      <GroupedItemTitle>{e.title}</GroupedItemTitle>
                    }
                    {e.meta &&
                      <GroupedItemMeta> ({e.meta})</GroupedItemMeta>
                    }
                  </GroupedLinkItem>
                )
              })
            }
          </GroupedLinks>

        </Container>
      </PageContentWidth>

    </Page>
  )
}

const BallsGrid = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    margin-bottom: 4em;
`;

const SportForChangeParagraph = styled.p`
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
`;


const Container = styled.div`
    li {
        font-size: ${props => props.theme.typography.small};
    }
`;

const Heading = styled.h5`
    font-family: ${props => props.theme.fonts.body};
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.typography.scale6};
    padding-bottom: 1em;
    border-bottom: 2px dashed ${props => props.theme.colors.gray};
    margin-bottom: 2em;
`;