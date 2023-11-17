import React, { useState } from "react";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";
import AdvicePage from "./(tabComponents)/(rightTab)/Advice";
import Advice from "./(tabComponents)/(rightTab)/Advice";
import Diagnosis from "./(tabComponents)/(rightTab)/Diagnosis";
import MedicalRecord from "./(tabComponents)/(rightTab)/MedicalRecord";
import NextVisit from "./(tabComponents)/(rightTab)/NextVisit";
import ConsultationInfo from "./(tabComponents)/(rightTab)/ConsultationInfo";
import Symptoms from "./(tabComponents)/(rightTab)/Symptoms";
import Medication from "./(tabComponents)/(rightTab)/Medication";

const RightTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    if (tabIndex === 4) {
      // Open a new page for Medication
      window.open("/Medication", "_blank");
    } else {
      // Set the active tab
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
        return <Medication />;
      case 5:
        return <Advice />;
      case 6:
        return <NextVisit />;
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

          <div className="grid row-span-1 mb-3">
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
                <SideTabsButton imageUrl="/Advice.png" />
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
