import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { getTechStackIcons } from '@utils/getIconUrl'

interface TechIconProps {
  position: [number, number, number]
  iconUrl: string
  techName: string
}

function TechIcon({ position, iconUrl, techName }: TechIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const textureRef = useRef<THREE.Texture | null>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(iconUrl, (loadedTexture) => {
      setTexture(loadedTexture)
      textureRef.current = loadedTexture
    })
  }, [iconUrl])

  return (
    <mesh ref={meshRef} position={position}>
      {texture && (
        <planeGeometry args={[0.6, 0.6]} />
      )}
      {texture && (
        <meshBasicMaterial map={texture} transparent={true} />
      )}
      {!texture && (
        <>
          <planeGeometry args={[0.6, 0.6]} />
          <meshBasicMaterial color="#4f46e5" />
        </>
      )}
    </mesh>
  )
}

function SphereWithIcons({ techStack }: { techStack: Array<{ name: string; url: string }> }) {
  const sphereRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)

  const positions = generateSpherePositions(techStack.length)

  useFrame(() => {
    if (sphereRef.current) {
      if (!isHovered) {
        sphereRef.current.rotation.x += 0.0005
        sphereRef.current.rotation.y += 0.001
      }
    }
  })

  return (
    <group ref={sphereRef} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)}>
      <Sphere args={[3, 32, 32]}>
        <meshStandardMaterial
          color="#1f2937"
          emissive="#374151"
          emissiveIntensity={0.5}
          wireframe={false}
          transparent={true}
          opacity={0.3}
        />
      </Sphere>

      {techStack.map((tech, idx) => (
        <TechIcon
          key={tech.name}
          position={positions[idx]}
          iconUrl={tech.url}
          techName={tech.name}
        />
      ))}
    </group>
  )
}

function generateSpherePositions(count: number): [number, number, number][] {
  const positions: [number, number, number][] = []
  const radius = 3.5

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count)
    const theta = Math.sqrt(count * Math.PI) * phi

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    positions.push([x, y, z])
  }

  return positions
}

interface TechSphereProps {
  technologies: string[]
}

export default function TechSphere({ technologies }: TechSphereProps) {
  const techStack = getTechStackIcons(technologies)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen max-h-[600px] flex flex-col items-center justify-center py-12"
    >
      <h2 className="text-4xl font-bold mb-2 gradient-text text-center">
        Tech Stack
      </h2>
      <p className="text-slate-400 text-center mb-8 max-w-2xl">
        Technologies I work with, visualized in an interactive sphere. Hover to pause the rotation.
      </p>

      <div className="w-full h-[500px] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl overflow-hidden border border-neon-blue/20 backdrop-blur-sm">
        {isVisible && (
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <SphereWithIcons techStack={techStack} />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={2}
            />
          </Canvas>
        )}
      </div>

      <div className="mt-8 text-center text-slate-400 text-sm">
        <p>🖱️ Drag to rotate • 🔍 Scroll to zoom</p>
      </div>
    </motion.div>
  )
}
