import Image from "next/image";
const SideTabsButton = ({ imageUrl }) => {
  const checkButton = () => {
    console.log("Ok");
  };
  return (
    <div>
      <Image
        onClick={checkButton}
        width={40}
        height={40}
        src={imageUrl}
        alt="Button image"
        className=" rounded-full"
      />
    </div>
  );
};

export default SideTabsButton;
