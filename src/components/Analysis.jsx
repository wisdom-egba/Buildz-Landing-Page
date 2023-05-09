import React from "react"
import analysis from "../assets/rafiki.jpg"
export const Analysis = () => {
  return (
    <div className="md:flex max-w-[85%] grid md:max-w-[85%] lg:max-w-[70%] m-auto md:mt-28 w-screen items-center">
      <div className="md:w-[60%] order-last md:order-first mb-20 md:mb-0">
        <img className="md:w-[450px] md:h-[450px] " src={analysis} alt="" />
      </div>

      <div className="">
        <div className="mb-12">
          <h1 className="text-2xl md:text-xl uppercase font-bold">
            01. startups
          </h1>
          <p className="text-lg md:text-[18px] text-gray-500">
            Startuppers Receive Assistance in Financial, Legal, Economical and
            Human Resources
          </p>
        </div>
        <div className="mb-12">
          <h1 className="text-2xl md:text-xl uppercase font-bold">
            02. Anti-Crisis
          </h1>
          <p className="text-lg md:text-[18px] text-gray-500 ">
            Marketing Research, Analysis and Creating Marketing Plan
          </p>
        </div>
        <div className="mb-12">
          <h1 className="text-2xl md:text-xl uppercase font-bold">
            03. Finance
          </h1>
          <p className="text-lg md:text-[18px] text-gray-500">
            We Provide Businesses With All Financial Services Including
            Consultations, Financial Analysis
          </p>
        </div>
      </div>
    </div>
  )
}
