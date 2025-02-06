import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PresentationControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Computer = ({
  position,
  handleComputerPointerEnter,
  handleComputerPointerLeave,
}) => {
  const { scene } = useGLTF("/3d-assets/tab-compressed.glb");
  return (
    <group position={position}>
      <primitive
        object={scene}
        scale={[0.085, 0.085, 0.085]}
        // rotation={[0, Math.PI, 0]}
      >
        <Html
          wrapperClass="laptop "
          position={[3.5, 11, 0]}
          transform
          distanceFactor={9}
          // rotation-x={0.25}
          // rotation={[0, Math.PI, 0]}
        >
          <iframe
            src={`${window.location.origin}/portfolio`}
            // src="https://github.com/NikhilSai5"
            onPointerEnter={handleComputerPointerEnter}
            onPointerLeave={handleComputerPointerLeave}
            className="space-tab overflow-hidden "
          />
        </Html>
      </primitive>
    </group>
  );
};

export default Computer;
