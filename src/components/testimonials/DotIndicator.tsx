import * as React from "react";
import { DotIndicatorProps } from "./types";

export const DotIndicator: React.FC<DotIndicatorProps> = ({ isActive }) => (
  <div
    className={`flex shrink-0 w-4 h-4 rounded-full ${
      isActive ? "bg-indigo-600" : "bg-zinc-300"
    }`}
    role="button"
    tabIndex={0}
    aria-pressed={isActive}
  />
);
