import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from './MagneticButton'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email', color: 'hover:text-neon-blue' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative border-t border-neon-blue/20 bg-gradient-to-b from-dark-card/30 to-dark-bg backdrop-blur-md py-16 mt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.h3 
              className="text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Om Shrikhande
            </motion.h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Crafting exceptional digital experiences with passion, precision, and cutting-edge technology. 
              Let's build something amazing together.
            </p>
            <div className="flex items-center gap-2 text-slate-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-neon-blue mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-neon-blue transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-neon-blue mb-6">Connect</h4>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3 mb-6"
            >
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-3 rounded-xl glass-hover text-slate-400 ${link.color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                )
              })}
            </motion.div>
            
            <MagneticButton
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 glass-hover rounded-xl text-slate-400 hover:text-neon-blue transition-all"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span>Back to top</span>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-neon-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400"
        >
          <div className="flex items-center gap-4">
            <p>© 2024 Om Shrikhande. All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-slate-600" />
            <p className="text-sm">Version 2.0</p>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <span>Built with</span>
            <div className="flex items-center gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion'].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="px-2 py-1 bg-neon-blue/10 text-neon-cyan text-xs rounded border border-neon-blue/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
