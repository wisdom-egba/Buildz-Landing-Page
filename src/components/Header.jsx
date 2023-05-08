import logo1 from "../assets/logo (2).png"
const Header = () => {
  return (
    <div className=" flex bg-[#FFFF] justify-between items-center md:max-w-[85%] lg:max-w-[70%] m-auto">
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
        <ul className="outline-none uppercase flex gap-8 tracking-wide text-md">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
