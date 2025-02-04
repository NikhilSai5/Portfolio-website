import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const SpaceStation = ({ position }) => {
  const { scene } = useGLTF("/3d-assets/satellite.glb");
  return (
    <group position={position} scale={[0.05, 0.05, 0.05]}>
      <primitive object={scene} />
    </group>
  );
};

export default SpaceStation;
