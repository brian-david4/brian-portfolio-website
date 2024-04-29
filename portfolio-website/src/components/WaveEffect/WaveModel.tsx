import { fragment, vertex } from "./shader";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { Mesh } from "three";

const WaveModel = () => {
  const plane = useRef<Mesh>(null!);

  const texture = useTexture("/aboutImages/lemans.webp");

  const { height, width } = texture.image;

  const scale = useAspect(width, height, 0.1);

  // const { amplitude, waveLength } = useControls({
  //   amplitude: { value: 0, min: 0, max: 3, step: 0.05 },
  //   waveLength: { value: 0, min: 0, max: 10, step: 0.1 },
  // });

  const uniforms = useRef({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uWaveLength: { value: 2.7 },
    uAmplitude: { value: 0.1 },
  });

  useFrame(() => {
    plane.current.material.uniforms.uTime.value += 0.02;
  });
  return (
    <>
      <mesh ref={plane} scale={scale}>
        <planeGeometry args={[3, 3, 50, 50]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms.current}
          // wireframe
        />
      </mesh>
    </>
  );
};

export default WaveModel;
