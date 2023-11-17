import Image from "next/image";

const PrevAppointTime = ({ date, time, iconSrc, altText }) => {
  return (
    <div>
      <p className="flex justify-between">
        <span>{`Date: ${date}, ${time}`}</span>
        <Image width={20} height={20} src={iconSrc} alt={altText} />
      </p>
    </div>
  );
};

export default PrevAppointTime;
