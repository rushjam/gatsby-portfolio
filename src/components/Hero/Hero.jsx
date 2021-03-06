import React, { useEffect } from "react"
import { gsap } from "gsap"

import heroImage from "../../images/brooke-cagle-JrzzESCqeko-unsplash.jpg"

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
        delay: 0.2,
      }
    )
  }, [])
  return (
    <div
      className="flex flex-col relative w-full lg:flex-row"
      data-scroll-section
    >
      <div className="z-10 relative lg:relative  sm:max-w-lg md:max-w-2xl  w-11/12 mx-auto">
        <img
          className="lg:absolute lg:transform lg:-translate-y-1/2 lg:top-1/2 lg:max-w-2xl"
          src={heroImage}
          alt="profile"
        ></img>
      </div>
      <div className="bg-[#161616] relative lg:relative w-full lg:w-screen h-96 lg:h-screen -top-16 lg:top-0">
        <div className="absolute lg:transform lg:-translate-y-1/2 lg:top-1/2 lg:z-50 z-10  top-1/4 lg:mt-0 left-1/2 lg:left-0 transform lg:transform-none lg:translate -translate-x-1/2 w-11/12 mx-auto  mt-2 sm:max-w-lg md:max-w-2xl sm:mt-5 sm:mx-0">
          <h1 className="font-bold hero-text">I'm Rushik Ramani.</h1>
          <h1 className="font-bold hero-text">A Fullstack Developer</h1>
          <h1 className="text-[#7c7c7c] font-bold hero-text">based in India</h1>
          <p className="w-11/12 hero-text">
            I'm probably the most passionate desginer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I'm your guy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
