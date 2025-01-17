import * as React from "react";
import { ValueCard } from "./ValueCard";
import { LearnMoreButton } from "./LearnMoreButton";

const values = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/44cfdb85de6704765c380fa0c830e4900027fe30a08524ae732a23086ec0accf?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    title: "Innovate",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/93f68442d757edbf8011b8acae473886c9fc62cfdcc831deabd6fc1d9a1c7e0e?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    title: "Empower",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f4a35b1331128af729ca6d0214e1672bb395ba42b4ff9129206c2e2d5b44e34c?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
    title: "Thrive",
  },
];

export const WhoWeAre: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center px-36 py-24 bg-white max-md:px-5">
      <div className="flex flex-col items-center self-stretch px-2 my-auto rounded-none min-w-[240px] w-[999px] max-md:max-w-full">
        <h1 className="text-4xl text-center font-[375] text-zinc-800">
          Who we are
        </h1>
        <p className="self-stretch mt-16 text-2xl font-light leading-9 text-center text-indigo-900 max-md:mt-10 max-md:max-w-full">
          At NuStartz, we're not just a team—we're your growth partners. From
          tech and branding to marketing and beyond, we deliver solutions that
          drive measurable results, empowering startups to scale and succeed.
          Discover how we fuel your journey!
        </p>
        <div className="mt-14 max-w-full w-[715px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index > 0 ? "ml-5" : ""
                } w-[35%] max-md:ml-0 max-md:w-full`}
              >
                <ValueCard imageSrc={value.imageSrc} title={value.title} />
              </div>
            ))}
          </div>
        </div>
        <LearnMoreButton
          text="LEARN MORE"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bb40fdb4ac563b81efe496c5bb8223b964765fc164e38590b041e9a47a6147?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
        />
      </div>
      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-blue-50" />
    </div>
  );
};
