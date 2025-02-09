import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Text, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import Background from "./components/Background/Background";
import Astroid2 from "./components/3d-components/Astroid2";
import Astroid3 from "./components/3d-components/Astroid3";
import SpaceShip from "./components/3d-components/SpaceShip";
import SpaceStation from "./components/3d-components/SpaceStation";
import SpaceShip2 from "./components/3d-components/SpaceShip2";
import Computer from "./components/3d-components/Computer";
import AstroidField from "./components/3d-components/AstroidField";
import Ceres from "./components/3d-components/Ceres";
import LoadingScreen from "./components/LoadingScreen";

function CameraMovement({ cameraRef }) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        x: mouse.current.x * 0.3,
        y: -mouse.current.y * 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });

  return null;
}

function App() {
  const cameraRef = useRef();
  const [loading, setLoading] = useState(true);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [speed, setSpeed] = useState();
  const [showScrollGif, setShowScrollGif] = useState(true);

  const handleComputerPointerEnter = () => {
    gsap.to(cameraRef.current.position, {
      z: 203.8,
      duration: 2,
      ease: "power2.out",
    });
  };

  const handleComputerPointerLeave = () => {
    gsap.to(cameraRef.current.position, {
      z: 200,
      duration: 2,
      ease: "Power2.out",
    });
  };

  useEffect(() => {
    if (scrollTriggered) {
      setSpeed(3);
    } else {
      setSpeed(0.04);
    }
  });

  useEffect(() => {
    const handleScroll = (event) => {
      if (!scrollTriggered) {
        setScrollTriggered(true);
        setShowScrollGif(false);
        const targetPosition = event.deltaY > 0 ? 200 : 0;
        const duration = event.deltaY > 0 ? 4 : 2;

        if (cameraRef.current.position.z !== targetPosition) {
          setScrollTriggered(true);
        }
        gsap.to(cameraRef.current.position, {
          z: targetPosition,
          duration: duration,
          ease: "power2.out",
          onComplete: () => {
            setScrollTriggered(false);
          },
        });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollTriggered]);

  const loadModels = () => {
    // Simulate model loading delay for demonstration
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this to match your model loading time
  };

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Canvas>
        <PerspectiveCamera ref={cameraRef} position={[0, 0, 0]}>
          <CameraMovement cameraRef={cameraRef} />
          <Sky
            sunPosition={[0, 0, 0]}
            turbidity={10}
            rayleigh={0.3}
            inclination={0}
            distance={450000}
          />
          <Background scrollTriggered={scrollTriggered} speed={speed} />
          <group position={[0, 0, 0]}>
            <Text
              position={[0, 0.8, 0]}
              fontSize={0.5}
              color="white"
              font="/fonts/Satoshi-Variable.ttf"
            >
              HELLO,
            </Text>
            <Text
              position={[0, 0, 0]}
              fontSize={0.7}
              fontWeight={800}
              color="white"
              font="/fonts/Satoshi-Variable.ttf"
            >
              I’M NIKHIL SAI MANAM
            </Text>
            <Text
              position={[0, -0.9, 0]}
              fontSize={0.3}
              fontWeight={"normal"}
              color="white"
              font="/fonts/Satoshi-Light.ttf"
            >
              Full Stack and Web 3 Developer
            </Text>
          </group>
          <Astroid2 position={[-7, 1, -200]} />
          <Ceres position={[-100, -51, -180]} />
          <SpaceShip position={[-4.5, 4, -5]} />
          <Astroid3 position={[6, 3, -207]} />
          <SpaceStation position={[-54, 20, -240]} />
          <SpaceShip2 position={[6.5, -1.5, 0]} />
          <Computer
            position={[0, -0.9, -200]}
            handleComputerPointerEnter={handleComputerPointerEnter}
            handleComputerPointerLeave={handleComputerPointerLeave}
            cameraRef={cameraRef}
          />
          <AstroidField position={[0, -3, -70]} />
        </PerspectiveCamera>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>

      {showScrollGif && (
        <div className="scroll-container">
          <img
            src="/images/scroll.gif"
            alt="Scroll down"
            width="100"
            className="scroll"
          />
        </div>
      )}
    </>
  );
}

export default App;
