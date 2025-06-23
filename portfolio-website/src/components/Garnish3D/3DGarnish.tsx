import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { vertex } from "../../shaders/vertexShader";
import { fragment } from "../../shaders/fragmentShader.ts";

import * as T from "three";

const Garnish3D = () => {
  return (
    <>
      <Canvas>
        <Model />
        <color args={["#582500"]} attach="background" />
      </Canvas>
    </>
  );
};
export default Garnish3D;

export const Model = () => {
  const meshRef = useRef<T.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[20, 15, 10, 10]} />
        {/* <meshBasicMaterial wireframe color={"red"} /> */}
        <shaderMaterial
          wireframe
          fragmentShader={fragment}
          vertexShader={vertex}
          uniforms={{
            uTime: { value: 0 },
            uColour: { value: new T.Color("#FFCDCD") },
          }}
        />
      </mesh>
    </>
  );
};
