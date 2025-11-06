import React from "react";
import ViewFaqs from "../ui/ViewFaqs";
const FrequentlyQuestions = () => {
  return (
    <div className=" w-11/13 lg:w-7/12 mx-auto my-3 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold ">
        Frequently Asked{" "}
        <span className="bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent">
          Questions
        </span>
      </h1>
      <p className="text-gray-400 font-normal mt-5">
        Connect, collaborate and automate with TechVantage's extensive library
        of integrations. Our platform seamlessly integrates with popular
        software, empowering you to streamline workflow and maximize
        productivity
      </p>

      <div className="w-11/12 flex flex-col gap-2 items-center mt-10">
        <ViewFaqs
          title={"What is WriteToRank?"}
          description={
            "WriteToRank is an AI-powered SEO tool that helps you create optimized local landing pages, analyze competitors, and improve your online visibility — all in a few clicks."
          }
        />
        <ViewFaqs
          title={"Can I integrate WriteToRank with my existing website?"}
          description={
            "Yes. WriteToRank integrates seamlessly with WordPress and can also export content for use on other platforms."
          }
        />
        <ViewFaqs
          title={"Will the generated pages be unique and SEO-friendly?"}
          description={
            "Absolutely. Each page is created using AI trained for SEO best practices — including keyword optimization, internal linking, and proper meta structure."
          }
        />
        <ViewFaqs
          title={"How does WriteToRank help with competitor analysis?"}
          description={
            "The platform identifies your competitors’ high-performing keywords, backlinks, and page structures so you can replicate and improve their strategies."
          }
        />
        <ViewFaqs
          title={"Can I customize the generated pages?"}
          description={
            "Yes. You can edit any content, layout, or metadata before publishing to match your brand voice and design."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "City pages are location-specific landing pages optimized for local search queries. They help you rank for searches like 'service + city name' or 'service near me'. You need them to capture local traffic, build geographic relevance, and compete effectively in multiple locations without physical offices everywhere."
          }
        />
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
