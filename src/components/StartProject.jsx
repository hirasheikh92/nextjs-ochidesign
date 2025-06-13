"use client";
import { useEffect, useState } from "react";
import Button from "./Button";

const StartProject = () => {
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
    <section className="bg-[#CDEA68] relative is-inview px-10 pt-16 py-10 rounded-tr-3xl rounded-tl">
      <span className="absolute w-full left-0 bottom-full -mb-1 h-15 rounded-tl-full rounded-tr-full bg-inherit"></span>
      <span className="absolute w-full left-0 top-full -mt-1 h-15 rounded-bl-full rounded-br-full bg-inherit"></span>
      <div className="h-full w-full overflow-hidden">
        <div className="relative py-70 md:py-85 laptop:py-140 is-inview">
          <div className="container">
            <div>
              <div className="text-center w-full">
                <h2 className="heading-large leading-negative uppercase  is-inview">
                  ready
                </h2>
                <h2 className="heading-large leading-negative uppercase is-inview">
                  to start
                </h2>
                <h2 className="heading-large leading-negative uppercase is-inview">
                  The Project?
                </h2>
              </div>
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
              <div className="text-center mt-28">
        <Button title="start the project" />
        </div>
              {/* <div
                className="laptop:absolute left-0 top-0 z-2 pointer-events-none w-full laptop:h-vh flex items-center justify-center px-80 laptop:p-30 mb-40 laptop:mb-0 is-inview"
                
              >
                <div className="w-full max-w-360">
                  <div
                    className="grid grid-cols-2 eyes-svg justify-center items-center gap-1/12 is-inview"
                   
                  >
                  
                  </div>
                </div>
              </div>
              <div className="grid justify-center gap-y-12 items-center text-center">
                <div>
                  <a
                    className="btn btn--primary"
                    href="http://ochi.design/contact/"
                  >
                    <span className="btn__text">Start the project</span>
                    <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                  </a>
                </div>
                <span>OR</span>
                <div>
                  <a className="btn btn--default" href="mailto:hello@ochi.design">
                    <span className="btn__text">hello@ochi.design</span>
                    <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartProject;
