import React, { useState } from "react";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";

const RightTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <div className="grid grid-rows-6 gap-2 h-screen">
          <div className="grid row-span-5  rounded-md">
            {/* Render content based on the active tab */}
            <div className=" font-bold text-start">{items[activeTab].name}</div>
            {items[activeTab].content.map((item, index) => (
              <div key={index}>
                {/* Adjust the rendering based on the structure of your content */}

                <p className=" ">Date: {item.date}</p>
                <p>Time: {item.time}</p>
                <p>Doctor: {item.doctor}</p>
                <p>Summary: {item.summary}</p>
              </div>
            ))}
          </div>
          <div className="grid row-span-1">
            <div className="flex flex-row justify-evenly bg-gray-200 mb-16 rounded-md">
              <div className="flex flex-row justify-evenly   ">
                {/* Map through tabs to render SideTabsButtons within buttons */}
                {items.map((tab, tabIndex) => (
                  <button
                    key={tabIndex}
                    onClick={() => handleTabChange(tabIndex)}
                  >
                    <SideTabsButton imageUrl={`/${tab.title}.png`} />
                  </button>
                ))}
              </div>
              <div className=" flex flex-row justify-evenly">
                <button>
                  <SideTabsButton imageUrl="/Advice.png" />
                </button>
                <button>
                  <SideTabsButton imageUrl="/Diagnosis.png" />
                </button>
                <button>
                  <SideTabsButton imageUrl="/MedicalRecord.png" />
                </button>
                <button>
                  <SideTabsButton imageUrl="/NextVisit.jpg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTab;

const items = [
  {
    title: "ConsultationInfo",
    content: [
      {
        date: "2023-11-16",
        time: "11:30 AM",
        doctor: "Dr. Sarah Johnson",
        summary:
          "Follow-up consultation for ongoing back pain. Physical examination and review of symptoms conducted. Adjusted medication dosage and recommended physiotherapy.",
      },
    ],
    name: "Consultation Info",
  },
  {
    title: "Symptoms",
    content: ["Persistent cough", "Fever", "Back pain", "Headache"],
    name: "Symptoms",
  },

  {
    title: "Medication",
    name: "Medications",
    content: [
      {
        name: "Ibuprofen",
        dosage: "200mg",
        frequency: "Twice daily",
      },
      {
        name: "Medication",
        dosage: "10mg",
        frequency: "Once daily",
      },
    ],
  },
];
