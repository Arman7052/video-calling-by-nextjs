"use client";
import React, { useState } from "react";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";
import AdvicePage from "./(tabComponents)/(rightTab)/Advice";
import Diagnosis from "./(tabComponents)/(rightTab)/Diagnosis";
import MedicalRecord from "./(tabComponents)/(rightTab)/MedicalRecord";
import NextVisit from "./(tabComponents)/(rightTab)/NextVisit";
import ConsultationInfo from "./(tabComponents)/(rightTab)/ConsultationInfo";
import Symptoms from "./(tabComponents)/(rightTab)/Symptoms";
import { useRouter } from "next/navigation";

const RightTab = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    if (tabIndex === 4) {
      router.push("/madication");
    } else {
      setActiveTab(tabIndex);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <ConsultationInfo />;
      case 1:
        return <Symptoms />;
      case 2:
        return <Diagnosis />;
      case 3:
        return <MedicalRecord />;
      case 4:
        return;
      case 5:
        return <AdvicePage />;
      case 6:
        return <NextVisit />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div className="grid grid-rows-6 gap-2 h-screen text-center md:text-start">
          <div className="grid row-span-5 border border-gray-50 rounded-md">
            {renderContent()}
          </div>

          <div className="grid row-span-1 mb-3 mx-2">
            <div className=" grid grid-cols-3 md:grid-cols-7 md:bg-gray-200 md:mb-16 rounded-md gap-2 ">
              <button className="mx-auto" onClick={() => handleTabChange(0)}>
                <SideTabsButton imageUrl="/ConsultationInfo.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(1)}>
                <SideTabsButton imageUrl="/Symptoms.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(2)}>
                <SideTabsButton imageUrl="/Diagnosis.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(3)}>
                <SideTabsButton imageUrl="/MedicalRecord.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(4)}>
                <SideTabsButton imageUrl="/Medication.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(5)}>
                <SideTabsButton imageUrl="/Advice.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(6)}>
                <SideTabsButton imageUrl="/NextVisit.jpg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTab;
