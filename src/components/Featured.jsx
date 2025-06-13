import FeaturedCard from "./FeaturedCard";
import Button from "./Button";

const Featured = () => {
  return (
    <section className="featured flex flex-col w-full py-10 rounded-tr-3xl rounded-tl">
      {/* Heading Section */}
      <div className="w-full px-10 border-b border-[#B2B2B2] pt-20">
        <h2 className="md:text-5xl text-4xl font-Neue pb-10">Featured Projects</h2>
      </div>

      {/* Cards Section */}
      <div className="px-20 flex flex-col items-center gap-10">
        <FeaturedCard />

        {/* Call-to-Action Button */}
        <div className="text-center mt-20">
        <Button title="View all case studies" />
        </div>
      </div>
    </section>
  );
};

export default Featured;

