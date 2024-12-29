import React from 'react'
import partner1 from '../media/partner1.png'
import partner2 from '../media/partner2.png'
import partner3 from '../media/partner3.png'
import partner4 from '../media/partner4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Members() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: false,
    cssEase: "linear", 
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024, // screens less than 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1280, // screens less than 1024px wide
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 2560, // screens less than 1024px wide
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
     
      {
        breakpoint: 768, // screens less than 768px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screens less than 480px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id='members' className='px-[5%] pt-[9%]'>
        <h2 className='uppercase text-center text-[5vw] sm:text-[3vw] md:text-[2.2vw] font-semibold text-[#D9490C] my-1'>Our Founding team members</h2>
        <p className='mb-7 text-[3vw] sm:text-[2vw] md:text-[1.5vw] 2xl:text-[1vw] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        {/* <div className='flex justify-between flex-col items-center sm:flex-row'> */}
        <Slider {...settings}>
          <div className='p-1'>
            <img src={partner1} className='w-[100%] sm:w-[90%] my-2' alt="" />
            </div>
            <div className='p-1'>
            <img src={partner2} className='w-[100%] sm:w-[90%] my-2' alt="" />
            </div>
            <div className='p-1'>
            <img src={partner3} className='w-[100%] sm:w-[90%] my-2' alt="" />
            </div>
            <div className='p-1'>
            <img src={partner4} className='w-[100%] sm:w-[90%] my-2' alt="" />
            </div>
        </Slider>
        {/* </div> */}
    </section>
  )
}
