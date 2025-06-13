import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Salience Labs",
    image: "/assets/salienc-labs.png",
    tags: ["Brand identity", "pitch deck"],
  },
  {
    title: "Cardboard Spaceship",
    image: "/assets/feature3.png",
    tags: ["Brand template", "sales deck", "social media template"],
  },
  {
    title: "AH2 & Matt Horn",
    image: "/assets/feature4.png",
    tags: ["pitch deck", "sales deck"],
  },
  {
    title: "fyde",
    image: "/assets/feature2.png",
    tags: ["audit", "copywriting", "sales deck", "slides design"],
  },
  {
    title: "vise",
    image: "/assets/feature1.jpg",
    tags: ["agency", "company presentation"],
  },
  {
    title: "all things go",
    image: "/assets/all-thingsgo.png",
    tags: ["Brand identity", "pitch deck"],
  },
  {
    title: "trawa",
    image: "/assets/trawa.jpg",
    tags: ["Brand identity", "design research", "investor deck"],
  },
  {
    title: "black book",
    image: "/assets/blackbook.jpg",
    tags: ["investor deck", "redesign", "review"],
  },
  {
    title: "premium blend",
    image: "/assets/premiumblend.png",
    tags: ["branded template", "redesign", "review"],
  },
  {
    title: "softstart",
    image: "/assets/softstart.jpg",
    tags: ["branded template", "sales deck"],
  },
];

const FeaturedCard = () => {
  return (
    <>
      <div className=" grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="cards relative w-full flex gap-10 mt-10 ">
            {/* Title */}
            <div className="card-container group   w-full h-[75vh]">
              <div className=" flex flex-col group gap-4 px-10 py-10 items-start ">
                <div className=" text-sm uppercase font-Neue flex items-center">
                  <span className="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-8"></span>
                  <span>{item.title}</span>
                  <h2 className="absolute top-1/2 left-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text opacity-0 group-hover:opacity-100">
                    {" "}
                    {item.title.split(" ").map((word, index) => (
                      <span key={index}>{word} </span>
                    ))}
                  </h2>
                </div>
                    
                {/* Image Card */}
                <div className="w-full h-full overflow-hidden">
                  <Image
                    className="w-full h-full rounded-2xl  object-cover p-1"
                    src={item.image}
                    width={600}
                    height={600}
                    alt={`Featured project: ${item.title}`}
                  />
                </div>
                <div className="flex flex-wrap gap-2 ml-2 items-start">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="border border-[#212121] text-[#212121] px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
