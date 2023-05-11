import React from "react"
import logo1 from "../assets/logo (1).png"
export const Footer = () => {
  return (
    <div className="bg-[#000000] text-white">
      <div className="md:flex items-center gap-40 lg:gap-[400px] max-w-[85%]  md:max-w-[85%] lg:max-w-[70%] m-auto">
        <div className=" py-8">
          <img src={logo1} alt="" />
        </div>
        <div>
          <ul className=" md:flex justify-center gap-6 lg:gap-11 items-center grid grid-cols-2 py-2 text-lg md:text-sm uppercase">
            <li>
              <a href="#header">home</a>
            </li>
            <li>
              <a href="#achievement">about us</a>
            </li>
            <li>
              <a href="#slide">blog</a>
            </li>
            <li>
              <a href="#form">contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[90%] m-auto bg-white h-[2px] my-4" />
      <p className="text-center py-2 pb-5">2019 Zetter All Rights Reserved</p>
    </div>
  )
}
