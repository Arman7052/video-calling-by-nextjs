"use client";

import LeftTab from "./(component)/LeftTab";
import MiddleTab from "./(component)/MiddleTab";
import RightTab from "./(component)/RightTab";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-12 text-center p-1  md:p-6 lg:p-12 gap-1 md:h-screen bg-gray-50 text-gray-500">
        <div className="grid col-span-1  md:col-span-3 md:bg-white   m-2 p-2 rounded-sm">
          <LeftTab></LeftTab>
        </div>

        <div className="grid col-span-3 md:col-span-6   p-2 rounded-sm">
          <MiddleTab></MiddleTab>
        </div>

        <div className="md:grid hidden md:col-span-3 bg-white  m-2 p-2 rounded-sm ">
          <RightTab></RightTab>
        </div>
      </div>
      <div className=" p-2 md:hidden">
        <RightTab></RightTab>
      </div>
    </div>
  );
}
