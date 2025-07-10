import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, Text, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
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
import { Suspense } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function CameraMovement({ cameraRef, isHoveringComputer }) {
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
    // Only move camera if not hovering over computer
    if (cameraRef.current && !isHoveringComputer) {
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

function OrbitControlsWithReset({ cameraRef }) {
  const controlsRef = useRef();
  const { camera } = useThree();
  const defaultPosition = useRef(new THREE.Vector3(0, 0, 0));
  const defaultTarget = useRef(new THREE.Vector3(0, 0, 0));
  const isUserInteracting = useRef(false);
  const resetTimeout = useRef(null);

  useEffect(() => {
    if (controlsRef.current) {
      // Store default positions
      defaultPosition.current.copy(camera.position);
      defaultTarget.current.copy(controlsRef.current.target);

      const controls = controlsRef.current;

      const handleStart = () => {
        isUserInteracting.current = true;
        if (resetTimeout.current) {
          clearTimeout(resetTimeout.current);
          resetTimeout.current = null;
        }
      };

      const handleEnd = () => {
        isUserInteracting.current = false;

        // Set timeout to reset camera position after user stops interacting
        resetTimeout.current = setTimeout(() => {
          if (!isUserInteracting.current && controls) {
            // Animate camera back to default position
            gsap.to(camera.position, {
              x: defaultPosition.current.x,
              y: defaultPosition.current.y,
              z: defaultPosition.current.z,
              duration: 2,
              ease: "power2.out",
            });

            // Animate target back to default
            gsap.to(controls.target, {
              x: defaultTarget.current.x,
              y: defaultTarget.current.y,
              z: defaultTarget.current.z,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => {
                controls.update();
              },
            });
          }
        }, 1000); // Reset after 1 second of no interaction
      };

      controls.addEventListener("start", handleStart);
      controls.addEventListener("end", handleEnd);

      return () => {
        controls.removeEventListener("start", handleStart);
        controls.removeEventListener("end", handleEnd);
        if (resetTimeout.current) {
          clearTimeout(resetTimeout.current);
        }
      };
    }
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
    />
  );
}

function App() {
  const cameraRef = useRef();
  const [loading, setLoading] = useState(true);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [speed, setSpeed] = useState();
  const [showScrollGif, setShowScrollGif] = useState(true);
  const [cameraZPosition, setCameraZPosition] = useState(0);
  const [isHoveringComputer, setIsHoveringComputer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileRegex = /iphone|android|ipad|ipod|blackberry|windows phone/;
    if (mobileRegex.test(userAgent) || window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const handleComputerPointerEnter = () => {
    setIsHoveringComputer(true); // Set hovering state to true
    gsap.to(cameraRef.current.position, {
      z: 203.8,
      duration: 2,
      ease: "power2.out",
    });
  };

  const handleComputerPointerLeave = () => {
    setIsHoveringComputer(false); // Set hovering state to false
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

        // Determine target position based on current position and scroll direction
        let targetPosition;
        if (event.deltaY > 0) {
          // Scrolling down - move forward to z=200
          targetPosition = 200;
        } else {
          // Scrolling up - move back to z=0
          targetPosition = 0;
        }

        // Only animate if we're actually moving to a different position
        if (
          cameraRef.current &&
          Math.abs(cameraRef.current.position.z - targetPosition) > 0.1
        ) {
          const duration = event.deltaY > 0 ? 4 : 2;

          gsap.to(cameraRef.current.position, {
            z: targetPosition,
            duration: duration,
            ease: "power2.out",
            onComplete: () => {
              setScrollTriggered(false);
              setCameraZPosition(targetPosition);
            },
          });
        } else {
          setScrollTriggered(false);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollTriggered]);

  const loadModels = () => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    loadModels();
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2>⚠️ Mobile Version Coming Soon</h2>
        <p>
          For the best experience, please open this 3D portfolio on a
          <strong> desktop or laptop</strong>.
        </p>
      </div>
    );
  }
  return (
    <>
      {loading && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <Canvas>
          <PerspectiveCamera ref={cameraRef} position={[0, 0, 0]}>
            <CameraMovement
              cameraRef={cameraRef}
              isHoveringComputer={isHoveringComputer}
            />
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
                I'M NIKHIL SAI MANAM
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
          <OrbitControlsWithReset cameraRef={cameraRef} />
        </Canvas>
      </Suspense>
      {/* <LoadingScreen /> */}
      {cameraZPosition === 0 && (
        <div className="scroll-icon">
          <FaArrowDown size={10} color="#ffffff" />
        </div>
      )}
      {cameraZPosition === 200 && (
        <div className="scroll-icon">
          <FaArrowUp size={10} color="#ffffff" />
        </div>
      )}
    </>
  );
}

export default App;
