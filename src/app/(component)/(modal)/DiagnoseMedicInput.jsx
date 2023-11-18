import { useState } from "react";

const DiagnoseMedicInput = () => {
  const [diagnosis, setDiagnosis] = useState("");
  const [medication, setMedication] = useState("");

  return (
    <div className="pt-5">
      <div className="pl-2 pt-2">
        <h1 className="font-bold">Diagnosis :</h1>
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          placeholder="Enter diagnosis"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="pl-2 pt-2">
        <h1 className="font-bold">Medication :</h1>
        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default DiagnoseMedicInput;
