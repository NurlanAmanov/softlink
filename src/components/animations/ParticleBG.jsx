// WireTorus.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function WireTorus() {
  return (
    <div className="absolute right-0 top-0 h-full w-[45%] min-w-[320px] -z-10">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <mesh rotation={[0.5, 0.2, 0]}>
          <torusGeometry args={[1, 0.35, 32, 100]} />
          <meshBasicMaterial color="#d4ff00" wireframe />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
