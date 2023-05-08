import img1 from "../assets/bro.png"
export const Hero = () => {
  return (
    <div className=" md:flex bg-[#FFFF] justify-between items-center max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto">
      <div className="mt-[90px] md:mt-0 md:w-[60%]">
        <div className="md:w-[70%]">
          <h1 className="text-4xl font-bold md:text-2xl lg:4xl py-6 tracking-wider ">
            Making Your Business Ideas
            <span className="font-extrabold text-4xl"> Come True</span>
          </h1>

          <p className="py-4">
            We provide businesses with all financial services including
            financial analysis of the enterprise
          </p>
          <button className="heroBtn my-10 py-4 px-10 text-lg">
            READ MORE
          </button>
        </div>
      </div>

      <div className="md:w-[50%]">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}
