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
import Integration from "../Components/Integration";
import Testimonial from "../Components/Testimonial";
import CTA from "../ui/Buttons/CTA";
import LocalSEO from "../assets/svg/LocalSEO.svg";
import image from "../assets/img/LocalSeo.png";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-900 h-full w-full  lg:rounded-bl-[20rem] rounded-bl-[10rem]">
        <div
          className="w-[100%] py-5 h-[100%] lg:rounded-bl-[20rem] rounded-bl-[10rem]"
          style={{
            background: `url(${HomeScreen})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
      <Integration />
      <Testimonial />
      <FrequentlyQuestions />
      <div className="relative rounded-b-3xl flex flex-col justify-center items-center gap-5 py-40 my-20">
        <img src={LocalSEO} alt="" className="absolute lg:hidden block -z-1" />
        <img
          src={image}
          alt=""
          className="absolute hidden lg:block -z-1 h-[100%] w-[100%]"
        />

        <h1 className="lg:text-5xl text-2xl bg-gradient-to-r from-pink-500 via-amber-300 to-primary-600 bg-clip-text text-transparent font-bold">
          Ready to 10x Your Local SEO
        </h1>
        <p className="text-white text-xl mx-10 text-center lg:w-5/12">
          Join thousands of businesses dominating their local markets with
          WritetoRank's intelligent SEO automation. Start generating city pages
          today.
        </p>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-primary-600 bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-primary-600 bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-primary-600 bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-primary-600 bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
        </div>
        <CTA title={"Get Started Now"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
