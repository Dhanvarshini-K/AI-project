import * as React from "react";
import { NavItem } from "./NavItem";
import { Button } from "./Button";

const navItems = [
  { text: "Home", isActive: true },
  { text: "Insights", isActive: false },
  { text: "Services", isActive: false },
  { text: "Careers", isActive: false },
  { text: "About us", isActive: false },
];

export const HomePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col pt-px pb-3.5 w-full min-h-[920px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bf0d8993aec02bc81e87ad9a4986cf6841b4c655f3dcf0a26422aaf09fc2373?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
        alt="Background decoration"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-5 justify-between items-start px-20 pt-4 pb-8 w-full text-xl bg-white font-[405] shadow-[0px_4px_15px_rgba(0,0,0,0.05)] text-neutral-500 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9497edf4a1fa50fe8b63f7a4503a935107b6609243bc2b1a0a691ca73097e0?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
          alt="NuStartz logo"
          className="object-contain shrink-0 self-start max-w-full aspect-[3.23] w-[155px]"
        />
        <nav className="flex gap-10 my-auto max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} isActive={item.isActive} />
          ))}
        </nav>
      </div>
      <div className="relative self-end mt-24 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start text-xl max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl tracking-tighter bg-clip-text bg-[linear-gradient(107deg,#53E6DC_0%,#81D1EA_19.17%,#FFA6FF_49.17%,#7D68FF_80.17%)] font-[425] leading-[64px] max-md:text-4xl max-md:leading-10">
                Crafting the future of Startups.
              </h1>
              <p className="self-stretch mt-6 leading-8 font-[305] text-neutral-600 max-md:max-w-full">
                At NuStartz, we are your comprehensive partner in building and
                scaling your tech startup from the ground up—all the way to your
                Initial Public Offering (IPO). Our full suite of services is
                designed to support every aspect of your business, helping you
                transform your ideas into a thriving enterprise.
              </p>
              <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/43676442ac83ace79c385339dd16126bad3ee10f245b4cb517ce97cda7163a77?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be">
                GET IN TOUCH
              </Button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col mt-10 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between items-start max-w-full w-[551px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8d862eda0cfb42a4db19df54e01a27c0c7c697c1ada6a953760fb3b8e554ed?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
                  alt="Decorative element"
                  className="object-contain shrink-0 max-w-full rounded-none aspect-square w-[111px]"
                />
                <div className="flex flex-col justify-center items-center px-7 mt-3.5 bg-emerald-300 border-8 border-white border-solid h-[151px] rounded-[30px] shadow-[0px_0px_20px_rgba(131,238,195,0.5)] w-[151px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/14862e0d2d837a76227600f625d8b6ff73330ca991ce18d7632c6e9f214571a7?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
                    alt="Feature illustration"
                    className="object-contain aspect-square w-[93px]"
                  />
                </div>
              </div>
              <div className="flex flex-col pl-16 mt-40 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2478f889315731ae437d39d4f52a127e750ca4ed4d7a385906863488edd9b96?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
                  alt="Decorative element"
                  className="object-contain max-w-full rounded-none aspect-square w-[140px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c7e4fcda97f75483dcf8779b9e26e7e606f677d4598e25c662ed5e720452cd3?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
                  alt="Feature illustration"
                  className="object-contain self-end mt-16 max-w-full aspect-[2.48] w-[354px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
