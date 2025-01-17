import * as React from "react";
import { TestimonialProps } from "./types";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
}) => (
  <div className="flex gap-5 max-md:flex-col">
    <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
      <div className="flex shrink-0 max-w-full rounded-3xl h-[536px] w-[611px] max-md:mt-10" />
    </div>
    <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
        <div className="text-2xl max-md:max-w-full">{quote}</div>
        <div className="self-start mt-10 text-3xl">
          {author}, {company}
        </div>
      </div>
    </div>
  </div>
);
