import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Twitter, MapPin, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
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
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Valid email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
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

    try {
      const mailtoLink = `mailto:omshrikhande@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`
      window.location.href = mailtoLink
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch {
      setErrors({ submit: 'Unable to open email client. Please email directly to omshrikhande@gmail.com' })
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: 'omshrikhande@gmail.com',
      href: 'mailto:omshrikhande@gmail.com',
      desc: 'Typical response within 24 hours',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Network',
      value: 'om-shrikhande-37108926a',
      href: 'https://linkedin.com/in/om-shrikhande-37108926a',
      desc: 'Professional background & endorsements',
    },
    {
      icon: Github,
      label: 'GitHub Profile',
      value: 'OmShrikhande',
      href: 'https://github.com/OmShrikhande',
      desc: '52+ public repositories & code samples',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@OmShrikhande',
      href: 'https://twitter.com/OmShrikhande',
      desc: 'Tech commentary & engineering updates',
    },
  ]

  const quickMeta = [
    { icon: MapPin, label: 'Base Location', value: 'Nagpur, Maharashtra, India' },
    { icon: Phone, label: 'Direct Phone', value: '+91 7028165780' },
    { icon: Clock, label: 'Timezone', value: 'Indian Standard Time (UTC+5:30)' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-3">
            Initiate Contact
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Let's Start a Conversation.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you want to discuss a new software engineering venture, technical consulting, full-stack architecture, or career opportunities, I'd be glad to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 glass rounded-3xl p-8 sm:p-10 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the details below and your default mail client will prepare a structured message.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-6 rounded-2xl bg-emerald-950/80 border border-emerald-800/50 flex items-center gap-3 text-emerald-300 text-xs sm:text-sm"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Message prepared! Opening your mail client now.</span>
              </motion.div>
            )}

            {errors.submit && (
              <div className="p-4 mb-6 rounded-2xl bg-rose-950/80 border border-rose-800/50 text-rose-300 text-xs">
                {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-white/10 focus:border-sky-500'
                    }`}
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-sky-500'
                    }`}
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Engineering Collaboration / Role Discussion"
                  className={`w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-sky-500'
                  }`}
                />
                {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and tech stack requirements..."
                  className={`w-full px-4 py-3 bg-slate-900/80 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-rose-500' : 'border-white/10 focus:border-sky-500'
                  }`}
                />
                {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Preparing...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channels */}
            <div className="glass rounded-3xl p-8 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Channels</h3>
              {contactMethods.map((m, idx) => {
                const Icon = m.icon
                return (
                  <a
                    key={idx}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-white/15 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-sky-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {m.label}
                      </p>
                      <p className="text-xs text-slate-400 truncate font-mono">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {m.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                  </a>
                )
              })}
            </div>

            {/* Quick Metadata Card */}
            <div className="glass rounded-3xl p-6 border border-white/10 space-y-3 text-xs">
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-3">
                Operational Availability
              </h4>
              {quickMeta.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <Icon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <div>
                      <span className="text-slate-500 block text-[10px]">{item.label}</span>
                      <span className="font-medium text-slate-200">{item.value}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
