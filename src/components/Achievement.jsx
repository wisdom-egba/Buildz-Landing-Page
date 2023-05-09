import React from "react"
import { Card } from "./Card"

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
      <div className="absolute z-20 top-[-120px] w-screen">
        <Card />
      </div>
    </div>
  )
}
