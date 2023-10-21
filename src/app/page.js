"use client";

import { Canvas } from "@react-three/fiber";

import { ExperienceRPM } from "@/components/ExperienceRPM.jsx";

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
        <ExperienceRPM />
      </Canvas>
    </main>
  );
}
