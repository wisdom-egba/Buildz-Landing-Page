import { motion } from "framer-motion"
import img1 from "../assets/bro.png"
export const Hero = () => {
  return (
    <>
      <div className=" relative z-0 md:mt-24 md:flex bg-[#FFFF] justify-between items-center max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto pb-[1000px] md:pb-[200px] ">
        <div className="mt-[90px] md:mt-0 md:w-[60%]">
          <motion.div
            initial={{ x: -900 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-[70%]"
          >
            <h1 className="text-4xl font-bold md:text-2xl lg:text-6xl py-6 tracking-wider ">
              Making Your Business Ideas
              <span className="font-extrabold text-4xl"> Come True</span>
            </h1>

            <p className="py-4 text-lg text-gray-500">
              We provide businesses with all financial services including
              financial analysis of the enterprise
            </p>
            <button className="heroBtn my-10 py-4 px-10 text-lg md:text-sm">
              READ MORE
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="md:w-[50%]"
        >
          <img src={img1} alt="" />
        </motion.div>
      </div>
    </>
  )
}
