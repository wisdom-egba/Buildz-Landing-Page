import React, { useEffect } from "react"
import { Card } from "./Card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const webVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { x: -1000, opacity: 0.4 },
}

export const Achievement = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <div className="relative ">
      <div className=" bg-[#000000] flex justify-center pb-20 ">
        <div className="text-[#FFFF] mt-[200px]  md:mt-[300px]">
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={webVariant}
            className="text-4xl tracking-wide md:text-4xl font-semibold md:flex justify-center py-6 w-[60%] text-center m-auto leading-relaxed"
          >
            Our Achievements
          </motion.h1>
          <p className="text-[22px] font-light text-gray-200 md:text-lg tracking-widest md:max-w-[55%] m-auto items-center text-center py-5 px-7 md:px-0 ">
            Buildz is base for future business project which includes all aspect
            and makes a forecast about your project payback
          </p>
          <div className="md:flex justify-center gap-[100px] mt-9">
            <div className="flex flex-col justify-center items-center py-7 md:py-0 ">
              <h1 className="text-6xl md:text-3xl font-bold py-4 md:py-2">
                600
              </h1>
              <p className="uppercase text-3xl  md:text-sm">awards won</p>
            </div>
            <div className="flex flex-col justify-center items-center py-7 md:py-0 ">
              <h1 className="text-6xl md:text-3xl font-bold py-4 md:py-2">
                567
              </h1>
              <p className="uppercase text-3xl  md:text-sm">
                satisfied clients
              </p>
            </div>
            <div className="flex flex-col justify-center items-center py-7 md:py-0 ">
              <h1 className="text-6xl md:text-3xl font-bold py-4 md:py-2">
                670
              </h1>
              <p className="uppercase text-3xl  md:text-sm">startup growth</p>
            </div>
            <div className="flex flex-col justify-center items-center py-7 md:py-0 ">
              <h1 className="text-6xl md:text-3xl font-bold py-4 md:py-2">
                500
              </h1>
              <p className="uppercase text-3xl  md:text-sm">average prices</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 md:top-[-120px] top-[-900px] w-screen ">
        <Card />
      </div>
    </div>
  )
}
