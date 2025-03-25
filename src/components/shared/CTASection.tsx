import React from "react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  images: string[];
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  images,
}) => {
  return (
    <section className="justify-center items-center bg-white flex w-full flex-col overflow-hidden py-24 max-md:max-w-full">
      <div className="flex w-full max-w-screen-xl items-center gap-[40px_64px] justify-center flex-wrap px-8 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h2 className="text-[#181D27] text-5xl font-semibold leading-[60px] tracking-[-0.96px] max-md:max-w-full max-md:text-[40px] max-md:leading-[56px]">
              {title}
            </h2>
            <div className="text-[#535862] text-xl font-normal mt-6 max-md:max-w-full">
              {description}
            </div>
          </div>
          <div className="flex gap-3 text-base font-semibold mt-12 max-md:mt-10">
            <button className="justify-center items-center border border-[color:var(--Gray-300,#D5D7DA)] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white flex gap-1.5 overflow-hidden text-[#414651] px-[18px] py-3 rounded-lg border-solid">
              <div className="self-stretch my-auto px-0.5">
                {secondaryButtonText}
              </div>
            </button>
            <button className="justify-center items-center border-[color:var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-[#7F56D9] flex gap-1.5 overflow-hidden text-white px-[18px] py-3 rounded-lg border-2 border-solid">
              <div className="self-stretch my-auto px-0.5">
                {primaryButtonText}
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="self-center flex w-[336px] max-w-full items-stretch gap-4">
            <img
              src={images[0]}
              className="aspect-[1] object-contain w-40 shrink-0 max-w-full mt-20 max-md:mt-10"
              alt="CTA image 1"
            />
            <img
              src={images[1]}
              className="aspect-[0.67] object-contain w-40 shrink-0 max-w-full"
              alt="CTA image 2"
            />
          </div>
          <div className="mt-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[33%] max-md:w-full max-md:ml-0">
                <img
                  src={images[2]}
                  className="aspect-[1.5] object-contain w-48 shrink-0 max-w-full max-md:mt-4"
                  alt="CTA image 3"
                />
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src={images[3]}
                  className="aspect-[0.67] object-contain w-40 shrink-0 max-w-full grow max-md:mt-4"
                  alt="CTA image 4"
                />
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src={images[4]}
                  className="aspect-[1.5] object-contain w-48 shrink-0 max-w-full max-md:mt-4"
                  alt="CTA image 5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
