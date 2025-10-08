import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);

  const starsPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 30 + 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame(state => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <Points
      ref={ref}
      positions={starsPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function BlueParticles() {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(800 * 3);

    for (let i = 0; i < 800; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }

    return positions;
  }, []);

  useFrame(state => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function PurpleParticles() {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(600 * 3);

    for (let i = 0; i < 600; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;
    }

    return positions;
  }, []);

  useFrame(state => {
    if (ref.current) {
      ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.04) * 0.08;
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.06) * 0.05;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particlesPosition}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);

  useFrame(state => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.08;
      group.current.rotation.y = state.clock.elapsedTime * 0.12;
      group.current.rotation.z = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={group}>
      {/* Main central wireframe */}
      <mesh position={[0, 0, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Smaller orbiting shapes */}
      <mesh position={[3, 1, -1]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>

      <mesh position={[-2.5, -1, 1]}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial
          color="#ec4899"
          transparent
          opacity={0.35}
          wireframe
        />
      </mesh>

      <mesh position={[1, -2, 2]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}

function MouseInteraction() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(state => {
    if (groupRef.current) {
      // Subtle mouse parallax effect
      const { mouse } = state;
      groupRef.current.rotation.x = mouse.y * 0.03;
      groupRef.current.rotation.y = mouse.x * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <BlueParticles />
      <PurpleParticles />
      <FloatingGeometry />
    </group>
  );
}

interface ThreeSceneProps {
  className?: string;
}

export default function ThreeScene({ className = '' }: ThreeSceneProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Minimal lighting setup */}
        <ambientLight intensity={0.2} />

        {/* Background stars - static */}
        <Stars />

        {/* Foreground interactive particles and geometry */}
        <MouseInteraction />
      </Canvas>
    </div>
  );
}
