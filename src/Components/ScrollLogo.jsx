import React from "react";
import drafitbit from "../assets/draftbit.png";
import freedly from "../assets/freedly.png";
import SoftwareLogo from "../ui/SoftwareLogo";

const ScrollLogo = () => {
  return (
    <div className="max-w-full m-5 flex justify-center items-center flex-col overflow-hidden">
      <h1 className="text-2xl mb-5 text-center">
        Over
        <span className="bg-primary-500 bg-clip-text text-transparent">
          200+ software
        </span>
        business growing with
        <span className="bg-primary-500 bg-clip-text text-transparent">
          Write to rank
        </span>
      </h1>
      <div className="flex justify-center items-center gap-4 flex-col overflow-hidden">
        <div className="flex gap-6 animate-scroll-left">
          <SoftwareLogo name={"Jitter"} />
          <SoftwareLogo name={"Krisp"} />
          <SoftwareLogo logo={freedly} name={"freedly"} />
          <SoftwareLogo logo={drafitbit} name={"Drafitbit"} />
          <SoftwareLogo name={"Jitter"} />
          <SoftwareLogo name={"Jitter"} />
        </div>
        <div className="flex gap-6 animate-scroll-right">
          <SoftwareLogo name={"Jitter"} />
          <SoftwareLogo name={"Krisp"} />
          <SoftwareLogo logo={freedly} name={"freedly"} />
          <SoftwareLogo logo={drafitbit} name={"Drafitbit"} />
          <SoftwareLogo name={"Jitter"} />
          <SoftwareLogo name={"Jitter"} />
          <SoftwareLogo name={"Jitter"} />
        </div>
      </div>
    </div>
  );
};

export default ScrollLogo;
