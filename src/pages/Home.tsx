import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function Model() {
  const { scene } = useGLTF('/myTmodel.glb')
  const groupRef = useRef(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.
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

  const featuredProjects = [
    {
      id: 1,
      title: 'Project Name',
      description: 'Brief description of your project',
      image: 'https://via.placeholder.com/400x300',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Another Project',
      description: 'Another amazing project description',
      image: 'https://via.placeholder.com/400x300',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[calc(100vh-80px)]"
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

        <div className="container mx-auto px-4 py-20 md:py-32 min-h-[calc(100vh-80px)] flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center max-w-2xl">
            <div>
              <div className="mb-6">
                <motion.div variants={itemVariants} initial="hidden" animate="visible">
                  <span className="text-neon-cyan text-lg font-mono">Hi, my name is</span>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  Your Name<span className="gradient-text">.</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
                  I build amazing digital experiences.
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in building modern web applications. 
                  I specialize in creating responsive, high-performance solutions that solve real-world problems.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <div className="flex gap-4 mb-20">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-glow transition-all">
                      View My Work
                    </button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="px-8 py-3 border border-neon-blue rounded-lg font-semibold text-neon-blue hover:bg-neon-blue/10 transition-all">
                      Get In Touch
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>


          </div>

          <div className="flex justify-center mt-10">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="text-neon-cyan" size={32} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 gradient-text">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <div className="glass rounded-lg overflow-hidden hover-lift">
                    <div className="relative overflow-hidden h-64 bg-dark-bg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            className="p-2 bg-neon-blue/20 rounded-lg hover:bg-neon-blue/40 transition"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.live}
                            className="p-2 bg-neon-blue/20 rounded-lg hover:bg-neon-blue/40 transition"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-slate-400 mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/projects">
                <button className="px-8 py-3 border border-neon-blue rounded-lg font-semibold text-neon-blue hover:bg-neon-blue/10 transition-all inline-block">
                  View All Projects
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
