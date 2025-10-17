import React from "react";
import ViewFaqs from "../ui/ViewFaqs";
const FrequentlyQuestions = () => {
  return (
    <div className=" w-11/13 lg:w-7/12 mx-auto my-3 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold ">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">
          Questions
        </span>
      </h1>
      <p className="text-neutral-500 mt-5">
        Connect, collaborate and automate with TechVantage's extensive library
        of integrations. Our platform seamlessly integrates with popular
        software, empowering you to streamline workflow and maximize
        productivity
      </p>

      <div className="w-11/12 flex flex-col gap-2 items-center mt-10">
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
        <ViewFaqs
          title={"What exactly are city page and why do i need them?"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nemo odit doloribus quaerat, soluta quisquam, nihil sequi voluptatibus, nulla qui expedita sed unde veniam suscipit aut dolore ratione? Possimus, at."
          }
        />
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
