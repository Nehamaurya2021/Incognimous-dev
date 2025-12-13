import { useState } from "react";
import DiscoverySection from "../../pages/process/Discovery"
import DevelopmentSection from "../../pages/process/Development"
import DesignSection from "../../pages/process/Design"
import DebuggingSection from "../../pages/process/Debugging"
import DeploymentSection from "../../pages/process/Deployment";

const Tabs = () => {
  const tabsData = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Design" },
    { id: 3, title: "Development" },
    { id: 4, title: "Debugging" },
    { id: 5, title: "Deployment" }
  ];

  const [activeTab, setActiveTab] = useState("Discovery");

  return (
<div className="w-full py-6 bg-white ">

  <div className="flex items-center gap-12 mx-45 p-5">
    <button
      onClick={() => setActiveTab("Discovery")}
      className={activeTab === "Discovery" ? "font-semibold text-black border-b-2 border-teal-500 pb-1" : "text-gray-600"}
    >
      Discovery
    </button>

    <button
      onClick={() => setActiveTab("Design")}
      className={activeTab === "Design" ? "font-semibold text-black border-b-2 border-teal-500 pb-1" : "text-gray-600"}
    >
      Design
    </button>

    <div
      onClick={() => setActiveTab("Development")}
      className={activeTab === "Development" ? "font-semibold text-black border-b-2 border-teal-500 pb-1 cursor-pointer" : "text-gray-600 cursor-pointer"}
    >
      Development
    </div>

    <div
      onClick={() => setActiveTab("Debugging")}
      className={`${activeTab === "Debugging" ? "font-semibold text-black border-b-2 border-teal-500 pb-1 cursor-pointer" : "text-gray-600 cursor-pointer"}`}
    >
      Debugging
    </div>

    <div
      onClick={() => setActiveTab("Deployment")}
      className={activeTab === "Deployment" ? "font-semibold text-black border-b-2 border-teal-500 pb-1 cursor-pointer" : "text-gray-600 cursor-pointer"}
    >
      Deployment
    </div>
  </div>

  {/* content container */}
  <div className="mt-6">
    {activeTab === "Discovery" && <DiscoverySection />}
    {activeTab === "Design" && <DesignSection />}
    {activeTab === "Development" && <DevelopmentSection />}
    {activeTab === "Debugging" && <DebuggingSection />}
    {activeTab === "Deployment" && <DeploymentSection />}
  </div>
</div>

  );
};

export default Tabs;
