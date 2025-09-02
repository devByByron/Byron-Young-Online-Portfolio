import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Create particles in a sphere formation
      const distance = Math.random() * 2 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function GeometricShapes() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[2, 0, 0]}>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color="#8b5cf6" wireframe />
      </mesh>
      <mesh position={[-2, 1, -1]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color="#6366f1" wireframe />
      </mesh>
      <mesh position={[0, -2, 1]}>
        <tetrahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#a855f7" wireframe />
      </mesh>
    </group>
  );
}

interface ThreeSceneProps {
  className?: string;
}

export default function ThreeScene({ className = "" }: ThreeSceneProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleField />
        <GeometricShapes />
      </Canvas>
    </div>
  );
}