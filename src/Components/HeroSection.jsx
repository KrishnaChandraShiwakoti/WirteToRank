import PrimaryHeader from "../ui/PrimaryHeader";
import HeroButton from "../ui/Buttons/HeroButton";
import star from "../assets/svg/star.svg";
const HeroSection = ({ handleFormOverlay }) => {
  return (
    <div className="text-white text-center flex flex-col gap-5 items-center">
      <div className="lg:flex mt-10 gap-3 items-center hidden ">
        <img src={star} className="h-5 w-5" />
        <p className=" text-xl font-medium">AI-Powered SEO Revolution</p>
      </div>
      <div className="text-4xl font-semibold mt-8 lg:mt-0 w-8/12 flex flex-col gap-5 lg:inline-block lg:w-6/12 lg:text-5xl ">
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
      <p className="font-light text-center lg:text-2xl text-xl  lg:w-8/12 w-10/12">
        Generate thousands of optimized city-specific landing pages, heist
        competitor's SEO Strategies, and seamlessly integrate with WordPress -
        all in minutes, not months
      </p>
      <HeroButton title={"Try SEO Heist"} onclick={handleFormOverlay} />
    </div>
  );
};

export default HeroSection;
