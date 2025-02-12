import React from 'react'
import Container from './Container'

const Hero = () => {
  return (
    <div className='w-full h-[580px] bg-[#F1F1F1] relative '>
      <Container className={"absolute flex flex-col px-10 justify-start items-start pt-40 h-full"}>
      {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div
              key={index}
              className="masker  "
            >
              <div className="w-fit flex items-center overflow-hidden"> 
                {index === 1 && (<div className="w-[8vw] h-[6vw] rounded-md bg-[#FF8A00] mr-[1vw]"></div>)}
              <h1 className="font-founder uppercase pt-[1vw] font-bold text-[9vw] leading-[7vw] tracking-[-0.02em]">{item}</h1>
              </div>
             
            </div>
          );
        })}
      </Container>
    </div>
  )
}

export default Hero
