import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// Sample Store Layout Data
export const STORE_DATA = [
  // SPORTS
  {
    id: 'nike',
    name: 'NIKE FLAGSHIP',
    category: 'Sports',
    level: 'Level 02',
    zone: 'East Wing',
    pos: [-1.9, 0.28, -1.3],
    size: [1.5, 0.55, 1.3],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7890',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=70',
    desc: 'Official Nike flagship store featuring exclusive luxury drops, athletic wear, and customized footwear lab.',
  },
  {
    id: 'adidas',
    name: 'ADIDAS PERFORMANCE',
    category: 'Sports',
    level: 'Level 02',
    zone: 'East Wing',
    pos: [-1.5, 0.28, -0.8],
    size: [1.4, 0.55, 1.2],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7801',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=600&q=70',
    desc: 'High-performance running gear, Yeezy archive releases, and custom athletic tailoring.',
  },
  {
    id: 'puma',
    name: 'PUMA SELECT',
    category: 'Sports',
    level: 'Level 02',
    zone: 'East Wing',
    pos: [-1.2, 0.28, -0.5],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '10:00 AM - 09:30 PM',
    phone: '+91 800 456 7802',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=70',
    desc: 'Motorsport collaborations, street culture sneakers, and active lifestyle apparel.',
  },
  {
    id: 'lululemon',
    name: 'LULULEMON STUDIO',
    category: 'Sports',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-1.0, 0.28, 0.5],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '09:00 AM - 10:00 PM',
    phone: '+91 800 456 7803',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=70',
    desc: 'Premium yoga wear, technical athletic gear, and daily wellness community sessions.',
  },
  {
    id: 'underarmour',
    name: 'UNDER ARMOUR APEX',
    category: 'Sports',
    level: 'Level 02',
    zone: 'East Wing',
    pos: [-0.8, 0.28, -0.2],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7804',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=70',
    desc: 'Pro athlete training gear, smart biometric footwear, and compression innovations.',
  },

  // ELECTRONICS
  {
    id: 'apple',
    name: 'APPLE APEX',
    category: 'Electronics',
    level: 'Level 01',
    zone: 'Central Plaza',
    pos: [0, 0.28, 0],
    size: [1.8, 0.6, 1.8],
    color: '#f8fafc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7891',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=70',
    desc: 'Experience Apple Vision Pro, iPhone 16 Pro Max, and spatial computing demos at our glass avenue flagship.',
  },
  {
    id: 'samsung',
    name: 'SAMSUNG GALAXY STUDIO',
    category: 'Electronics',
    level: 'Level 01',
    zone: 'Central Plaza',
    pos: [0.3, 0.28, 0.3],
    size: [1.5, 0.55, 1.3],
    color: '#f8fafc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7811',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=70',
    desc: 'Galaxy Fold & Flip ecosystem, Neo QLED 8K display walls, and SmartThings home automation hub.',
  },
  {
    id: 'sony',
    name: 'SONY AUDIO LAB',
    category: 'Electronics',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [0.5, 0.28, 1.2],
    size: [1.4, 0.55, 1.2],
    color: '#f8fafc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7812',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=70',
    desc: 'PlayStation VR2 gaming arenas, noise-canceling headphone suites, and Alpha camera cinema gear.',
  },
  {
    id: 'bose',
    name: 'BOSE ACOUSTICS',
    category: 'Electronics',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [0.8, 0.28, 1.5],
    size: [1.3, 0.55, 1.1],
    color: '#f8fafc',
    hours: '10:00 AM - 09:30 PM',
    phone: '+91 800 456 7813',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=70',
    desc: 'Immersive spatial sound isolation chambers and premium wireless home theater systems.',
  },
  {
    id: 'razer',
    name: 'RAZER GAMING ARENA',
    category: 'Electronics',
    level: 'Level 03',
    zone: 'Sky Deck',
    pos: [0.9, 0.28, -1.2],
    size: [1.3, 0.55, 1.1],
    color: '#f8fafc',
    hours: '11:00 AM - 11:00 PM',
    phone: '+91 800 456 7814',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=70',
    desc: 'Esports tournament rigs, Chroma RGB customized peripherals, and high-spec Blade laptops.',
  },

  // LUXURY
  {
    id: 'gucci',
    name: 'GUCCI MAISON',
    category: 'Luxury',
    level: 'Level 01',
    zone: 'North Promenade',
    pos: [1.9, 0.28, -1.3],
    size: [1.5, 0.55, 1.3],
    color: '#fbbf24',
    hours: '11:00 AM - 09:30 PM',
    phone: '+91 800 456 7892',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=70',
    desc: 'Haute couture leather goods, runway collections, and private VIP shopping suites.',
  },
  {
    id: 'rolex',
    name: 'ROLEX LAB',
    category: 'Luxury',
    level: 'Level 01',
    zone: 'North Promenade',
    pos: [1.6, 0.28, -1.0],
    size: [1.4, 0.55, 1.2],
    color: '#fbbf24',
    hours: '10:30 AM - 09:30 PM',
    phone: '+91 800 456 7821',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=70',
    desc: 'Certified pre-owned chronometers, Oyster Perpetual showcases, and horology master class.',
  },
  {
    id: 'louisvuitton',
    name: 'LOUIS VUITTON',
    category: 'Luxury',
    level: 'Level 01',
    zone: 'North Promenade',
    pos: [1.3, 0.28, -0.7],
    size: [1.5, 0.55, 1.3],
    color: '#fbbf24',
    hours: '11:00 AM - 10:00 PM',
    phone: '+91 800 456 7822',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=70',
    desc: 'Heritage trunks, high jewelry, custom monogramming atelier, and runway leather collections.',
  },
  {
    id: 'hermes',
    name: 'HERMÈS PARIS',
    category: 'Luxury',
    level: 'Level 01',
    zone: 'North Promenade',
    pos: [1.0, 0.28, -0.4],
    size: [1.4, 0.55, 1.2],
    color: '#fbbf24',
    hours: '11:00 AM - 09:00 PM',
    phone: '+91 800 456 7823',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=70',
    desc: 'Birkin & Kelly leathercraft, silk scarves, equestrian accessories, and fine perfumery.',
  },
  {
    id: 'cartier',
    name: 'CARTIER VAULT',
    category: 'Luxury',
    level: 'Level 01',
    zone: 'North Promenade',
    pos: [0.7, 0.28, -0.1],
    size: [1.3, 0.55, 1.1],
    color: '#fbbf24',
    hours: '11:00 AM - 09:30 PM',
    phone: '+91 800 456 7824',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=70',
    desc: 'LOVE bracelet collections, Panthère de Cartier timepieces, and high jewelry diamond vault.',
  },

  // BEAUTY
  {
    id: 'sephora',
    name: 'SEPHORA LAB',
    category: 'Beauty',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-1.9, 0.28, 1.3],
    size: [1.4, 0.55, 1.2],
    color: '#f43f5e',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7893',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=70',
    desc: 'International cosmetics laboratory, skincare consultations, and luxury fragrance lounge.',
  },
  {
    id: 'chanelbeauty',
    name: 'CHANEL BEAUTÉ',
    category: 'Beauty',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-1.6, 0.28, 1.0],
    size: [1.3, 0.55, 1.1],
    color: '#f43f5e',
    hours: '10:30 AM - 09:30 PM',
    phone: '+91 800 456 7831',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=70',
    desc: 'N°5 iconic perfumes, Les Beiges skincare innovations, and VIP makeover studio.',
  },
  {
    id: 'maccosmetics',
    name: 'MAC COSMETICS',
    category: 'Beauty',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-1.3, 0.28, 0.7],
    size: [1.3, 0.55, 1.1],
    color: '#f43f5e',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7832',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=70',
    desc: 'Professional artist studio, customized lipstick bar, and pro makeup technique masterclasses.',
  },
  {
    id: 'diorbeauty',
    name: 'DIOR BEAUTY ATELIER',
    category: 'Beauty',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-1.0, 0.28, 0.4],
    size: [1.3, 0.55, 1.1],
    color: '#f43f5e',
    hours: '11:00 AM - 09:30 PM',
    phone: '+91 800 456 7833',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=70',
    desc: 'Sauvage & J’adore fragrance fountains, Prestige skincare treatment rooms, and couture lipsticks.',
  },
  {
    id: 'charlottetilbury',
    name: 'CHARLOTTE TILBURY',
    category: 'Beauty',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [-0.7, 0.28, 0.1],
    size: [1.3, 0.55, 1.1],
    color: '#f43f5e',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7834',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=600&q=70',
    desc: 'Pillow Talk magic cream bars, Hollywood glow foundation, and red-carpet transformation suites.',
  },

  // FASHION
  {
    id: 'balenciaga',
    name: 'BALENCIAGA',
    category: 'Fashion',
    level: 'Level 02',
    zone: 'North Promenade',
    pos: [1.9, 0.28, 1.3],
    size: [1.4, 0.55, 1.2],
    color: '#c084fc',
    hours: '10:30 AM - 10:00 PM',
    phone: '+91 800 456 7894',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=70',
    desc: 'Avant-garde streetwear, iconic footwear, and futuristic luxury fashion accessories.',
  },
  {
    id: 'zara',
    name: 'ZARA MAISON',
    category: 'Fashion',
    level: 'Level 01',
    zone: 'Central Plaza',
    pos: [1.6, 0.28, 1.0],
    size: [1.5, 0.55, 1.3],
    color: '#c084fc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7841',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=70',
    desc: 'Seasonal runway trends, intelligent self-checkout fitting rooms, and curated capsule lines.',
  },
  {
    id: 'hm',
    name: 'H&M ATELIER',
    category: 'Fashion',
    level: 'Level 01',
    zone: 'Central Plaza',
    pos: [1.3, 0.28, 0.7],
    size: [1.4, 0.55, 1.2],
    color: '#c084fc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7842',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=70',
    desc: 'Sustainable Conscious collections, designer collaborations, and modern essentials.',
  },
  {
    id: 'uniqlo',
    name: 'UNIQLO CUBE',
    category: 'Fashion',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [1.0, 0.28, 0.4],
    size: [1.4, 0.55, 1.2],
    color: '#c084fc',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7843',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=70',
    desc: 'HEATTECH technical apparel, UT graphic t-shirt gallery, and Japanese LifeWear minimalist design.',
  },
  {
    id: 'saintlaurent',
    name: 'SAINT LAURENT',
    category: 'Fashion',
    level: 'Level 02',
    zone: 'North Promenade',
    pos: [0.7, 0.28, 0.1],
    size: [1.3, 0.55, 1.1],
    color: '#c084fc',
    hours: '11:00 AM - 09:30 PM',
    phone: '+91 800 456 7844',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=70',
    desc: 'Parisian chic tailoring, Loulou leather bags, and monochrome luxury evening wear.',
  },

  // HOME
  {
    id: 'dyson',
    name: 'DYSON CONCEPT',
    category: 'Home',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [0, 0.28, 1.6],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7895',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=70',
    desc: 'Interactive hair care styling salon, air purification technology, and intelligent vacuum innovations.',
  },
  {
    id: 'ikea',
    name: 'IKEA PLANNING STUDIO',
    category: 'Home',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [-0.3, 0.28, 1.3],
    size: [1.4, 0.55, 1.2],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7851',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=70',
    desc: 'Scandinavian interior planning studio, 3D kitchen layout design, and smart lighting solutions.',
  },
  {
    id: 'muji',
    name: 'MUJI LAB',
    category: 'Home',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [-0.6, 0.28, 1.0],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '10:00 AM - 10:00 PM',
    phone: '+91 800 456 7852',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=70',
    desc: 'Minimalist Japanese storage solutions, aroma diffusers, and organic home textiles.',
  },
  {
    id: 'westelm',
    name: 'WEST ELM STUDIO',
    category: 'Home',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [-0.9, 0.28, 0.7],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '10:00 AM - 09:30 PM',
    phone: '+91 800 456 7853',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=70',
    desc: 'Mid-century modern furniture, handcrafted ceramic decor, and organic bed linens.',
  },
  {
    id: 'boconcept',
    name: 'BO CONCEPT',
    category: 'Home',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [-1.2, 0.28, 0.4],
    size: [1.3, 0.55, 1.1],
    color: '#38bdf8',
    hours: '11:00 AM - 09:30 PM',
    phone: '+91 800 456 7854',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=70',
    desc: 'Danish custom furniture, modular leather sofas, and architectural dining tables.',
  },

  // FOOD
  {
    id: 'nobu',
    name: 'NOBU SKY DINING',
    category: 'Food',
    level: 'Level 03',
    zone: 'Sky Deck',
    pos: [0, 0.28, -1.7],
    size: [1.6, 0.55, 1.1],
    color: '#f97316',
    hours: '12:00 PM - 11:00 PM',
    phone: '+91 800 456 7896',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=70',
    desc: 'World-renowned Japanese-Peruvian fine dining with panoramic city skylines.',
  },
  {
    id: 'glasshouse',
    name: 'THE GLASS HOUSE',
    category: 'Food',
    level: 'Level 03',
    zone: 'Sky Deck',
    pos: [0.3, 0.28, -1.4],
    size: [1.4, 0.55, 1.2],
    color: '#f97316',
    hours: '11:00 AM - 10:00 PM',
    phone: '+91 800 456 7861',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=70',
    desc: 'Modern European greenhouse dining with botanical cocktail bar and artisanal sourdough kitchen.',
  },
  {
    id: 'spiceaffair',
    name: 'SPICE AFFAIR',
    category: 'Food',
    level: 'Level 02',
    zone: 'South Gallery',
    pos: [0.6, 0.28, -1.1],
    size: [1.4, 0.55, 1.2],
    color: '#f97316',
    hours: '11:00 AM - 11:00 PM',
    phone: '+91 800 456 7862',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=70',
    desc: 'Elevated Indian royal cuisine, tandoori clay oven delicacies, and craft spiced mixology.',
  },
  {
    id: 'sushiart',
    name: 'SUSHI ART',
    category: 'Food',
    level: 'Level 03',
    zone: 'Sky Deck',
    pos: [0.9, 0.28, -0.8],
    size: [1.3, 0.55, 1.1],
    color: '#f97316',
    hours: '12:00 PM - 11:00 PM',
    phone: '+91 800 456 7863',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=70',
    desc: 'Authentic Omakase chef counter, bluefin tuna sashimi, and rare sake cellar.',
  },
  {
    id: 'caffeverde',
    name: 'CAFFE VERDE',
    category: 'Food',
    level: 'Level 01',
    zone: 'West Atrium',
    pos: [1.2, 0.28, -0.5],
    size: [1.3, 0.55, 1.1],
    color: '#f97316',
    hours: '08:00 AM - 10:00 PM',
    phone: '+91 800 456 7864',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=70',
    desc: 'Italian espresso roastery, wood-fired Neapolitan pizzas, and fresh gelato bar.',
  },
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
