import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(999999), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100;
    ref.current.rotation.y -= delta / 150;
  });

  const colors = new Float32Array(sphere.length / 3 * 3);
  for (let i = 0; i < colors.length; i += 3) {
    if (i % 12 === 0) {
      // Green color
      colors[i] = 0;
      colors[i + 1] = 1;
      colors[i + 2] = 0;
    } else if (i % 6 === 0) {
      // Red color
      colors[i] = 1;
      colors[i + 1] = 0;
      colors[i + 2] = 0;
    } else if (i % 4 === 0) {
      // Blue color
      colors[i] = 0;
      colors[i + 1] = 0;
      colors[i + 2] = 1;
    } else {
      // White color
      colors[i] = 1;
      colors[i + 1] = 1;
      colors[i + 2] = 1;
    }
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} colors={colors} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.0003}
          sizeAttenuation={true}
          vertexColors={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
