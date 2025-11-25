import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Group } from 'three';

const Stars = (props: any) => {
  const ref = useRef<any>(null);
  
  // Fix: Ensure the array length is a multiple of 3 (x,y,z). 6000 works perfectly.
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Auto-rotation
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const Scene = () => {
    const groupRef = useRef<any>(null);
    const [group] = useState(() => new Group());

    useFrame((state) => {
        if (groupRef.current) {
             // Interactive Parallax: Smoothly follow the mouse pointer
             // state.pointer.x/y are normalized coordinates (-1 to 1)
             const x = state.pointer.x;
             const y = state.pointer.y;
             
             // Interpolate current rotation towards mouse position for smoothness
             // We rotate the group opposite to mouse movement for a depth effect
             groupRef.current.rotation.y += (x * 0.1 - groupRef.current.rotation.y) * 0.1;
             groupRef.current.rotation.x += (-y * 0.1 - groupRef.current.rotation.x) * 0.1;
        }
    });

    return (
        <primitive object={group} ref={groupRef}>
            <Stars />
        </primitive>
    );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-900 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;