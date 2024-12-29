import React from 'react'
import vr2 from '../media/vr2.png'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  let mm = gsap.matchMedia();

    const box = useRef();
    useGSAP(() => {

      mm.add("(min-width:786px)",()=>{
        gsap.from("#about-right1", {
          x: 1500,
          duration: 1,
          scrollTrigger: {
            trigger: "#about-right1",
            start: "top 50%",
          },
        });
      })   
      },{ scope: box });

  return (
    <section ref={box} className='px-[5%] pb-[5%]'>
        <div className='flex md:items-center flex-col md:flex-row'>
            <div className='md:w-1/2 about-zoom'>
                <img src={vr2} className='h-[80%]' alt="" />
            </div>
            <div id='about-right1' className='md:w-1/2 mt-[5%] md:mt-0 md:pl-[10%]'>
                <h3 className='text-[#D9490C] text-[4vw] md:text-[1.7vw] mb-4 uppercase font-semibold'>Why Anantyuga</h3>
                <p className='text-[2.5vw] md:text-[1.2vw]'>Embark on a transformative journey with Anantyuga, the world's first spiritual metaverse that seamlessly blends technology with the profound wisdom of Satya Sanaatan. Anantyuga opens the doors to a virtual realm where spiritual seekers, devotees, and the curious can connect with their roots, explore ancient civilizations, and experience the divine in unprecedented ways.<br/>
Core Concept:<br/>
Anantyuga is not just a virtual space; it is a sacred sanctuary where the spiritual and the technological converge.Our metaverse is designed to provide a unique and immersive experience, offering live virtual darshans of revered pilgrimages and sacred temples in mesmerizing 360 environments. Delve into the rich tapestry of sanaatan, as we recreate historical civilizations and eras such as Tretayuga, Dwaparyuga, and Satyuga, allowing you to witness the grandeur of our cultural and ancient heritage.
                </p>
                <button className='bg-[#D9490C] text-[3vw] mt-3 md:text-[1.2vw] font-semibold py-[0.8%] px-[4%] md:py-[0.5%] md:px-[2%] text-white rounded-lg'>Read More...</button>
            </div>
        </div>
    </section>
  )
}
