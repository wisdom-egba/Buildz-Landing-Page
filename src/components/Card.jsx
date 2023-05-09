import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { BsCreditCard } from "react-icons/bs"

export const Card = () => {
  return (
    <div className=" relative z-20 max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto flex justify-between items-center drop-shadow-xl">
      <div className="bg-[#FFFF] md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg  ">
        <div className="pt-10">
          <HiOutlineLightBulb
            size={20}
            style={{ color: "black", fill: "black" }}
          />
        </div>
        <h1 className="uppercase font-semibold ">branding</h1>
        <p className="px-6 pb-20 text-sm text-center">
          Regular Business Law Assistance service includes monitoring the legal
          sphere of your business
        </p>
      </div>
      <div className="bg-[#FFFF] md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg">
        <div className="pt-10">
          <FaRegMoneyBillAlt
            size={20}
            style={{ color: "black", fill: "black" }}
          />
        </div>

        <h1 className="uppercase font-semibold">finance</h1>
        <p className="px-6 pb-20 text-sm text-center">
          We provide with all financial services including consultation
        </p>
      </div>
      <div className="bg-[#FFFF] md:h-[250px] md:w-[250px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg">
        <div className="pt-10">
          <BsCreditCard size={20} style={{ color: "black", fill: "black" }} />
        </div>

        <h1 className="uppercase font-semibold">marketing</h1>
        <p className="px-6 pb-20 text-sm text-center">
          Good marketing plan is crucial for businessmen who wnat to develop
          their businesses
        </p>
      </div>
    </div>
  )
}
