import {
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { AvatarRPM } from "./AvatarRPM"
import { Suspense } from "react"
import { useControls } from "leva";

export const ExperienceRPM = () => {

  // const { animation } = useControls({
  //   animation: {
  //     value: "Idle",
  //     options: ["Idle", "HandIdle", "HotIdle", "Greeting"],
  //   },
  // });

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset"/>
      <group position-y={-1}>
        <AvatarRPM  />
      </group>
     
    </>
  );
};
