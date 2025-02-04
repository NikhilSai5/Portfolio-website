import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Astroid3 = ({ position }) => {
  const { scene } = useGLTF(
    "/3d-assets/54509-yorp_asteroid_potential_earth_impactor.glb"
  );
  return (
    <group position={position} scale={[4, 4, 4]}>
      <primitive object={scene} />
    </group>
  );
};

export default Astroid3;
