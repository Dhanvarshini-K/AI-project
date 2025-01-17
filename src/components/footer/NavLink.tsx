import * as React from "react";
import { NavLinkProps } from "./types";

export const NavLink: React.FC<NavLinkProps> = ({ label }) => (
  <div className="self-start mt-1 text-2xl font-[415] text-neutral-500">
    {label}
  </div>
);
