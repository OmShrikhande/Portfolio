import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Twitter, MapPin, Phone, Clock, CheckCircle } from 'lucide-react'
import ParallaxSection from '@components/ParallaxSection'
import MagneticButton from '@components/MagneticButton'

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    setErrors({})

    // Simulate API call
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
    { icon: Mail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com', color: 'from-neon-blue to-neon-cyan' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/alexjohnson', href: '#', color: 'from-neon-purple to-neon-pink' },
    { icon: Github, label: 'GitHub', value: '@alexjohnson', href: '#', color: 'from-neon-green to-neon-yellow' },
    { icon: Twitter, label: 'Twitter', value: '@alexjohnson', href: '#', color: 'from-neon-orange to-neon-pink' },
  ]

  const quickInfo = [
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Clock, label: 'Timezone', value: 'PST (UTC-8)' },
  ]

  return (
    <div ref={containerRef} className="min-h-screen pt-20 pb-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.2}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20 text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              creative opportunities, or just have a friendly chat about technology.
            </motion.p>
          </motion.div>
        </ParallaxSection>

        {/* Quick Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {quickInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.label}
                variants={itemVariants}
                className="glass-hover p-6 rounded-2xl text-center hover-lift group"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-neon-blue group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">{info.label}</h3>
                <p className="text-slate-400 text-sm">{info.value}</p>
              </motion.div>
            )
          })}
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
              className="glass-hover rounded-2xl p-8 hover-lift"
              style={{ y }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-neon-blue flex items-center gap-2">
                      Name
                      {formData.name && !errors.name && <CheckCircle className="w-4 h-4 text-neon-green" />}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-4 bg-dark-bg border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name ? 'border-red-500 focus:border-red-400' : 'border-dark-border focus:border-neon-blue focus:shadow-glow'
                      }`}
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="text-sm font-semibold text-neon-blue flex items-center gap-2">
                      Email
                      {formData.email && !errors.email && <CheckCircle className="w-4 h-4 text-neon-green" />}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-4 bg-dark-bg border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email ? 'border-red-500 focus:border-red-400' : 'border-dark-border focus:border-neon-blue focus:shadow-glow'
                      }`}
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-neon-blue flex items-center gap-2">
                    Subject
                    {formData.subject && !errors.subject && <CheckCircle className="w-4 h-4 text-neon-green" />}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`w-full px-4 py-4 bg-dark-bg border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject ? 'border-red-500 focus:border-red-400' : 'border-dark-border focus:border-neon-blue focus:shadow-glow'
                    }`}
                  />
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label className="text-sm font-semibold text-neon-blue flex items-center gap-2">
                    Message
                    {formData.message && !errors.message && <CheckCircle className="w-4 h-4 text-neon-green" />}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    rows={6}
                    className={`w-full px-4 py-4 bg-dark-bg border rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-400' : 'border-dark-border focus:border-neon-blue focus:shadow-glow'
                    }`}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                  <p className="text-slate-500 text-xs">
                    {formData.message.length}/500 characters
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <MagneticButton
                    onClick={handleSubmit}
                    disabled={loading}
                    className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-white hover:shadow-glow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </MagneticButton>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2 text-neon-green font-semibold"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully!</span>
                    </motion.div>
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
