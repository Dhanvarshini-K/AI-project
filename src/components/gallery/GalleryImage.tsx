import * as React from "react";
import { ImageProps } from "./types";

export const GalleryImage: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
};
