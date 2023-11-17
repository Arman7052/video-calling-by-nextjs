import Image from "next/image";

const PreviousConsultation = () => {
  return (
    <div>
      <h1 className="font-bold py-5">Previous Consultation</h1>
      <div className="p-2 shadow-md rounded-md mt-2">
        <p className="flex justify-between">
          <span>Date: 2023-11-04, 10:00 AM</span>{" "}
          <Image
            width={20}
            height={20}
            src="./icon/direction-right.svg"
            alt=""
          />
        </p>
        <p className="flex justify-between">
          <span>Date: 2023-10-24, 11:00 AM </span>
          <Image
            width={20}
            height={20}
            src="./icon/direction-right.svg"
            alt=""
          />{" "}
        </p>
        <p className="flex justify-between">
          {" "}
          <span>Date: 2023-10-11, 5:00 PM</span>{" "}
          <Image
            width={20}
            height={20}
            src="./icon/direction-right.svg"
            alt=""
          />
        </p>
      </div>
    </div>
  );
};

export default PreviousConsultation;
