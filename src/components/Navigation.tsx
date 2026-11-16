import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Briefcase, Mail, Terminal, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollProgress from '@components/ScrollProgress'
import SeasonSwitcher from '@components/SeasonSwitcher'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Terminal', path: '/terminal', icon: Terminal },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-xl py-3 border-b border-white/10 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo / Brand with Avatar */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Om Shrikhande - Home"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 group-hover:border-sky-400/60 transition-colors shadow-sm">
              <img
                src="/images/om-avatar.png"
                alt="Om Shrikhande"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-tight text-sm font-sans group-hover:text-white transition-colors">
                Om Shrikhande
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                Full-Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items & Season Controls */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 bg-slate-900/60 backdrop-blur-md p-1 rounded-full border border-white/10">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        active
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-white/15 rounded-full border border-white/20"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon size={14} className="relative z-10" />
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Resume Button */}
            <a
              href="/CV curicullum vite.pdf"
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <FileText size={13} />
              <span>Resume</span>
            </a>

            {/* Seasonal Atmosphere Switcher */}
            <SeasonSwitcher />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <SeasonSwitcher />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-6"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.path)
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          active
                            ? 'bg-white/10 text-white font-semibold border border-white/15'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
                <li className="pt-2 border-t border-white/10">
                  <a
                    href="/CV curicullum vite.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-colors"
                  >
                    <FileText size={16} />
                    <span>Download CV / Resume</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
