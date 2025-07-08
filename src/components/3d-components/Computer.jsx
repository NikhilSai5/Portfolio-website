import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PresentationControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import Portfolio from "../../Pages/Portfolio";

const Computer = ({
  position,
  handleComputerPointerEnter,
  handleComputerPointerLeave,
  cameraRef,
}) => {
  const { scene } = useGLTF("/3d-assets/tab-compressed.glb");

  return (
    <group position={position}>
      <primitive
        object={scene}
        scale={[0.09, 0.09, 0.09]}
        // rotation={[0, Math.PI, 0]}
      >
        <Html
          wrapperClass="laptop "
          position={[5.5, 10, 0]}
          transform
          occlude
          distanceFactor={10}
          center
          // rotation-x={0.25}
          // rotation={[0, Math.PI, 0]}
        >
          <div className="iframe-container">
            <iframe
              src={`${window.location.origin}/portfolio`}
              onPointerEnter={handleComputerPointerEnter}
              onPointerLeave={handleComputerPointerLeave}
              className="space-tab overflow-hidden "
            />
          </div>
        </Html>
      </primitive>
    </group>
  );
};

export default Computer;
