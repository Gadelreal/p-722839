import React from "react";

interface BlogQuoteProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

const BlogQuote: React.FC<BlogQuoteProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <div className="flex w-full items-stretch gap-5 flex-wrap max-md:max-w-full">
      <div className="bg-[rgba(105,65,198,1)] flex w-0.5 shrink-0 h-56" />
      <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] py-2 max-md:max-w-full">
        <blockquote className="text-[#181D27] text-2xl italic font-medium leading-8 max-md:max-w-full">
          <span style={{ fontStyle: "italic" }}>{quote}</span>
        </blockquote>
        <div className="flex items-center gap-3 text-base mt-8">
          <img
            src={authorImage}
            className="aspect-[1/1] object-contain w-12 self-stretch shrink-0 my-auto"
            alt={authorName}
          />
          <div className="self-stretch my-auto">
            <div className="text-[#181D27] font-semibold">{authorName}</div>
            <div className="text-[#535862] font-normal">{authorTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogQuote;
