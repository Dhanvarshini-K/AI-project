import * as React from "react";
import { ContactInfoProps } from "./types";
import { SocialIcon } from "./SocialIcon";

export const ContactInfo: React.FC<ContactInfoProps> = ({
  website,
  email,
  mobile,
}) => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/80ab57bc225200c3f2f1be3dba75dd5aaba26d8d72728b018adbd4d946062e8d?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7ee89e61a81b9335930f8cfd7e2bb42d622129e6206564db6a8d8f0cd6e5528?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e7b94f1927addff251de0646bb52b2fd31d4961c963933f7d31bb59243416a3?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      alt: "Social media icon 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebdab17af40719ac8c53a025a52cf24f7de9315f873fc41519e4c57f72028090?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be",
      alt: "Social media icon 4",
    },
  ];

  return (
    <div className="flex flex-col w-full max-md:mt-10">
      <div className="text-2xl font-[415] text-neutral-500 max-md:mr-2.5">
        Website - {website}
      </div>
      <div className="mt-1 text-2xl font-[415] text-neutral-500">
        Email - {email}
      </div>
      <div className="self-start mt-1 text-2xl font-[415] text-neutral-500">
        Mobile - {mobile}
      </div>
      <div className="flex gap-3 self-start mt-10">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} {...icon} />
        ))}
      </div>
    </div>
  );
};
