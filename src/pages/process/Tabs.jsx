import { useState } from "react";

const Tabs = () => {
  const tabsData = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Design" },
    { id: 3, title: "Development" },
    { id: 4, title: "Debugging" },
    { id: 5, title: "Deployment" }
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full py-6 bg-white">
      <div className="flex justify-center gap-10">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer text-gray-600 
              ${activeTab === tab.id
                ? "font-semibold text-black border-b-2 border-teal-600 pb-1"
                : ""}`}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
