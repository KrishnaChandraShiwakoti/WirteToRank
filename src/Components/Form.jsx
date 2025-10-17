import React, { useEffect } from "react";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import CTA from "../ui/Buttons/CTA";

const Form = ({ showForm }) => {
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  return (
    <div className="bg-white shadow-2xl px-6 py-3 w-11/12 rounded-3xl lg:w-8/12 mx-auto flex items-start gap-5 flex-col max-w-4xl">
      <h1 className="text-2xl font-bold">
        Get{" "}
        <span className="bg-primary-500 bg-clip-text text-transparent">
          Early Access{" "}
        </span>
        to City Page Generator
      </h1>
      <p>
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
      <div className="w-10/12 grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-4 gap-8">
        <InputField label={"Full Name"} type={"input"} />
        <InputField label={"Email Address"} type={"email"} />
        <InputField label={"Phone Number"} type={"number"} />
        <InputField label={"Business Name"} type={"input"} />
        <SelectField
          label={"Business Size"}
          placeholder={"Select Business Size"}
        />
        <SelectField
          label={"Estimated Annual Revenue"}
          placeholder={"Select revenue range"}
        />
        <SelectField
          css={"lg:col-span-2"}
          label={"Your Role in The Business"}
          placeholder={"Select Your Role"}
        />
      </div>
      <CTA title={"Get started Now"} />
    </div>
  );
};

export default Form;
