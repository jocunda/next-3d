import {
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { AvatarRPM } from "./AvatarRPM"
import { Suspense } from "react"
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "Idle",
      options: ["Idle", "HandIdle", "HotIdle"],
    },
  });

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset"/>
      <group position-y={-1}>
          <AvatarRPM animation={animation}/>
      </group>
      
      <ambientLight intensity={1} />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />

      
    </>
  );
};
