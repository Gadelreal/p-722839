
import React, { useState } from "react";

interface BlogImageGalleryProps {
  images: string[];
}

const BlogImageGallery: React.FC<BlogImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate the indexes of images to display with wrapping
  const getVisibleImageIndexes = () => {
    const totalImages = images.length;
    if (totalImages === 0) return [];
    
    return [
      currentIndex % totalImages,
      (currentIndex + 1) % totalImages,
      (currentIndex + 2) % totalImages
    ];
  };

  const visibleIndexes = getVisibleImageIndexes();

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  if (!images.length) return null;

  return (
    <div className="flex w-full max-w-screen-xl flex-col mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <div className="flex gap-4 flex-wrap justify-between max-md:max-w-full">
          {visibleIndexes.map((imgIndex, displayIndex) => {
            // Different widths for different positions as shown in the reference image
            const getWidthClass = () => {
              if (displayIndex === 0) return "w-[30%] aspect-[0.7]"; // Left image (tallest)
              if (displayIndex === 1) return "w-[35%] aspect-[1.2]"; // Middle image (wider)
              return "w-[30%] aspect-[0.9]"; // Right image
            };

            return (
              <div key={displayIndex} className={`${getWidthClass()} overflow-hidden rounded-xl`}>
                <img
                  src={images[imgIndex]}
                  className="object-cover w-full h-full"
                  alt={`Gallery image ${imgIndex + 1}`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="justify-center items-center border border-[#E9EAEB] flex w-12 h-12 rounded-full hover:bg-gray-50"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="justify-center items-center border border-[#E9EAEB] flex w-12 h-12 rounded-full hover:bg-gray-50"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogImageGallery;
