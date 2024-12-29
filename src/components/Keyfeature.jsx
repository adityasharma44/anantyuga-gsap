import React, { useEffect } from "react";
import vr from "../media/vr.png";
import tree from "../media/tree.png";
import bg from "../media/POINT FESIGN.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function Keyfeature() {
  const box1 = useRef();

  let mm=gsap.matchMedia();

  useGSAP(() => {

    mm.add("(min-width:786px)",()=>{
      gsap.from("#from-left", {
        x: -1500,
        duration: 1,
        scrollTrigger: {
          trigger: "#from-left",
          start: "top 50%",
        },
      });
    })
    
  },{ scope: box1 });


  return (
    <section ref={box1} className="px-[5%] pb-[5%]">
      <div className="flex flex-col md:flex-row">
        <div id="from-left" className="md:w-1/2 from-left order-2 md:order-1 mt-[80%] md:mt-0 about-right">
          <h3 className="text-[#D9490C] text-[4vw] md:text-[1.7vw] mb-4 uppercase font-semibold">
            key Features
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
          <button className="bg-[#D9490C] text-[3vw] mt-3 md:text-[1.2vw] font-semibold py-[0.8%] px-[4%] md:py-[0.5%] md:px-[2%] text-white rounded-lg">
            Read More...
          </button>
        </div>
        <div className="md:w-1/2 relative md:ml-24 ml-[5%] about-zoom order-1 md:order-2">
          <img src={tree} className="w-[50%] absolute left-[41%]" alt="" />
          <img
            src={vr}
            className="w-[50%] absolute top-[70px] md:top-[30%]"
            alt=""
          />
          <img
            src={bg}
            className="absolute -z-10 h-[17%] top-[19%] left-[14%]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
