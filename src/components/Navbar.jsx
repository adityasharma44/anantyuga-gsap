import logo from "../media/logo.png";
import "../App.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Navbar(props) {
  let [open, setOpen] = useState(false);
  
  const displaypop = () =>{
    props.showpop();
  };

  const box = useRef();

  useGSAP(
    () => {
      gsap.from(".logo", {
        scale: 0,
        duration: 1,
      });

      let t1 = gsap.timeline();
      t1.from(".nav li, .login", {
        y: -200,
        duration: 1,
        stagger: 0.1,
      });

    },
    { scope: box }
  );

  return (
    <>
      <nav className="bg-[#ffffff] fixed top-0 left-0 right-0 z-50" ref={box}>
        <div className="flex justify-between items-center px-[5%] md:px-0 md:py-0 py-[4%] sm:py-[2%]">
          <img
            src={logo}
            className="h-auto logo md:hidden w-[20%] sm:w-[15%] lg:w-[28%]"
            alt="logo"
          />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            {/* <i className="ri-menu-3-line text-white text-[4.5vw] md:hidden"></i> */}
            <i className="fa-solid fa-bars text-[6vw] sm:text-[4vw] md:hidden"></i>
            {/* <i className="ri-menu-4-line md:hidden text-[4.5vw]"></i> */}
          </button>
          {open ? (
            <div
              className=" w-full absolute z-50 top-[100%] backdrop-blur sm:top-[100%] md:hidden md:w-auto"
              id="navbar-default"
            >
              <ul onClick={() => setOpen(!open)} className="font-medium flex flex-col p-4 mt-4 mr-[10%] border border-gray-100 rounded-lg bg-[#ffffffaa]">
                <li>
                  <a
                    href="#"
                    className="block py-3 px-3 text-[5vw] sm:text-[4vw] text-gray-900 rounded md:bg-transparent md:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-3 px-3 text-[5vw] sm:text-[4vw] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-3 px-3 text-[5vw] sm:text-[4vw] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#members"
                    className="block py-3 px-3 text-[5vw] sm:text-[4vw] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Members
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-3 px-3 text-[5vw] sm:text-[4vw] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Contact
                  </a>
                </li>
                <hr className="mt-3"/>
                <button onClick={displaypop} className="bg-[#D9490C] text-white rounded-[5px] mt-4 text-[4.5vw] py-[6px]">Get Inquiry</button>
              </ul>
            </div>
          ) : (
            <nav className="w-full hidden md:block">
              <div className="flex items-center py-[0.5%] justify-between px-[5%] bg-[#D9490C] text-white">
                <div className="w-[30%]">
                  <ul className="flex nav text-[1vw]">
                    <a className="mx-[2%]" href="#">
                      <li>Home/</li>
                    </a>
                    <a className="mx-[2%]" href="#about">
                      <li>About us/</li>
                    </a>
                    <a className="mx-[2%]" href="#services">
                      <li>Our Services/</li>
                    </a>
                    <a className="mx-[2%]" href="#members">
                      <li>Members/</li>
                    </a>
                    <a className="mx-[2%]" href="#contact">
                      <li>Contact</li>
                    </a>
                  </ul>
                </div>
                <div className="flex justify-end w-[28%] text-[1vw]">
                  <p className="mr-[3%]">Follow Us On:</p>
                  <div>
                   <a href="#"><i className="fa-brands text-[1.2vw] mx-1 fa-linkedin"></i></a>
                   <a href="#"><i className="fa-brands text-[1.2vw] mx-1 fa-facebook-f"></i></a>
                   <a href="#"><i className="fa-brands text-[1.2vw] mx-1 fa-instagram"></i></a>
                   <a href="#"><i className="fa-brands text-[1.2vw] mx-1 fa-x-twitter"></i></a>
                  </div>
                </div>
              </div>

              <div className="bg-white flex py-[0.5%] justify-between px-[5%] items-center">
                <div className="w-auto logo">
                  <a href="#home"><img src={logo} className="h-[6vh] w-auto" alt="" /></a>
                </div>
                <div className="w-[52%]">
                  <ul className="flex justify-evenly nav text-[#D9490C] text-[1.2vw] font-semibold">
                    <a href="#home">
                      <li>Home</li>
                    </a>
                    <a href="#about">
                      <li>About</li>
                    </a>
                    <a href="#services">
                      <li>Our Services</li>
                    </a>
                    <a href="#members">
                      <li>Members</li>
                    </a>
                    <a href="#contact">
                      <li>Contact</li>
                    </a>
                  </ul>
                </div>
                <div className="flex items-center login">
                  <button onClick={displaypop} className="text-[#D9490C] cursor-pointer p-0 text-[1.2vw] font-semibold bg-transparent">
                    Get Inquiry
                  </button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
