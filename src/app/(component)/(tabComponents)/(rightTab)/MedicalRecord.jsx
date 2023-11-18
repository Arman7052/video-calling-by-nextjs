import React from "react";

const MedicalRecord = () => {
  return (
    <div className=" bg-white rounded-md">
      <h1 className=" font-bold mb-3">Medical Records</h1>
      <div className="bg-gray-100 p-4 rounded-md mb-3">
        <h2 className="text-lg font-semibold mb-2">Recent Visits</h2>
        <ul>
          <li>Visit on November 10, 2023</li>
          <li>Visit on October 25, 2023</li>
          <li>Visit on September 15, 2023</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Prescriptions</h2>
        <ul>
          <li>Medication A - 1 tablet daily</li>
          <li>Medication B - 2 tablets twice a day</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalRecord;
