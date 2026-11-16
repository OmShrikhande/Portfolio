import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSeason, Season, SEASONS } from '@context/SeasonContext'
import { Sparkles, ChevronRight, Check } from 'lucide-react'

export default function SeasonSwitcher() {
  const { season, theme, isAuto, setSeason, toggleAuto } = useSeason()
  const [isOpen, setIsOpen] = useState(false)

  const seasonsList: Season[] = ['winter', 'autumn', 'spring', 'summer']

  return (
    <div className="relative">
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-md text-xs font-medium text-slate-200 transition-all duration-300 shadow-sm hover:border-white/20 group"
        title="Change Season Atmosphere"
        aria-label="Change Season Atmosphere"
      >
        <span className="text-sm">{theme.icon}</span>
        <span className="hidden sm:inline font-mono">{theme.name}</span>
        {isAuto && (
          <span className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            auto
          </span>
        )}
        <Sparkles className="w-3 h-3 text-slate-400 group-hover:text-sky-300 transition-colors" />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <div
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 p-3 rounded-2xl bg-slate-900/95 border border-white/10 shadow-2xl backdrop-blur-xl z-50 text-slate-200"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
                <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                  Seasonal Atmosphere
                </span>
                <button
                  onClick={toggleAuto}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors ${
                    isAuto
                      ? 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {isAuto ? '● Auto: ON' : '○ Auto: OFF'}
                </button>
              </div>

              <div className="space-y-1">
                {seasonsList.map((s) => {
                  const sTheme = SEASONS[s]
                  const isCurrent = season === s
                  return (
                    <button
                      key={s}
                      onClick={() => {
                        setSeason(s)
                        setIsOpen(false)
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-all duration-200 ${
                        isCurrent
                          ? 'bg-white/10 text-white font-medium border border-white/15'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{sTheme.icon}</span>
                        <div>
                          <p className="font-medium text-slate-100">{sTheme.name}</p>
                          <p className="text-[10px] text-slate-400">{sTheme.particleName}</p>
                        </div>
                      </div>
                      {isCurrent ? (
                        <Check className="w-3.5 h-3.5 text-sky-400" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-slate-500" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/5 text-[10px] text-slate-400 text-center">
                Currently detecting season dynamically
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
