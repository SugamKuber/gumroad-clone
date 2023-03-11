import Cartoonguy from "../assets/cartoonguy.svg";
function About() {
  return (
    <>
      <div className="py-20 flex gap-y-20 flex-col items-center font-medium">
        <div className="w-4/6 text-3xl text-center">
          You know all those great ideas you have? We want you to try them, lots
          of them, and find out what works.
        </div>
        <div className="flex border-separate text-2xl">
          <div className="h-72 w-[600px] bg-[#ffc900] flex flex-col justify-between items-center p-6 border-2 border-r-0 border-black  rounded-bl-full rounded-tl-full ">
            <p>The Gumroad Way</p>
            <p>Get Better Together</p>
          </div>
          <div className="h-72 w-[600px] bg-[#ffc900] flex flex-col justify-between items-center p-6 border-2 border-l-0 border-black rounded-br-full rounded-tr-full ">
            <p>Start Small</p>
            <p>Learn Quickly</p>
          </div>
        </div>
        <img src={Cartoonguy} alt="cartoon" className="absolute pt-16" />
      </div>
    </>
  );
}

export default About;
