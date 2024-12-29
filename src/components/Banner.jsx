import React from "react";
import heading from "../media/anantyuga.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bannervideo from "../media/bannervideo.webm"

gsap.registerPlugin(useGSAP);

export default function Banner() {
  const box = useRef();

  let mm=gsap.matchMedia();

  useGSAP(
    () => {
      gsap.from(".logo", {
        scale: 0,
        duration: 1,
      });

      mm.add("(min-width:786px)",()=>{
        gsap.from(".icon-slide", {
          x: 1000,
          duration: 1,
        });
      })
    },
    { scope: box }
  );

  return (
    <div ref={box} id="home" className="relative h-[88vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]">
        <video className="w-full h-full absolute object-cover" autoPlay muted loop>
    <source src={bannervideo} type="video/mp4"/>
        </video>
    <section
      className="flex items-center justify-center h-[90vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] w-full"
    >
      <div className="logo flex flex-col items-center mt-[10%] justify-center">
        <div className="h-[13%] md:h-[15%] lg:h-[18%] xl:h-[22%] flex justify-center">
          <img
            className="h-[100%] w-[50%] md:w-[30%] 2xl:w-[50%]"
            src={heading}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center">
          <h2 className="text-white banner-text text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.3vw] xl:text-[2vw] 2xl:text-[1.5vw]">
            The Spiritual Metaverse
          </h2>
        </div>
        <div className="w-full flex justify-center my-5">
          <button className="bg-[#D9490C] font-semibold rounded-md px-[6%] lg:px-[1%] xl:px-[3%] xl:py-[1%] py-[1%] lg:text-[1.5vw] xl:text-[1.2vw] uppercase text-white">
            Join us
          </button>
        </div>
      </div>
      
    </section>

    <div className="text-white icon-slide flex flex-col gap-4 absolute sm:top-[47%] md:top-[43%] lg:top-[50%] top-[40%] right-[2%]">
        <a href="#"><i className="fa-brands text-[6vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.8vw] mx-1 fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands text-[6vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.8vw] mx-1 fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands text-[6vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.8vw] mx-1 fa-instagram"></i></a>
        <a href="#"><i className="fa-brands text-[6vw] sm:text-[2vw] md:text-[1.6vw] lg:text-[1.8vw] mx-1 fa-x-twitter"></i></a>
      </div>

    </div>
  );
}
