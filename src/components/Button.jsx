import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ title }) => {
  return (
  
      <button class="group relative inline-flex h-14 items-center justify-between rounded-full bg-black py-1 pl-7 pr-20 font-medium text-neutral-50">
        <span class="z-10 pr-2 items-start text-white uppercase">{title}</span>
        <span class="absolute right-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-white  group-hover:w-10 group-hover:h-10">
          <span class=" flex items-center justify-center">
            <FiArrowUpRight className="h-5 w-5 text-center opacity-0 transition duration-300 group-hover:opacity-100 text-black" />
          </span>
        </span>
      </button>
  
  );
};

export default Button;
