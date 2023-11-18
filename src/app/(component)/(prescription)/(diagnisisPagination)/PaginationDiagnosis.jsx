import { useState } from "react";
import { useRouter } from "next/navigation";
import Diagnosis1 from "./Diagnosis1";
import Diagnosis2 from "./Diagnosis2";
import Diagnosis3 from "./Diagnosis3";

const PaginationDiagnosis = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div>
      {page === 1 && <Diagnosis1 onNext={nextPage} />}
      {page === 2 && <Diagnosis2 onPrev={prevPage} onNext={nextPage} />}
      {page === 3 && <Diagnosis3 onPrev={prevPage} onSubmit={handleSubmit} />}

      <div className="mt-8">
        <div className="flex justify-between">
          {page > 1 && (
            <button
              className="bg-transparent text-black px-4 rounded hover:bg-gray-400"
              onClick={prevPage}
            >
              Previous
            </button>
          )}
          {page < 3 && (
            <button
              className="bg-transparent text-black px-4 rounded hover:bg-gray-400"
              onClick={nextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginationDiagnosis;
