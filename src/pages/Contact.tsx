import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: '#' },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: '#' },
    { icon: Twitter, label: 'Twitter', value: '@yourhandle', href: '#' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl"
          >
            Have a question or want to work together? I'd love to hear from you. 
            Feel free to reach out and I'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-neon-blue">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-neon-blue">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-neon-blue">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-neon-blue">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition resize-none"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-glow transition-all disabled:opacity-50 flex items-center gap-2"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {!loading && <Send size={20} />}
                  </motion.button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-neon-blue font-semibold"
                    >
                      Message sent successfully! 🎉
                    </motion.p>
                  )}
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-8">Connect With Me</h2>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass rounded-lg p-6 block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 group-hover:from-neon-blue/40 group-hover:to-neon-purple/40 transition">
                      <Icon className="text-neon-blue" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                      <p className="text-slate-400 text-sm group-hover:text-neon-blue transition">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            <motion.div
              variants={itemVariants}
              className="glass rounded-lg p-6 mt-8"
            >
              <h3 className="font-semibold text-white mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>📍 Based in Your City</li>
                <li>🕒 Available for Freelance</li>
                <li>💬 Response within 24 hours</li>
                <li>🌍 Open to Remote Work</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
