// import React, { useState, useEffect } from "react";
// import { Commet } from "react-loading-indicators";
// import { Html, useProgress } from "@react-three/drei";

// const LoadingScreen = () => {
//   const { progress } = useProgress();
//   const [phrase, setPhrase] = useState("");

//   const phrases = [
//     "Initializing environment...",
//     "Loading core components...",
//     "Preparing interactive interface...",
//     "Importing project content...",
//     "Finalizing layout and visuals...",
//   ];

//   useEffect(() => {
//     if (progress < 20) {
//       setPhrase(phrases[0]);
//     } else if (progress < 40) {
//       setPhrase(phrases[1]);
//     } else if (progress < 60) {
//       setPhrase(phrases[2]);
//     } else if (progress < 80) {
//       setPhrase(phrases[3]);
//     } else {
//       setPhrase(phrases[4]);
//     }
//   }, [progress]);

//   return (
//     <>
//       <div className="h-full w-full bg-black  flex justify-center items-center gap-[20px] absolute z-[9999]">
//         <div style={styles.overlay}>
//           <Commet color="#ffffff" size="medium" text="" textColor="#000000" />
//           <p style={styles.text}>Loading {Math.floor(progress)}%</p>
//           <p style={styles.text} className="font-medium text-2xl mt-[10px]">
//             {phrase}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// const styles = {
//   overlay: {
//     position: "relative",
//     // top: 0,
//     // left: 0,
//     width: "100%",
//     height: "auto",
//     backgroundColor: "#000000",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
//   loader: {
//     fontSize: "2rem",
//     color: "white",
//   },
//   text: {
//     margin: 0,
//     color: "white",

//     width: "100%",
//     height: "auto",
//     backgroundColor: "transparent",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
// };

// export default LoadingScreen;

import React, { useState, useEffect } from "react";
import { Commet } from "react-loading-indicators";
import { useProgress } from "@react-three/drei";
import GradientCursor from "./GradientCursor";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const [phrase, setPhrase] = useState("");
  const [animate, setAnimate] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const phrases = [
    "Initializing environment...",
    "Loading core components...",
    "Preparing interactive interface...",
    "Importing project content...",
    "Finalizing layout and visuals...",
  ];

  useEffect(() => {
    let currentPhrase = "";

    if (progress < 20) {
      currentPhrase = phrases[0];
    } else if (progress < 40) {
      currentPhrase = phrases[1];
    } else if (progress < 60) {
      currentPhrase = phrases[2];
    } else if (progress < 80) {
      currentPhrase = phrases[3];
    } else {
      currentPhrase = phrases[4];
    }

    if (currentPhrase !== phrase) {
      setAnimate(true);
      setPhrase(currentPhrase);
    }
  }, [progress]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 10);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className="h-full w-full bg-black flex justify-center items-center gap-[20px] absolute z-[9999] ">
      <div
        style={styles.overlay}
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <Commet color="#ffffff" size="medium" text="" textColor="#000000" />
        <p style={styles.text1}>Loading {Math.floor(progress)}%</p>
        <p
          style={styles.text2}
          className={`font-medium text-2xl mt-[10px] transition-opacity duration-500 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
        >
          {phrase}
        </p>
      </div>
      <GradientCursor isActive={isActive} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "relative",
    width: "auto",
    height: "auto",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "100px",
  },
  text1: {
    margin: "20px 0 20px 0",
    color: "white",
    width: "auto",
    height: "auto",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  text2: {
    margin: 0,
    color: "white",
    width: "auto",
    height: "auto",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
};

export default LoadingScreen;
