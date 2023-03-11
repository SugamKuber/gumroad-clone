import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Treeguy from "../assets/treeguy.svg";
import Workguy from "../assets/workguy.svg";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.1, scale: 0.7 },
};
const smallsquareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  hidden: { opacity: 0.1, scale: 0.6 },
};

function End() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <div className=" grid grid-cols-2 divide-x">
        <div className="bg-[#b23386] p-[90px] flex flex-col items-center">
          <h1 className="text-4xl w-2/3 text-center ">
            Don’t take risks. That’s scary!
          </h1>
        </div>
        <div className="bg-[#ff90e8] p-[90px] flex flex-col items-center ">
          <h1 className="text-4xl w-2/3 text-center  ">
            Place small bets. That’s exciting
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-2 divide-x">
        <div className="bg-[#000000] p-28">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={smallsquareVariants}
            className="square z-30"
          >
            <div className=" z-30 absolute bg-white px-10 py-6 rounded-2xl font-semibold border-black border-2  -translate-x-8 -translate-y-7">
              Instead of selling a book...
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <img src={Workguy} alt="Work guy" className="-z-30" />
          </motion.div>
        </div>
        <div className="bg-[#ffc900] p-28">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={smallsquareVariants}
            className="square z-30"
          >
            <div className="absolute z-30 bg-white px-10 py-6 rounded-2xl border-black border-2 font-semibold -translate-x-8 -translate-y-6">
              ...start by selling a blog post!
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <img src={Treeguy} alt="Tree guy" className="-z-30" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default End;
