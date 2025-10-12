import { LuRocket } from "react-icons/lu";
const HeroButton = ({ title }) => {
  return (
    <button
      type="button"
      onClick={() => console.log("ok")}
      className="relative m-3 p-[1.5px] rounded-[18px]  hover:cursor-pointer overflow-hidden  bg-gradient-to-r from-pink-400 via-primary-600 to-pink-400 w-[12rem]">
      <div className=" relative z-10 rounded-[16px] b px-5 py-2 flex justify-center items-center gap-2 bg-transparent">
        {title}
        <LuRocket />
      </div>
      {/* <div className=" -inset-3 absolute  rounded-[18px] bg-gradient-to-r from-pink-400 via-purple-600 to-pink-400  animate-spin-slow"></div> */}
    </button>
  );
};

export default HeroButton;
