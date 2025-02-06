import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const SpaceShip = ({ position }) => {
  const { scene } = useGLTF("/3d-assets/space_ship-compressed.glb");
  return (
    <group position={position} scale={[0.045, 0.045, 0.045]}>
      <primitive object={scene} />
    </group>
  );
};

export default SpaceShip;
