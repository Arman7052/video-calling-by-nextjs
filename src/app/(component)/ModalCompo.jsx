import Image from "next/image";
import React from "react";
import PatentBio from "./(prescription)/PatentBio";

import ProblemInput from "./(modal)/ProblemInput";
import DiagnoseMedicInput from "./(modal)/DiagnoseMedicInput";

const ModalCompo = () => {
  return (
    <div>
      <div className=" p-10">
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
        <div className="hidden md:block">
          <PatentBio />
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between gap-2">
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
