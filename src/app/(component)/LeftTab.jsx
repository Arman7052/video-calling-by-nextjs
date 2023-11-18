import { useState } from "react";
import PreviousConsultation from "./(tabComponents)/(leftTab)/PreviousConsultation";
import HealthLogs from "./(tabComponents)/(leftTab)/HealthLogs";
import HealthVaults from "./(tabComponents)/(leftTab)/HealthVaults";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";

const LeftTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <PreviousConsultation />;
      case 1:
        return <HealthLogs />;
      case 2:
        return <HealthVaults />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="">
        <div className="grid md:grid-rows-6 gap-2 md:h-screen text-start">
          <div className="hidden md:grid md:row-span-5 rounded-md">
            {/* Render content based on the active tab */}
            {renderContent()}
          </div>

          <div className="grid row-span-1 ">
            <div className=" grid grid-cols-1 row-span-3 md:grid-cols-3 md:bg-gray-200 md:mb-16 gap-2  rounded-md ">
              <button className="mx-auto" onClick={() => handleTabChange(0)}>
                <SideTabsButton imageUrl="/Previousconsultation.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(1)}>
                <SideTabsButton imageUrl="/HealthLogs.png" />
              </button>
              <button className="mx-auto" onClick={() => handleTabChange(2)}>
                <SideTabsButton imageUrl="/HealthVault.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTab;
