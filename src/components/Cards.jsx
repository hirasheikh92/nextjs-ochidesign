import Image from "next/image";

const Cards = () => {
  return (
    <div className="cards mt-10 px-20 grid grid-cols-12 gap-4 justify-center items-centersm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 bg-zinc-100   w-full">
      {/* card1 */}
      <div className="card-container relative reward-block pointer-events-none bg-green text-green-100 col-start-1 col-span-12 md:col-span-6 bg-[#004D43]  rounded-xl flex flex-col gap-10  h-[50vh] ">
        <div className="card   w-full h-full flex items-center justify-center p-20 ">
          <picture className="relative">
            <Image
              className="bg-[#004D43]  entered loaded"
              data-component="lazyload"
              data-animate="data-animate"
              src="/assets/logo.svg"
              width={100}
              height={100}
            />
          </picture>
        </div>
        <div className="absolute left-5 right-0 bottom-0 py-10">
          <button
            className="px-5 py-1 rounded-full border border-green-100"
            type="button"
          >
            <span className=" font-Neue text-green-100">©2019–2022</span>
          </button>
        </div>
      </div>
      {/* card2 */}
      <div className="card-container relative col-span-6 md:col-span-3  bg-[#212121]  rounded-xl flex flex-col gap-10 w-full h-[50vh] ">
        <div className="card  w-full h-full flex items-center justify-center p-20   ">
          <picture className="relative">
            <Image
              className="bg-[#212121] entered loaded"
              data-component="lazyload"
              data-animate="data-animate"
              src="/assets/logo2.svg"
              width={100}
              height={100}
            />
          </picture>
        </div>
        <div className="absolute left-5 right-0 bottom-0 py-10">
          <button
            className="px-5 py-1 rounded-full border border-green-100"
            type="button"
          >
            <span className=" font-Neue text-green-100">
              Rating 5.0 on Clutch
            </span>
          </button>
        </div>
      </div>
      {/* card3 */}
      <div className="card-container relative col-span-6 md:col-span-3  bg-[#212121]  rounded-xl flex flex-col gap-10 w-full h-[50vh] p-5">
        <div className="card w-full h-full flex items-center justify-center p-20  ">
          <picture className="relative ">
            <Image
              className="bg-[#212121] bg-cover bg-center w-full h-auto"
              data-component="lazyload"
              data-animate="data-animate"
              src="/assets/logo3.png"
              width={100}
              height={100}
            />
          </picture>
        </div>
        <div className="absolute text-white  left-5  right-0 bottom-0 py-10">
          <button
            className="px-5 py-1 rounded-full border border-white"
            type="button"
          >
            <span className=" font-Neue text-white">
              Business Bootcamp Alumni
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
