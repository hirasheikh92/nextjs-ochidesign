import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const SectionTwo = () => {
  return (
    <section className="w-full  py-5 sm:py-6 lg:py-8">
      {/* Top Border */}
      <div className="border-t-[1px] border-zinc-700 w-full"></div>
      
      {/* Content Wrapper */}
      <div className="w-full px-4 sm:px-7 lg:px-10 mt-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 md:items-center justify-between">
          {/* Left Text */}
          <div className=" md:text-left">
            <p className="text-sm sm:text-base text-zinc-800">For public and private companies</p>
          </div>
          
          {/* Middle Text */}
          <div className="md:text-left">
            <p className="text-sm sm:text-base text-zinc-800">From the first pitch to IPO</p>
          </div>
          
          {/* Right Buttons */}
          <div className="flex items-center gap-4 md:gap-2">
            {/* Start the Project Button */}
            <a
              href="http://ochi.design/contact/"
              className="border-[1px] border-zinc-800 rounded-full px-4 py-2 text-sm sm:text-base uppercase text-black hover:bg-zinc-800 hover:text-white transition whitespace-nowrap"
            >
              Start the project
            </a>
            {/* Icon Button */}
            <Link
              href="/"
              className="border-[1px] border-zinc-800 rounded-full w-12 h-12 flex items-center justify-center text-black hover:bg-zinc-800 hover:text-white transition"
            >
              <FiArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
