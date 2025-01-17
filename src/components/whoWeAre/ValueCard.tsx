import * as React from "react";
import { ValueCardProps } from "./types";

export const ValueCard: React.FC<ValueCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col grow text-3xl text-center text-black max-md:mt-10">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} icon`}
        className="object-contain max-w-full aspect-square w-[100px] max-md:ml-2.5"
      />
      <div className="mt-6">{title}</div>
    </div>
  );
};
