import Paint from "../assets/paint.svg";
import Gum from "../assets/gumbubble.svg";
import Vegalia from "../assets/vegaliapic.png";
function Hero() {
  return (
    <>
      <div className=" grid grid-cols-2 divide-x">
        <div className="bg-[#ff90e8] p-[90px] flex flex-col gap-y-10">
          <h1 className="text-8xl">Go from zero to $1</h1>
          <p className="text-2xl ">
            With Gumroad, anyone can earn their first dollar online. Just start
            with what you know, see what sticks, and get paid. It’s that easy
          </p>
          <button className="w-[270px] p-[22px] bg-black text-white font-3xl">
            start selling
          </button>
        </div>
        <div className="bg-[#ffc900] p-24">
          <img src={Gum} alt="gum" className="absolute -bottom-64" />
          <img src={Paint} alt="paint" className="absolute right-16" />
          <img src={Vegalia} alt="girl" />
        </div>
      </div>
    </>
  );
}

export default Hero;
