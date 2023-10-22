import {
  Environment,
  Sky,
  ambientLight,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion"

import { AvatarRPM } from "./AvatarRPM"


export const ExperienceRPM = () => {

  return (
    <>
      <Sky />
      <Environment preset="sunset"/>
      <motion.group
        position={[0.6, -1.5, -1]}
        scale={1.2}
        rotation-y={-Math.PI / 10}
        animate={{
          y: 0,
        }}
      >
        <AvatarRPM />
      </motion.group>
      <motion.group
        position={[-5, -10, 2]}
        scale={4}
        rotation-y={-Math.PI / 10}
        animate={{
          z:-10,
          y:-1.5,
        }}>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-2, -2, -9]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.9}
              transparent
              distort={0.8}
              speed={2}
              color="pink"
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-2, -5, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.4}
              transparent
              distort={0.4}
              speed={4}
              color="lime"
            />
          </mesh>
        </Float>
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      </motion.group>
      <ambientLight intensity={0.3} />
      
    </>
  );
};
