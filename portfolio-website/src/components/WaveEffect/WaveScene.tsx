import { Canvas } from "@react-three/fiber";
import WaveModel from "./WaveModel";

interface WaveSceneProps {
  src: string;
}

const WaveScene = ({ src }: WaveSceneProps) => {
  return (
    <>
      <Canvas>
        <WaveModel src={src} />
      </Canvas>
    </>
  );
};

export default WaveScene;
