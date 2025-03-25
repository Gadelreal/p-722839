import React from "react";

interface BlogImageProps {
  src: string;
  caption: string;
  creditUrl: string;
  creditText: string;
}

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  caption,
  creditUrl,
  creditText,
}) => {
  return (
    <div className="w-full max-md:max-w-full">
      <img
        src={src}
        className="aspect-auto object-contain w-full rounded-xl max-md:max-w-full"
        alt={caption}
      />
      <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-1.5 mt-4 max-md:max-w-full">
        {caption}{" "}
        <a
          href={creditUrl}
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {creditText}
        </a>
      </div>
    </div>
  );
};

export default BlogImage;
