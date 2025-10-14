import React from "react";
import SoftwareLogo from "../ui/SoftwareLogo";
import freedly from "../assets/freedly.png";
import drafitbit from "../assets/draftbit.png";

const ScrollLogo = () => {
  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      <h1 className="text-2xl mb-5">
        Over{" "}
        <span className="bg-primary-600 bg-clip-text text-transparent">
          200+ software
        </span>{" "}
        business growing with{" "}
        <span className="bg-primary-600 bg-clip-text text-transparent">
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
