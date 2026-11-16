import React, { useRef, useMemo, Suspense, Component, ErrorInfo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, useTexture, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { useSeason } from '@context/SeasonContext'
import { motion } from 'framer-motion'
import { Sparkles, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

// Error boundary to gracefully catch WebGL context issues
interface ErrorBoundaryProps {
  fallback: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// 3D Avatar Card Mesh with 3D Instagram/Snapchat Avatar Texture
function AvatarCard({ accentColor }: { accentColor: string }) {
  const meshRef = useRef<THREE.Group>(null)
  const texture = useTexture('/images/om-avatar.png')

  // Optimize texture parameters
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter

  useFrame((state) => {
    if (!meshRef.current) return
    const { x, y } = state.pointer
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.45, 0.08)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -y * 0.35, 0.08)
  })

  return (
    <group ref={meshRef}>
      {/* Outer Back Frame with RoundedBox */}
      <RoundedBox args={[3.1, 3.7, 0.12]} radius={0.12} smoothness={4} position={[0, 0, -0.02]}>
        <meshStandardMaterial
          color="#0b1120"
          roughness={0.3}
          metalness={0.7}
        />
      </RoundedBox>

      {/* Rim Accent Glow Ring */}
      <RoundedBox args={[3.04, 3.64, 0.14]} radius={0.11} smoothness={4} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </RoundedBox>

      {/* Main Avatar Character Surface */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[2.92, 3.52]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  )
}

// 3D Orbiting Particle Ring
function OrbitingParticles({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 160

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2
      const radius = 2.3 + Math.random() * 0.8
      pos[i * 3] = Math.cos(theta) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.8
      pos[i * 3 + 2] = Math.sin(theta) * radius
    }
    return [pos]
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.22
    pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12) * 0.08
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color={color}
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Orbiting 3D Nodes
function OrbitingNodes({ accentColor }: { accentColor: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = -state.clock.elapsedTime * 0.28
  })

  const nodes = [
    { angle: 0, distance: 2.7, y: 0.6 },
    { angle: (Math.PI * 2) / 4, distance: 2.6, y: -0.8 },
    { angle: (Math.PI * 4) / 4, distance: 2.8, y: 0.9 },
    { angle: (Math.PI * 6) / 4, distance: 2.5, y: -0.5 },
  ]

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group
          key={i}
          position={[
            Math.cos(node.angle) * node.distance,
            node.y,
            Math.sin(node.angle) * node.distance,
          ]}
        >
          <mesh>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial
              color={accentColor}
              emissive={accentColor}
              emissiveIntensity={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// 3D Scene Wrapper
function Scene({ accentColor }: { accentColor: string }) {
  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 8, 4]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-4, 2, 3]} intensity={1.2} color={accentColor} />
      <pointLight position={[3, -3, 2]} intensity={0.9} color="#ffffff" />

      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.35}>
        <AvatarCard accentColor={accentColor} />
        <OrbitingParticles color={accentColor} />
        <OrbitingNodes accentColor={accentColor} />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.3}
        maxAzimuthAngle={Math.PI / 4.5}
        minAzimuthAngle={-Math.PI / 4.5}
      />
    </>
  )
}

// High-fidelity fallback / poster
function AvatarFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900/90 p-2">
        <img
          src="/images/om-avatar.png"
          alt="Om Shrikhande - 3D Digital Avatar"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}

export default function HeroAvatar3D() {
  const { theme } = useSeason()

  return (
    <div className="relative w-full max-w-[440px] aspect-[4/5] mx-auto flex items-center justify-center select-none">
      {/* Atmospheric Background Ambient Glow */}
      <div
        className="absolute inset-4 rounded-full blur-3xl opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* 3D WebGL Canvas wrapped in Error Boundary */}
      <div className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing">
        <WebGLErrorBoundary fallback={<AvatarFallback />}>
          <Suspense fallback={<AvatarFallback />}>
            <Canvas
              camera={{ position: [0, 0, 5.2], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            >
              <Scene accentColor={theme.accentColor} />
            </Canvas>
          </Suspense>
        </WebGLErrorBoundary>
      </div>

      {/* Floating Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-4 sm:bottom-2 left-1/2 transform -translate-x-1/2 z-20 w-[92%] max-w-[340px]"
      >
        <div className="px-4 py-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <p className="font-semibold text-white tracking-wide text-[11px]">Om Shrikhande</p>
              <p className="text-[10px] text-slate-400">3D Digital Character & System Architect</p>
            </div>
          </div>
          <Link
            to="/terminal"
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Open Interactive Terminal"
            aria-label="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

      {/* Interactive 3D Badge */}
      <div className="absolute top-2 right-2 z-20 pointer-events-none hidden sm:flex items-center gap-1.5 text-[10px] text-slate-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
        <Sparkles className="w-3 h-3 text-sky-400" />
        <span className="font-mono">3D Avatar Card</span>
      </div>
    </div>
  )
}
