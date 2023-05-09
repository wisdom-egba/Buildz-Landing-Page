import React from "react"
import { HiOutlineLightBulb } from "react-icons/hi"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { BsCreditCard } from "react-icons/bs"
export const Achievement = () => {
  return (
    <div className="relative">
      <div className=" bg-[#000000] flex justify-center ">
        <div className="text-[#FFFF] mt-[300px]">
          <h1 className="text-4xl font-semibold flex justify-center py-6">
            Our Achievements
          </h1>
          <p className="text-md lg:text-lg tracking-widest max-w-[55%] m-auto items-center text-center py-5">
            Buildz is base for future business project which includes all aspect
            and makes a forecast about your project payback
          </p>
          <div className="flex justify-center gap-[100px] mt-9">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-3xl font-bold py-2">600</h1>
              <p className="uppercase text-sm">awards won</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold py-2">567</h1>
              <p className="uppercase text-sm">satisfied clients</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold py-2">670</h1>
              <p className="uppercase text-sm">startup growth</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold py-2">500</h1>
              <p className="uppercase text-sm">average prices</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative z-20 max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto flex justify-between items-center">
        <div className="bg-[#FFFF] md:h-[200px] md:w-[200px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg">
          <HiOutlineLightBulb
            size={20}
            style={{ color: "black", fill: "black" }}
          />
          <h1 className="">branding</h1>
          <p>
            Regular Business Law Assistance service includes monitoring the
            legal sphere of your business
          </p>
        </div>
        <div className="bg-[#FFFF] md:h-[200px] md:w-[200px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center rounded-lg">
          <FaRegMoneyBillAlt
            size={20}
            style={{ color: "black", fill: "black" }}
          />
          <h1 className="">finance</h1>
          <p>We provide with all financial services including consultation</p>
        </div>
        <div className="bg-[#FFFF] md:h-[200px] md:w-[200px] gap-7 lg:h-[300px] lg:w-[300px] flex justify-center flex-col items-center">
          <BsCreditCard size={20} style={{ color: "black", fill: "black" }} />
          <h1 className="">marketing</h1>
          <p>
            Good marketing plan is crucial for businessmen who wnat to develop
            their businesses
          </p>
        </div>
      </div>
    </div>
  )
}
