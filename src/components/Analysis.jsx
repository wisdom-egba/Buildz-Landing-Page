import React from "react"
import analysis from "../assets/rafiki.jpg"
export const Analysis = () => {
  return (
    <div className="md:flex max-w-[85%] grid md:max-w-[85%] lg:max-w-[70%] m-auto md:mt-28 ">
      <div>
        <img
          className="md:w-[350px] md:h-[350px] order-last md:order-first"
          src={analysis}
          alt=""
        />
      </div>

      <div className="">
        <div className="mb-12">
          <h1 className="text-2xl uppercase font-bold">01. startups</h1>
          <p className="text-lg">
            Startuppers receive assistance in financial, legal, economical and
            human resources
          </p>
        </div>
        <div className="mb-12">
          <h1 className="text-2xl uppercase font-bold">02. Anti-Crisis</h1>
          <p className="text-lg">
            Marketing research, analysis and creating marketing plan
          </p>
        </div>
        <div className="mb-12">
          <h1 className="text-2xl uppercase font-bold">03. Finance</h1>
          <p className="text-lg">
            We provide businesses with all financial services including
            consultations, financial analysis
          </p>
        </div>
      </div>
    </div>
  )
}
