import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Ceres = ({ position }) => {
  const { scene } = useGLTF(
    "/3d-assets/ceres/ceres_v1.1/scene-compressed.gltf"
  );
  const ceresRef = useRef();

  useFrame(() => {
    if (ceresRef.current) {
      ceresRef.current.rotation.y += 0.01; // Adjust speed here
    }
  });
  return (
    <group ref={ceresRef} position={position} scale={(0.4, 0.4, 0.4)}>
      <primitive object={scene} />
    </group>
  );
};

export default Ceres;
