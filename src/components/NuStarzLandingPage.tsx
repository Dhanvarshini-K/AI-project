import * as React from "react";
import { NavBar } from "./NavBar";
import { ValueProp } from "./ValueProp";
import { Footer } from "./Footer";
import { DeliveryStep } from "./DeliveryStep";

export function NuStartzLanding() {
  const deliverySteps = [
    {
      title: "Build",
      description:
        "We kickstart your growth by building dedicated teams tailored to your product, technology, and marketing needs. From assembling skilled developers and tech support to strategizing your branding, we handle team setup, product development, and infrastructure—all aligned with your vision to set a strong foundation for success.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/edf7b3abd35166e860147c5a36fb12ef06125c2e85015b7c2b7d3f5f2a34d7f5?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Building process illustration",
    },
    {
      title: "Operate",
      description:
        "With your team and projects in place, we manage day-to-day operations, ensuring seamless coordination across development, tech support, and marketing. Our expert oversight optimizes team performance and project outcomes, so you can focus on strategic decisions while we handle the execution and drive your vision forward.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/23657202508352e26b3f4a471797dde02c00204fd1a51deee36c43e5128ede7c?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Operations illustration",
      isReversed: true,
    },
    {
      title: "Transfer",
      description:
        "When your startup is ready to take full control, we seamlessly transfer the team, knowledge, and processes to you. Our comprehensive handover, including training and ongoing support, ensures that your team can confidently manage and scale operations independently as your own.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8f3cfd5dc6473a7ca817e70a6fa580e5d7f5a993b6efc85fc85b3ca73ba550f?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      imageAlt: "Transfer process illustration",
    },
  ];

  const valueProps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44cfdb85de6704765c380fa0c830e4900027fe30a08524ae732a23086ec0accf?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      title: "Innovate",
      alt: "Innovation icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f68442d757edbf8011b8acae473886c9fc62cfdcc831deabd6fc1d9a1c7e0e?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      title: "Empower",
      alt: "Empowerment icon",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4a35b1331128af729ca6d0214e1672bb395ba42b4ff9129206c2e2d5b44e34c?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      title: "Thrive",
      alt: "Success icon",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-10 bg-white">
      <NavBar />
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pt-px pb-3.5 w-full min-h-[920px] max-md:max-w-full">
        {/* Rest of the hero section content */}
      </div>

      {/* Delivery Steps Section */}
      <div className="flex z-10 flex-col justify-center items-center px-20 py-24 w-full bg-slate-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col -mb-5 ml-2.5 w-full max-w-[1187px] max-md:mb-2.5 max-md:max-w-full">
          <div className="self-center text-5xl tracking-tight leading-none text-center font-[425] text-zinc-800 max-md:text-4xl">
            How we deliver
          </div>
          {deliverySteps.map((step, index) => (
            <DeliveryStep key={index} {...step} />
          ))}
        </div>
      </div>

      {/* Value Props Section */}
      <div className="flex flex-wrap justify-center items-center px-36 py-24 bg-white max-md:px-5">
        <div className="flex flex-col items-center self-stretch px-2 my-auto rounded-none min-w-[240px] w-[999px] max-md:max-w-full">
          <div className="text-4xl text-center font-[375] text-zinc-800">
            Who we are
          </div>
          <div className="self-stretch mt-16 text-2xl font-light leading-9 text-center text-indigo-900 max-md:mt-10 max-md:max-w-full">
            At NuStartz, we're not just a team—we're your growth partners. From
            tech and branding to marketing and beyond, we deliver solutions that
            drive measurable results, empowering startups to scale and succeed.
            Discover how we fuel your journey!
          </div>
          <div className="mt-14 max-w-full w-[715px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full"
                >
                  <ValueProp {...prop} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials and Portfolio sections remain the same */}

      <Footer />
    </div>
  );
}
