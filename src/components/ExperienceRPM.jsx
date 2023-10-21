import {
  Environment,
  Sky,
} from "@react-three/drei";
import { AvatarRPM } from "./AvatarRPM"

export const ExperienceRPM = () => {

  return (
    <>
      <Sky />
      <Environment preset="sunset"/>
      <group position-y={-1}>
        <AvatarRPM  />
      </group>
     
    </>
  );
};
