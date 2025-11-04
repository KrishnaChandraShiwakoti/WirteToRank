import PrimaryHeader from "../ui/PrimaryHeader";
import HeroButton from "../ui/Buttons/HeroButton";
import star from "../assets/svg/star.svg";
import HeroImg from "../assets/img/HeroImg.png";

const HeroSection = ({ handleFormOverlay }) => {
  return (
    <div className="text-white text-center flex flex-col gap-5 items-center">
      <div className="md:flex mt-10 gap-3 items-center hidden ">
        <img src={star} className="h-5 w-5" />
        <p className=" text-xl font-medium">AI-Powered SEO Revolution</p>
      </div>
      <div className="text-4xl font-semibold mt-8 md:mt-0 w-8/12 flex flex-col gap-5 md:inline-block md:w-6/12 md:text-5xl">
        <PrimaryHeader title={"Transform"} />
        Your Business{" "}
        <p>
          with{" "}
          <span className="bg-gradient-to-r from-blue-800 via-blue-300 to-blue-800 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
        </p>
        Local SEO
      </div>
      <p className="font-light text-center md:text-2xl text-xl  md:w-8/12 w-10/12">
        Generate thousands of optimized city-specific landing pages, heist
        competitor's SEO Strategies, and seamlessly integrate with WordPress -
        all in minutes, not months
      </p>
      <div>
        <HeroButton title={"Try SEO Heist"} onclick={handleFormOverlay} />
        <img
          src={HeroImg}
          alt="Hero Img"
          className=" w-11/12 h-[300px] md:h-full md:w-8/12 mx-auto mt-10
        "
        />
      </div>
    </div>
  );
};

export default HeroSection;
