import React, { useState } from "react";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";
import AdvicePage from "./(tabComponents)/Advice";
import Advice from "./(tabComponents)/Advice";
import Diagnosis from "./(tabComponents)/Diagnosis";
import MedicalRecord from "./(tabComponents)/MedicalRecord";
import NextVisit from "./(tabComponents)/NextVisit";
import ConsultationInfo from "./(tabComponents)/ConsultationInfo";
import Symptoms from "./(tabComponents)/Symptoms";
import Medication from "./(tabComponents)/Medication";

const RightTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <ConsultationInfo></ConsultationInfo>;
      case 1:
        return <Symptoms></Symptoms>;
      case 2:
        return <Diagnosis></Diagnosis>;
      case 3:
        return <MedicalRecord></MedicalRecord>;
      case 4:
        return <Medication></Medication>;
      case 5:
        return <Advice></Advice>;
      case 6:
        return <NextVisit></NextVisit>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div className="grid grid-rows-6 gap-2 h-screen text-start">
          <div className="grid row-span-5 rounded-md">
            {/* Render content based on the active tab */}
            {renderContent()}
          </div>

          <div className="grid row-span-1">
            <div className="flex flex-row justify-evenly bg-gray-200 mb-16 rounded-md">
              <button onClick={() => handleTabChange(0)}>
                <SideTabsButton imageUrl="/ConsultationInfo.png" />
              </button>
              <button onClick={() => handleTabChange(1)}>
                <SideTabsButton imageUrl="/Symptoms.png" />
              </button>
              <button onClick={() => handleTabChange(2)}>
                <SideTabsButton imageUrl="/Diagnosis.png" />
              </button>
              <button onClick={() => handleTabChange(3)}>
                <SideTabsButton imageUrl="/MedicalRecord.png" />
              </button>
              <button onClick={() => handleTabChange(4)}>
                <SideTabsButton imageUrl="/Medication.png" />
              </button>
              <button onClick={() => handleTabChange(5)}>
                <SideTabsButton imageUrl="/Advice.png"></SideTabsButton>
              </button>
              <button onClick={() => handleTabChange(6)}>
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
