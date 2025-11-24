import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-2xl font-bold gradient-text">
            {'< Dev />'}
          </Link>
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-blue"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.li key={item.path} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.path}
                className={`relative text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-neon-blue'
                    : 'text-slate-300 hover:text-neon-blue'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-card backdrop-blur-md border-t border-dark-border flex flex-col gap-4 p-6 md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-neon-blue'
                      : 'text-slate-300 hover:text-neon-blue'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  )
}
