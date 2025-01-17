import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center px-8 py-4 mt-16 max-w-full text-white bg-indigo-600 rounded-xl font-[405] w-[238px] max-md:px-5 max-md:mt-10"
    >
      <div className="flex gap-4 items-center w-full">
        <div className="self-stretch my-auto">{children}</div>
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto rounded-xl aspect-square w-[30px]"
          />
        )}
      </div>
    </button>
  );
};
