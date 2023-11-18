"use client";

import LeftTab from "./(component)/LeftTab";
import MiddleTab from "./(component)/MiddleTab";
import RightTab from "./(component)/RightTab";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 text-center p-1  md:p-6 lg:p-12 gap-1 h-screen bg-gray-50 text-gray-500">
      <div className="grid col-span-1 md:col-span-3 bg-white  m-2 p-2 rounded-sm">
        <LeftTab></LeftTab>
      </div>

      <div className="grid col-span-4 md:col-span-6 mb-16 p-2 rounded-sm">
        <MiddleTab></MiddleTab>
      </div>

      <div className="md:grid md:col-span-3 bg-white  m-2 p-2 rounded-sm ">
        <RightTab></RightTab>
      </div>
    </div>
  );
}
