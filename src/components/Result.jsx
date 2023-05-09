import React from "react"

export const Result = () => {
  return (
    <div className=" relative z-0 mt-16 md:mt-24 md:flex md:flex-col lg:flex-row bg-[#FFFF] justify-center items-center max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto">
      <div>
        <h1 className="text-4xl font-bold md:text-2xl lg:text-6xl py-6 tracking-wider ">
          Our Results
        </h1>
        <p className="py-2 text-lg text-gray-500 md:w-[60%]">
          We are a team of like minded people who do business, generate ideas
          and realize them. Finance, Marketing, Jurisprudence and Business
          Economy are our directions and we know how to deal with many financial
          issues
        </p>
        <button className="heroBtn my-10 py-4 px-10 text-lg md:text-sm">
          read more
        </button>
      </div>
      <div className="md:flex gap-3 grid grid-cols-3 place-items-center justify-center items-center">
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[110px] h-[290px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">JAN</h1>
          </div>
          <h1 className="mt-[120px] ml-2">70%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[40px] h-[360px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">FEB</h1>
          </div>
          <h1 className="mt-[50px] ml-2">90%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[80px] h-[320px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">MAR</h1>
          </div>
          <h1 className="mt-[90px] ml-2">80%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[200px] h-[200px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">APR</h1>
          </div>
          <h1 className="mt-[210px] ml-2">50%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[150px] h-[250px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">MAY</h1>
          </div>
          <h1 className="mt-[160px] ml-2">60%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[40px] h-[360px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">JUN</h1>
          </div>
          <h1 className="mt-[50px] ml-2">90%</h1>
        </div>
        <div className="relative flex items-start mb-16 md:mb-0">
          <div>
            <div className="relative h-[400px] w-[30px] bg-gray-600"></div>
            <div className="absolute top-[80px] h-[320px] w-[30px] bg-black"></div>
            <h1 className="mt-2 font-semibold">JUL</h1>
          </div>
          <h1 className="mt-[90px] ml-2">80%</h1>
        </div>
      </div>
    </div>
  )
}
