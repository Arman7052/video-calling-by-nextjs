import React, { useState } from "react";
import SideTabsButton from "./(reUsableComponent)/SideTabsButton";

const LeftTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      title: "PreviousConsultation",
      name: "Previous Consultation",
      content: [
        {
          date: "2023-10-04",
          time: "10:00 AM",
          doctor: "Dr. John Smith",
          summary:
            "Patient presented with complaints of cough and fever for 3 days. Physical examination revealed mild pharyngitis. Diagnosis of viral upper respiratory infection was made. Patient was advised to rest, hydrate, and use over-the-counter pain relievers.",
        },
        {
          date: "2023-09-21",
          time: "02:00 PM",
          doctor: "Dr. Jane Doe",
          summary:
            "Patient came in for routine check-up. Vital signs were normal. Patient was advised to continue with current medications and lifestyle habits.",
        },
        {
          type: "Blood Test",
          date: "2023-08-25",
          results: "Normal blood count and cholesterol levels.",
        },
      ],
    },
    {
      title: "HealthLogs",
      name: "Health Logs",
      content: [
        {
          date: "2023-11-02",
          log: "Blood Pressure: 120/80, Heart Rate: 75 bpm, Weight: 150 lbs",
        },
        {
          date: "2023-10-15",
          log: "Blood Pressure: 118/78, Heart Rate: 72 bpm, Weight: 148 lbs",
        },
        {
          date: "2023-11-02",
          log: "Blood Pressure: 120/80, Heart Rate: 75 bpm, Weight: 150 lbs",
        },
        {
          date: "2023-10-15",
          log: "Blood Pressure: 118/78, Heart Rate: 72 bpm, Weight: 148 lbs",
        },
      ],
    },
    {
      title: "HealthVault",
      name: "Health Vault",
      content: [
        {
          type: "X-Ray",
          date: "2023-09-10",
          results: "No abnormalities detected in the chest X-ray.",
        },
        {
          type: "Blood Test",
          date: "2023-08-25",
          results: "Normal blood count and cholesterol levels.",
        },
      ],
    },
  ];

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <div className="grid grid-rows-6 gap-2 h-screen">
          <div className="grid row-span-5 rounded-md">
            <div className=" font-bold text-start">{items[activeTab].name}</div>

            <div className="text-start h-32 rounded-sm  shadow-md">
              {items[activeTab].content.map((item, index) => (
                <div key={index} className="flex flex-row justify-between">
                  <p>
                    Date: {item.date} <span>{item.time ? " , " : null}</span>
                    {item.time}
                  </p>
                  <p>
                    <img src="/icon/direction-right.svg" alt="" />
                  </p>
                </div>
              ))}
            </div>
            <div className="text-start font-semibold">Lab Report</div>
            <div className="text-start h-auto rounded-sm  shadow-md">
              {items[activeTab].content.map((item, index) => (
                <div key={index} className="">
                  <p className="border border-transparent shadow-md rounded-md  border-gray-300 px-2">
                    {item.type ? `Lab test : ${item.type}` : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid row-span-1">
            <div className="flex flex-row justify-evenly rounded-md bg-gray-200 mb-16">
              {items.map((tab, tabIndex) => (
                <button
                  key={tabIndex}
                  onClick={() => handleTabChange(tabIndex)}
                >
                  <SideTabsButton imageUrl={`/${tab.title}.png`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTab;
