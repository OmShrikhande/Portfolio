import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 25 + 10
      })
    }, 70)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#080d1a] flex items-center justify-center pointer-events-auto"
        >
          <div className="text-center flex flex-col items-center">
            {/* Monogram / Avatar Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20 mb-6 p-0.5 shadow-2xl bg-slate-900"
            >
              <img
                src="/images/om-avatar.png"
                alt="Om Shrikhande"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-lg font-bold tracking-tight text-white font-sans">
                Om Shrikhande
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Initializing System Environment...
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-52 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-slate-100"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <p className="text-slate-500 font-mono text-[11px] mt-3">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
