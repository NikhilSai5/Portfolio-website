import React, { useState } from "react";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Experience from "./Experience";
import Fullstack from "../OtherTab/Fullstack";
import Blockchain from "../OtherTab/Blockchain";
import AI from "../OtherTab/AI";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [subtab, setSubtab] = useState(false);

  const handleSubtabClick = (tab) => {
    setSubtab(true);
  };

  return (
    <>
      <div className="aboutme-window h-full flex">
        {/* Left Sidebar */}
        <div className="left-bar flex flex-col p-4 w-1/4 bg-gray-800 ">
          <div className="left-top mb-[100px]">
            <h1 className="text-xl font-bold">Nikhil Sai</h1>
            <h1 className="text-xl font-bold">Manam</h1>
            <p className="text-sm opacity-75">Portfolio 2025</p>
          </div>

          {/* Navigation */}
          <div className="left-bottom flex flex-col gap-2 ">
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
              onClick={() => {
                setSubtab(!subtab);
              }}
            >
              Projects
            </h2>
            {subtab ? (
              <div className="flex flex-col mb-[35px] relative left-[30px] gap-[2px]">
                <h3
                  className={`cursor-pointer ${
                    activeTab === "Fullstack" ? "text-blue-400 underline" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("Fullstack");
                  }}
                >
                  - Fullstack
                </h3>
                <h3
                  className={`cursor-pointer ${
                    activeTab === "Blockchain" ? "text-blue-400 underline" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("Blockchain");
                  }}
                >
                  - Blockchain
                </h3>
                <h3
                  className={`cursor-pointer ${
                    activeTab === "AI" ? "text-blue-400 underline" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("AI");
                  }}
                >
                  - AI
                </h3>
              </div>
            ) : (
              <></>
            )}
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
          {activeTab === "Fullstack" && <Fullstack />}
          {activeTab === "Blockchain" && <Blockchain />}
          {activeTab === "AI" && <AI />}
        </div>
      </div>
    </>
  );
};

export default Tab;
