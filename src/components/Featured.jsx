import Image from "next/image";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured w-full py-10">
      <div className="w-full px-10 border-b border-[#B2B2B2] pt-20 ">
        <h2 className="md:text-5xl font-Neue text-4xl pb-10  whitespace-nowrap">
          Featured Projects
        </h2>
      </div>
      <div className="px-20">
        <FeaturedCard/>
      </div>
    </section>
  );
};

export default Featured;
