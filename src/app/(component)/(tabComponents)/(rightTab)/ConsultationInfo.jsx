import React from "react";

const ConsultationInfo = () => {
  return (
    <div className=" bg-white  rounded-md ">
      <h1 className=" font-bold mb-3">Consultation Info</h1>
      <div className="mb-3">
        <span className="font-semibold">Date:</span> November 18, 2023
      </div>
      <div className="mb-3">
        <span className="font-semibold">Time:</span> 3:00 PM
      </div>
      <div className="mb-3">
        <span className="font-semibold">Location:</span> Virtual Meeting
      </div>
      <div>
        <span className="font-semibold">Consultant:</span> Dr. Smith
      </div>
    </div>
  );
};

export default ConsultationInfo;
