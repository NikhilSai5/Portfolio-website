import React, { useState, useEffect } from "react";
import { Commet } from "react-loading-indicators";
import { Html, useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "Initializing environment...",
    "Loading core components...",
    "Preparing interactive interface...",
    "Importing project content...",
    "Finalizing layout and visuals...",
  ];

  useEffect(() => {
    if (progress < 20) {
      setPhrase(phrases[0]);
    } else if (progress < 40) {
      setPhrase(phrases[1]);
    } else if (progress < 60) {
      setPhrase(phrases[2]);
    } else if (progress < 80) {
      setPhrase(phrases[3]);
    } else {
      setPhrase(phrases[4]);
    }
  }, [progress]);

  return (
    <>
      <div className="h-full w-full bg-black  flex justify-center items-center gap-[20px] absolute z-[9999]">
        <div style={styles.overlay}>
          <Commet color="#ffffff" size="medium" text="" textColor="#000000" />
          <p style={styles.text}>Loading {Math.floor(progress)}%</p>
          <p style={styles.text}>{phrase}</p>
        </div>
      </div>
    </>
  );
};

const styles = {
  overlay: {
    position: "relative",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "auto",
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loader: {
    fontSize: "2rem",
    color: "white",
  },
  text: {
    margin: 0,
    color: "white",

    width: "100%",
    height: "auto",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
};

export default LoadingScreen;
