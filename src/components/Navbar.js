import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <img src={Logo} alt="logo" width="100%" className="p-10" />
      <div className="border-y-2 border-black flex justify-between pl-10">
        <div className="flex gap-x-7 py-6">
          <div> Features </div>
          <div> Pricing</div>
          <div> University </div>
          <div> Blog </div>
          <div> Discover</div>
        </div>
        <div className="flex">
          <button className="p-6 px-12 border-x-2 border-black">Login</button>
          <button className="p-6 px-10 bg-black text-white">
            {" "}
            Start Selling
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
