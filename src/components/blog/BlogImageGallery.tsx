import React, { useState } from "react";

interface BlogImageGalleryProps {
  images: string[];
}

const BlogImageGallery: React.FC<BlogImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex w-full max-w-screen-xl flex-col mt-16 pl-8 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <div className="flex gap-8 flex-wrap max-md:max-w-full">
          {visibleImages.map((image, index) => {
            // Different aspect ratios for different positions
            const aspectClass =
              index === 0
                ? "aspect-[0.67] w-[480px]"
                : index === 1
                  ? "aspect-[1.5] w-[720px]"
                  : "aspect-[1.5] w-[840px]";

            return (
              <img
                key={index}
                src={image}
                className={`object-contain min-w-60 shrink-0 ${aspectClass} max-md:max-w-full`}
                alt={`Gallery image ${index + 1}`}
              />
            );
          })}
        </div>
        <div className="flex gap-8 mt-8">
          <button
            className="justify-center items-center border border-[color:var(--Gray-200,#E9EAEB)] flex min-h-14 gap-3 w-14 h-14 rounded-[28px] border-solid"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e3e97b064b60d5250c5c3e1c0e4f42ef2d8c8e9?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Previous"
            />
          </button>
          <button
            className="justify-center items-center border border-[color:var(--Gray-200,#E9EAEB)] flex min-h-14 gap-3 w-14 h-14 rounded-[28px] border-solid"
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
            aria-label="Next image"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9e59236d884a9b0db7d12810fb64478349a72e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogImageGallery;
