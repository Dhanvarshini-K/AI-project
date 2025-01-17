import * as React from "react";
import { NavLink } from "./NavLink";
import { ContactInfo } from "./ContactInfo";

export const Footer: React.FC = () => {
  const navLinks = ["Home", "Insights", "Services", "About us"];

  return (
    <div className="flex flex-wrap gap-10 items-start px-20 pt-12 pb-28 mt-11 w-full bg-violet-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61fce564f37007456773ba391d6e8949305305bf9ee6bc18a0413c847ef09a41?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
        alt="Company logo"
        className="object-contain shrink-0 max-w-full aspect-[2.72] w-[174px]"
      />
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl font-[415] text-neutral-500 max-md:mt-10">
              {navLinks.map((link, index) => (
                <NavLink key={index} label={link} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <ContactInfo
              website="www.nustartz.com"
              email="contact@NuStartz.com"
              mobile="(+1) 732-983-1325"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
