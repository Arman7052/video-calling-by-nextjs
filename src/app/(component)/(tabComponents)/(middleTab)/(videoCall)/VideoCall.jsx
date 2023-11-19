import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: "ba6ed3142add4b36aef222e952ca57b8",
    channel: "doctors",
    token:
      "007eJxTYOg9Wf3Ds/yPBvOvLTs8fznfN2y7wyCaU5Ob3XnHl22VMq8CQ1KiWWqKsaGJUWJKikmSsVliapqRkVGqpalRcqKpeZKFI1tUakMgI4O4pTgjIwMEgvjsDCn5ySX5RcUMDACjOh8W",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div className="flex w-full h-full">
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <div
      className="grid md:grid-rows-7 rounded-md"
      style={{
        backgroundImage: 'url("/DoctorImg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row justify-between mx-1 py-1 md:mx-4 md:py-4 row-span-5 ">
        <div className="bg-white max-h-7 flex flex-row rounded-sm"></div>
      </div>
      <div className="row-span-1 mb-0 text-center">
        <button
          className="bg-blue-500 rounded-full py-1 md:py-3 px-4 text-xs text-white"
          onClick={() => setVideoCall(true)}
        >
          Join To Talk With Doctors
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
