import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, Briefcase, Mail, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollProgress from '@components/ScrollProgress'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'glass backdrop-blur-strong py-3 shadow-2xl border-b border-neon-blue/20' 
            : 'py-6'
        }`}
      >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" className="text-2xl font-bold gradient-text font-mono relative group flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="relative z-10">{'< OS />'}</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </motion.div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-blue p-2 rounded-lg hover:bg-neon-blue/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <ul className="hidden md:flex gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.li 
                key={item.path} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                    isActive(item.path)
                      ? 'text-neon-blue bg-neon-blue/10 shadow-glow'
                      : 'text-slate-300 hover:text-neon-blue hover:bg-neon-blue/5'
                  }`}
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl border border-neon-blue/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            )
          })}
        </ul>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="absolute top-full left-0 right-0 glass backdrop-blur-strong border-t border-neon-blue/20 flex flex-col gap-2 p-6 md:hidden shadow-2xl"
            >
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-neon-blue bg-neon-blue/10 shadow-glow'
                          : 'text-slate-300 hover:text-neon-blue hover:bg-neon-blue/5'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  )
}
