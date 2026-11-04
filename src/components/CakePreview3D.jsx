import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function CakeModel({ flavour, size, frosting, theme, message }) {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // Map sizes to dimensions
  const scaleMap = {
    small: 0.7,
    medium: 1.0,
    large: 1.3
  }
  const scale = scaleMap[size.id] || 1.0
  const radius = 1 * scale
  const height = 0.8 * scale

  // Flavour colors
  const flavourColors = {
    vanilla: '#f5e6d3',
    chocolate: '#6b3e26',
    'red-velvet': '#8b2635',
    lemon: '#fff3b0',
    strawberry: '#f4a6c2'
  }
  const layerColor = flavourColors[flavour.id] || '#f5e6d3'

  // Frosting colors and materials
  const frostingColors = {
    'cream-cheese': '#faf7f2',
    buttercream: '#fef7ed',
    ganache: '#3e2723',
    whipped: '#ffffff'
  }
  const frostingColor = frostingColors[frosting.id] || '#faf7f2'

  // Theme decorations
  const showFlowers = theme.id === 'floral'
  const showGold = theme.id === 'floral' || theme.id === 'modern'
  const showToppers = theme.id === 'floral' || theme.id === 'classic'
  const isRustic = theme.id === 'rustic'

  return (
    <group ref={groupRef} position={[0, -height / 2, 0]}>
      <mesh position={[0, -0.08 * scale, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 1.2, radius * 1.22, 0.12 * scale, 64]} />
        <meshStandardMaterial color="#f4eee4" roughness={0.24} />
      </mesh>
      <mesh position={[0, -0.145 * scale, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 1.22, radius * 1.22, 0.018 * scale, 64]} />
        <meshStandardMaterial color="#b88a5a" metalness={0.55} roughness={0.32} />
      </mesh>

      {/* Cake layers */}
      <mesh position={[0, height * 0.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius * 0.95, height * 0.5, 32]} />
        <meshStandardMaterial color={layerColor} roughness={0.8} />
      </mesh>
      
      <mesh position={[0, height * 0.75, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 0.95, radius * 0.9, height * 0.5, 32]} />
        <meshStandardMaterial color={layerColor} roughness={0.8} />
      </mesh>

      {/* Frosting */}
      <mesh position={[0, height, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 0.92, radius * 0.97, height * 0.15, 32]} />
        <meshStandardMaterial 
          color={frostingColor} 
          roughness={frosting.id === 'ganache' ? 0.3 : frosting.id === 'whipped' ? 0.9 : 0.6}
          metalness={frosting.id === 'ganache' ? 0.1 : 0}
        />
      </mesh>

      {/* Frosting drips for rustic theme */}
      {isRustic && (
        <>
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const x = Math.cos(angle) * radius * 0.9
            const z = Math.sin(angle) * radius * 0.9
            return (
              <mesh key={i} position={[x, height * 0.9, z]} castShadow>
                <sphereGeometry args={[0.05 * scale, 8, 8]} />
                <meshStandardMaterial color={frostingColor} roughness={0.7} />
              </mesh>
            )
          })}
        </>
      )}

      {/* Flowers for floral theme */}
      {showFlowers && (
        <>
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2
            const x = Math.cos(angle) * radius * 0.85
            const z = Math.sin(angle) * radius * 0.85
            return (
              <group key={i} position={[x, height + 0.05, z]} rotation={[0, angle, 0]}>
                <mesh castShadow>
                  <sphereGeometry args={[0.08 * scale, 12, 12]} />
                  <meshStandardMaterial color="#ff69b4" roughness={0.4} />
                </mesh>
                <mesh position={[0, 0.05 * scale, 0]} castShadow>
                  <sphereGeometry args={[0.04 * scale, 8, 8]} />
                  <meshStandardMaterial color="#ffc0cb" roughness={0.4} />
                </mesh>
              </group>
            )
          })}
        </>
      )}

      {/* Gold decorations */}
      {showGold && (
        <>
          <mesh position={[radius * 0.6, height * 0.6, 0]} castShadow>
            <torusGeometry args={[0.08 * scale, 0.02 * scale, 8, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[-radius * 0.4, height * 0.4, radius * 0.5]} castShadow>
            <torusGeometry args={[0.06 * scale, 0.015 * scale, 8, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
        </>
      )}

      {/* Topper */}
      {showToppers && (
        <group position={[0, height + 0.15 * scale, 0]}>
          <mesh castShadow>
            <coneGeometry args={[0.15 * scale, 0.3 * scale, 8]} />
            <meshStandardMaterial color="#ffd700" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.2 * scale, 0]} castShadow>
            <sphereGeometry args={[0.08 * scale, 12, 12]} />
            <meshStandardMaterial color="#fff8dc" roughness={0.5} />
          </mesh>
        </group>
      )}

      {/* Custom Message */}
      {message && message.trim() && (
        <group position={[0, height + 0.05, radius * 0.93]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <planeGeometry args={[radius * 1.6, 0.25 * scale]} />
            <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
          </mesh>
          <Text
            position={[0, 0, 0.001]}
            fontSize={0.09 * scale}
            color="#4a4a4a"
            anchorX="center"
            anchorY="middle"
            maxWidth={radius * 1.4}
          >
            {message}
          </Text>
        </group>
      )}
    </group>
  )
}

function Scene({ flavour, size, frosting, theme, message }) {
  const scale = size.id === 'small' ? 0.7 : size.id === 'large' ? 1.3 : 1
  const floorY = -(0.4 + 0.17) * scale

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 2.8, 4]} fov={44} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={3}
        maxDistance={6}
        autoRotate={false}
      />
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[-4, 8, 5]} 
        intensity={1.6} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[4, 3, -5]} intensity={0.55} color="#ffe4c2" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <CakeModel flavour={flavour} size={size} frosting={frosting} theme={theme} message={message} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, floorY, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#d7c5ad" roughness={0.88} />
      </mesh>
    </>
  )
}

export default function CakePreview3D({ flavour, size, frosting, theme, message }) {
  return (
    <div className="cake-preview-stage relative h-64 w-full overflow-hidden rounded-xl sm:h-80 md:h-96">
      <span className="cake-preview-stamp" aria-hidden="true">Baked to order</span>
      <span className="cake-preview-hint" aria-hidden="true">Drag to explore</span>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4, 2.8, 4], fov: 44 }}>
        <Scene flavour={flavour} size={size} frosting={frosting} theme={theme} message={message} />
      </Canvas>
    </div>
  )
}
