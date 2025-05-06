
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
  ];

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="justify-center relative flex min-h-[776px] w-full flex-col bg-[#F1F1F1] rounded-lg overflow-hidden shadow-sm max-md:max-w-full max-md:py-[100px]">
      {/* Navigation buttons */}
      <button 
        onClick={goToPrevImage}
        className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 text-[#00262F]" />
      </button>
      
      <button 
        onClick={goToNextImage}
        className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 text-[#00262F]" />
      </button>

      {/* Main image */}
      <div className="flex items-center justify-center h-full py-[175px]">
        <img
          src={images[currentImage]}
          className="aspect-[1.34] object-contain w-[572px] z-0 max-w-full"
          alt="Product image"
        />
      </div>

      {/* Thumbnails */}
      <div className="absolute z-0 flex items-center gap-2 right-5 bottom-5">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[40px] cursor-pointer border-2 transition-all ${
              currentImage === index ? 'border-[#00262F] scale-110' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      
      {/* Image counter */}
      <div className="text-[#00262F] bg-white/80 text-sm font-medium leading-6 absolute z-0 px-3 py-1 rounded-full left-[52px] bottom-5">
        {currentImage + 1} van {images.length}
      </div>
    </div>
  );
};

export default ProductGallery;
