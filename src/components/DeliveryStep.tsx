import * as React from "react";
import { DeliveryStepProps } from "../types/types";

export function DeliveryStep({
  title,
  description,
  image,
  imageAlt,
  isReversed = false,
}: DeliveryStepProps) {
  const content = (
    <>
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 self-start text-6xl leading-none text-center text-indigo-600 whitespace-nowrap font-[415] max-md:text-4xl">
            <div className="grow max-md:text-4xl">{title}</div>
            <div className="flex shrink-0 self-start mt-3.5 w-3 h-3 bg-indigo-600 rounded-2xl border border-indigo-600 border-solid" />
          </div>
          <div className="mt-24 text-2xl leading-9 font-[305] text-neutral-600 max-md:mt-10 max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={image}
          alt={imageAlt}
          className="object-contain w-full aspect-square max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </>
  );

  return (
    <div className="flex gap-5 max-md:flex-col">
      {isReversed ? content : content}
    </div>
  );
}
