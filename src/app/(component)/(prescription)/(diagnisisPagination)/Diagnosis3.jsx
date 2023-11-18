import React from "react";

const Diagnosis3 = ({ onPrev, onSubmit }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Diagnosis</h2>
      <form className="mb-6">
        <label className="block text-gray-700 mb-2">
          Use:
          <input
            type="text"
            name="field3"
            className="border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
      </form>

      <div className="text-center">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Diagnosis3;
