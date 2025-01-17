import * as React from "react";
import { LearnMoreButtonProps } from "./types";

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  text,
  iconSrc,
}) => {
  return (
    <button className="flex flex-col justify-center px-8 py-4 mt-32 max-w-full text-xl text-white bg-indigo-600 rounded-xl font-[405] w-[230px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-4 items-center w-full">
        <div className="self-stretch my-auto">{text}</div>
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-square w-[30px]"
        />
      </div>
    </button>
  );
};
