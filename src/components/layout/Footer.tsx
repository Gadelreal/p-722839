import React from "react";

const FooterLinkColumn = ({
  title,
  links,
  badges = {},
}: {
  title: string;
  links: string[];
  badges?: Record<string, string>;
}) => (
  <div className="min-w-24 font-semibold flex-1 shrink basis-[0%]">
    <div
      className="text-[#717680] text-sm leading-none"
      role="heading"
      aria-level={2}
    >
      {title}
    </div>
    <div className="flex w-full flex-col text-base text-[#535862] mt-4">
      {links.map((link, index) => (
        <div className="flex items-center gap-2 mt-3 first:mt-0" key={index}>
          <div className="self-stretch gap-1.5 overflow-hidden my-auto cursor-pointer hover:text-[#7F56D9] transition-colors">
            {link}
          </div>
          {badges[link] && (
            <div className="self-stretch border border-[color:var(--Gray-300,#D5D7DA)] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white text-xs text-[#414651] font-medium text-center my-auto px-1.5 py-0.5 rounded-md border-solid">
              {badges[link]}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="items-center bg-white flex w-full flex-col overflow-hidden pt-16 pb-12 max-md:max-w-full">
      <div className="w-full max-w-screen-xl px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full gap-8 flex-wrap max-md:max-w-full">
          <FooterLinkColumn
            title="Product"
            links={[
              "Overview",
              "Features",
              "Solutions",
              "Tutorials",
              "Pricing",
              "Releases",
            ]}
            badges={{ Solutions: "New" }}
          />
          <FooterLinkColumn
            title="Company"
            links={[
              "About us",
              "Careers",
              "Press",
              "News",
              "Media kit",
              "Contact",
            ]}
          />
          <FooterLinkColumn
            title="Resources"
            links={[
              "Blog",
              "Newsletter",
              "Events",
              "Help centre",
              "Tutorials",
              "Support",
            ]}
          />
          <FooterLinkColumn
            title="Use cases"
            links={[
              "Startups",
              "Enterprise",
              "Government",
              "SaaS centre",
              "Marketplaces",
              "Ecommerce",
            ]}
          />
          <FooterLinkColumn
            title="Social"
            links={[
              "Twitter",
              "LinkedIn",
              "Facebook",
              "GitHub",
              "AngelList",
              "Dribbble",
            ]}
          />
          <FooterLinkColumn
            title="Legal"
            links={[
              "Terms",
              "Privacy",
              "Cookies",
              "Licenses",
              "Settings",
              "Contact",
            ]}
          />
        </div>
      </div>
      <div className="w-full max-w-screen-xl mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="justify-between items-center content-center gap-y-6 flex-wrap border-t-[color:var(--Gray-200,#E9EAEB)] flex w-full gap-[24px_100px] pt-8 border-t border-solid max-md:max-w-full">
          <div className="self-stretch flex w-[139px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00b95ea06d00f622f058c59bc9a8d1fae87ee8a?placeholderIfAbsent=true"
              className="aspect-[4.35] object-contain w-[139px]"
              alt="Logo"
            />
          </div>
          <div className="text-[#717680] text-base font-normal self-stretch my-auto">
            © 2077 Untitled UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
