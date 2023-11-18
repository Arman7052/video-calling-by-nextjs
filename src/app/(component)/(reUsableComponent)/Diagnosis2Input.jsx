import Image from "next/image";
import React from "react";

const Diagnosis2Input = ({ title, description }) => {
  return (
    <div className="bg-gray-200 p-2 mt-2 rounded-md ">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1>{title}</h1>
          <p className="text-xs">{description}</p>
        </div>
        <div className="col-span-1 flex flex-row gap-2">
          <div>
            <button>
              <Image
                width={50}
                height={50}
                src="/icon/edit-rectangle.png"
                alt="edit-rectangle.png"
                className="p-2"
              />
            </button>
          </div>
          <div>
            <button>
              <Image
                width={50}
                height={50}
                src="/icon/Delete.png"
                alt="edit-rectangle.png"
                className="p-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis2Input;
