import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
const Astroid2 = ({ position }) => {
  const { scene } = useGLTF(
    "/3d-assets/groupofastroids/asteroids/scene-compressed.gltf"
  );
  return (
    <group
      position={position}
      scale={(0.008, 0.008, 0.008)}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Astroid2;
