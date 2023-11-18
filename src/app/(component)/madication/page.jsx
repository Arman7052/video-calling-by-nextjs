import Image from "next/image";
import React from "react";
import PatentBio from "../(prescription)/PatentBio";
import PatentProblem from "../(prescription)/PatentProblem";

import DiagnosisMedic from "../(prescription)/DiagnosisMedic";

const page = () => {
  return (
    <div className="mx-[200px] p-10">
      <div>
        <Image
          width={200}
          height={200}
          src="/Logo.png"
          alt="Logo"
          className="-mb-1"
        />
        <hr />
      </div>
      <PatentBio />
      <hr />
      <div className="flex flex-row justify-around ">
        <div className="text-left">
          <PatentProblem />
        </div>
        <div className="border-r-2 "></div>
        <div>
          <DiagnosisMedic />
        </div>
      </div>
    </div>
  );
};

export default page;
