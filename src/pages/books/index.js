import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Page from "../../components/page";
import AspectBox from "../../components/aspect-box";
import { LazyImage } from "../../components/lazy-image";
import { PageHeader } from "../../styled/page-header";
import { PageContentWidthWide } from "../../styled/page-content-width";
import { RouteLinkSmallCaps, LinkSmallCaps } from "../../styled/link-smallcaps";

const books = [
  {
    title: "A Kids Book About Belonging",
    img: "/images/booklist-a-kids-book-about-belonging.jpg",
    link: "/books/a-kids-book-about-belonging",
    buyLink: "https://akidsbookabout.com/products/a-kids-book-about-belonging",
    buyLabel: "A Kids Book About",
  },
  {
    title: "What's Your Red Rubber Ball?!",
    img: "/images/booklist-whats-your-red-rubber-ball.jpg",
    link: "/books/whats-your-red-rubber-ball",
    buyLink: "https://amazon.com",
    buyLabel: "Download PDF",
  },
  {
    title: "The Red Rubber Ball at Work",
    img: "/images/booklist-the-red-rubber-ball-at-work.jpg",
    link: "/books/the-red-rubber-ball-at-work",
    buyLink: "https://www.amazon.com/Red-Rubber-Ball-Work-Elevate/dp/0071599444",
    buyLabel: "Buy on Amazon",
  },
  {
    title: "Rules of the Red Rubber Ball",
    img: "/images/booklist-rules-of-the-red-rubber-ball.jpg",
    link: "/books/rules-of-the-red-rubber-ball",
    buyLink: "https://www.amazon.com/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/",
    buyLabel: "Buy on Amazon",
  },
]

function BookItem(props) {
  return (
    <>
      <ImageLink href={props.info.link}>
        <AspectBox ratio={1}>
          <LazyImage src={props.info.img} />
        </AspectBox>
      </ImageLink>
      <ButtonContainer>
        <div>
          <RouteLinkSmallCaps to={props.info.link}>
            Learn More
          </RouteLinkSmallCaps>
        </div>
        <div>
          <LinkSmallCaps href={props.info.buyLink}>
            {props.info.buyLabel}
          </LinkSmallCaps>
        </div>
      </ButtonContainer>
    </>
  )
}

export function Books(props) {

  return (
    <Page>

      <Helmet>
        <title>Kevin Carroll — Books</title>
      </Helmet>

      <PageContentWidthWide>

        <PageHeader>
          Books
        </PageHeader>

        <BookList>

          <Book1>
            <BookItem info={books[0]} />
          </Book1>

          <Book2>
            <BookItem info={books[1]} />
          </Book2>

          <Book3>
            <BookItem info={books[2]} />
          </Book3>

          <Book4>
            <BookItem info={books[3]} />
          </Book4>

        </BookList>

      </PageContentWidthWide>
    </Page>
  )
}

const BookList = styled.ul`

@media (min-width: 640px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
}
  
`;

const BookListItem = styled.li`
  text-align: center;
  margin-bottom: 4em;
`;

const Book1 = styled(BookListItem)`
  grid-row: 1;
  grid-column: 1;
`;

const Book2 = styled(BookListItem)`
  grid-row: 1;
  grid-column: 2;
`;

const Book3 = styled(BookListItem)`
  grid-row: 2;
  grid-column: 1;
`;

const Book4 = styled(BookListItem)`
  grid-row: 2;
  grid-column: 2;
`;

const ImageLink = styled.a`
  display: block;
  margin-bottom: 1em;
`;

const ButtonContainer = styled.div`
  
  div {
    padding-bottom: 1em;
  }


`;




