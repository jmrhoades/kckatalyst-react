import React from "react";
import Page from "../../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../styled/page-header";
import { BackToBooks } from "../../components/books/back-to-books";
import { PageContentWidth } from "../../styled/page-content-width";
import { Video } from "../../components/video";
import { BookSellersContainer, BookSellersHeader, BookSellerLink } from "../../components/books/books-sellers";
import { BookImagesContainer, BookImageCover, BookImageSpread } from "../../components/books/book-images";
import { BookAboutParagraph } from "../../components/books/book-info";
import AspectBox from "../../components/aspect-box";
import { LazyImage } from "../../components/lazy-image";

export function AKidsBookAboutBelonging(props) {
  return (
    <Page>
      <Helmet>
        <title>A Kids Book About Belonging by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>
        <BackToBooks />
        <PageHeader>
          A Kids Book About Belonging
      </PageHeader>

        <Video poster="/images/a-kids-book-about-belonging-video-poster.jpg" src="/movies/BELONGING-656.mp4" />

        <BookAboutParagraph>
          This is a book about belonging. It tackles what it’s like when you feel like you belong to a group or family or team and what it’s like when you don’t. It addresses what it feels like when you don’t fit in, or when others don’t want you around. This book teaches kids how to belong to themselves and how that helps them belong anywhere.
        </BookAboutParagraph>

        <BookImagesContainer>

          <BookImageCover>
            <AspectBox ratio={1}>
              <LazyImage src="/images/a-kids-book-about-belonging-cover.jpg" />
            </AspectBox>
          </BookImageCover>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/a-kids-book-about-belonging-spread-1.jpg" />
            </AspectBox>
          </BookImageSpread>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/a-kids-book-about-belonging-spread-2.jpg" />
            </AspectBox>
          </BookImageSpread>

        </BookImagesContainer>

        <BookSellersContainer>
          <BookSellersHeader msg="Available from" />
          <BookSellerLink href="https://akidsbookabout.com/products/a-kids-book-about-belonging" name="A Kids Book About" />
        </BookSellersContainer>

      </PageContentWidth>
    </Page>
  )
}
