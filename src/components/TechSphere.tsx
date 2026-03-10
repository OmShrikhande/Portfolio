import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getTechStackIcons } from '@utils/getIconUrl'

interface TechCardProps {
  name: string
  url: string
  index: number
}

function TechCard({ name, url, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 212, 255, 0.1), 0 10px 10px -5px rgba(0, 212, 255, 0.04)"
      }}
      className="group relative bg-dark-card/40 backdrop-blur-md border border-neon-blue/20 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-neon-blue/50 transition-all duration-300"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.img 
          src={url} 
          alt={name}
          className="w-10 h-10 object-contain z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
      
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </motion.div>
  )
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
      className="w-full py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Tech Stack
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          The technologies, frameworks, and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techStack.map((tech, idx) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            url={tech.url}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  )
}
