
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface BlogImageGalleryProps {
  images: string[];
}

const BlogImageGallery: React.FC<BlogImageGalleryProps> = ({ images }) => {
  if (!images.length) return null;

  return (
    <div className="flex w-full max-w-screen-xl flex-col mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center md:basis-1/1">
              <div className="p-1 h-full flex items-center justify-center">
                <img
                  src={image}
                  className="object-cover h-[400px] w-full rounded-xl"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-start mt-4">
          <CarouselPrevious className="relative left-0 right-auto h-14 w-14 rounded-full border border-[#E9EAEB] bg-white hover:bg-gray-50" />
          <CarouselNext className="relative right-0 left-auto ml-4 h-14 w-14 rounded-full border border-[#E9EAEB] bg-white hover:bg-gray-50" />
        </div>
      </Carousel>
    </div>
  );
};

export default BlogImageGallery;
