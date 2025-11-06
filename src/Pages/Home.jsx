import HomeScreen from "../assets/svg/HomeScreen.svg";
import Navbar from "../ui/Navbar";
import ScrollLogo from "../Components/ScrollLogo";
import FeatureSection from "../Components/FeatureSection";
import Learn from "../ui/Learn";
import Footer from "../Components/Footer";
import FrequentlyQuestions from "../Components/FrequentlyQuestions";
import Progress from "../Components/Progress";
import Integration from "../Components/Integration";
import Testimonial from "../Components/Testimonial";
import Button from "../ui/Buttons/Button";
import LocalSEO from "../assets/svg/LocalSEO.svg";
import image from "../assets/img/LocalSeo.png";
import HeroSection from "../Components/HeroSection";
import HeroImg from "../assets/img/HeroImg.png";
import Walkthrough from "../Components/Walkthrough";
import Form from "../Components/Form";
import { useState, useEffect } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const handleFormOverlay = (e) => {
    e.stopPropagation();
    setShowForm(true);
  };

  // close the form when Escape is pressed
  useEffect(() => {
    if (!showForm) return;
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setShowForm(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showForm]);

  // listen to global "open-form" events dispatched by buttons without an explicit onClick
  useEffect(() => {
    const openHandler = () => setShowForm(true);
    window.addEventListener("open-form", openHandler);
    return () => window.removeEventListener("open-form", openHandler);
  }, []);
  return (
    <>
      <div className="relative">
        <div className=" bg-neutral-900 h-svh w-full lg:rounded-bl-[20rem] rounded-bl-[10rem] ">
          <div
            className="w-[100%] py-5 h-full lg:rounded-bl-[20rem] rounded-bl-[10rem]"
            style={{
              background: `url(${HomeScreen})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
            <Navbar handleButtonClick={handleFormOverlay} />
            <HeroSection handleFormOverlay={handleFormOverlay} />
          </div>

          {showForm && (
            <div
              className="fixed inset-0 lg:w-6/12 mx-auto z-50 flex items-start justify-center pt-5"
              onClick={() => setShowForm(false)}>
              <div className="w-11/12" onClick={(e) => e.stopPropagation()}>
                <Form showForm={showForm} setShowForm={setShowForm} />
              </div>
            </div>
          )}
        </div>
        <img
          src={HeroImg}
          alt="Hero Img"
          className="relative xs:-top-45 xs:-mb-50 xsm:-top-70 xsm:-mb-70 w-11/12 h-[300px] md:h-full md:w-8/12 mx-auto mt-10
        "
        />
      </div>
      <ScrollLogo />
      <FeatureSection />
      <Progress />
      <Learn />
      <Walkthrough />
      <Integration />
      <Testimonial />
      <FrequentlyQuestions />
      <div className="relative rounded-b-3xl flex flex-col justify-center items-center gap-5 py-40 my-20">
        <img
          src={LocalSEO}
          alt=""
          className="absolute md:hidden block w-[] -z-1"
        />
        <img
          src={image}
          alt=""
          className="absolute hidden md:block -z-1 h-[100%] w-[100%]"
        />

        <h1 className="lg:text-5xl text-2xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent font-bold">
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
            <p className="bg-[#FF4D6D] bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-[#FF4D6D] bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-[#FF4D6D] bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl">50,340+</p>
            <p>City Page Generated</p>
            <p className="bg-[#FF4D6D] bg-clip-text text-transparent">
              +250% this month
            </p>
          </div>
        </div>
        <Button title={"Get Started Now"} onClick={handleFormOverlay} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
