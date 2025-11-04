import React from "react";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import CTA from "../ui/Buttons/CTA";

const Form = ({ showForm }) => {
  return (
    <div
      className="bg-white shadow-2xl px-6 py-6 rounded-3xl mx-auto flex items-start gap-6 flex-col max-w-5xl max-h-[80vh] overflow-y-auto"
      style={{ WebkitOverflowScrolling: "touch" }}>
      <h1 className="text-3xl font-bold">
        Get{" "}
        <span className="bg-primary-500 bg-clip-text text-transparent">
          Early Access{" "}
        </span>
        to City Page Generator
      </h1>
      <p className="text-sm text-gray-600 font-medium">
        MPV Launch Special -{" "}
        <span className="bg-primary-500 bg-clip-text text-transparent">
          Free access
        </span>{" "}
        for the first{" "}
        <span className="bg-primary-500 bg-clip-text text-transparent">
          100 Business
        </span>{" "}
        Owners!
      </p>

      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2">
        <InputField
          label={"Full Name"}
          type={"text"}
          placeholder={"Your name"}
        />
        <InputField
          label={"Email Address"}
          type={"email"}
          placeholder={"your@gmail.com"}
        />

        <InputField
          label={"Phone Number"}
          type={"tel"}
          placeholder={"+41 1734567324"}
        />
        <InputField
          label={"Business Name"}
          type={"text"}
          placeholder={"Your company name"}
        />

        <SelectField
          label={"Business Size"}
          placeholder={"Select business size"}
        />
        <SelectField
          label={"Estimated Annual Revenue"}
          placeholder={"Select revenue range"}
        />

        <SelectField
          css={"lg:col-span-2"}
          label={"Your Role in The Business"}
          placeholder={"Select your role"}
        />
      </div>

      <div className="w-full mt-2">
        <CTA title={"Get Started Now"} />
      </div>
    </div>
  );
};

export default Form;
