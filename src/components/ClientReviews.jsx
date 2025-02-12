"use client";
import { clientReviews } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";

const ClientReviews = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <section className="featured w-full ">
      <div className="w-full px-10 border-b border-[#B2B2B2] pt-20 ">
        <h2 className="md:text-5xl font-Neue text-4xl pb-10  whitespace-nowrap">
          Clients’ reviews
        </h2>
      </div>
      <div className="px-20">
        {clientReviews.map((item,index) => (
          <div className="header grid grid-cols-3 gap-5 justify-between items-center">
            <div className="col-span-3">
              <span>{item.title}</span>
            </div>
            <div lassName="col-span-2 hidden">
              <sapn>services</sapn>
            </div>
            <div lassName="col-span-4">
              <span>{item.name}</span>
              <div className="body"></div>
            </div>
            <div lassName="col-span-3">
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
