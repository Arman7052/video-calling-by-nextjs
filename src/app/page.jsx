"use client";

import LeftTab from "./(component)/LeftTab";
import MiddleTab from "./(component)/MiddleTab";
import RightTab from "./(component)/RightTab";

export default function Home() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 text-center p-1 md:p-6 lg:p-12 gap-2 h-screen">
      <div className="grid col-span-1 md:col-span-3  ">
        <LeftTab></LeftTab>
      </div>

      <div className="grid col-span-4 md:col-span-6 mb-16">
        <MiddleTab></MiddleTab>
      </div>

      <div className="hidden md:grid md:col-span-3  ">
        <RightTab></RightTab>
      </div>
    </div>
  );
}
