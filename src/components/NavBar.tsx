import * as React from "react";
import { NavItem } from "../types/types";

const navItems: NavItem[] = [
  { label: "Home", isActive: true },
  { label: "Insights" },
  { label: "Services" },
  { label: "Careers" },
  { label: "About us" },
];

export function NavBar() {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start px-20 pt-4 pb-8 w-full text-xl bg-white font-[405] shadow-[0px_4px_15px_rgba(0,0,0,0.05)] text-neutral-500 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e9497edf4a1fa50fe8b63f7a4503a935107b6609243bc2b1a0a691ca73097e0?placeholderIfAbsent=true&apiKey=b1fccff849024f1890b0c2b43f5269be"
        alt="NuStartz Logo"
        className="object-contain shrink-0 self-start max-w-full aspect-[3.23] w-[155px]"
      />
      <div className="flex gap-10 my-auto max-md:max-w-full">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={item.isActive ? "grow text-indigo-600 font-[425]" : ""}
            role="button"
            tabIndex={0}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
