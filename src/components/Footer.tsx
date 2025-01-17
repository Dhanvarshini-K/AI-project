import * as React from "react";
import { FooterLink, SocialLink } from "../types/types";

const footerLinks: FooterLink[] = [
  { label: "Home", url: "/" },
  { label: "Insights", url: "/insights" },
  { label: "Services", url: "/services" },
  { label: "About us", url: "/about" },
];

const socialLinks: SocialLink[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80ab57bc225200c3f2f1be3dba75dd5aaba26d8d72728b018adbd4d946062e8d?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    url: "#",
    alt: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7ee89e61a81b9335930f8cfd7e2bb42d622129e6206564db6a8d8f0cd6e5528?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    url: "#",
    alt: "Twitter",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e7b94f1927addff251de0646bb52b2fd31d4961c963933f7d31bb59243416a3?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    url: "#",
    alt: "LinkedIn",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebdab17af40719ac8c53a025a52cf24f7de9315f873fc41519e4c57f72028090?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    url: "#",
    alt: "Instagram",
  },
];

export function Footer() {
  return (
    <div className="flex flex-wrap gap-10 items-start px-20 pt-12 pb-28 w-full bg-violet-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61fce564f37007456773ba391d6e8949305305bf9ee6bc18a0413c847ef09a41?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
        alt="NuStartz Logo"
        className="object-contain shrink-0 max-w-full aspect-[2.72] w-[174px]"
      />
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl font-[415] text-neutral-500 max-md:mt-10">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="self-start mt-1"
                  tabIndex={0}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
              <div className="text-2xl font-[415] text-neutral-500 max-md:mr-2.5">
                Website - www.nustartz.com
              </div>
              <div className="mt-1 text-2xl font-[415] text-neutral-500">
                Email - contact@NuStartz.com
              </div>
              <div className="self-start mt-1 text-2xl font-[415] text-neutral-500">
                Mobile - (+1) 732-983-1325
              </div>
              <div className="flex gap-3 self-start mt-10">
                {socialLinks.map((social) => (
                  <a
                    key={social.alt}
                    href={social.url}
                    tabIndex={0}
                    aria-label={`Visit our ${social.alt} page`}
                  >
                    <img
                      loading="lazy"
                      src={social.icon}
                      alt={social.alt}
                      className="object-contain shrink-0 w-8 aspect-square"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
