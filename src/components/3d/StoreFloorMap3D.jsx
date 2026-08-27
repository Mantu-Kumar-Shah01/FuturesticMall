import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Sample Store Layout Data
export const STORE_DATA = [
  { id: 'nike', name: 'NIKE FLAGSHIP', category: 'Sports', level: 'Level 02', zone: 'East Wing', pos: [-1.9, 0.28, -1.3], size: [1.5, 0.55, 1.3], color: '#38bdf8' },
  { id: 'apple', name: 'APPLE APEX', category: 'Electronics', level: 'Level 01', zone: 'Central Plaza', pos: [0, 0.28, 0], size: [1.8, 0.6, 1.8], color: '#f8fafc' },
  { id: 'gucci', name: 'GUCCI MAISON', category: 'Luxury', level: 'Level 01', zone: 'North Promenade', pos: [1.9, 0.28, -1.3], size: [1.5, 0.55, 1.3], color: '#fbbf24' },
  { id: 'sephora', name: 'SEPHORA LAB', category: 'Beauty', level: 'Level 01', zone: 'West Atrium', pos: [-1.9, 0.28, 1.3], size: [1.4, 0.55, 1.2], color: '#f43f5e' },
  { id: 'balenciaga', name: 'BALENCIAGA', category: 'Fashion', level: 'Level 02', zone: 'North Promenade', pos: [1.9, 0.28, 1.3], size: [1.4, 0.55, 1.2], color: '#c084fc' },
  { id: 'dyson', name: 'DYSON CONCEPT', category: 'Home', level: 'Level 02', zone: 'South Gallery', pos: [0, 0.28, 1.6], size: [1.3, 0.55, 1.1], color: '#38bdf8' },
  { id: 'nobu', name: 'NOBU SKY DINING', category: 'Food', level: 'Level 03', zone: 'Sky Deck', pos: [0, 0.28, -1.7], size: [1.6, 0.55, 1.1], color: '#f97316' },
];

function StoreBlock({ store, isCategorySelected, isHovered, isSelected, onHover, onClick }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const targetY = isCategorySelected || isHovered || isSelected ? 0.45 : 0.28;
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
    }
  });

  const activeGlow = isCategorySelected || isHovered || isSelected;

  return (
    <group position={store.pos}>
      {/* Main Store Architectural Structure */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(store);
        }}
        onPointerOut={() => onHover(null)}
        onClick={(e) => {
          e.stopPropagation();
          onClick(store);
        }}
      >
        <boxGeometry args={store.size} />
        <meshStandardMaterial
          color={activeGlow ? store.color : '#1e293b'}
          emissive={activeGlow ? store.color : '#0f172a'}
          emissiveIntensity={activeGlow ? 0.85 : 0.15}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Illuminated Glass Facade Entrance Strip */}
      <mesh position={[0, 0.28, store.size[2] / 2 + 0.01]}>
        <planeGeometry args={[store.size[0] * 0.7, store.size[1] * 0.6]} />
        <meshStandardMaterial
          color={activeGlow ? '#ffffff' : '#38bdf8'}
          emissive={activeGlow ? store.color : '#0284c7'}
          emissiveIntensity={activeGlow ? 1 : 0.4}
        />
      </mesh>

      {/* Wireframe Border Glow */}
      {activeGlow && (
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[store.size[0] + 0.08, store.size[1] + 0.08, store.size[2] + 0.08]} />
          <meshBasicMaterial color={store.color} wireframe transparent opacity={0.9} />
        </mesh>
      )}

      {/* Floating Store Label HUD */}
      <Html position={[0, 0.65, 0]} center distanceFactor={8}>
        <div
          onClick={() => onClick(store)}
          className={`px-2.5 py-1 rounded text-[9px] font-mono tracking-widest font-bold uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shadow-lg ${
            activeGlow
              ? 'bg-cyan-400 text-black border border-white scale-110 shadow-[0_0_20px_rgba(6,182,212,0.8)]'
              : 'bg-black/85 text-slate-300 border border-slate-700/80 hover:border-slate-400'
          }`}
        >
          {store.name}
        </div>
      </Html>
    </group>
  );
}

function MallFloorBase() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Main Architectural Floor Slab */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[6.8, 0.2, 5.8]} />
        <meshStandardMaterial color="#080c16" roughness={0.4} metalness={0.9} />
      </mesh>

      {/* Architectural Walkway Grid Lines */}
      <gridHelper args={[6.8, 22, '#38bdf8', '#1e293b']} position={[0, 0.01, 0]} />

      {/* Floor Perimeter LED Light Strip */}
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[6.9, 0.04, 5.9]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
      </mesh>

      {/* Central Plaza Water Feature / Light Ring */}
      <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.2, 0.03, 16, 64]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

export default function StoreFloorMap3D({ activeCategory, selectedStore, onSelectStore }) {
  const [hoveredStore, setHoveredStore] = React.useState(null);

  return (
    <div className="w-full h-full min-h-[450px] lg:min-h-[560px] relative rounded-2xl overflow-hidden border border-slate-800/80 bg-[#06080e]">
      <Canvas
        dpr={1}
        performance={{ min: 0.8 }}
        camera={{ position: [0, 5.2, 5.2], fov: 42 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[8, 12, 6]} intensity={1.6} color="#e0f2fe" />
        <pointLight position={[-5, 5, -5]} intensity={1.2} color="#0284c7" />

        <MallFloorBase />

        {STORE_DATA.map((store) => {
          const isCategorySelected =
            activeCategory !== 'All' && store.category.toLowerCase() === activeCategory.toLowerCase();
          const isHovered = hoveredStore?.id === store.id;
          const isSelected = selectedStore?.id === store.id;

          return (
            <StoreBlock
              key={store.id}
              store={store}
              isCategorySelected={isCategorySelected}
              isHovered={isHovered}
              isSelected={isSelected}
              onHover={setHoveredStore}
              onClick={onSelectStore}
            />
          );
        })}

        <OrbitControls
          enableZoom={true}
          maxDistance={8.5}
          minDistance={3.2}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* HUD Status Overlay */}
      <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-slate-700/60 text-[11px] font-mono tracking-widest text-slate-300 flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>3D DIGITAL NAV SYSTEM • INTERACTIVE FLOOR MAP</span>
      </div>

      <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-lg border border-slate-700/60 text-[10px] font-mono tracking-wider text-slate-400">
        DRAG TO ROTATE • SCROLL TO ZOOM
      </div>
    </div>
  );
}
