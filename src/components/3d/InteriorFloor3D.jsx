import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Hotspot Data per Level
const LEVEL_HOTSPOTS = {
  1: [
    { id: 'h1', title: 'Haute Couture Atrium', subtitle: 'Global Flagships & Runway Gallery', pos: [-1.3, 0.4, 0.9] },
    { id: 'h2', title: 'Beauty Laboratory', subtitle: 'Bespoke Skincare & Fragrance Suites', pos: [1.3, 0.4, -0.7] },
  ],
  2: [
    { id: 'h3', title: 'Next-Gen Tech Pavilion', subtitle: 'Spatial Computing & Automotive Design', pos: [0, 1.4, 0.7] },
    { id: 'h4', title: 'Architectural Lounge', subtitle: 'Design Books & Sound Studios', pos: [-1.5, 1.4, -0.6] },
  ],
  3: [
    { id: 'h5', title: 'Sky Deck Culinary', subtitle: 'Michelin Star Dining & Terrace Bar', pos: [0.9, 2.4, 0.9] },
    { id: 'h6', title: '4K Laser Dome Cinema', subtitle: 'Immersive Surround Experience', pos: [-1.0, 2.4, -0.9] },
  ],
};

function CameraController({ activeLevel }) {
  const targetCamPos = React.useMemo(() => {
    switch (activeLevel) {
      case 1:
        return new THREE.Vector3(0, 1.4, 4.3);
      case 2:
        return new THREE.Vector3(0, 2.4, 4.0);
      case 3:
        return new THREE.Vector3(0, 3.4, 3.8);
      default:
        return new THREE.Vector3(0, 2, 4.5);
    }
  }, [activeLevel]);

  const targetLookAt = React.useMemo(() => {
    switch (activeLevel) {
      case 1:
        return new THREE.Vector3(0, 0.3, 0);
      case 2:
        return new THREE.Vector3(0, 1.3, 0);
      case 3:
        return new THREE.Vector3(0, 2.3, 0);
      default:
        return new THREE.Vector3(0, 1, 0);
    }
  }, [activeLevel]);

  useFrame((state) => {
    // Ultra-smooth camera position interpolation
    state.camera.position.lerp(targetCamPos, 0.06);
    state.camera.lookAt(targetLookAt);
  });

  return null;
}

function InteriorLevelStructure({ activeLevel, activeHotspot, setActiveHotspot }) {
  const elevatorRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Glass Elevator animation inside central atrium shaft
    if (elevatorRef.current) {
      elevatorRef.current.position.y = 0.2 + Math.sin(t * 0.9) * 1.1;
    }
  });

  return (
    <group>
      {/* Central Glass Elevator Shaft Column */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 4.2, 32]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Moving Glass Elevator Capsule */}
      <group ref={elevatorRef} position={[0, 0.2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.47, 0.47, 0.4, 24]} />
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Escalator Diagonal Structural Beams */}
      <mesh position={[-1.2, 0.5, 0]} rotation={[0, 0, 0.45]}>
        <boxGeometry args={[1.5, 0.08, 0.2]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.2, 1.5, 0]} rotation={[0, 0, -0.45]}>
        <boxGeometry args={[1.5, 0.08, 0.2]} />
        <meshStandardMaterial color="#818cf8" emissive="#4338ca" emissiveIntensity={0.5} />
      </mesh>

      {/* Level 1 Floor Slab */}
      <group position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2.6, 2.6, 0.15, 32]} />
          <meshStandardMaterial
            color={activeLevel === 1 ? '#1e293b' : '#0f172a'}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.6, 0.025, 16, 64]} />
          <meshBasicMaterial color={activeLevel === 1 ? '#38bdf8' : '#334155'} />
        </mesh>
      </group>

      {/* Level 2 Floor Slab */}
      <group position={[0, 1, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2.4, 2.4, 0.15, 32]} />
          <meshStandardMaterial
            color={activeLevel === 2 ? '#1e293b' : '#0f172a'}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.4, 0.025, 16, 64]} />
          <meshBasicMaterial color={activeLevel === 2 ? '#818cf8' : '#334155'} />
        </mesh>
      </group>

      {/* Level 3 Floor Slab */}
      <group position={[0, 2, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2.2, 2.2, 0.15, 32]} />
          <meshStandardMaterial
            color={activeLevel === 3 ? '#1e293b' : '#0f172a'}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.025, 16, 64]} />
          <meshBasicMaterial color={activeLevel === 3 ? '#fbbf24' : '#334155'} />
        </mesh>
      </group>

      {/* Perimeter Railings */}
      {[0.08, 1.08, 2.08].map((yPos, index) => (
        <mesh key={index} position={[0, yPos + 0.2, 0]}>
          <cylinderGeometry args={[2.55 - index * 0.2, 2.55 - index * 0.2, 0.3, 24, 1, true]} />
          <meshStandardMaterial
            color="#0284c7"
            roughness={0.2}
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}

      {/* Hotspots for Active Level */}
      {(LEVEL_HOTSPOTS[activeLevel] || []).map((spot) => (
        <group key={spot.id} position={spot.pos}>
          <mesh onClick={() => setActiveHotspot(spot)}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} />
          </mesh>

          <Html distanceFactor={6} center>
            <div
              onClick={() => setActiveHotspot(spot)}
              className={`group flex items-center space-x-2 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeHotspot?.id === spot.id
                  ? 'bg-cyan-400 text-black border-white scale-110 shadow-[0_0_20px_rgba(6,182,212,0.8)]'
                  : 'bg-black/85 text-slate-200 border-slate-700/80 hover:border-cyan-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-mono font-bold tracking-wider">{spot.title}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function InteriorFloor3D({ activeLevel, activeHotspot, setActiveHotspot }) {
  return (
    <div className="w-full h-full min-h-[450px] lg:min-h-[560px] relative rounded-2xl overflow-hidden border border-slate-800 bg-[#06080e]">
      <Canvas
        dpr={1}
        performance={{ min: 0.8 }}
        camera={{ position: [0, 2, 4.5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.6} color="#e0f2fe" />
        <pointLight position={[-5, 2, -5]} intensity={1.2} color="#0284c7" />

        <CameraController activeLevel={activeLevel} />
        <InteriorLevelStructure
          activeLevel={activeLevel}
          activeHotspot={activeHotspot}
          setActiveHotspot={setActiveHotspot}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Status Overlay */}
      <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-slate-700/60 text-[11px] font-mono tracking-widest text-slate-300 flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        <span>3D ATRIUM CAMERA • LEVEL 0{activeLevel} ACTIVE</span>
      </div>
    </div>
  );
}
