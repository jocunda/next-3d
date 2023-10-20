import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model"
import {Avatar} from "./Avatar"


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        {/* <Model /> */}
        <Avatar/>
      </group>
      <ambientLight intensity={2} />
      
    </>
  );
};
