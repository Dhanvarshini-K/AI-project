import * as React from "react";
import { GalleryImageProps } from "./types";

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  className,
  width,
  aspectRatio,
}) => {
  return (
    <div className={`flex flex-col w-3/12 max-md:ml-0 max-md:w-full`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-contain ${className} ${width} ${aspectRatio}`}
      />
    </div>
  );
};
