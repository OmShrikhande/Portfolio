import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getTechStackIcons } from '@utils/getIconUrl'

interface TechCardProps {
  name: string
  url: string
  index: number
}

function TechCard({ name, url, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="group relative bg-slate-900/60 backdrop-blur-md border border-white/10 p-3.5 sm:p-4 rounded-2xl flex flex-col items-center justify-center gap-2.5 hover:border-white/20 hover:bg-slate-800/80 transition-all duration-200"
    >
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
        <img
          src={url}
          alt={name}
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain z-10 transition-transform duration-200 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200 text-center font-mono">
        {name}
      </span>
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
    <div
      ref={containerRef}
      className="w-full pt-2 pb-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-1">
            Technology Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Toolchain & Languages
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          Frameworks, platforms, and databases employed across production services.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {techStack.map((tech, idx) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            url={tech.url}
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}
