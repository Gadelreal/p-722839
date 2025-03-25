
import React from "react";

interface BlogHeaderProps {
  date: string;
  title: string;
  description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <div className="items-center bg-white flex w-full flex-col py-24 max-md:max-w-full">
      <div className="w-full max-w-screen-xl mx-auto px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col max-md:max-w-full">
          <div className="w-[768px] max-w-screen-md max-md:max-w-full">
            <div className="w-full font-semibold max-md:max-w-full">
              <div className="text-[#6941C6] text-base max-md:max-w-full">
                {date}
              </div>
              <h1 className="text-[#181D27] text-5xl leading-none tracking-[-0.96px] mt-3 max-md:max-w-full max-md:text-[40px]">
                {title}
              </h1>
            </div>
            <div className="text-[#535862] text-xl font-normal leading-[30px] mt-6 max-md:max-w-full">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
