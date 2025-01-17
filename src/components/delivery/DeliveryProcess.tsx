import * as React from "react";
import { DeliverySection } from "./DeliverySection";
import { DeliveryData } from "./types";

const deliveryData: DeliveryData = {
  title: "How we deliver",
  sections: [
    {
      title: "Build",
      description:
        "We kickstart your growth by building dedicated teams tailored to your product, technology, and marketing needs. From assembling skilled developers and tech support to strategizing your branding, we handle team setup, product development, and infrastructure—all aligned with your vision to set a strong foundation for success.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/edf7b3abd35166e860147c5a36fb12ef06125c2e85015b7c2b7d3f5f2a34d7f5?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Team building and development process illustration",
      dotPosition: "end",
    },
    {
      title: "Operate",
      description:
        "With your team and projects in place, we manage day-to-day operations, ensuring seamless coordination across development, tech support, and marketing. Our expert oversight optimizes team performance and project outcomes, so you can focus on strategic decisions while we handle the execution and drive your vision forward.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23657202508352e26b3f4a471797dde02c00204fd1a51deee36c43e5128ede7c?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Operations and management illustration",
      isReversed: true,
    },
    {
      title: "Transfer",
      description:
        "When your startup is ready to take full control, we seamlessly transfer the team, knowledge, and processes to you. Our comprehensive handover, including training and ongoing support, ensures that your team can confidently manage and scale operations independently as your own.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8f3cfd5dc6473a7ca817e70a6fa580e5d7f5a993b6efc85fc85b3ca73ba550f?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Knowledge transfer and handover process illustration",
    },
  ],
};

export const DeliveryProcess: React.FC = () => {
  return (
    <div className="flex z-10 flex-col justify-center items-center px-20 py-24 w-full bg-slate-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col -mb-5 ml-2.5 w-full max-w-[1187px] max-md:mb-2.5 max-md:max-w-full">
        <h1 className="self-center text-5xl tracking-tight leading-none text-center font-[425] text-zinc-800 max-md:text-4xl">
          {deliveryData.title}
        </h1>

        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          {deliveryData.sections.map((section, index) => (
            <div
              key={section.title}
              className={
                index !== 0 ? "mt-36 max-md:mt-10 max-md:max-w-full" : ""
              }
            >
              <DeliverySection {...section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
