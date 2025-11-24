import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

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
      className="border-t border-dark-border bg-dark-card/50 backdrop-blur-md py-12 mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Dev Portfolio</h3>
            <p className="text-slate-400">Building amazing digital experiences</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-neon-blue mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-neon-blue transition">Home</a></li>
              <li><a href="#about" className="hover:text-neon-blue transition">About</a></li>
              <li><a href="#projects" className="hover:text-neon-blue transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-neon-blue transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-neon-blue mb-4">Follow</h4>
            <motion.div
              variants={containerVariants}
              className="flex gap-4"
            >
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 rounded-full glass hover:bg-neon-blue/20 text-neon-blue hover:text-neon-cyan transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t border-dark-border pt-8 text-center text-slate-400"
        >
          <p>© 2024 Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & Built by <span className="text-neon-blue">You</span></p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
