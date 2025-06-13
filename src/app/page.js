"use client";
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import { useEffect } from "react";
import Marquee from "../components/Marquee";
import About from "@/components/About";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import Cards from "@/components/Cards";
import ClientReviews from "@/components/ClientReviews";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
   ( async()=>{
      const LocomotiveScroll=(await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  
 
  return (
    <>
      <Hero />
      <SectionTwo />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      {/* <ClientReviews/> */}
      <StartProject/>
     
    </>
  );
}
