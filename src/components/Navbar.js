import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <img src={Logo} alt="logo" width="100%" className="p-10" />
      <div className="border-y-2 border-black flex justify-between pl-10">
        <div className="flex gap-x-7 py-6">
          <div className="group  transition duration-300">
            Features
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300">
            Pricing
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300">
            University
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300">
            Blog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
          <div className="group  transition duration-300">
            Discover
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </div>
        </div>
        <div className="flex">
          <button className="p-6 px-12 border-x-2 border-black hover:bg-[#ff90e8]">
            Login
          </button>
          <button className="p-6 px-10 bg-black text-white hover:bg-[#ff90e8] hover:text-black">
            Start Selling
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
