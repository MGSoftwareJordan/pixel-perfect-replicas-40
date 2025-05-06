import React, { useState } from 'react';

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

  return (
    <div className="justify-center relative flex min-h-[776px] w-full flex-col bg-[#F1F1F1] py-[175px] max-md:max-w-full max-md:py-[100px]">
      <img
        src={images[currentImage]}
        className="aspect-[1.34] object-contain w-[572px] self-center z-0 max-w-full"
        alt="Product image"
      />
      <div className="absolute z-0 flex items-center gap-2 right-5 bottom-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[40px] cursor-pointer"
          alt="Thumbnail 1"
          onClick={() => handleThumbnailClick(0)}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[40px] cursor-pointer"
          alt="Thumbnail 2"
          onClick={() => handleThumbnailClick(1)}
        />
      </div>
      <div className="text-[#00262F] text-xl font-normal leading-6 absolute z-0 w-[184px] h-[59px] left-[52px] bottom-5">
        1 van 6
      </div>
    </div>
  );
};

export default ProductGallery;