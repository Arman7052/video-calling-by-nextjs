import Image from "next/image";
const SideTabsButton = ({ imageUrl }) => {
  return (
    <div>
      {" "}
      <button className="p-2 ">
        <Image
          width={25}
          height={25}
          src={imageUrl}
          alt="Button image"
          className=" rounded-full"
        ></Image>
      </button>
    </div>
  );
};

export default SideTabsButton;
