import { useState } from "react";

const ProblemInput = () => {
  const [chiefComplaints, setChiefComplaints] = useState("");
  const [weight, setWeight] = useState("");
  const [labOrders, setLabOrders] = useState("");
  const [advise, setAdvise] = useState("");

  return (
    <div className=" md:pt-5">
      <div className="md:pt-2">
        <h1 className="font-bold">Chief Complaints :</h1>
        <input
          type="text"
          value={chiefComplaints}
          onChange={(e) => setChiefComplaints(e.target.value)}
          placeholder="chief complaints"
          className=" border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="md:pt-2">
        <h1 className="font-bold">Weight (kg) :</h1>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="md:pt-2">
        <h1 className="font-bold">Lab Orders :</h1>
        <input
          type="text"
          value={labOrders}
          onChange={(e) => setLabOrders(e.target.value)}
          placeholder="Enter lab orders"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="md:pt-2">
        <h1 className="font-bold">Advise :</h1>
        <input
          type="text"
          value={advise}
          onChange={(e) => setAdvise(e.target.value)}
          placeholder="Enter advise"
          className="border mx-auto border-gray-300 p-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProblemInput;
