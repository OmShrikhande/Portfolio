import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/OmShrikhande', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/om-shrikhande-37108926a', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/OmShrikhande', label: 'Twitter' },
    { icon: Mail, href: 'mailto:omshrikhande@gmail.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl py-14 mt-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <img
                  src="/images/om-avatar.png"
                  alt="Om Shrikhande"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Om Shrikhande
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-4">
              Full-Stack Software Engineer & System Architect specializing in high-performance web applications, biometric recognition systems, and real-time cloud architectures.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Designed & Built with bespoke craft. No generic AI templates.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Profile', path: '/about' },
                { name: 'Featured Projects', path: '/projects' },
                { name: 'Developer Terminal', path: '/terminal' },
                { name: 'Contact & Hire', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 font-semibold mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Om Shrikhande. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Nagpur, India</span>
            <span>•</span>
            <span className="text-emerald-400">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
