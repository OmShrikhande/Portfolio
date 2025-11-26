import { motion } from 'framer-motion'

const shapes = [
  { size: 'w-4 h-4', delay: 0, duration: 8 },
  { size: 'w-6 h-6', delay: 2, duration: 12 },
  { size: 'w-3 h-3', delay: 4, duration: 10 },
  { size: 'w-5 h-5', delay: 1, duration: 15 },
  { size: 'w-2 h-2', delay: 3, duration: 9 },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-sm`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-neon-blue/5 to-transparent blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple/5 to-transparent blur-3xl"
        style={{ right: '10%', bottom: '20%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}