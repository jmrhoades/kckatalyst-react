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


export function RulesOfTheRedRubberBall(props) {
  return (
    <Page>
      <Helmet>
        <title>Rules Of The Red Rubber Ball by Kevin Carroll</title>
      </Helmet>
      <PageContentWidth>
        <BackToBooks />

        <PageHeader>
          Rules Of The Red Rubber Ball
        </PageHeader>

        <BookImagesContainer>

        <BookImageCover>
          <AspectBox ratio={1}>
            <LazyImage src="/images/books/rules-of-the-red-rubber-ball/rules-of-the-red-rubber-ball-cover.jpg" alt="Rules of the Red Rubber Ball cover" />
          </AspectBox>
        </BookImageCover>

        <BookAboutParagraph>
          With simple but delightful storytelling, Kevin channels his childhood passion for sport and play into a universally appealing blueprint for life. Drawing wisdom from the playgrounds of his youth, where he spent hour upon hour sharpening his body and his mind, Kevin shares with readers his Rules of the Red Rubber Ball — how to achieve maximum human potential through the power of passion and creativity.
        </BookAboutParagraph>

        <BookImageSpread>
          <AspectBox ratio={0.7716049383}>
            <LazyImage src="/images/books/rules-of-the-red-rubber-ball/rules-of-the-red-rubber-ball-spread-1.jpg" alt="Rules of the Red Rubber Ball interior page" />
          </AspectBox>
        </BookImageSpread>

        <BookAboutParagraph>
          Finding your own ‘red rubber ball’ and chasing it to your heart's content, he argues, is the surest route to peace, prosperity, and happiness. Over the years as an athletic trainer, creative catalyst for business and public speaker, Kevin has transformed his philosophy into seven simple rules that any successful leader will endorse.
        </BookAboutParagraph>


        <BookImageSpread>
          <AspectBox ratio={0.7716049383}>
            <LazyImage src="/images/books/rules-of-the-red-rubber-ball/rules-of-the-red-rubber-ball-spread-2.jpg" alt="Rules of the Red Rubber Ball interior page" />
          </AspectBox>
        </BookImageSpread>

        </BookImagesContainer>
        
        <Quote
          quote="...adult’s version of Dr. Seuss’s Oh, the Places You’ll Go! — a pocket-size guide to finding your way in life."
          by="Newsweek"
        />

        <BookSellersContainer>
          <BookSellersHeader msg="Available from" />
          <BookSellerLink href="https://www.amazon.com/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon US" />
          <BookSellerLink href="https://www.amazon.ca/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon Canada" />
          <BookSellerLink href="https://www.amazon.co.uk/Rules-Red-Rubber-Ball-Sustain/dp/1933060026/ref=pd_bbs_sr_1?ie=UTF8&s=books" name="Amazon UK" />
          <BookSellerLink href="https://www.rainydaybooks.com/book/9781933060026" name="Rainy Day Books" />
        </BookSellersContainer>

      </PageContentWidth>
    </Page>
  )
}

