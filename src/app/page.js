"use client";

import { Canvas } from "@react-three/fiber";

import { ExperienceRPM } from "@/components/ExperienceRPM.jsx";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "@/components/Interface";
import { MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-between">
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <ScrollControls pages={2} damping={0.1}>
            <Scroll>
              <ExperienceRPM />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
    </main>
  );
}
