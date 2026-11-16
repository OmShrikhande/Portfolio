import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github, Download, ArrowRight, ShieldCheck, Cpu, Code2, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import WelcomingAvatar from '@components/WelcomingAvatar'
import HumanizedTyping from '@components/HumanizedTyping'
import TechSphere from '@components/TechSphere'
import { useSeason } from '@context/SeasonContext'

export default function Home() {
  const { theme } = useSeason()

  const featuredProjects = [
    {
      id: 1,
      title: 'Kalasnikavo',
      tagline: 'Multi-Modal Biometrics',
      description: 'Dual Biometric Recognition System combining facial feature extraction and fingerprint analysis for high-assurance enterprise security.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tech: ['Python', 'Flask', 'React', 'OpenCV', 'TensorFlow'],
      github: 'https://github.com/OmShrikhande/kalasnikavo',
      live: 'https://github.com/OmShrikhande/kalasnikavo',
      featured: true,
    },
    {
      id: 2,
      title: 'Baba Beri App',
      tagline: 'E-Commerce & Marketplace',
      description: 'Full-stack community marketplace and e-commerce platform with dynamic catalog, responsive cart mechanics, and payment gateway.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?w=600&h=400&fit=crop',
      tech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/OmShrikhande/BabaBeri',
      live: 'https://github.com/OmShrikhande/BabaBeri',
      featured: true,
    },
    {
      id: 3,
      title: 'Zdron & Headless MT5',
      tagline: 'Algorithmic Trading Bots',
      description: 'Zero Drawdown algorithmic trading bot, headless MetaTrader 5 execution engine, and Forex currency pair correlation analysis.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      tech: ['Python', 'MQL5', 'MetaTrader 5', 'Telegram API'],
      github: 'https://github.com/OmShrikhande/zdron',
      live: 'https://github.com/OmShrikhande/headless-MT5',
      featured: true,
    },
    {
      id: 4,
      title: 'Capita Prime HMS & Gym',
      tagline: 'Enterprise Management',
      description: 'Comprehensive facility management system handling membership subscriptions, automated billing cycles, scheduling, and attendance tracking.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      tech: ['JavaScript', 'Node.js', 'Express', 'SQL', 'Tailwind'],
      github: 'https://github.com/OmShrikhande/gym-management-system',
      live: 'https://github.com/OmShrikhande/gym-management-system',
      featured: true,
    },
    {
      id: 5,
      title: 'ProxStream & LiveKit VPS',
      tagline: 'Real-Time WebRTC Media',
      description: 'Low-latency live video streaming architecture and automated VPS media server orchestration using LiveKit WebRTC and Docker clusters.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      tech: ['LiveKit', 'WebRTC', 'JavaScript', 'Linux', 'Docker'],
      github: 'https://github.com/OmShrikhande/livekit--Vps-Deployment',
      live: 'https://github.com/OmShrikhande/livekit--Vps-Deployment',
      featured: true,
    },
    {
      id: 6,
      title: 'Eva Dropping',
      tagline: 'Encrypted P2P Transfer',
      description: 'Lightweight zero-cloud local wireless file transfer system between laptop and mobile over the same Wi-Fi network.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=600&h=400&fit=crop',
      tech: ['Node.js', 'Express', 'HTML5', 'WebSockets'],
      github: 'https://github.com/OmShrikhande/eva-droping',
      live: 'https://github.com/OmShrikhande/eva-droping',
      featured: true,
    },
  ]

  const keyStats = [
    { label: 'Public Repositories', value: '52+' },
    { label: 'Engineering Focus', value: 'Full-Stack & Cloud' },
    { label: 'Biometrics & AI', value: 'Computer Vision' },
    { label: 'Architecture', value: 'Microservices & Real-Time' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-120px)] flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Seasonal & Role Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 border border-white/10 text-slate-300 backdrop-blur-md">
                <span>{theme.icon}</span>
                <span className="font-mono text-slate-300">{theme.badgeText}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-950/60 border border-sky-800/40 text-sky-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Architect & Builder
              </span>
            </div>

            {/* Humanized Heading & Typing Cadence */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-2">
                Full-Stack Software Engineer
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-3">
                Om Shrikhande
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 min-h-[44px] flex items-center">
                <HumanizedTyping
                  phrases={[
                    "Building scalable web applications.",
                    "Architecting real-time trading engines.",
                    "Researching biometric recognition & AI.",
                    "Crafting high-throughput cloud backends.",
                    "Designing intuitive user experiences.",
                  ]}
                  className="gradient-text-accent font-sans"
                  typingSpeed={55}
                  pauseDuration={2400}
                />
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              Specialized in building robust web applications, biometric security systems, and high-throughput real-time architectures with React, Node.js, Python, and cloud infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-slate-100 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                Get In Touch
              </Link>

              <a
                href="/CV curicullum vite.pdf"
                download
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {keyStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero: Free-Sized Transparent Welcoming Waving Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <WelcomingAvatar />
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 mb-4">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
            className="text-slate-500 hover:text-slate-300 transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Scroll to featured projects"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Tech Stack Interactive Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <TechSphere
          technologies={[
            'React',
            'TypeScript',
            'Node.js',
            'Python',
            'AWS',
            'Docker',
            'MongoDB',
            'PostgreSQL',
            'Redis',
            'WebRTC',
            'TensorFlow',
            'Flask',
          ]}
        />
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-2">
              Engineered Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white group"
          >
            <span>View All Repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                      {project.tagline}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-white/10"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-white/10"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="container mx-auto px-4 sm:px-6 py-16">
        <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-2">
              Capabilities
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Full-Lifecycle Engineering Standards
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every system is engineered for resilience, clean maintainability, and measurable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800/40 flex items-center justify-center text-sky-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Frontend Craft</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Responsive architectures with React 19, TypeScript, and modern state paradigms delivering sub-second experiences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Backend & Real-Time</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Node.js & Python REST/WebSocket APIs, distributed databases, caching with Redis, and biometrics processing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Cloud & Security</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Containerized Docker deployments, VPS orchestration, LiveKit WebRTC clustering, and secure data access controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 mb-6">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive CLI available</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Prefer a developer console?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mb-8">
            Explore my experience, projects, and trigger system commands directly inside the interactive terminal emulator.
          </p>
          <Link
            to="/terminal"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-sm font-mono text-sky-400 hover:text-white transition-colors"
          >
            Launch Terminal &gt;_
          </Link>
        </div>
      </section>
    </div>
  )
}
