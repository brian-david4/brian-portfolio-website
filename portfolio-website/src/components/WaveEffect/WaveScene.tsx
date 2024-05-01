import { Canvas } from "@react-three/fiber";
import WaveModel from "./WaveModel";

interface WaveSceneProps {
  src: string;
  vertical?: boolean;
}

const WaveScene = ({ src, vertical }: WaveSceneProps) => {
  return (
    <>
      <Canvas>
        <WaveModel vertical={vertical} src={src} />
      </Canvas>
    </>
  );
};

export default WaveScene;
