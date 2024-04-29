import { Canvas } from "@react-three/fiber";
import WaveModel from "./WaveModel";

const WaveScene = () => {
  return (
    <>
      <Canvas>
        <WaveModel />
      </Canvas>
    </>
  );
};

export default WaveScene;
