import Image from "next/image";
import React from "react";
import PatentBio from "./(prescription)/PatentBio";
import DiagnosisMedic from "./(prescription)/DiagnosisMedic";
import ProblemInput from "./(modal)/ProblemInput";
import DiagnoseMedicInput from "./(modal)/DiagnoseMedicInput";

const ModalCompo = () => {
  return (
    <div>
      <div className="p-10">
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
        <div className="flex flex-row justify-around">
          <div className="text-left">
            <ProblemInput />
          </div>
          <div className="border-r-2"></div>
          <div>
            <DiagnoseMedicInput />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-transparent text-black py-1 px-4 rounded hover:bg-blue-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCompo;
