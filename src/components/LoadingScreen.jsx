// import React, { useState, useEffect } from "react";
// import { Commet } from "react-loading-indicators";
// import { useProgress } from "@react-three/drei";
// import GradientCursor from "./GradientCursor";

// const LoadingScreen = () => {
//   const { progress } = useProgress();
//   const [phrase, setPhrase] = useState("");
//   const [animate, setAnimate] = useState(false);
//   const [isActive, setIsActive] = useState(false);

//   const phrases = [
//     "Initializing environment...",
//     "Loading core components...",
//     "Preparing interactive interface...",
//     "Importing project content...",
//     "Finalizing layout and visuals...",
//   ];

//   useEffect(() => {
//     let currentPhrase = "";

//     if (progress < 20) {
//       currentPhrase = phrases[0];
//     } else if (progress < 40) {
//       currentPhrase = phrases[1];
//     } else if (progress < 60) {
//       currentPhrase = phrases[2];
//     } else if (progress < 80) {
//       currentPhrase = phrases[3];
//     } else {
//       currentPhrase = phrases[4];
//     }

//     if (currentPhrase !== phrase) {
//       setAnimate(true);
//       setPhrase(currentPhrase);
//     }
//   }, [progress]);

//   useEffect(() => {
//     if (animate) {
//       const timer = setTimeout(() => setAnimate(false), 10);
//       return () => clearTimeout(timer);
//     }
//   }, [animate]);

//   return (
//     <div className="h-full w-full bg-black flex justify-center items-center gap-[20px] absolute z-[9999] ">
//       <div
//         style={styles.overlay}
//         onMouseOver={() => {
//           setIsActive(true);
//         }}
//         onMouseLeave={() => {
//           setIsActive(false);
//         }}
//       >
//         <Commet color="#ffffff" size="medium" text="" textColor="#000000" />
//         <p style={styles.text1}>Loading {Math.floor(progress)}%</p>
//         <p
//           style={styles.text2}
//           className={`font-medium text-2xl mt-[10px] transition-opacity duration-500 ${
//             animate ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           {phrase}
//         </p>
//       </div>
//       <GradientCursor isActive={isActive} />
//     </div>
//   );
// };

// const styles = {
//   overlay: {
//     position: "relative",
//     width: "auto",
//     height: "auto",
//     backgroundColor: "transparent",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//     padding: "100px",
//   },
//   text1: {
//     margin: "20px 0 20px 0",
//     color: "white",
//     width: "auto",
//     height: "auto",
//     backgroundColor: "transparent",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 9999,
//   },
//   text2: {
//     margin: 0,
//     color: "white",
//     width: "auto",
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

  const stars = React.useMemo(() => {
    const starsArray = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      const star = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      };
      starsArray.push(star);
    }

    return starsArray;
  }, []);

  return (
    <div className="h-full w-full bg-black flex justify-center items-center gap-[20px] absolute z-[9999] overflow-hidden">
      {/* Starry Background */}
      <div style={styles.starsContainer}>
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              ...styles.star,
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Loading Content */}
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
  starsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    pointerEvents: "none",
  },
  star: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
  },
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
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
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
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  },
};

export default LoadingScreen;
