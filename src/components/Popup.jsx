import React from "react";

export default function Popup(props) {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {props.popup && (
        <div className="fixed top-0 left-0 right-0 bg-[#1c1c1c73] flex z-50 w-full h-full justify-center items-center">
          {/* <div className="relative flex justify-center"> */}
          {/* Modal content */}
          <div className="bg-white h-[430px] mt-[-40px] lg:h-[460px] w-[270px] md:w-[320px] 2xl:h-[610px] 2xl:w-[550px] rounded-lg 2xl:rounded-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between lg:pl-[5%] p-5 md:p-2 2xl:p-5 border-b rounded-t">
              <h3 className="text-xl 2xl:text-[1.4vw] md:mt-4 md:ml-3 font-semibold text-gray-900">
                Inquire Now
              </h3>
              <button
                type="button"
                onClick={() => props.showpop()}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              {/* ... rest of your popup content */}
              <form onSubmit={submit} className="space-y-4" action="#">
                <div>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="bg-gray-50 popinput border border-gray-300 text-gray-900 rounded-[5px] focus:ring-blue-500 focus:border-blue-500 pl-3 block w-full"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[5px] focus:ring-blue-500 popinput focus:border-blue-500 pl-3 block w-full"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={(e) => {
                      const inputphone = e.target.value;
                      const numericphone = inputphone.replace(/\D/g, "");
                      const formattedphone = numericphone.slice(0, 10);
                    }}
                    pattern="[1-9]{1}[0-9]{9}"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[5px] popinput focus:ring-blue-500 focus:border-blue-500 pl-3 block w-full"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id="message"
                    className="bg-gray-50 border border-gray-300 text-gray-900 textarea rounded-[5px] 2xl:h-[155px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    cols="50"
                    rows="5"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#D9490C] hover:bg-orange-700 2xl:text-[1.5rem] outline-none font-medium rounded-lg text-sm px-5 py-2.5 2xl:py-5 text-center"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
}
