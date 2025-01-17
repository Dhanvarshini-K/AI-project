import * as React from "react";
import { ValuePropProps } from "../types/types";

export function ValueProp({ icon, title, alt }: ValuePropProps) {
  return (
    <div className="flex flex-col grow text-3xl text-center text-black max-md:mt-10">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain self-center max-w-full aspect-square w-[100px]"
      />
      <div className="mt-6">{title}</div>
    </div>
  );
}
