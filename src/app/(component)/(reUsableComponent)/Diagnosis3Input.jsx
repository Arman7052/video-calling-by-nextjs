const Diagnosis3Input = ({ title }) => {
  return (
    <div>
      <div className="bg-gray-200 p-2 mt-2 rounded-md ">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <h1>{title}</h1>
          </div>
          <div className="col-span-1 ">
            <div>
              <button className="bg-black rounded-md text-white px-3">
                Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis3Input;
