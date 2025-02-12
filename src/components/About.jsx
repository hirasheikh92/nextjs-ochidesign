import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full  text-white bg-[#CDEA68] rounded-tr-3xl rounded-tl">
      <div className="max-w-screen-xl p-10 reset-last">
        <h2 className="custom-heading font-Neue text-[4vw] leading-[4.5vw] tracking-tight">
          <p className="p1">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>,{" "}
            <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
          </p>
        </h2>
      </div>
      <div className="border-t border-[#99AD54] w-full mx-auto px-10  "></div>
      <div className="grid gap-y-30 p-10 md:grid-cols-12 py-15 ">
        <div className="md:col-span-4 lg:col-span-6 reset-last">
          <p>What you can expect:</p>
        </div>
        <div className="md:col-span-4 lg:col-span-4 reset-last">
          <div className="wysiwyg reset-last max-w-60">
            <p className="whitespace-noWrap mb-5">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.{" "}
            </p>
            <p className="">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:flex laptop:justify-start">
          <div>
            <p className="mb-15 text-black">S:</p>
            <ul className="social-list leading-loose social-list--default">
              <li className="social-list__item">
                <Link
                  className="text-black underline"
                  href="https://www.instagram.com/ochi_design/"
                >
                  Instagram{" "}
                </Link>
              </li>
              <li className="social-list__item ">
                <Link
                  className="social-list__link link link--underline underline"
                  href="https://www.behance.net/ochi_design"
                >
                  Behance{" "}
                </Link>
              </li>
              <li className="social-list__item">
                <Link
                  className="social-list__link link link--underline underline"
                  href="https://www.facebook.com/OCHI-presentation-design-103605044779378/"
                >
                  Facebook{" "}
                </Link>
              </li>
              <li className="social-list__item">
                <Link
                  className="social-list__link link link--underline underline"
                  href="https://www.linkedin.com/company/56403597"
                >
                  Linkedin{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex px-10 py-4 border-t border-[#99AD54] ">
        <div className="w-1/2">
          <h2 className="md:text-5xl text-4xl  whitespace-nowrap">
            Our approach:
          </h2>
          <button className="px-6 py-4 flex items-center justify-between gap-8 bg-zinc-900 uppercase rounded-full text-white mt-10">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] zoom-hover rounded-3xl overflow-hidden relative">
          <picture className="w-full h-full">
            <Image
              className="bg-gray-200 w-full h-full object-cover  rounded-3xl entered loaded"
              src="/assets/about.jpg"
            fill
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
