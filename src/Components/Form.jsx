import React from "react";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import CTA from "../ui/Buttons/CTA";

const Form = ({ showForm, setShowForm }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!showForm}
      className="relative bg-white shadow-2xl px-8 py-6 rounded-3xl mx-auto flex items-start gap-6 flex-col max-w-5xl max-h-[80vh] overflow-y-auto w-full"
      style={{ WebkitOverflowScrolling: "touch" }}>
      {/* Close button top-right */}
      <button
        type="button"
        aria-label="Close form"
        onClick={() => setShowForm && setShowForm(false)}
        className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <span className="sr-only">Close</span>
        {/* simple X icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
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
          placeholder={"+61 485906541"}
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
        {/* prevent fallback open-form dispatch from inside the form by providing a submit handler
            Replace with actual submit logic when integrating backend */}
        <CTA title={"Get Started Now"} onClick={(e) => e.preventDefault()} />
      </div>
    </div>
  );
};

export default Form;
