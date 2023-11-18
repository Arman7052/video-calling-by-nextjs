import Image from "next/image";

const VideoCall = () => {
  return (
    <div
      className="grid md:grid-rows-7 rounded-md"
      style={{
        backgroundImage: 'url("/UserImg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row justify-between mx-1 py-1 md:mx-4 md:py-4 row-span-5 ">
        <div className="bg-white max-h-7 flex flex-row rounded-sm">
          <div className=" sm:h-5 sm:w-5 ">
            <Image
              className=" p-1"
              width={30}
              height={10}
              src="/LiveIcon.png"
              alt="LiveIcon"
            />
          </div>
          <div>
            <p className="p-2 text-xs">13:15:00</p>
          </div>
        </div>
        <div className="h-16 w-16 md:h-28 md:w-28">
          <Image
            className=" rounded-sm "
            width={150}
            height={150}
            src="/DoctorImg.png"
            alt="Doctor"
          />
        </div>
      </div>
      <div className=" row-span-1 mb-0 text-center">
        <div className="bg-white mx-2 lg:mx-44 md:p-4 p-1 rounded-full flex flex-row justify-between">
          <button className=" rounded-full ">
            <Image
              height={30}
              width={30}
              src="/icon/UpCircleArrow.png"
              alt="UpArrowCircle.png"
              className="text-center"
            />
          </button>
          <button>
            <Image
              height={30}
              width={30}
              src="/icon/Mic.png"
              alt="UpArrowCircle.png"
            />
          </button>
          <button>
            <Image
              height={30}
              width={30}
              src="/icon/Camera.png"
              alt="UpArrowCircle.png"
            />
          </button>
          <button className=" bg-red-500 rounded-full py-1 md:py-3 px-4 text-xs text-white">
            End Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
