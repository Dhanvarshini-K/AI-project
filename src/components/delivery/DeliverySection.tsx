import * as React from "react";
import { SectionProps } from "./types";

export const DeliverySection: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
  dotPosition = "start",
}) => {
  const textContent = (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
        <div
          className={`flex flex-col ${
            dotPosition === "end" ? "self-end" : ""
          } max-w-full text-6xl text-indigo-600 whitespace-nowrap font-[415] w-[172px] max-md:mr-2.5 max-md:text-4xl`}
        >
          <div className="flex shrink-0 w-3 h-3.5 bg-indigo-600 rounded-2xl" />
          <div
            className={`${
              dotPosition === "end" ? "self-end" : ""
            } mt-2 max-md:text-4xl`}
          >
            {title}
          </div>
        </div>
        <div className="mt-40 text-2xl leading-9 font-[305] text-neutral-600 max-md:mt-10 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );

  return (
    <div className="flex gap-5 max-md:flex-col">
      {isReversed ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};
