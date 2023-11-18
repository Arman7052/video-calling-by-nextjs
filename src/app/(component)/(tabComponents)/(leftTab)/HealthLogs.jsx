import React from "react";

const HealthLogs = () => {
  return (
    <div>
      <h1 className="font-bold py-5">Health Logs</h1>

      <div className="bg-white rounded-lg ">
        <div className="flex items-center justify-between border-b border-gray-300 py-2">
          <div>
            <p className="text-gray-600">Date: January 10, 2023</p>
            <p className="text-lg font-semibold">Blood Pressure: 118/78</p>
            <p className="text-gray-700">Heart Rate: 72 bpm</p>
          </div>
          <button className="bg-transparent text-black  px-4 rounded-md hover:bg-gray-300 focus:outline-none">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthLogs;
