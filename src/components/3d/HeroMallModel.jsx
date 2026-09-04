import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Color Palette
const ELECTRIC_BLUE = '#19A7FF';
const SOFT_CYAN = '#56D6FF';
const DEEP_NAVY = '#0B132B';
const DARK_SLATE = '#1C2541';
const WARM_GOLD = '#F59E0B';

// Detailed Realistic Futuristic Shopping Mall Architecture
function FuturisticLuxuryMall({ hoveredZone, setHoveredZone }) {
  const mallRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.pointer;

    // Smooth subtle mouse tilt parallax
    if (mallRef.current) {
      mallRef.current.rotation.y = THREE.MathUtils.lerp(
        mallRef.current.rotation.y,
        t * 0.08 + x * 0.2,
        0.05
      );
      mallRef.current.rotation.x = THREE.MathUtils.lerp(
        mallRef.current.rotation.x,
        -y * 0.08,
        0.05
      );
    }
  });

  return (
    <group ref={mallRef} position={[0.2, -0.4, 0]} rotation={[0.08, -0.3, 0]} scale={[1.05, 1.05, 1.05]}>
      {/* GROUND PODIUM & ENTRANCE PLAZA */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[5.2, 0.3, 3.6]} />
        <meshStandardMaterial color="#070a12" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Ground LED Trim Lines */}
      <mesh position={[0, -0.23, 0]}>
        <boxGeometry args={[5.26, 0.03, 3.66]} />
        <meshStandardMaterial color={ELECTRIC_BLUE} emissive={ELECTRIC_BLUE} emissiveIntensity={1} />
      </mesh>

      {/* Main Glass Entrance Concourse */}
      <group position={[0, -0.1, 1.6]}>
        <mesh>
          <boxGeometry args={[2.0, 0.35, 0.5]} />
          <meshStandardMaterial color={ELECTRIC_BLUE} emissive="#0284c7" emissiveIntensity={0.8} />
        </mesh>
        {/* Entrance Gateway Arch */}
        <mesh position={[0, 0, 0.26]}>
          <boxGeometry args={[1.4, 0.25, 0.05]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* MAIN MALL WING 1 — CURVED GLASS GALLERIA (FASHION & RETAIL) */}
      <group position={[-0.8, 0.3, 0]}>
        {/* Curved Glass Building Block */}
        <mesh>
          <boxGeometry args={[2.8, 1.1, 2.4]} />
          <meshStandardMaterial
            color={DARK_SLATE}
            emissive={ELECTRIC_BLUE}
            emissiveIntensity={0.25}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Illuminated Window Ribs */}
        <mesh position={[0, 0, 1.21]}>
          <planeGeometry args={[2.6, 0.9]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive={ELECTRIC_BLUE}
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Facade LED Horizontal Strips */}
        <mesh position={[0, 0.4, 1.22]}>
          <boxGeometry args={[2.82, 0.04, 0.02]} />
          <meshStandardMaterial color={SOFT_CYAN} emissive={SOFT_CYAN} emissiveIntensity={1} />
        </mesh>
        <mesh position={[0, -0.4, 1.22]}>
          <boxGeometry args={[2.82, 0.04, 0.02]} />
          <meshStandardMaterial color={ELECTRIC_BLUE} emissive={ELECTRIC_BLUE} emissiveIntensity={1} />
        </mesh>
      </group>

      {/* MAIN MALL WING 2 — DINING & CULINARY PROMENADE */}
      <group position={[1.2, 0.4, -0.2]}>
        <mesh>
          <boxGeometry args={[2.2, 1.3, 2.0]} />
          <meshStandardMaterial
            color="#1e1b4b"
            emissive={WARM_GOLD}
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Warm Golden Interior Window Glow */}
        <mesh position={[0, 0, 1.01]}>
          <planeGeometry args={[2.0, 1.1]} />
          <meshStandardMaterial
            color={WARM_GOLD}
            emissive={WARM_GOLD}
            emissiveIntensity={0.5}
            transparent
            opacity={0.85}
          />
        </mesh>

        <mesh position={[0, 0.5, 1.02]}>
          <boxGeometry args={[2.22, 0.04, 0.02]} />
          <meshStandardMaterial color={WARM_GOLD} emissive={WARM_GOLD} emissiveIntensity={1} />
        </mesh>
      </group>

      {/* CENTRAL ATRIUM TOWER & SKY DECK */}
      <group position={[0, 1.2, -0.2]}>
        {/* Central Cylindrical Glass Atrium */}
        <mesh>
          <cylinderGeometry args={[1.2, 1.4, 1.1, 32]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive={SOFT_CYAN}
            emissiveIntensity={0.35}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Atrium Horizontal Glowing Light Rings */}
        <mesh position={[0, 0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.22, 0.025, 16, 64]} />
          <meshBasicMaterial color={SOFT_CYAN} />
        </mesh>
        <mesh position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.42, 0.025, 16, 64]} />
          <meshBasicMaterial color={ELECTRIC_BLUE} />
        </mesh>

        {/* Sky Deck Roof Canopy */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[1.5, 1.1, 0.15, 32]} />
          <meshStandardMaterial color={ELECTRIC_BLUE} emissive={ELECTRIC_BLUE} emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* ROOFTOP ENTERTAINMENT DOME & HELIPAD */}
      <group position={[-0.4, 1.9, -0.2]}>
        <mesh>
          <sphereGeometry args={[0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive={ELECTRIC_BLUE}
            emissiveIntensity={0.4}
            transparent
            opacity={0.75}
          />
        </mesh>
        {/* Laser Ring Base */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.87, 0.02, 16, 64]} />
          <meshBasicMaterial color={SOFT_CYAN} />
        </mesh>
      </group>

      {/* CONNECTING SKY BRIDGES */}
      <mesh position={[0.2, 0.8, -0.1]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[1.8, 0.12, 0.35]} />
        <meshStandardMaterial color={ELECTRIC_BLUE} emissive="#0284c7" emissiveIntensity={0.6} />
      </mesh>

      {/* ANCHORED ARCHITECTURAL CALLOUT LABELS */}
      <Float speed={2} rotationIntensity={0.12} floatIntensity={0.3}>
        {/* FASHION */}
        <group position={[-1.8, 1.1, 1.2]}>
          <Html center distanceFactor={9}>
            <div
              onMouseEnter={() => setHoveredZone('FASHION')}
              onMouseLeave={() => setHoveredZone(null)}
              className="flex items-center space-x-2 font-mono text-[10px] tracking-widest cursor-pointer whitespace-nowrap"
            >
              <span className={`px-3 py-1 rounded font-bold uppercase transition-all duration-300 ${
                hoveredZone === 'FASHION'
                  ? 'bg-[#19A7FF] text-black shadow-[0_0_15px_#19A7FF] scale-105'
                  : 'bg-[#07121C]/90 text-white border border-slate-700/80 hover:border-[#19A7FF]'
              }`}>
                FASHION
              </span>
              <div className="w-8 h-[1px] bg-[#19A7FF]" />
              <span className="w-2 h-2 rounded-full bg-[#19A7FF] inline-block animate-ping" />
            </div>
          </Html>
        </group>

        {/* DINING */}
        <group position={[2.4, 1.3, -0.2]}>
          <Html center distanceFactor={9}>
            <div
              onMouseEnter={() => setHoveredZone('DINING')}
              onMouseLeave={() => setHoveredZone(null)}
              className="flex items-center space-x-2 font-mono text-[10px] tracking-widest cursor-pointer whitespace-nowrap"
            >
              <span className={`px-3 py-1 rounded font-bold uppercase transition-all duration-300 ${
                hoveredZone === 'DINING'
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_#f59e0b] scale-105'
                  : 'bg-[#07121C]/90 text-white border border-slate-700/80 hover:border-amber-400'
              }`}>
                DINING
              </span>
              <div className="w-8 h-[1px] bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping" />
            </div>
          </Html>
        </group>

        {/* ENTERTAINMENT */}
        <group position={[-1.2, 2.6, 0]}>
          <Html center distanceFactor={9}>
            <div
              onMouseEnter={() => setHoveredZone('ENTERTAINMENT')}
              onMouseLeave={() => setHoveredZone(null)}
              className="flex items-center space-x-2 font-mono text-[10px] tracking-widest cursor-pointer whitespace-nowrap"
            >
              <span className={`px-3 py-1 rounded font-bold uppercase transition-all duration-300 ${
                hoveredZone === 'ENTERTAINMENT'
                  ? 'bg-[#56D6FF] text-black shadow-[0_0_15px_#56D6FF] scale-105'
                  : 'bg-[#07121C]/90 text-white border border-slate-700/80 hover:border-[#56D6FF]'
              }`}>
                ENTERTAINMENT
              </span>
              <div className="w-8 h-[1px] bg-[#56D6FF]" />
              <span className="w-2 h-2 rounded-full bg-[#56D6FF] inline-block animate-ping" />
            </div>
          </Html>
        </group>

        {/* LIFESTYLE */}
        <group position={[0.2, -0.6, 2.0]}>
          <Html center distanceFactor={9}>
            <div
              onMouseEnter={() => setHoveredZone('LIFESTYLE')}
              onMouseLeave={() => setHoveredZone(null)}
              className="flex items-center space-x-2 font-mono text-[10px] tracking-widest cursor-pointer whitespace-nowrap"
            >
              <span className={`px-3 py-1 rounded font-bold uppercase transition-all duration-300 ${
                hoveredZone === 'LIFESTYLE'
                  ? 'bg-[#19A7FF] text-black shadow-[0_0_15px_#19A7FF] scale-105'
                  : 'bg-[#07121C]/90 text-white border border-slate-700/80 hover:border-[#19A7FF]'
              }`}>
                LIFESTYLE
              </span>
              <div className="w-8 h-[1px] bg-[#19A7FF]" />
              <span className="w-2 h-2 rounded-full bg-[#19A7FF] inline-block animate-ping" />
            </div>
          </Html>
        </group>
      </Float>
    </group>
  );
}

// Subtle Particle Swarm
function LightParticles({ count = 35 }) {
  const pointsRef = useRef();

  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={SOFT_CYAN}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroMallModel() {
  const [hoveredZone, setHoveredZone] = useState(null);

  return (
    <div className="w-full h-full min-h-[460px] lg:min-h-[620px] relative">
      <Canvas
        dpr={1}
        performance={{ min: 0.8 }}
        camera={{ position: [0, 2.5, 7.8], fov: 42 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} color="#0B132B" />
        <directionalLight position={[10, 15, 10]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-8, -5, -8]} intensity={1.2} color="#0284c7" />
        <pointLight position={[6, 8, 6]} intensity={1.8} color={ELECTRIC_BLUE} />
        
        {/* Ground Blueprint Grid */}
        <gridHelper args={[24, 48, ELECTRIC_BLUE, '#0B132B']} position={[0, -0.7, 0]} />

        {/* Realistic Futuristic Shopping Mall */}
        <FuturisticLuxuryMall
          hoveredZone={hoveredZone}
          setHoveredZone={setHoveredZone}
        />

        {/* Ambient Particles */}
        <LightParticles count={35} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.4}
        />
      </Canvas>

      {/* Zone Highlight Banner */}
      {hoveredZone && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-panel border border-[#19A7FF]/40 text-xs font-mono tracking-widest text-[#56D6FF] pointer-events-none transition-all duration-300 animate-pulse">
          ZONE ANNOTATION: {hoveredZone}
        </div>
      )}
    </div>
  );
}
