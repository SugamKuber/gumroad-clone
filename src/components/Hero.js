import Paint from "../assets/paint.svg";
import Gum from "../assets/gumbubble.svg";
import Vegalia from "../assets/vegaliapic.png";
import { useViewportScroll, motion, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -150]);
  const y2 = useTransform(scrollY, [0, 600], [600, -100]);

  return (
    <>
      <div className=" grid grid-cols-2 divide-x">
        <div className="bg-[#ff90e8] p-[90px] flex flex-col gap-y-10 border-r-2 border-b-2 border-black">
          <h1 className="text-8xl">Go from zero to $1</h1>
          <p className="text-2xl ">
            With Gumroad, anyone can earn their first dollar online. Just start
            with what you know, see what sticks, and get paid. It’s that easy
          </p>
          <button className="w-[270px] p-[22px] bg-black text-white text-2xl hover:-translate-x-2 hover:-translate-y-2 hover:border-r-8 hover:border-b-8 border-yellow-400  duration-200">
            start selling
          </button>
        </div>
        <div className="bg-[#ffc900] p-24 border-l-2 border-b-2 border-black">
          <div>
            <motion.div className="box" style={{ y: y2, x: 0 }}>
              <img src={Gum} alt="gum" className="absolute -bottom-64" />
            </motion.div>
            <motion.div className="box" style={{ y: y1, x: 100 }}>
              <img src={Paint} alt="paint" className="absolute right-16" />
            </motion.div>
            <img src={Vegalia} alt="girl" />
          </div>
          <div className="translate-y-16 -translate-x-12">
            Vegalia sells Procreate brushes
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
