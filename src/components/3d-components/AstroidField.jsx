import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const AstroidField = ({ position }) => {
  const { scene } = useGLTF("/3d-assets/astroidfieldnew.glb");
  return (
    <group position={position} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
};

export default AstroidField;
