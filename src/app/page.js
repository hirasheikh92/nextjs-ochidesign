import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";

import Marquee from "../components/Marquee";
import About from "@/components/About";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import Cards from "@/components/Cards";
import ClientReviews from "@/components/ClientReviews";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTwo />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <ClientReviews/>
    </>
  );
}
