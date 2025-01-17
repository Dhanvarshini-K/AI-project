import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { DotIndicator } from "./DotIndicator";

const testimonials = [
  {
    quote:
      "Working with NuStartz has been a game-changer for our business. Their team's attention to detail and commitment to delivering quality outcomes were evident in every step of our collaboration. They not only fixed critical issues swiftly but also enhanced the overall functionality of our platform. NuStartz is a partner we trust for all our digital transformation needs",
    author: "Melvin Christopher",
    company: "MYNA Inc.",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex flex-col justify-center px-36 py-28 w-full bg-slate-50 min-h-[938px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full rounded-none max-w-[1160px] max-md:max-w-full">
        <h2 className="text-4xl text-center font-[375] text-zinc-800">
          Testimonials
        </h2>
        <div className="self-stretch pr-9 mt-16 rounded-3xl bg-zinc-800 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <TestimonialCard {...testimonials[activeIndex]} />
        </div>
        <div className="flex gap-5 justify-between mt-12 w-[97px] max-md:mt-10">
          {[0, 1, 2].map((index) => (
            <DotIndicator key={index} isActive={index === activeIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};
