"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <section  data-scroll data-scroll-section
    data-scroll-speed=".2" className="w-full py-20 text-white bg-[#004D43] rounded-tr-3xl rounded-tl ">
      <div className="text border-t border-b border-x-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-white text-[22vw] leading-none font-Founders  font-semibold uppercase   inline-flex "
        >
          we are ochi {""}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-white text-[22vw] leading-none 
        font-Founders font-semibold uppercase inline-flex "
        >
          {""}we are ochi
        </motion.h1>
      </div>
    </section>
  );
};

export default Marquee;
