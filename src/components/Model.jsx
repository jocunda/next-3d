import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/scene.gltf");

    return (
      <>
        <primitive dispose={null} object={gltf.scene} scale={2} />
      </>
    );
  };