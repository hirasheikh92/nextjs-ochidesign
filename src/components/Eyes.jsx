"use client";
import { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log(e.clientX, e.clientY);
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-eyes bg-cover bg-center bg-no-repeat relative">
        <div className="absolute flex gap-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* eyes-1 */}
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="bg-zinc-900 relative w-2/3 h-2/3 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="bg-zinc-100 w-5 h-5 rounded-full "></div>
              </div>
            </div>
          </div>
          {/* eyes-2 */}
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="bg-zinc-900 relative w-2/3 h-2/3 rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="bg-zinc-100 w-5 h-5 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
