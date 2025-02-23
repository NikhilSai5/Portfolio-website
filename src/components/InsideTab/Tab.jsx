import React, { useState } from "react";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Experience from "./Experience";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <div className="aboutme-window h-full flex">
        {/* Left Sidebar */}
        <div className="left-bar flex flex-col justify-between p-4 w-1/4 bg-gray-800 ">
          <div className="left-top">
            <h1 className="text-xl font-bold">Nikhil Sai</h1>
            <h1 className="text-xl font-bold">Manam</h1>
            <p className="text-sm opacity-75">Portfolio 2025</p>
          </div>

          {/* Navigation */}
          <div className="left-bottom flex flex-col gap-2 mt-6">
            <h2
              className={`cursor-pointer ${
                activeTab === "about" ? "text-blue-400 underline" : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </h2>
            <h2
              className={`cursor-pointer ${
                activeTab === "projects" ? "text-blue-400 underline" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </h2>
            <h2
              className={`cursor-pointer ${
                activeTab === "experience" ? "text-blue-400 underline" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </h2>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="right-bar flex-1 p-6">
          {activeTab === "about" && <Aboutme />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "experience" && <Experience />}
        </div>
      </div>
    </>
  );
};

export default Tab;
