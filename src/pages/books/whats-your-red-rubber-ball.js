import React from "react";
import Page from "../../components/page";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../styled/page-header";
import { BackToBooks } from "../../components/books/back-to-books";
import { PageContentWidth } from "../../styled/page-content-width";
import { BookSellersContainer, BookSellersHeader, BookSellerLink } from "../../components/books/books-sellers";
import { BookImagesContainer, BookImageCover, BookImageSpread } from "../../components/books/book-images";
import { BookAboutParagraph } from "../../components/books/book-info";
import AspectBox from "../../components/aspect-box";
import { LazyImage } from "../../components/lazy-image";
import { Quote } from "../../components/quote";

export function WhatsYourRedRubberBall(props) {
  return (
    <Page>
      <Helmet>
        <title>What's Your Red Rubber Ball?! by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>

        <BackToBooks />

        <PageHeader>
          What’s Your Red Rubber Ball?!
        </PageHeader>

        <BookAboutParagraph>
          In a boldly designed, highly energetic book, Kevin leads readers through a series of exercises designed to help them discover their Red Rubber Ball — a dream to chase for a lifetime. With a cardboard box to be decorated, punch-out inspiration cards, a removable dream statement, and gatefold pages that can be written on, this engaging book offers tweens and teens a fun, accessible way to think about their hopes and dreams.
        </BookAboutParagraph>

        <BookImagesContainer>

          <BookImageCover>
            <AspectBox ratio={1}>
              <LazyImage src="/images/books/whats-your-red-rubber-ball/whats-your-red-rubber-ball-cover.jpg" alt="What's Your Red Rubber Ball cover" />
            </AspectBox>
          </BookImageCover>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/books/whats-your-red-rubber-ball/whats-your-red-rubber-ball-spread-1.jpg" alt="What's Your Red Rubber Ball interior page" />
            </AspectBox>
          </BookImageSpread>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/books/whats-your-red-rubber-ball/whats-your-red-rubber-ball-spread-2.jpg" alt="What's Your Red Rubber Ball interior page" />
            </AspectBox>
          </BookImageSpread>

        </BookImagesContainer>

        <Quote
          quote="A combination of workbook, journal, and project guide, it is designed to keep that age group interested and involved. Children in that tween and teen age sometime have a hard time finding things to motivate themselves in school. What's Your Red Rubber Ball?! may provide the encouragement they need, to see beyond their here-and-now problems and find something they can dream for."
          by="Sacramento Book Review"
        />
        
        <BookSellersContainer>
          <BookSellersHeader msg="Download"/>
          <BookSellerLink href="https://files.acrobat.com/a/preview/45f89663-6ab4-4864-ae62-d3d324292cd9" name="WYRRB?! Interactive Exercises PDF" />
        </BookSellersContainer>

      </PageContentWidth>
    </Page>
  )
}

