import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import AspectBox from "../aspect-box";
import { LazyImage } from "../lazy-image";


export function BooksList() {
    return (
        <HomeBooksList>
            <HomeBooksListHeader>Books by Kevin</HomeBooksListHeader>
            <HomeBooksListContainer>
                <HomeBooksListLink to="/books/rules-of-the-red-rubber-ball">
                    <AspectBox ratio={1}>
                        <LazyImage src="/images/booklist-rules-of-the-red-rubber-ball.jpg" />
                    </AspectBox>
                </HomeBooksListLink>
                <HomeBooksListLink to="/books/whats-your-red-rubber-ball">
                    <AspectBox ratio={1}>
                        <LazyImage src="/images/booklist-whats-your-red-rubber-ball.jpg" />
                    </AspectBox>
                </HomeBooksListLink>
                <HomeBooksListLink to="books/the-red-rubber-ball-at-work">
                    <AspectBox ratio={1}>
                        <LazyImage src="/images/booklist-the-red-rubber-ball-at-work.jpg" />
                    </AspectBox>
                </HomeBooksListLink>
                <HomeBooksListLink to="books/a-kids-book-about-belonging">
                    <AspectBox ratio={1}>
                        <LazyImage src="/images/booklist-a-kids-book-about-belonging.jpg" />
                    </AspectBox>
                </HomeBooksListLink>
            </HomeBooksListContainer>
        </HomeBooksList>
    )
}

const HomeBooksList = styled.section`
  margin: 0 auto;
  padding-bottom: 3em;
  margin-bottom: 3em;
`;

const HomeBooksListHeader = styled.h5`
  margin-bottom: 1em;
`;

const HomeBooksListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;

  max-width: 640px;
  margin-left: auto;
  margin-right: auto;

  &:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }

  &:nth-child(2) {
    grid-row: 1;
    grid-column: 2;
  }

  &:nth-child(3) {
    grid-row: 2;
    grid-column: 1;
  }

  &:nth-child(4) {
    grid-row: 2;
    grid-column: 2;
  }
`;

const HomeBooksListLink = styled(Link)`
  
`;
