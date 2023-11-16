import SideTabsButton from "./(component)/(reUsableComponent)/SideTabsButton";

export default function Home() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 text-center p-1 md:p-6 lg:p-12 gap-2 h-screen">
      <div className="grid col-span-1 md:col-span-3  ">
        <div className="grid grid-rows-6 gap-2  h-screen">
          <div className="grid row-span-5 bg-blue-600 rounded-md">stu</div>
          <div className="grid row-span-1 mb-16 rounded-md">
            <div className="flex flex-row justify-evenly rounded-md bg-slate-200">
              <SideTabsButton imageUrl="/PreviousConsultation.png" />
              <SideTabsButton imageUrl="/HealthLogs.png" />
              <SideTabsButton imageUrl="/HealthVault.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid col-span-4 md:col-span-6 mb-16">
        <div className="grid grid-rows-5 gap-2 ">
          <div className="grid row-span-1 rounded-md bg-orange-400">T</div>
          <div className="grid row-span-4 rounded-md bg-violet-600">m</div>
        </div>
      </div>

      <div className="hidden md:grid md:col-span-3  ">
        <div className="grid grid-rows-6 gap-2  h-screen">
          <div className="grid row-span-5 bg-blue-600 rounded-md">stu</div>
          <div className="grid row-span-1">
            <div className="flex flex-row justify-between rounded-md bg-gray-200 mb-16">
              <SideTabsButton imageUrl="/ConsultationInfo.png" />
              <SideTabsButton imageUrl="/Symptoms.png" />
              <SideTabsButton imageUrl="/Diagnosis.png" />
              <SideTabsButton imageUrl="/medical-record.png" />
              <SideTabsButton imageUrl="/Medication.png" />
              <SideTabsButton imageUrl="/Advice.png" />
              <SideTabsButton imageUrl="/NextVisit.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
