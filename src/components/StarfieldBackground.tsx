"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars({ count = 3000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Create a long tube of stars for hyperspace effect
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 2000;
      
      // Make sure there's a hollow center so the camera doesn't crash through too many stars
      if (Math.abs(x) < 5 && Math.abs(y) < 5) {
        temp.push({ x: x * 10, y: y * 10, z, speed: Math.random() * 2 + 1 });
      } else {
        temp.push({ x, y, z, speed: Math.random() * 2 + 1 });
      }
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    particles.forEach((particle, i) => {
      // Move stars towards camera (positive Z)
      particle.z += particle.speed * 200 * delta;
      
      // If star passes camera, loop it back
      if (particle.z > 50) {
        particle.z = -2000;
      }

      dummy.position.set(particle.x, particle.y, particle.z);
      
      // Stretch stars along Z axis to simulate speed
      dummy.scale.set(0.1, 0.1, 2.0 * particle.speed);
      
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
    </instancedMesh>
  );
}

export default function StarfieldBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 90 }}>
        <fog attach="fog" args={['#000000', 10, 1000]} />
        <Stars count={3000} />
      </Canvas>
    </div>
  );
}
