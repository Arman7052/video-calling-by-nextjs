import UserInfo from "./(reUsableComponent)/UserInfo";
import VideoCall from "./(tabComponents)/(middleTab)/(videoCall)/VideoCall";

const MiddleTab = () => {
  return (
    <div>
      <div className="text-start">
        <div className="grid grid-rows-5 gap-5 h-screen p-2">
          <div className="grid row-span-1 rounded-md bg-orange-400 py-2">
            <UserInfo
              imageSrc="/UserImg.png"
              altText="User Profile"
              name="John Doe"
              serial={12545642}
              age={25}
              gender={"Male"}
            />
          </div>
          <div className="grid row-span-3 md:row-span-4  rounded-md  md:mb-16">
            <VideoCall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleTab;
