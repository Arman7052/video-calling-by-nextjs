import Image from "next/image";
import LabReportFile from "./(reUsableComponent)/LabReportFile";

const LabReport = () => {
  return (
    <div>
      <div className="  m-2">
        <LabReportFile heading={"Ultra Test"}></LabReportFile>
      </div>
      <div className="  m-2">
        <LabReportFile heading={"Ultra Test"}></LabReportFile>
      </div>
    </div>
  );
};

export default LabReport;
