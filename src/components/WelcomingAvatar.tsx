import React, { useState, useRef } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { useSeason } from '@context/SeasonContext'
import { Sparkles, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WelcomingAvatar() {
  const { theme } = useSeason()
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isWaving, setIsWaving] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Smooth mouse 3D perspective tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] mx-auto flex flex-col items-center justify-center select-none py-4"
      style={{ perspective: 1000 }}
    >
      {/* Soft Seasonal Ambient Halo behind character */}
      <div
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-35 transition-all duration-700 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(circle, ${theme.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Floating Welcoming Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        className="absolute -top-3 sm:top-0 right-4 sm:right-0 z-30 pointer-events-auto"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="px-3.5 py-1.5 rounded-2xl rounded-bl-sm bg-slate-900/90 backdrop-blur-xl border border-white/15 shadow-xl text-xs flex items-center gap-2 text-slate-100"
        >
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="text-base inline-block origin-bottom"
          >
            👋
          </motion.span>
          <span className="font-medium text-slate-200 text-[11px] sm:text-xs">
            Hi, welcome to my space!
          </span>
        </motion.div>
      </motion.div>

      {/* Free-Sized Transparent Avatar with 3D Parallax & Breathing Motion */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsWaving(!isWaving)}
        title="Click to interact with Om's Avatar"
      >
        {/* Transparent Character Image */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center">
          <motion.img
            src="/images/om-waving.gif"
            alt="Om Shrikhande - 3D Digital Avatar actively waving hello"
            loading="eager"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              // Graceful fallback to optimized avatar if needed
              ;(e.target as HTMLImageElement).src = '/images/om-waving-avatar-opt.png'
            }}
            className={`w-full h-auto max-h-[460px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ${
              imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          {/* Interactive Sparkle Particles Floating Around Avatar */}
          <motion.div
            className="absolute -top-2 left-6 text-sky-400 opacity-70"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-6 text-amber-300 opacity-60"
            animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Status Pill underneath character */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-2 z-20 w-[92%] max-w-[340px]"
      >
        <div className="px-4 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <p className="font-semibold text-white tracking-wide text-[11px]">
                Om Shrikhande
              </p>
              <p className="text-[10px] text-slate-400">
                Full-Stack Engineer & System Architect
              </p>
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
    </div>
  )
}
