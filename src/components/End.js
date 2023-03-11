import Treeguy from "../assets/treeguy.svg";
import Workguy from "../assets/workguy.svg";
function End() {
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
          <div className="absolute bg-white px-10 py-6 rounded-2xl font-semibold border-black border-2  -translate-x-8 -translate-y-7">
            Instead of selling a book...
          </div>
          <img src={Workguy} alt="Work guy" />
        </div>
        <div className="bg-[#ffc900] p-28">
          <div className="absolute bg-white px-10 py-6 rounded-2xl border-black border-2 font-semibold -translate-x-8 -translate-y-6">
            ...start by selling a blog post!
          </div>
          <img src={Treeguy} alt="Tree guy" />
        </div>
      </div>
    </>
  );
}

export default End;
