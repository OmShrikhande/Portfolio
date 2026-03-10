import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ExternalLink, Github, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import AnimatedText from '@components/AnimatedText'
import ParallaxSection from '@components/ParallaxSection'
import MagneticButton from '@components/MagneticButton'
import FloatingElements from '@components/FloatingElements'
import TechSphere from '@components/TechSphere'

function Model() {
  const { scene } = useGLTF('/myTmodel.glb')
  const groupRef = useRef(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      groupRef.current.position.y = -7.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[2, -7.5, 2]} rotation={[0, -0.3, 0]}>
      <primitive object={scene} scale={5} />
    </group>
  )
}

function ModelScene() {
  return (
    <>
      <Suspense fallback={null}>
        <Float
          speed={1}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <Model />
        </Float>
        <Environment 
          preset="city"
          background={false}
          blur={0.8}
        />
      </Suspense>
      
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight 
        position={[10, 15, 8]} 
        intensity={1.5}
        color="#ffffff"
        castShadow
      />
      <directionalLight 
        position={[-10, -5, -8]} 
        intensity={0.4}
        color="#a0d8ff"
      />
      
      <pointLight position={[15, 10, 5]} intensity={0.6} color="#ff6ec7" distance={100} />
      <pointLight position={[-15, 10, -5]} intensity={0.6} color="#00ffff" distance={100} />
      
      <OrbitControls 
        autoRotate={false}
        enableZoom={true}
        enablePan={true}
        minDistance={3}
        maxDistance={10}
      />
    </>
  )
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const featuredProjects = [
    {
      id: 1,
      title: 'Kalasnikavo',
      description: 'Dual Biometric Recognition System combining facial and fingerprint analysis for robust security.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      tech: ['Python', 'Flask', 'React', 'OpenCV'],
      github: 'https://github.com/OmShrikhande/KALASNIKAVO',
      live: 'https://github.com/OmShrikhande/KALASNIKAVO',
      featured: true,
    },
    {
      id: 2,
      title: 'Bhav App',
      description: 'Real-time bullion trading platform featuring live price updates and historical data.',
      image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=400&h=300&fit=crop',
      tech: ['TypeScript', 'React', 'Tailwind', 'WebSocket'],
      github: 'https://github.com/OmShrikhande/BHAV-APP',
      live: 'https://github.com/OmShrikhande/BHAV-APP',
      featured: true,
    },
    {
      id: 3,
      title: 'Viscous',
      description: 'Feature-rich bus tracking application with real-time location and interactive maps.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
      tech: ['React Native', 'Expo', 'Google Maps', 'Firebase'],
      github: 'https://github.com/OmShrikhande/VISCOUS',
      live: 'https://github.com/OmShrikhande/VISCOUS',
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen pt-20 relative">
      <FloatingElements />
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[calc(100vh-80px)] overflow-hidden"
      >
        <div className="absolute inset-1">
          <Canvas 
            camera={{ position: [0, 0, 8], fov: 50 }}
            dpr={[1, 2]}
            performance={{ current: 1 }}
          >
            <ModelScene />
          </Canvas>

        </div>

        <motion.div 
          className="container mx-auto px-4 py-20 md:py-32 min-h-[calc(100vh-80px)] flex flex-col justify-center relative z-10"
          style={{ y: y1, opacity }}
        >
          <div className="grid grid-cols-1 gap-12 items-center max-w-4xl">
            <div>
              <div className="mb-6">
                <motion.div 
                  variants={itemVariants} 
                  initial="hidden" 
                  animate="visible"
                  className="overflow-hidden"
                >
                  <span className="text-neon-cyan text-lg font-mono block">
                    <AnimatedText text="Hi, my name is" delay={500} />
                  </span>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight">
                  <span className="glitch-text gradient-text" data-text="Om Shrikhande">
                    <AnimatedText 
                      text="Om Shrikhande" 
                      delay={1500} 
                      speed={100}
                    />
                  </span>
                  <span className="gradient-text animate-pulse">.</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-400 mb-8 leading-relaxed">
                  <AnimatedText 
                    text="I craft exceptional digital experiences that blend creativity with cutting-edge technology." 
                    delay={3000} 
                    speed={50}
                    showCursor={false}
                  />
                </h2>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                initial="hidden" 
                animate="visible"
                transition={{ delay: 5 }}
              >
                <p className="text-slate-400 text-lg max-w-3xl mb-12 leading-relaxed">
                  I'm a passionate full-stack developer and UI/UX designer with 5+ years of experience building 
                  scalable web applications. I specialize in React, Node.js, and modern cloud technologies, 
                  creating solutions that drive business growth and user engagement.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                initial="hidden" 
                animate="visible"
                transition={{ delay: 5.5 }}
                className="flex flex-wrap gap-4 mb-20"
              >
                <Link to="/projects">
                  <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-white hover:shadow-glow-xl transition-all duration-300 flex items-center gap-2">
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </Link>

                <Link to="/contact">
                  <MagneticButton className="px-8 py-4 border-2 border-neon-blue rounded-xl font-semibold text-neon-blue hover:bg-neon-blue/10 hover:shadow-glow transition-all duration-300 backdrop-blur-sm">
                    Get In Touch
                  </MagneticButton>
                </Link>

                <a href="/CV curicullum vite.pdf" download>
                  <MagneticButton className="group px-8 py-4 glass-hover rounded-xl font-semibold text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Resume</span>
                  </MagneticButton>
                </a>
              </motion.div>

              {/* Tech Stack Preview */}
              <motion.div 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 6 }}
                className="mb-20"
              >
                <p className="text-slate-500 text-sm mb-4 font-mono">Technologies I work with:</p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 6.2 + idx * 0.1 }}
                      className="px-4 py-2 glass rounded-lg text-sm text-neon-cyan border border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-glow transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="flex justify-center mt-10"
            style={{ y: y2 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer group"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ChevronDown className="text-neon-cyan group-hover:text-neon-blue transition-colors" size={40} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <ParallaxSection speed={0.3} className="py-20">
        <section className="container mx-auto px-4">
          <TechSphere technologies={['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Redis', 'WebRTC', 'TensorFlow', 'Flask']} />
        </section>
      </ParallaxSection>

      <ParallaxSection speed={0.3} className="py-20">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                className="text-slate-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <motion.div 
                  key={project.id} 
                  className="group"
                  initial={{ opacity: 0, y: 80, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="glass-hover rounded-2xl overflow-hidden hover-lift relative">
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-bold text-white shadow-glow">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="relative overflow-hidden h-64 bg-gradient-to-br from-dark-bg to-dark-card">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 glass rounded-xl hover:bg-neon-blue/20 transition-all backdrop-blur-md"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 glass rounded-xl hover:bg-neon-purple/20 transition-all backdrop-blur-md"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 + techIdx * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-cyan text-sm rounded-full border border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-glow transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/projects">
                  <MagneticButton className="group px-10 py-4 border-2 border-neon-blue rounded-xl font-semibold text-neon-blue hover:bg-neon-blue/10 hover:shadow-glow-lg transition-all duration-300 backdrop-blur-sm flex items-center gap-3 mx-auto">
                    <span>View All Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </ParallaxSection>
      
      {/* Skills Preview Section */}
      <ParallaxSection speed={0.2} className="py-20">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-12 gradient-text">What I Do Best</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Frontend Development', desc: 'React, TypeScript, Next.js', icon: '🎨' },
                { title: 'Backend Development', desc: 'Node.js, Python, Databases', icon: '⚙️' },
                { title: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD', icon: '☁️' }
              ].map((skill, idx) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-hover p-8 rounded-2xl hover-lift"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                  <p className="text-slate-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </ParallaxSection>
    </div>
  )
}
