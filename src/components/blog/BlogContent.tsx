
import React from "react";
import BlogQuote from "./BlogQuote";
import BlogImage from "./BlogImage";

interface BlogContentProps {
  content: React.ReactNode;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="items-center bg-white flex w-full flex-col pb-24 max-md:max-w-full">
      <div className="w-full max-w-screen-xl mx-auto px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <article className="w-[720px] max-w-[720px] max-md:max-w-full">
            {content}
            <div className="justify-between content-start gap-y-6 flex-wrap border-t-[color:var(--Gray-200,#E9EAEB)] flex w-full gap-[24px_100px] pt-6 border-t border-solid max-md:max-w-full">
              <div className="flex items-center gap-3 text-base">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/71a4339082f0d1ff9fe958198cea9139f1276106?placeholderIfAbsent=true"
                  className="aspect-[1/1] object-contain w-12 self-stretch shrink-0 my-auto"
                  alt="Rene Wells"
                />
                <div className="self-stretch my-auto">
                  <div className="text-[#181D27] font-semibold">Rene Wells</div>
                  <div className="text-[#535862] font-normal">
                    Content Writer
                  </div>
                </div>
              </div>
              <div className="flex min-w-60 gap-2 text-sm font-medium whitespace-nowrap text-center leading-none justify-center">
                <div className="self-stretch border border-[color:var(--Brand-200,#E9D7FE)] bg-[#F9F5FF] text-[#6941C6] px-2.5 py-0.5 rounded-2xl border-solid">
                  Design
                </div>
                <div className="self-stretch border border-[color:var(--Indigo-200,#C7D7FE)] bg-[#EEF4FF] text-[#3538CD] px-2.5 py-0.5 rounded-2xl border-solid">
                  Architecture
                </div>
                <div className="self-stretch border border-[color:var(--Pink-200,#FCCEEE)] bg-[#FDF2FA] text-[#C11574] px-2.5 py-0.5 rounded-2xl border-solid">
                  Interviews
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

// Helper components for blog content structure
export const BlogSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <>
    <div className="w-full text-3xl text-[#181D27] font-semibold whitespace-nowrap leading-none max-md:max-w-full">
      <div className="max-md:max-w-full">{title}</div>
      <div className="flex min-h-5 w-full max-md:max-w-full" />
    </div>
    <div className="w-full text-lg text-[#535862] font-normal leading-7 max-md:max-w-full">
      {children}
    </div>
  </>
);

export const BlogSubsection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <>
    <div className="w-full text-2xl text-[#181D27] font-semibold leading-none max-md:max-w-full">
      <div className="flex min-h-8 w-full max-md:max-w-full" />
      <div className="max-md:max-w-full">{title}</div>
      <div className="flex min-h-4 w-full max-md:max-w-full" />
    </div>
    <div className="w-full text-lg text-[#535862] font-normal leading-7 max-md:max-w-full">
      {children}
    </div>
  </>
);

export const BlogCallout: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="w-full max-md:max-w-full">
    <div className="flex min-h-12 w-full max-md:max-w-full" />
    <div className="bg-neutral-50 w-full p-8 rounded-2xl max-md:max-w-full max-md:px-5">
      <div className="w-full text-2xl text-[#181D27] font-semibold leading-none max-md:max-w-full">
        <div className="max-md:max-w-full">{title}</div>
        <div className="flex min-h-4 w-full max-md:max-w-full" />
      </div>
      <div className="w-full text-lg text-[#535862] font-normal leading-7 max-md:max-w-full">
        {children}
      </div>
    </div>
    <div className="flex min-h-12 w-full max-md:max-w-full" />
  </div>
);

export default BlogContent;
