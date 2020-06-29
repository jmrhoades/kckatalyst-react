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


export function TheRedRubberBallAtWork(props) {
  return (
    <Page key={props.key}>
      <Helmet>
        <title>The Red Rubber Ball At Work by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>
        <BackToBooks />
        <PageHeader>
          The Red Rubber Ball At Work
      </PageHeader>

        <BookImagesContainer>

          <BookImageCover>
            <AspectBox ratio={1}>
              <LazyImage src="/images/books/the-red-rubber-ball-at-work/the-red-rubber-ball-at-work-cover.jpg" />
            </AspectBox>
          </BookImageCover>

          <BookAboutParagraph>
            How do you ignite creativity, problem solving, and risk taking to score big in business? Kevin thinks it’s child’s play! Kevin has turned his childhood passion for playing ball into a bestselling franchise. In this fun and thoughtful follow-up to his bestselling Rules of the Red Rubber Ball (2007), he switches the playing field to the workplace, where innovation, motivation, engagement, and teamwork are the headline issues. Drawing on “play profiles” from thought leaders, change agents, and business leaders, he explains how to bring a sense of play into the workplace to stimulate.
        </BookAboutParagraph>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/books/the-red-rubber-ball-at-work/the-red-rubber-ball-at-work-spread-1.jpg" />
            </AspectBox>
          </BookImageSpread>

          <BookAboutParagraph>
            Fully illustrated, with 33 profiles of successful “players” including ESPN/ABC Sports President George Bodenheimer, bestselling author Malcolm Gladwell, actor Dwayne Johnson (“the Rock”), Food Network host Duff Goldman, South Bronx activist Majora Carter, renowned author Paulo Coehlo, and many others.
        </BookAboutParagraph>

          <BookImageSpread>
            <AspectBox ratio={0.7716049383}>
              <LazyImage src="/images/books/the-red-rubber-ball-at-work/the-red-rubber-ball-at-work-spread-2.jpg" />
            </AspectBox>
          </BookImageSpread>

          <Quote
            quote="This entertaining, pocket-sized book builds on Carroll's self-help series with profiles of 33 successful workers who illustrate the value of productive play? Though the larger lesson seems to be self-apparent (the way to have fun at work is to choose a playful career), the book is nevertheless inspiring and clever, with a lively layout and energetic writing."
            by="Publishers Weekly"
          />

          <BookSellersContainer>
            <BookSellersHeader msg="Available from" />
            <BookSellerLink href="https://www.amazon.com/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon US" />
            <BookSellerLink href="https://www.amazon.ca/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon Canada" />
            <BookSellerLink href="https://www.amazon.co.uk/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon UK" />
            <BookSellerLink href="https://www.rainydaybooks.com/book/9781933060026" name="Rainy Day Books" />
          </BookSellersContainer>

        </BookImagesContainer>

      </PageContentWidth>
    </Page>
  )
}



