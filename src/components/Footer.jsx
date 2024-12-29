import React from "react";
import logo from "../media/footerlogo.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    const box = useRef();

  useGSAP(() => {
      gsap.from(".footer", {
        y: -900,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer",
          start: "top 50%",
        //   end: "bottom 50%+=100px",
        },
      });
    },{ scope: box });

  return (
    <div ref={box} id="contact">
    <footer className="md:px-[5%] mt-[-20%] md:mt-[0] px-[10%] pb-5 pt-[50%] sm:pt-[50%] md:pt-[10%] footerbg text-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[30%]">
          <h2 className="uppercase font-semibold my-6 text-[5vw] md:text-[1.5vw] text-white">
            Anantyuga
          </h2>
          <p className="md:text-[1vw] text-[4vw] font-normal text-[#d9d9d9]">
            Pellentesque placerat urna eu iaculisdictum. Donec bibendum
            pellentesq risus, commodo dapibus eros maximus quis. Curabitur at
            finibus nulla.
          </p>
        </div>

        <div className="md:w-[15%] md:ml-8">
          <h2 className="uppercase font-semibold my-6 text-[5vw] md:text-[1.5vw] text-white">
            Links
          </h2>
          <ul className="text-[#d9d9d9] text-[4vw] md:text-[1vw]">
            <li className="mb-3">Book Now</li>
            <li className="mb-3">Live Darshan</li>
            <li className="mb-3">Donate Now</li>
            <li className="mb-3">Career</li>
          </ul>
        </div>

        <div className="md:w-[15%]">
          <h2 className="uppercase font-semibold my-6 text-[5vw] md:text-[1.5vw] text-white">
            About Us
          </h2>
          <ul className="text-[#d9d9d9] text-[4vw] md:text-[1vw]">
            <li className="mb-3">About Us</li>
            <li className="mb-3">Blog</li>
            <li className="mb-3">Privacy & Policy</li>
            <li className="mb-3">Terms & Conditions</li>
          </ul>
        </div>

        <div className="md:w-[20%]">
          <h2 className="uppercase font-semibold my-6 text-[5vw] md:text-[1.5vw] text-white">
            Contact
          </h2>
            <ul className="text-[#d9d9d9] text-[4vw] md:text-[1vw]">
                <li>203-204 2nd floor, Janjeerwala Square, Indore (M.P.)</li>
                <li>Info@anantyuga.com</li>
                <li>+91 78801 31387</li>
            </ul>
        </div>

        <div className="w-1/5 p-5 mt-10 hidden md:block">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="border-b-2 mt-10 border-gray-300 pb-10 md:pb-6">
        <p className="uppercase md:text-center font-semibold my-2 text-[5vw] md:text-[1.5vw] text-white">Subscribe</p>
        <div className="flex md:justify-center">
        <input type="email" className="outline-none pl-3 footerinput rounded-sm w-[60%] lg:py-4 md:w-[20%]" placeholder="email address" name="" id="" />
        <button className="bg-[#d9490c] rounded-sm px-[2%] ml-[1%]">Submit</button>
        </div>
      </div>
      <div>
        <p>© Anantyuga 2024. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}
