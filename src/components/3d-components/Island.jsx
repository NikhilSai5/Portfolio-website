import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Island = ({ position }) => {
  const { scene } = useGLTF("/3d-assets/asteroid.glb");
  return (
    <group position={position} scale={[3.4, 3.4, 3.4]}>
      <primitive object={scene} />
    </group>
  );
};

export default Island;
