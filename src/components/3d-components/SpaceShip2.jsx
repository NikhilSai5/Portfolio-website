import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SpaceShip2 = ({ position }) => {
  const { scene } = useGLTF("/3d-assets/spaceship3-compressed-1.glb");
  const spaceshipRef = useRef();

  // Rotate the spaceship continuously on the X-axis
  useFrame(() => {
    if (spaceshipRef.current) {
      spaceshipRef.current.rotation.z += 0.005; // Adjust speed as needed
    }
  });

  return (
    <group
      ref={spaceshipRef}
      position={position}
      scale={[0.1, 0.1, 0.1]}
      rotation={[-Math.PI / 2, 0, 0]} // Initial rotation
    >
      <primitive object={scene} />
      <ambientLight intensity={0.8} />

      <directionalLight position={[-10, 10, 5]} intensity={3} castShadow />
      <directionalLight position={[-5, -5, 5]} intensity={2} />

      <spotLight
        position={[-10, 20, 10]}
        angle={0.4}
        intensity={4}
        castShadow
      />
      <spotLight position={[-15, 20, -10]} angle={0.4} intensity={3} />
    </group>
  );
};

export default SpaceShip2;
