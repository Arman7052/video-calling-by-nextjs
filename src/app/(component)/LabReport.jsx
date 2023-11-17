import LabReportFile from "./(reUsableComponent)/LabReportFile";

const LabReport = () => {
  return (
    <div>
      <div className="  m-2">
        <LabReportFile heading={"Ultra Test"} />
      </div>
      <div className="  m-2">
        <LabReportFile heading={"Ultra Test"} />
      </div>
    </div>
  );
};

export default LabReport;
