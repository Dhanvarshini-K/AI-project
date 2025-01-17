import * as React from "react";
import { GalleryImage } from "./GalleryImage";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5a34a1b3eadc8ed1e142c944170c8f25f4718f57fc817057fc44d3873bb9960?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 1",
    className: "self-stretch my-auto max-md:mt-10",
    width: "w-[328px]",
    aspectRatio: "aspect-[5.29]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/66c2ab302660c6cd8949aa3bd7b714c7d6887d5bdba5c2fd90227a2d3d70672a?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 2",
    className: "shrink-0 self-stretch my-auto max-w-full max-md:mt-10",
    width: "w-[303px]",
    aspectRatio: "aspect-[3.13]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/623962827a78550413a41f68d6b8d6b82e91accf31cfb89db4ac85973b0b1f76?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 3",
    className: "shrink-0 self-stretch my-auto max-w-full max-md:mt-10",
    width: "w-[265px]",
    aspectRatio: "aspect-[1.79]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bcf156900d954f5b152ebec0dfffa7d0b4f05fdaaa6b0ef20223b8b0e50eda9?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 4",
    className: "grow shrink-0 max-w-full max-md:mt-9",
    width: "w-[243px]",
    aspectRatio: "aspect-[1.39]",
  },
];

export const ImageGallery: React.FC = () => {
  return (
    <div className="self-center mt-11 w-full max-w-[1263px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {galleryImages.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
            width={image.width}
            aspectRatio={image.aspectRatio}
          />
        ))}
      </div>
    </div>
  );
};
