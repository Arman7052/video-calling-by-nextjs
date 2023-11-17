import Image from "next/image";

const LabReportFile = ({ heading }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div className=" flex flex-row justify-between border border-gray-100 rounded-sm px-2 p-2">
        <p className="flex flex-row gap-2">
          <Image
            width={20}
            height={20}
            alt="Folder"
            src="/icon/medicalRecordFile.png"
          />
          <span> File name</span>
        </p>
        <Image width={20} height={20} alt="Folder" src="/icon/folderIcon.png" />
      </div>
    </div>
  );
};

export default LabReportFile;
