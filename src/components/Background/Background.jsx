import React, { useRef, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const NUM_STARS = 1200;

const Background = ({ scrollTriggered, speed }) => {
  const starsRef = useRef([]);

  const [stars, setStars] = useState(
    Array.from({ length: NUM_STARS }, () => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        Math.random() * -250,
      ],
      speed: Math.random() * speed,
    }))
  );
  console.log(speed);
  useFrame(() => {
    setStars((prevStars) =>
      prevStars.map((star, index) => {
        let newZ = star.position[2] + star.speed;

        if (newZ > 10) {
          newZ = Math.random() * -50;
        }

        starsRef.current[index].position.set(
          star.position[0],
          star.position[1],
          newZ
        );

        return {
          ...star,
          position: [star.position[0], star.position[1], newZ],
        };
      })
    );
  });

  return (
    <>
      <group>
        {stars.map((star, index) => (
          <mesh
            key={index}
            ref={(el) => (starsRef.current[index] = el)}
            position={star.position}
          >
            {scrollTriggered ? (
              <boxGeometry args={[0.01, 0.01, 0.9]} />
            ) : (
              <sphereGeometry args={[0.02, 10, 10]} />
            )}

            <meshBasicMaterial color="white" />
          </mesh>
        ))}
      </group>
      {/* <OrbitControls /> */}
    </>
  );
};

export default Background;
