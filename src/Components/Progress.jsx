import Button from "../ui/Buttons/Button";
import StepLine from "../assets/svg/StepLine.svg";
import { MdNoteAdd } from "react-icons/md";
import { GraphNewUp } from "@solar-icons/react";
import { Rocket } from "@solar-icons/react";

const Progress = () => {
  return (
    <div className="w-8/12 mx-auto mt-10 lg:-mb-[300px]">
      <div className="lg:w-5/12 flex flex-col gap-4 mb-10">
        <p className="bg-primary-500 bg-clip-text text-transparent uppercase">
          Simple Process
        </p>
        <h1 className="text-3xl font-bold">
          Let's use{" "}
          <span className="bg-gradient-to-r from-purple-600 to-primary-700 bg-clip-text text-transparent">
            Writetorank{" "}
          </span>
          In{" "}
          <span className="bg-primary-500 bg-clip-text text-transparent">
            Three
          </span>{" "}
          Easy Actions
        </h1>
        <p className="text-neutral-500">
          Get started in minutes with our streamlined workflow designed for
          maximum efficiency.
        </p>
        <div className="">
          <Button title={"Get Started Now"} />
        </div>
      </div>
      <div className="relative lg:-top-50 mb-10">
        <img src={StepLine} alt="" className="hidden lg:block" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/12 relative lg:left-40 lg:-top-20 flex flex-col gap-3">
            <MdNoteAdd
              size={50}
              color="#645be8"
              className="p-2 bg-white rounded-xl"
            />
            <h1 className="absolute -z-1 left-55 text-9xl font-extrabold text-neutral-200 -top-10">
              1
            </h1>
            <h1 className="text-2xl font-bold">Add You Business Details</h1>
            <p className="text-neutral-500">
              Input your business information, services, and target keywords.
              Our AI understands your niche and creates relevant content
            </p>
          </div>
          <div className="md:w-3/12 relative lg:left-60 flex lg:-top-55 flex-col gap-3">
            <GraphNewUp
              size={50}
              weight="Outline"
              color="#645be8"
              className="p-2 bg-white rounded-xl"
            />
            <h1 className="absolute -z-1 left-50 text-9xl font-extrabold text-neutral-200 -top-12">
              2
            </h1>
            <h1 className="text-2xl font-bold">
              Analyze Competitors & Generate City Pages
            </h1>
            <p className="text-neutral-500">
              Use SEO Heist to scan competitor URLs and extract their winning
              strategies. Identify content gaps and opportunities. Select your
              target locations and services. Generate thousands of unique,
              SEO-optimized pages in minutes.
            </p>
          </div>
          <div className="lg:w-3/12 relative lg:left-85 flex lg:-top-117 flex-col gap-3">
            <Rocket
              size={50}
              weight="Outline"
              color="#645be8"
              className="p-2 bg-white rounded-xl"
            />
            <h1 className="absolute -z-1 left-50 lg:left-20 text-9xl font-extrabold text-neutral-200 -top-8">
              3
            </h1>
            <h1 className="text-2xl font-bold">Deploy to WordPress</h1>
            <p className="text-neutral-500">
              Push all pages to your WordPress with one click. Watch your local
              SEO rankings soar across all locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
