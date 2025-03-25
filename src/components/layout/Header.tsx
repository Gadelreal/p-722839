import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex min-h-20 w-full flex-col items-center justify-center max-md:max-w-full">
      <div className="flex w-[1280px] max-w-full items-center gap-4 flex-wrap px-8 max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-5 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="self-stretch flex w-[139px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dce85a63f8a9c2b6955b4cf332bd9f81d55493d?placeholderIfAbsent=true"
              className="aspect-[4.35] object-contain w-[139px]"
              alt="Logo"
            />
          </div>
          <nav className="self-stretch flex min-w-60 items-center gap-0.5 text-base text-[#414651] font-semibold whitespace-nowrap my-auto max-md:max-w-full">
            <div className="self-stretch flex flex-col items-center my-auto">
              <div className="flex items-center gap-0.5 overflow-hidden justify-center px-1.5 py-1 rounded-lg">
                <div className="self-stretch my-auto px-0.5">Products</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/498b5de449055a2eda4ce2f5b30807b13a39a8a2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Dropdown arrow"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center my-auto">
              <div className="flex items-center gap-0.5 overflow-hidden justify-center px-1.5 py-1 rounded-lg">
                <div className="self-stretch my-auto px-0.5">Services</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/498b5de449055a2eda4ce2f5b30807b13a39a8a2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Dropdown arrow"
                />
              </div>
            </div>
            <div className="self-stretch flex items-center gap-1 overflow-hidden justify-center my-auto px-1.5 py-1 rounded-lg">
              <div className="self-stretch my-auto px-0.5">Pricing</div>
            </div>
            <div className="self-stretch flex flex-col items-center my-auto">
              <div className="flex items-center gap-0.5 overflow-hidden justify-center px-1.5 py-1 rounded-lg">
                <div className="self-stretch my-auto px-0.5">Resources</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/498b5de449055a2eda4ce2f5b30807b13a39a8a2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt="Dropdown arrow"
                />
              </div>
            </div>
            <div className="self-stretch flex items-center gap-1 overflow-hidden justify-center my-auto px-1.5 py-1 rounded-lg">
              <div className="self-stretch my-auto px-0.5">About</div>
            </div>
          </nav>
        </div>
        <div className="self-stretch flex items-center gap-3 text-base font-semibold my-auto">
          <button className="justify-center items-center border border-[color:var(--Gray-300,#D5D7DA)] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white self-stretch flex gap-1.5 overflow-hidden text-[#414651] my-auto px-4 py-2.5 rounded-lg border-solid">
            <div className="self-stretch my-auto px-0.5">Log in</div>
          </button>
          <button className="justify-center items-center border-[color:var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-[#7F56D9] self-stretch flex gap-1.5 overflow-hidden text-white my-auto px-4 py-2.5 rounded-lg border-2 border-solid">
            <div className="self-stretch my-auto px-0.5">Sign up</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
