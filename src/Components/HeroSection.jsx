import PrimaryHeader from "../ui/PrimaryHeader";
import HeroButton from "../ui/Buttons/HeroButton";
const HeroSection = ({ handleFormOverlay }) => {
  return (
    <div className="text-white text-center flex flex-col gap-10 items-center">
      <p className="mt-10 text-2xl">AI-Powered SEO Revolution</p>
      <div className="text-4xl lg:text-5xl font-bold">
        <PrimaryHeader title={"Transform"} />
        <h1>Your Business</h1>
        with{" "}
        <span className="bg-gradient-to-r from-blue-800 via-blue-300 to-blue-800 bg-clip-text text-transparent">
          AI-Powered
        </span>{" "}
        Local SEO
      </div>
      <p className="lg:text-3xl text-xl text-center w-8/12">
        Generate thousands of optimized city-specific landing pages, heist
        competitor's SEO Strategies, and seamlessly integrate with WordPress -
        all in minutes, not months
      </p>
      <HeroButton title={"Try SEO Heist"} onclick={handleFormOverlay} />
    </div>
  );
};

export default HeroSection;
