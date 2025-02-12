import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
      <div className="fixed z-[999] w-full px-10 py-8 font-neue flex justify-between items-center">
        <div className="logo text-black">
            <Link href={"/"}> 
            <Image src="/ochi.svg" width={100} height={100} alt="logo"/>
            </Link>
        </div>
        <div className="flex gap-10">
          {[ "Services", "Our Work", "About Us", "Insights", "Contact us"].map((link, index) => (
            <a href={`#${link}`} key={index} className={`text-lg  text-black ${index === 4 && "ml-32"}`}>
              {link}
            </a>
          ))}
        </div>
      </div>
    );
  };
  
export default Navbar;
  