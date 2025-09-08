import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const starsPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 25 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={starsPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function SpaceParticles() {
  const ref = useRef<THREE.Points>(null);
  const colors = useRef<Float32Array>();
  
  const { positions, colorArray } = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colorArray = new Float32Array(2000 * 3);
    
    const colorPalette = [
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#ec4899'), // Pink
      new THREE.Color('#10b981'), // Emerald
    ];
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      
      // Create floating particles in space
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      // Assign random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colorArray[i3] = color.r;
      colorArray[i3 + 1] = color.g;
      colorArray[i3 + 2] = color.b;
    }
    
    return { positions, colorArray };
  }, []);
  
  colors.current = colorArray;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.03) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <pointsMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
      <bufferAttribute
        attach="attributes-color"
        array={colors.current}
        count={2000}
        itemSize={3}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.1;
      group.current.rotation.y = state.clock.elapsedTime * 0.15;
      group.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Main central geometry */}
      <mesh position={[0, 0, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.2}
          wireframe
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Orbiting smaller geometries */}
      <mesh position={[3, 1, -1]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.4}
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <mesh position={[-2.5, -1, 1]}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.3}
          wireframe
          emissive="#ec4899"
          emissiveIntensity={0.25}
        />
      </mesh>
      
      <mesh position={[1, -2, 2]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color="#10b981"
          transparent
          opacity={0.35}
          wireframe
          emissive="#10b981"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

function MouseInteraction() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle mouse parallax effect
      const { mouse } = state;
      groupRef.current.rotation.x = mouse.y * 0.05;
      groupRef.current.rotation.y = mouse.x * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      <SpaceParticles />
      <FloatingGeometry />
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
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient lighting for space atmosphere */}
        <ambientLight intensity={0.3} color="#0f172a" />
        
        {/* Directional light for geometric shapes */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.4} 
          color="#3b82f6"
        />
        
        {/* Point lights for atmospheric glow */}
        <pointLight 
          position={[10, 0, -10]} 
          intensity={0.3} 
          color="#8b5cf6"
          distance={20}
        />
        <pointLight 
          position={[-10, 5, 10]} 
          intensity={0.2} 
          color="#06b6d4"
          distance={15}
        />
        
        {/* Static background stars */}
        <Stars />
        
        {/* Interactive foreground elements */}
        <MouseInteraction />
      </Canvas>
    </div>
  );
}