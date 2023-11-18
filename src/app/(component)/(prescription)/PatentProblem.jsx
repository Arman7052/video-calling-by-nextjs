import React from "react";

const PatentProblem = () => {
  return (
    <div className="pt-5">
      <div className=" pt-2">
        <h1 className="font-bold">Chief Complaints :</h1>
        <ol className="text-gray-500">
          <li>1.Cough</li>
          <li>2.Fever</li>
          <li>3.Abdominal Pain</li>
          <li>4.Weakness</li>
        </ol>
      </div>
      <div className=" pt-2">
        <h1 className="font-bold"></h1>
        <ol className="text-gray-500">
          <li>1. Weight (kg) : 54</li>
        </ol>
      </div>
      <div className=" pt-2">
        <h1 className="font-bold">Lab Orders :</h1>
      </div>
      <div className=" pt-2">
        <h1 className="font-bold">Advise :</h1>
        <ol className="text-gray-500">
          <li>1. Take Medicines according to advice</li>
        </ol>
      </div>
    </div>
  );
};

export default PatentProblem;
