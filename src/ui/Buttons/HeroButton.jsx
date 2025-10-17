import { LuRocket } from "react-icons/lu";
const HeroButton = ({ title, onclick }) => {
  return (
    <>
      <button
        type="button"
        onClick={(e) => onclick(e)}
        className="relative w-[12rem] p-[2px] rounded-[18px] bg-gradient-to-r from-pink-400 via-primary-600 to-pink-400 hover:cursor-pointer overflow-hidden">
        <div className="relative z-10 rounded-[16px] bg-black px-5 py-2 flex justify-center items-center gap-2 text-white">
          {title}
          <LuRocket />
        </div>
      </button>
    </>
  );
};

export default HeroButton;
