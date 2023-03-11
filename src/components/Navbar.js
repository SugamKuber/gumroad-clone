import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <img src={Logo} alt="logo" width="100%" className="p-10" />
      <div className="border-y-2 bg-white border-black flex justify-between pl-10 sticky top-0 z-50">
        <div className="flex gap-x-7 py-6">
          <div className="group  transition duration-300 cursor-pointer ">
            Features
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300 cursor-pointer">
            Pricing
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300 cursor-pointer">
            University
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300 cursor-pointer">
            Blog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300 cursor-pointer">
            Discover
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
        </div>
        <div className="flex">
          <button className="p-6 px-12 border-x-2 cursor-pointer border-black hover:bg-[#ff90e8]">
            Login
          </button>
          <button className="p-6 px-10 bg-black cursor-pointer text-white hover:bg-[#ff90e8] hover:text-black">
            Start Selling
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
