import React from "react"
import mail from "../assets/rafiki.png"
export const FormData = () => {
  return (
    <div className="bg-[#FFFF] relative mb-16">
      <div className=" pt-16 text-center">
        <h1 className="text-4xl font-semibold tracking-widest">Get In Touch</h1>
        <p className="py-6 text-gray-700 tracking-wider text-lg  max-w-[85%] grid md:max-w-[85%] lg:max-w-[50%] md:w-full m-auto">
          Finance and Jurisprudence are our main directions and we know how to
          deal with many financial issues and how to do business in today s
          reality and conditions.
        </p>
      </div>
      <div className="md:flex flex-col justify-center items-center max-w-[75%] grid md:max-w-[85%] lg:max-w-[70%] m-auto">
        <div className="md:w-[60%]">
          <img src={mail} alt="" />
        </div>
        <div className="flex flex-col my-5">
          <form action=" ">
            <label htmlFor="" className="flex flex-col my-5 text-gray-400 ">
              Your Name(required){" "}
              <input
                type="name"
                id="name"
                className="outline-none border border-gray-300 rounded-md py-2 px-2 mt-2 focus:drop-shadow-xl w-[400px] text-black"
                required
              />
            </label>

            <label htmlFor="" className="flex flex-col my-5 text-gray-400 ">
              Your Email(required){" "}
              <input
                type="email"
                className="outline-none border border-gray-300 rounded-md py-2 px-2 mt-2 focus:drop-shadow-xl text-black"
              />
            </label>

            <label htmlFor="" className="flex flex-col my-5 text-gray-400 ">
              Subject{" "}
              <input
                type="text"
                className="outline-none border border-gray-300 rounded-md py-2 px-2 mt-2 focus:drop-shadow-xl text-black"
              />
            </label>

            <label htmlFor="" className="flex flex-col my-5 text-gray-400 ">
              Your Message{" "}
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="outline-none border border-gray-300 rounded-md py-2 px-2 mt-2 focus:drop-shadow-xl text-black"
              ></textarea>
            </label>
            <button className="heroBtn">SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}
