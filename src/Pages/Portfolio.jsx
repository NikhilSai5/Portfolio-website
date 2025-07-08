import React from "react";
import "../index.css";
import Draggable from "react-draggable";
import Tab from "../components/InsideTab/Tab";
import { useState, useEffect } from "react";
import Notes from "../components/OtherTab/Notes";
import Games from "../components/OtherTab/Games";
import Contactme from "../components/OtherTab/Contactme";

const Portfolio = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(true);
  const [isNotesVisible, setIsNotesVisible] = useState(false);
  const [isGamesVisible, setIsGamesVisible] = useState(false);
  const [isContactmeVisible, setIsContactmeVisible] = useState(false);

  const handleAboutMeClick = () => {
    setIsAboutMeVisible(true);
  };

  const handleContactmeClick = () => {
    setIsContactmeVisible(true);
  };

  const handleGamesMeClick = () => {
    setIsGamesVisible(true);
  };

  const handleNotesClick = () => {
    setIsNotesVisible(true);
  };
  return (
    <>
      <div className="page-wrapper bg-slate-900 h-screen flex px-7 text-white">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                height: "3px",
                width: "3px",
              }}
            />
          ))}
        </div>

        <div className="navbar-wrapper flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 16 16"
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M9.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              clip-rule="evenodd"
            />
          </svg>
          <a
            href="https://github.com/NikhilSai5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="-2 -2 24 24"
              className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <path
                fill="currentColor"
                d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"
              />
            </svg>
          </a>
          <a
            href="https://x.com/nikhi23501"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256"
              height="256"
              viewBox="0 0 256 256"
              className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#1d9bf0" rx="60" />
                <path
                  fill="#fff"
                  d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-sai-manam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 128 128"
              className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
            >
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
              />
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              />
            </svg>
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54.31"
            height="50"
            viewBox="0 0 24 24"
            className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-125"
            onClick={handleNotesClick}
          >
            <path
              fill="currentColor"
              d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"
            />
          </svg>
        </div>
        <div className="icon-containers">
          {/* <div className="google" onClick={handleGoogleMeClick}>
            <img src="/images/google.png" alt="" />
            <p>Google</p>
          </div> */}
          <div className="aboutme cursor-pointer" onClick={handleAboutMeClick}>
            <img src="/images/icons/computer_explorer-4.png" alt="" />
            <p>AboutMe</p>
          </div>
          <div className="games cursor-pointer">
            <img
              src="/images/icons/game_freecell-2.png"
              alt=""
              onClick={handleGamesMeClick}
            />
            <p>Games</p>
          </div>
          <div className="notes cursor-pointer">
            <img
              src="/images/icons/write_wordpad-1.png"
              alt=""
              onClick={handleNotesClick}
            />
            <p>Notes</p>
          </div>
          <div
            className="contactme cursor-pointer"
            onClick={handleContactmeClick}
          >
            <img src="/images/icons/xml_gear-2.png" alt="" />
            <p>Contact Me</p>
          </div>
        </div>
      </div>
      {isAboutMeVisible && (
        <Draggable handle=".popup-header">
          <div className="popup resize top-20 left-20 bg-[white] shadow-lg overflow-hidden">
            <div className="popup-header cursor-grab flex flex-row gap-2 justify-end items-center ">
              <img
                src="/images/yellow.png"
                alt=""
                className="w-2.5 h-2.5 cir"
              />
              <img src="/images/green.png" alt="" className="w-2.5 h-2.5 cir" />
              <img
                src="/images/close.png"
                alt=""
                className="w-2.5 h-2.5 cir "
                onClick={() => {
                  setIsAboutMeVisible(false);
                }}
              />
            </div>
            <Tab />
          </div>
        </Draggable>
      )}

      {isNotesVisible && (
        <Draggable handle=".popup-header">
          <div className="popup resize top-24 left-24 bg-white shadow-lg overflow-hidden">
            <div className="popup-header cursor-grab flex flex-row gap-2 justify-end items-center">
              <img
                src="/images/yellow.png"
                alt=""
                className="w-2.5 h-2.5 cir"
              />
              <img src="/images/green.png" alt="" className="w-2.5 h-2.5 cir" />
              <img
                src="/images/close.png"
                alt=""
                className="w-2.5 h-2.5 cir"
                onClick={() => setIsNotesVisible(false)}
              />
            </div>
            <Notes />
          </div>
        </Draggable>
      )}

      {isGamesVisible && (
        <Draggable handle=".popup-header">
          <div className="popup resize top-24 left-24 bg-white shadow-lg overflow-hidden">
            <div className="popup-header cursor-grab flex flex-row gap-2 justify-end items-center">
              <img
                src="/images/yellow.png"
                alt=""
                className="w-2.5 h-2.5 cir"
              />
              <img src="/images/green.png" alt="" className="w-2.5 h-2.5 cir" />
              <img
                src="/images/close.png"
                alt=""
                className="w-2.5 h-2.5 cir"
                onClick={() => setIsGamesVisible(false)}
              />
            </div>
            <Games />
          </div>
        </Draggable>
      )}

      {isContactmeVisible && (
        <Draggable handle=".popup-header">
          <div className="popup resize top-24 left-24 bg-white shadow-lg overflow-hidden">
            <div className="popup-header cursor-grab flex flex-row gap-2 justify-end items-center">
              <img
                src="/images/yellow.png"
                alt=""
                className="w-2.5 h-2.5 cir"
              />
              <img src="/images/green.png" alt="" className="w-2.5 h-2.5 cir" />
              <img
                src="/images/close.png"
                alt=""
                className="w-2.5 h-2.5 cir"
                onClick={() => setIsContactmeVisible(false)}
              />
            </div>
            <Contactme />
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Portfolio;
