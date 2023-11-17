import Image from "next/image";
import LabReport from "../LabReport";
import PrevAppointTime from "../(reUsableComponent)/PrevAppointTime";

const PreviousConsultation = () => {
  return (
    <div className="hidden md:block">
      <h1 className="font-bold py-5">Previous Consultation</h1>
      <div className="grid grid-rows-5 gap-2">
        <div className=" rounded-md row-span-2">
          <PrevAppointTime
            date="2023-11-10"
            time="5:00 PM"
            iconSrc="./icon/direction-right.svg"
            altText=""
          ></PrevAppointTime>

          <PrevAppointTime
            date="2023-11-10"
            time="11:00 AM"
            iconSrc="./icon/direction-right.svg"
            altText=""
          ></PrevAppointTime>

          <PrevAppointTime
            date="2023-11-10"
            time="2:00 PM"
            iconSrc="./icon/direction-right.svg"
            altText=""
          ></PrevAppointTime>
        </div>

        <div className=" row-span-3 rounded-md">
          <h1> Lab Records </h1>
          <hr />
          <LabReport></LabReport>
        </div>
      </div>
    </div>
  );
};

export default PreviousConsultation;
