"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience.jsx";

export default function Home() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/scene.gltf");

    return (
      <>
        <primitive dispose={null} object={gltf.scene} scale={2} />
      </>
    );
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-between">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.1}
          angle={0.6}
          penumbra={8}
          position={[10, 15, 10]}
        />
        <Experience />
      </Canvas>
    </main>
  );
}
