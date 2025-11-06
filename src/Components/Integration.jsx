import IntegrationImg from "../assets/img/Integration.png";
import { Element } from "react-scroll";

const Integration = () => {
  return (
    <Element name="Integration">
      <div className="w-6/12 mx-auto flex flex-col justify-center items-center my-10">
        <p className="bg-primary-500 bg-clip-text text-transparent">
          Integration
        </p>
        <h1 className="text-2xl font-bold my-3">
          Seamless Software
          <span className="bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent">
            {" "}
            Integrations
          </span>
        </h1>
        <p className="text-neutral-400 text-center">
          Connect, collaborate, and automate with TechVantage's extensive
          library of integrations. Our platform seamlessly integrates with
          popular software, empowering you to streamline workflows and maximize
          productivity.
        </p>
        <img src={IntegrationImg} className="lg:w-6/12 lg:h-8/12 mt-5" />
      </div>
    </Element>
  );
};

export default Integration;
