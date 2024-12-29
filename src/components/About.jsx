import React from "react";
import temple from "../media/temple.png";
import god from "../media/god.png";
import bg from "../media/POINT FESIGN.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const box = useRef();

  let mm = gsap.matchMedia();

  useGSAP(() => {

    mm.add("(min-width:786px)",()=>{
      gsap.from("#about-right", {
        x: 1500,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-right",
          start: "top 50%",
        //   end: "bottom 50%+=100px",
        },
      });
    })
    },{ scope: box })
      

  return (
    <section id="about" className="px-[5%] pb-[5%]" ref={box}>
      <h2 className="text-black about-head text-center font-bold text-[5vw] md:text-[2.2vw] uppercase my-9">
        About Anantyuga
      </h2>
      <div className="flex flex-col sec2 md:flex-row">
        <div className="md:w-1/2 relative about-zoom left-[5%] md:left-0">
          <div>
            <img src={temple} className="md:w-[48%] w-[50%] absolute" alt="" />
            <img
              src={god}
              className="md:w-[48%] w-[50%] absolute top-[70px] md:top-[30%] left-[40%] md:left-[37%]"
              alt=""
            />
            <img
              src={bg}
              className="absolute -z-10 h-[18%] top-[19%] left-[59%]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-[75%]  md:mt-0" id="about-right">
          <h3 className="text-[#D9490C] text-[4vw] md:text-[1.7vw] mb-4 uppercase font-semibold">
            Anantyuga
          </h3>
          <p className="text-[2.5vw] md:text-[1.2vw]">
            Embark on a transformative journey with Anantyuga, the world's first
            spiritual metaverse that seamlessly blends technology with the
            profound wisdom of Satya Sanaatan. Anantyuga opens the doors to a
            virtual realm where spiritual seekers, devotees, and the curious can
            connect with their roots, explore ancient civilizations, and
            experience the divine in unprecedented ways.
            <br />
            Core Concept:
            <br />
            Anantyuga is not just a virtual space; it is a sacred sanctuary
            where the spiritual and the technological converge.Our metaverse is
            designed to provide a unique and immersive experience, offering live
            virtual darshans of revered pilgrimages and sacred temples in
            mesmerizing 360 environments. Delve into the rich tapestry of
            sanaatan, as we recreate historical civilizations and eras such as
            Tretayuga, Dwaparyuga, and Satyuga, allowing you to witness the
            grandeur of our cultural and ancient heritage.
          </p>
          <button className="bg-[#D9490C] mt-3 text-[3vw] md:text-[1.2vw] font-semibold py-[0.8%] md:py-[0.5%] px-[4%] md:px-[2%] text-white rounded-lg">
            Read More...
          </button>
        </div>
      </div>
    </section>
  );
}
