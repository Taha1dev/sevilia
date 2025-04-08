import Partners from '@/components/home/partners/partners';
import Hero from '@/components/home/hero/hero';
import OfferWithImage from '@/components/chunks/offer-with-image';
import Vision from '@/components/home/vision/vision';
import ImageOverlay from '@/components/chunks/image-overlay';
import BooksList from '@/components/home/categories/categories';
import Books from '@/components/home/books/books';
import WhyUs from '@/components/home/whyus/whyus';
import NewsLetter from '@/components/home/newsletter/news-letter';

export default function Home() {
  return (
    <>
      <Hero />
      <OfferWithImage
        imagePath="/images/banner.png"
        title="Rivale 25%"
        subtitle="Auf allen Lehrbüchern"
        className="my-8"
      />
      <Books />
      <BooksList />
      <Vision />
      <WhyUs />
      <ImageOverlay imagePath="/images/overlay.png" />
      <NewsLetter />
      <Partners />
    </>
  );
}
