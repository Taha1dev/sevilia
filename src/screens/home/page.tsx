import Partners from '@/components/home/partners/partners';
import Hero from '@/components/home/hero/hero';
import OfferWithImage from '@/components/chunks/offer-with-image';
import Vision from '@/components/home/vision/vision';
import ImageOverlay from '@/components/chunks/image-overlay';
import BookListPage from '@/components/home/categories/categories';
import Books from '@/components/home/books/books';

export default function Home() {
  return (
    <div>
      <Hero />
      <OfferWithImage
        imagePath="/images/banner.png"
        title="Rivale 25%"
        subtitle="Auf allen Lehrbüchern"
        className="my-8"
      />
      <ImageOverlay imagePath="/images/overlay.png" />
      <Vision />
      <Books />
      <BookListPage />
      <Partners />
    </div>
  );
}
