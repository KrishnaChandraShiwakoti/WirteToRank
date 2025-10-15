import IntegrationImg from "../assets/img/Integration.png";
const Integration = () => {
  return (
    <div className="w-6/12 mx-auto flex flex-col justify-center items-center my-10">
      <p className="bg-primary-500 bg-clip-text text-transparent">
        Integration
      </p>
      <h1 className="text-2xl font-bold my-3">
        Seamless Software
        <span className="bg-gradient-to-r from-primary-400 via-primary-700 to-primary-400 bg-clip-text text-transparent">
          {" "}
          Integrations
        </span>
      </h1>
      <p className="text-neutral-400 text-center">
        Connect, collaborate, and automate with TechVantage's extensive library
        of integrations. Our platform seamlessly integrates with popular
        software, empowering you to streamline workflows and maximize
        productivity.
      </p>
      <img src={IntegrationImg} className="lg:w-6/12 lg:h-8/12 mt-5" />
    </div>
  );
};

export default Integration;
