import * as React from "react";
import { GalleryImage } from "./GalleryImage";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09929352444bcb3c6a618470b04b192d3962e47e247924ddac56fe3b15204075?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 1",
    className:
      "shrink-0 self-stretch my-auto max-w-full aspect-[4.12] w-[235px] max-md:mt-10",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/925b2db481a311ac55dc06d6c2d2fe4042b9ed4f534e8ab4973304e812c99645?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 2",
    className: "self-stretch my-auto w-full aspect-[3.31] max-md:mt-6",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f5cd057dd244381e7c7297a4e962f42f26e784a2925e6c74fe000f2bdb9272?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    alt: "Gallery image 3",
    className: "grow w-full aspect-[1.57]",
  },
];

export const Gallery: React.FC = () => {
  return (
    <div className="ml-28 w-full max-w-[994px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <GalleryImage {...galleryImages[0]} />
        </div>
        <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <GalleryImage {...galleryImages[1]} />
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <GalleryImage {...galleryImages[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
