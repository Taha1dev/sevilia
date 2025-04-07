interface ImageOverlayProps {
  imagePath: string;
  className?: string;
  imgClassName?: string;
}

export default function ImageOverlay({
  imagePath,
  className = '',
  imgClassName = '',
}: ImageOverlayProps) {
  return (
    <div className={`relative w-full ${className} my-8`}>
      <div className="bg-main w-full h-40 md:h-56 lg:h-72 xl:h-80"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative -mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48">
          <img
            src={imagePath}
            alt="image banner"
            className={`w-full h-auto object-cover rounded-3xl shadow-xl ${imgClassName}`}
          />
        </div>
      </div>
    </div>
  );
}
