import React from "react"
import { useState } from "react"
import logo1 from "../assets/logo (2).png"
import { Sling as Hamburger } from "hamburger-react"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className=" relative flex bg-[#FFFF] justify-between items-center md:max-w-[85%] lg:max-w-[70%] m-auto mt-4">
        <div>
          <img src={logo1} alt="" />
        </div>
        <div className="hidden md:flex">
          <ul className="outline-none uppercase flex gap-8 tracking-wider text-[15px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <Hamburger duration={0.5} />
        </div>
      </div>
      <div
        className={
          toggle
            ? " absolute z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2 dropdown    duration-500 "
            : "hidden"
        }
      >
        <ul className="p-1 text-center ">
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">
            <a className="font-semibold" href="">
              Press
            </a>
          </li>
          <li className="p-2  cursor-pointer my-6 hover:bg-gray-100">
            <a className="font-semibold" href="">
              Career
            </a>
          </li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">
            <a className="font-semibold" href="">
              Blog
            </a>
          </li>
          <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">
            <a className="font-semibold" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
