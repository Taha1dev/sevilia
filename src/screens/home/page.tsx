import Partners from '@/components/home/partners/partners';
import Hero from '@/components/home/hero/hero';
import OfferWithImage from '@/components/chunks/offer-with-image';
import WhyUs from '@/components/home/whyus/whyus';
import ImageOverlay from '@/components/chunks/image-overlay';

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
      <WhyUs />
      <Partners />
    </div>
  );
}
