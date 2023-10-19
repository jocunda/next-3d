import { OrbitControls } from "@react-three/drei";
import {Model} from "./Model"


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Model />
      </group>
      <ambientLight intensity={2} />
      
    </>
  );
};
