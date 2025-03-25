import React from "react";

interface BlogPost {
  image: string;
  category: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  date: string;
}

interface RelatedPostsProps {
  title: string;
  subtitle: string;
  description: string;
  posts: BlogPost[];
}

const BlogPostCard: React.FC<BlogPost> = ({
  image,
  category,
  title,
  description,
  authorImage,
  authorName,
  date,
}) => {
  return (
    <div className="min-w-80 flex-1 shrink basis-[0%]">
      <img
        src={image}
        className="aspect-[1.5] object-contain w-full rounded-2xl"
        alt={title}
      />
      <div className="flex w-full flex-col items-stretch mt-4">
        <div className="w-full">
          <div className="text-[#6941C6] text-sm font-semibold leading-none">
            {category}
          </div>
          <div className="w-full mt-2">
            <div className="flex w-full gap-4">
              <div className="text-[#181D27] text-lg font-semibold leading-loose flex-1 shrink basis-[0%]">
                {title}
              </div>
              <div className="w-6 pt-0.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca80ee67f04bdbcd6f9e8604f54df63b70dfcc00?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt="External link"
                />
              </div>
            </div>
            <div className="text-[#535862] text-ellipsis text-base font-normal leading-6 mt-1">
              {description}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm leading-none mt-5">
          <img
            src={authorImage}
            className="aspect-[1/1] object-contain w-10 self-stretch shrink-0 my-auto"
            alt={authorName}
          />
          <div className="self-stretch my-auto">
            <div className="text-[#181D27] font-semibold">{authorName}</div>
            <div className="text-[#535862] font-normal">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({
  title,
  subtitle,
  description,
  posts,
}) => {
  return (
    <section className="items-center bg-white flex w-full flex-col overflow-hidden py-24 max-md:max-w-full">
      <div className="w-full max-w-screen-xl px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full gap-[32px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="min-w-80 flex-1 shrink basis-[0%] max-w-screen-md max-md:max-w-full">
            <div className="w-full font-semibold max-md:max-w-full">
              <div className="text-[#6941C6] text-base max-md:max-w-full">
                {subtitle}
              </div>
              <h2 className="text-[#181D27] text-4xl leading-none tracking-[-0.72px] mt-3 max-md:max-w-full">
                {title}
              </h2>
            </div>
            <div className="text-[#535862] text-xl font-normal mt-5 max-md:max-w-full">
              {description}
            </div>
          </div>
          <div className="flex gap-3 text-base text-white font-semibold">
            <button className="justify-center items-center border-[color:var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-[#7F56D9] flex gap-1.5 overflow-hidden px-[18px] py-3 rounded-lg border-2 border-solid">
              <div className="self-stretch my-auto px-0.5">View all posts</div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full gap-[48px_32px] flex-wrap max-md:max-w-full">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
