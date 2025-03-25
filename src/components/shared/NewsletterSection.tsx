import React, { useState } from "react";

interface NewsletterSectionProps {
  title: string;
  description: string;
  buttonText: string;
  privacyText: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title,
  description,
  buttonText,
  privacyText,
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsValid(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      return;
    }

    // Here you would typically send the email to your newsletter service
    console.log("Subscribing email:", email);
    // Reset form after submission
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="justify-center items-center bg-white flex w-full flex-col overflow-hidden pb-24 max-md:max-w-full">
      <div className="w-full max-w-screen-xl px-8 max-md:max-w-full max-md:px-5">
        <div className="content-start flex-wrap bg-neutral-50 flex w-full gap-8 p-16 rounded-2xl max-md:max-w-full max-md:px-5">
          <div className="min-w-80 flex-1 shrink basis-[0%] max-w-screen-md max-md:max-w-full">
            <h2 className="text-[#181D27] text-3xl font-semibold leading-none max-md:max-w-full">
              {title}
            </h2>
            <div className="text-[#535862] text-xl font-normal mt-4 max-md:max-w-full">
              {description}
            </div>
          </div>
          <form
            className="flex min-w-60 gap-4 w-[480px] max-md:max-w-full"
            onSubmit={handleSubmit}
          >
            <div className="min-w-60 font-normal flex-1 shrink basis-9">
              <div className="w-full text-base text-[#717680]">
                <div
                  className={`items-center border ${!isValid ? "border-red-500" : "border-[color:var(--Gray-300,#D5D7DA)]"} shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white flex w-full gap-2 px-3.5 py-3 rounded-lg border-solid`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="text-ellipsis self-stretch flex-1 shrink basis-[0%] min-w-60 w-full gap-2 my-auto bg-transparent outline-none"
                    required
                  />
                </div>
              </div>
              <div className="text-[#535862] text-sm leading-none mt-1.5">
                {privacyText.split("privacy policy").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>
                      {part}
                      <span className="underline cursor-pointer">
                        privacy policy
                      </span>
                    </React.Fragment>
                  ) : (
                    part
                  ),
                )}
              </div>
              {!isValid && (
                <div className="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </div>
              )}
            </div>
            <button
              type="submit"
              className="justify-center items-center border-[color:var(--Gradient-skeuemorphic-gradient-border,rgba(255,255,255,0.12))] shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-[#7F56D9] flex gap-1.5 overflow-hidden text-base text-white font-semibold whitespace-nowrap px-[18px] py-3 rounded-lg border-2 border-solid"
            >
              <div className="self-stretch my-auto px-0.5">{buttonText}</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
