import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ text, isActive }) => {
  return (
    <div className={`${isActive ? "text-indigo-600 font-[425]" : ""}`}>
      {text}
    </div>
  );
};
