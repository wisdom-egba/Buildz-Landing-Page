import React from "react"
import { useState } from "react"
import logo1 from "../assets/logo (2).png"
import { Sling as Hamburger } from "hamburger-react"
import { motion } from "framer-motion"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="shadow-lg py-2  ">
        <div className=" relative flex bg-[#FFFF] justify-between items-center max-w-[90%] md:max-w-[85%] lg:max-w-[70%] m-auto mt-4">
          <div className="">
            <a href="#">
              <img className="w-[80%] md:w-[100%]" src={logo1} alt="" />
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="outline-none uppercase flex gap-8 tracking-wider text-[15px]">
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#experience">About us</a>
              </li>
              <li>
                <a href="#achievement">Service</a>
              </li>
              <li>
                <a href="#slide">blog</a>
              </li>
              <li>
                <a href="#form">contact</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <Hamburger size={25} duration={0.5} />
          </div>
        </div>
        <motion.div
          initial={{ x: toggle ? 0 : -500 }}
          animate={{ x: toggle ? 0 : -500 }}
          transition={{ duration: toggle ? 0.5 : 2.5 }}
          className={
            toggle
              ? "absolute z-10 p-4 px-8 w-full bg-white md:hidden rounded-b-lg mt-2"
              : "hidden absolute"
          }
        >
          <ul className="p-1 text-center uppercase ">
            <li className="p-2 cursor-pointer my-6 hover:bg-gray-100  ">
              <a href="" className="font-semibold">
                home
              </a>
            </li>

            <a className="font-semibold" href="">
              <li className="p-2  cursor-pointer my-6 hover:bg-gray-100">
                pricing
              </li>
            </a>

            <a className="font-semibold" href="">
              <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">
                about us
              </li>
            </a>

            <a className="font-semibold" href="">
              <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">
                blog
              </li>
            </a>

            <a className="font-semibold" href="">
              <li className="p-2 cursor-pointer my-6 hover:bg-gray-100">
                contact
              </li>
            </a>
          </ul>
        </motion.div>
      </div>
    </>
  )
}

export default Header
