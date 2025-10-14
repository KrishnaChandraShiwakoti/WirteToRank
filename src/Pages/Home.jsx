import HomeScreen from "../assets/svg/HomeScreen.svg";
import Navbar from "../ui/Navbar";
import HeroButton from "../ui/Buttons/HeroButton";
import Table from "../Components/Table";
import ScrollLogo from "../Components/ScrollLogo";
import FeatureSection from "../Components/FeatureSection";
import Learn from "../ui/Learn";
import Footer from "../Components/Footer";
import FrequentlyQuestions from "../Components/FrequentlyQuestions";
import Progress from "../Components/Progress";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-900 h-full w-full  lg:rounded-bl-[20rem] rounded-bl-[10rem]">
        <div
          className="w-[100%] py-5 h-[100%] lg:rounded-bl-[20rem] rounded-bl-[10rem]"
          style={{
            background: `url(${HomeScreen})`,
            backgroundRepeat: "no-repeat",
            WebkitBackgroundSize: "cover",
          }}>
          <Navbar />
          <div className="text-white text-center flex flex-col gap-10 items-center">
            <p className="mt-10 text-2xl">AI-Powered SEO Revolution</p>
            <div className="text-5xl font-bold">
              <h1>
                <span className="bg-gradient-to-r from-pink-300 via-primary-400 to-pink-300 bg-clip-text text-transparent">
                  Transform{" "}
                </span>
                Your Business
              </h1>
              with{" "}
              <span className="bg-gradient-to-r from-blue-800 via-blue-300 to-blue-800 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Local SEO
            </div>
            <p className="lg:text-3xl text-xl text-center w-8/12">
              Generate thousands of optimized city-specific landing pages, heist
              competitor's SEO Strategies, and seamlessly integrate with
              WordPress - all in minutes, not months
            </p>
            <HeroButton title={"Try SEO Heist"} />
          </div>
        </div>
      </div>
      <Table />
      <ScrollLogo />
      <FeatureSection />
      <Progress />
      <Learn />
      <FrequentlyQuestions />
      <Footer />
    </>
  );
};

export default Home;
