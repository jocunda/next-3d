"use client";

import { Canvas } from "@react-three/fiber";

import { ExperienceRPM } from "@/components/ExperienceRPM.jsx";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "@/components/Interface";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-between">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <ScrollControls pages={2} damping={0.1}>
          <ExperienceRPM />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
