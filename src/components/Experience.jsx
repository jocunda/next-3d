import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar"
import { AvatarRPM } from "./AvatarRPM"
import { Suspense } from "react"
import { useControls } from "leva";

export const Experience = () => {

  // const { animation } = useControls({
  //   animation: {
  //     value: "Idle",
  //     options: ["Idle", "HandIdle"],
  //   },
  // });

  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Suspense fallback={null}>
          {/* <Avatar animation={animation} /> */}
          <AvatarRPM />
        </Suspense>
        
      </group>
      
      <ambientLight intensity={1} />
       <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
    </>
  );
};
