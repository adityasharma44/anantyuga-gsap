import React from 'react'
import displayserve from "../media/Vector.png";
import service1 from "../media/s1.png";
import service2 from "../media/s2.png";
import service4 from "../media/s4.png";
import service5 from "../media/s5.png";
import PropTypes from 'prop-types'

export default function Card(props) {
  return (
    <div className="flex flex-col md:flex-row w-[100%] md:w-[78%] h-[300px] 2xl:mt-[5%] items-center">
                <div className="w-2/5 md:p-7 md:pr-10 2xl:pr-2 mt-[5%] md:mt-0">
                  <img src={props.imglink} className="md:h-[80%] 2xl:h-full 2xl:w-[100%]" alt="" />
                </div>
                <div className="md:w-3/5 ml-7 mt-[5%] md:mt-0">
                  <h3 className="text-[#D04F00] text-[4vw] md:text-[1.9vw] mb-5">
                    {props.title}
                  </h3>
                  <p className="text-white mb-8 text-[3vw] md:text-[1vw]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley.
                  </p>
                  <button className="bg-[#D9490C] text-[3vw] mt-3 md:text-[1.6vw] uppercase font-semibold py-[0.8%] px-[4%] md:py-[0.5%] md:px-[2%] text-white rounded-lg">
                    Our all services
                  </button>
                </div>
              </div>
  )
}
