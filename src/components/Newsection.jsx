import React from "react";
import news1 from "../media/news1.png";
import news2 from "../media/news2.png";
import news3 from "../media/news3.png";
import news4 from "../media/news4.png";
import news5 from "../media/news5.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Newsection() {
  const box = useRef();
  useGSAP(
    () => {
      gsap.from(".news-img", {
        opacity: 0,
        scale:0.5,
        duration: 1,
        scrollTrigger: {
          trigger: ".news-img",
          start: "top 70%",
        },
      });
    },
    { scope: box }
  );

  return (
    <section ref={box} className="px-[5%] mt-[-8%] news-sec sm:mt-[-5%] md:mt-[-8%] xl:mt-[-4%] 2xl:mt-[-1%]">
      <p className="md:mb-1 text-[3vw] sm:text-[2vw] md:text-[1.5vw] 2xl:text-[1vw] text-center">
        Lorem Ipsum is simply dummy
      </p>
      <h2 className="uppercase text-center text-[5vw] sm:text-[3vw] md:text-[2.2vw] font-semibold text-[#D9490C] mb-8">
        Latest News
      </h2>
      <div className="flex justify-between flex-col sm:flex-row md:h-[90%]">
        <div className="w-[100%] sm:w-[30%] flex flex-col mb-[4%] sm:mb-0 items-center">
          <div className="flex news-img justify-center flex-col mb-[6%]">
            <img src={news1} className="h-[100%] mb-[4%]" alt="" />
            <p className="2xl:text-[1vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
            <p className="font-bold 2xl:text-[1vw] xl:text-[1.3vw]">
              by ved vyas - march 21, 2024
            </p>
          </div>
          <div className="flex news-img justify-center flex-col">
            <img src={news2} className="h-[100%] mb-[4%]" alt="" />
            <p className="2xl:text-[1vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
            <p className="font-bold 2xl:text-[1vw] xl:text-[1.3vw]">
              by ved vyas - march 21, 2024
            </p>
          </div>
        </div>

        <div className="w-[100%] sm:w-[40%] mb-[4%] sm:mb-0 flex justify-center">
          <div className="news-img sm:px-[5%]">
            <img
              src={news3}
              className="xl:h-[90%] lg:h-[87%] md:h-[84%] sm:h-[79%] 2xl:h-[92%] mb-[3%]"
              alt=""
            />
            <p className="2xl:text-[1vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
            <p className="font-bold 2xl:text-[1vw] xl:text-[1.3vw]">
              by ved vyas - march 21, 2024
            </p>
          </div>
        </div>

        <div className="w-[100%] sm:w-[30%] flex flex-col items-center">
          <div className="flex news-img justify-center flex-col mb-[6%]">
            <img src={news4} className="h-[100%] mb-[4%]" alt="" />
            <p className="2xl:text-[1vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
            <p className="font-bold 2xl:text-[1vw] xl:text-[1.3vw]">
              by ved vyas - march 21, 2024
            </p>
          </div>
          <div className="flex news-img justify-center flex-col">
            <img src={news5} className="h-[100%] mb-[4%]" alt="" />
            <p className="2xl:text-[1vw] xl:text-[1.3vw]">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
            <p className="font-bold 2xl:text-[1vw] xl:text-[1.3vw]">
              by ved vyas - march 21, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
