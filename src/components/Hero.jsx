"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
     data-scroll data-scroll-section data-speed="-.3"
      className="w-full h-[580px] bg-[#F1F1F1] relative "
    >
      <Container
        className={
          "absolute flex flex-col px-10 justify-start items-start pt-40 h-full"
        }
      >
        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker  ">
              <div className="w-fit relative flex items-center justify-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ easings: "easeInOut", duration: 1 }}
                    className="w-[8vw] h-[6vw]  mr-[1vw] mt-2"
                  >
                    <Image
                      src={"/assets/banner.jpg"}
                      className="object-cover w-full h-full rounded-md"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </motion.div>
                )}
                <h1 className="font-founder uppercase pt-[1vw] font-bold text-[9vw] leading-[7vw] tracking-[-0.02em]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Hero;
