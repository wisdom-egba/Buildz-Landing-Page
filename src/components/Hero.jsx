import img1 from "../assets/bro.png"
export const Hero = () => {
  return (
    <div className="flex bg-[#FFFF] justify-between items-center md:max-w-[85%] lg:max-w-[70%] m-auto">
      <div className="w-[60%]">
        <div className="w-[70%]">
          <h1 className="md:text-2xl lg:4xl ">
            Making Your Business Ideas
            <span className="font-extrabold">Come True</span>
          </h1>
          <p>
            We provide businesses with all financial services including
            financial analysis of the enterprise
          </p>
          <button className="heroBtn">READ MORE</button>
        </div>
      </div>

      <div className="w-[50%]">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}
