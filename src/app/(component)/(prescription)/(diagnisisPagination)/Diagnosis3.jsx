import React from "react";
import Diagnosis3Input from "../../(reUsableComponent)/Diagnosis3Input";

const Diagnosis3 = ({ onPrev, onSubmit }) => {
  return (
    <div className="bg-white rounded-lg">
      <Diagnosis3Input title={"Covid-19"} />
      <Diagnosis3Input title={"Dengue"} />
      <Diagnosis3Input title={"Ent"} />
      <Diagnosis3Input title={"Ent"} />
      <Diagnosis3Input title={"Ent"} />

      <div className="text-center py-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Diagnosis3;
