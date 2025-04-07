import { useTranslation } from 'react-i18next';

interface OfferWithImageProps {
  imagePath: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function OfferWithImage({
  imagePath,
  title,
  subtitle,
  className = '',
}: OfferWithImageProps) {
  const { t } = useTranslation();
  return (
    <div className={`container mx-auto ${className}`}>
      <div
        className={`relative h-64 md:h-96 lg:h-[500px] w-full bg-cover bg-center rounded-xl overflow-hidden`}
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-start">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F0B861] mb-4">
              {t(title)}
            </h2>
            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              {t(subtitle)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
