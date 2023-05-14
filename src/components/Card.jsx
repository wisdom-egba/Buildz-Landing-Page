import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { BsCreditCard } from "react-icons/bs"
import { motion } from "framer-motion"
export const Card = () => {
  return (
    <div className=" relative z-20 max-w-[85%] md:max-w-[85%] lg:max-w-[70%] md:flex justify-center  md:justify-between items-center drop-shadow-xl grid m-auto">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-[#FFFF] h-[300px] w-[380px] text-2xl md:text-lg md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg my-12 md:my-0 "
      >
        <div className="pt-10">
          <HiOutlineLightBulb
            size={20}
            style={{ color: "black", fill: "black" }}
          />
        </div>
        <h1 className="uppercase font-semibold ">branding</h1>
        <p className="md:px-6 px-9 pb-20 text-[22px] md:text-sm lg:text-lg text-center text-gray-500">
          Regular Business Law Assistance service includes monitoring the legal
          sphere of your business
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-[#FFFF] h-[300px] w-[380px] text-2xl md:text-lg md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg my-12 md:my-0"
      >
        <div className="pt-10">
          <FaRegMoneyBillAlt
            size={20}
            style={{ color: "black", fill: "black" }}
          />
        </div>

        <h1 className="uppercase font-semibold">finance</h1>
        <p className="md:px-6 px-9 pb-20 text-[22px] md:text-sm lg:text-lg text-center text-gray-500">
          We provide with all financial services including consultation
        </p>
      </motion.div>
      <div className="bg-[#FFFF] h-[300px] w-[380px] text-2xl md:text-lg md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg my-12 md:my-0">
        <div className="pt-10">
          <BsCreditCard size={20} style={{ color: "black", fill: "black" }} />
        </div>

        <h1 className="uppercase font-semibold">marketing</h1>
        <p className="md:px-6 px-9 pb-20 text-[22px] md:text-sm lg:text-lg text-center text-gray-500">
          Good marketing plan is crucial for businessmen who wnat to develop
          their businesses
        </p>
      </div>
    </div>
  )
}
