import React from "react";
import service1 from "../media/s1.png";
import service2 from "../media/s2.png";
import service3 from "../media/s3.png";
import service4 from "../media/s4.png";
import service5 from "../media/s5.png";
import displayserve from "../media/Vector.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Service() {

    const [active, setactive]=useState("firstcard")

    // const openserv1=()=>{
    //    let element = document.getElementById("content").innerHTML=
    //    `<h className='absolute z-50'>Hello world</h>`
    //  console.log(element);
    // }

    // <div className="flex absolute z-30 w-[78%] border-2 border-white items-center">
    //     <div className="w-2/5 p-7 pr-10">
    //       <img src={displayserve} className="h-[80%]" alt="" />
    //     </div>
    //     <div className="w-3/5 ml-7">
    //       <h3 className="text-[#D04F00] text-[1.9vw] mb-5">
    //         Dharm Guru
    //       </h3>
    //       <p className="text-white mb-8 text-[1vw]">
    //         Lorem Ipsum is simply dummy text of the printing and
    //         typesetting industry. Lorem Ipsum has been the industry's
    //         standard dummy text ever since the 1500s, when an unknown
    //         printer took a galley of type and scrambled it to make a
    //         type specimen book. It has Lorem Ipsum is simply dummy text
    //         of the printing and typesetting industry. Lorem Ipsum has
    //         been the industry's standard dummy text ever since the
    //         1500s, when an unknown printer took a galley.
    //       </p>
    //       <button className="text-white bg-[#D04F00] px-2 py-1 text-[1.6vw] uppercase rounded-lg">
    //        Our all services
    //      </button>
    //    </div>
    //  </div>

    const box = useRef();
  useGSAP(() => {
      gsap.from(".ser-img div", {
        scale:0,
        duration: 1,
        stagger:0.2,
        scrollTrigger: {
          trigger: ".ser-img",
          start: "top 70%"
        },
      });
    },{ scope: box });

   
    
  return (
    <>
      <div ref={box} className="service-cont flex flex-col items-center">
        <section className="px-[5%] service-bg pb-[40%] sm:pb-[70%] md:pb-[13%] 2xl:pb-[20%] xl:pb-[16%] pt-[5%] md:pt-[13%]">
          <h2 id="services" className="uppercase text-center text-[5vw] pt-[15%] md:pt-0 md:text-[2.2vw] font-semibold text-[#D9490C] my-1">
            Our Service
          </h2>
          <p className="text-center text-white text-[3vw] sm:text-[2vw] md:text-[1.5vw] 2xl:text-[1vw]">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <div className="flex service-col gap-2 md:gap-[auto] md:justify-between h-[100%] md:h-[30%] lg:h-[50%] xl:h-[50%] 2xl:h-[60%] mt-[4%]">
            <div onClick={() => setactive("secondcard")} className="mt-[30%] md:mt-[10%] ser-img md:w-[20%]">
              <div className="rounded-[50%] md:m-[8%] service-hover border-2 md:p-[20%] p-[5%] border-white">
                <img
                  src={service1}
                  className="md:h-[100%] w-[100%] p-[20%] md:p-0 md:w-[100%]"
                  alt=""
                />
              </div>
            </div>
            <div onClick={() => setactive("thirdcard")} className="mt-[10%] md:mt-[5%] ser-img md:w-[20%]">
              <div className="rounded-[50%] md:m-[8%] service-hover border-2 md:p-[20%] p-[5%] border-white">
                <img
                  src={service2}
                  className="md:h-[100%] w-[100%] p-[20%] md:p-0 md:w-[100%]"
                  alt=""
                />
              </div>
            </div>
            <div onClick={() => setactive("firstcard")} className="md:w-[20%] ser-img">
              <div className="rounded-[50%] service-hover md:m-[8%] flex justify-center border-2 p-[5%] md:p-[10%] border-white">
                <img
                  src={service3}
                  className="md:h-[100%] w-[100%] h-[60%] p-[20%] md:p-0 md:w-[80%]"
                  alt=""
                />
              </div>
            </div>
            <div onClick={() => setactive("fourthcard")} className="mt-[10%] md:mt-[5%] md:w-[20%] ser-img">
              <div className="rounded-[50%] service-hover md:m-[8%] md:p-[20%] border-2 p-[5%] border-white">
                <img
                  src={service4}
                  className="md:h-[100%] w-[100%] md:p-0 p-[20%] md:w-[100%]"
                  alt=""
                />
              </div>
            </div>
            <div onClick={() => setactive("fifthcard")} className="mt-[30%] md:mt-[10%] md:w-[20%] ser-img">
              <div className="rounded-[50%] service-hover md:m-[8%]  md:p-[20%] border-2 p-[5%] border-white">
                <img
                  src={service5}
                  className="md:h-[100%] w-[100%] md:p-0 p-[20%] md:w-[100%]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="">
            <div id="content" className="flex relative justify-center">
                {active==="secondcard" && <Card title="Dharm Guru" imglink={service1} />}
                {active==="thirdcard" && <Card title="Virtual Darshan" imglink={service2} />}
                {active==="firstcard" && <Card title="Live Darshan" imglink={displayserve}/>}
                {active==="fourthcard" && <Card title="Horoscope" imglink={service4}/>}
                {active==="fifthcard" && <Card title="360 Darshan" imglink={service5}/>}
            </div>
          </div>
        </section>
        <div className="service-bottom"></div>
      </div>
    </>
  );
}
