import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Search, Star, ArrowRight } from 'lucide-react'
import { Project } from '@types/index'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Baba Beri App',
    description: 'Full-stack community marketplace and e-commerce platform with dynamic catalog, cart mechanics, and payment gateway.',
    longDescription: 'A modern, high-conversion e-commerce platform built for Baba Beri. Features reactive state management, product filtering, responsive cart flows, order tracking, and resilient backend database APIs.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/BabaBeri',
    liveLink: 'https://github.com/OmShrikhande/BabaBeri',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Capita Prime HMS & Gym System',
    description: 'Comprehensive enterprise hospital and gym management platform with automated billing, member lifecycle, and scheduling.',
    longDescription: 'The most comprehensive facility management system built to handle membership subscriptions, automated billing cycles, personal trainer booking, attendance check-ins, and analytics reporting.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['JavaScript', 'Node.js', 'Express', 'SQL', 'REST API', 'Tailwind'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/gym-management-system',
    liveLink: 'https://github.com/OmShrikhande/gym-management-system',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Zdron & Headless MT5 Trading Bots',
    description: 'Zero Drawdown algorithmic trading bot, headless MetaTrader 5 engine, and Forex currency pair correlation analysis.',
    longDescription: 'High-frequency algorithmic trading systems including zdron (Zero Drawdown Bot), headless-MT5 automated trade execution, and frx-corelation for real-time statistical currency strength and correlation modeling, integrated with Telegram alert webhooks.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'MQL5', 'MetaTrader 5', 'Telegram API', 'WebSockets'],
    category: 'other',
    github: 'https://github.com/OmShrikhande/zdron',
    liveLink: 'https://github.com/OmShrikhande/headless-MT5',
    featured: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Kalasnikavo',
    description: 'Dual Biometric Recognition Platform combining deep facial landmark recognition and fingerprint verification.',
    longDescription: 'A cutting-edge security architecture that combines multi-modal biometric authentication for high-security access verification. Built with Flask, React, and OpenCV.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'Flask', 'React', 'OpenCV', 'TensorFlow'],
    category: 'ai',
    github: 'https://github.com/OmShrikhande/kalasnikavo',
    liveLink: 'https://github.com/OmShrikhande/kalasnikavo',
    featured: true,
    order: 4,
  },
  {
    id: '5',
    title: 'Eva Dropping',
    description: 'Local file transfer architecture enabling zero-cloud, encrypted wireless transfers between PC and mobile devices.',
    longDescription: 'A lightweight, high-performance solution for wirelessly transferring files between your laptop and mobile devices over the same local network. Built entirely with Node.js, Express, and HTML5 WebSocket streams.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Node.js', 'Express', 'HTML5', 'WebSockets', 'File API'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/eva-droping',
    liveLink: 'https://github.com/OmShrikhande/eva-droping',
    featured: true,
    order: 5,
  },
  {
    id: '6',
    title: 'ProxStream & LiveKit VPS',
    description: 'Ultra-low latency live video streaming platform and automated WebRTC VPS infrastructure orchestration.',
    longDescription: 'A streamlined DevOps and real-time streaming solution for configuring, securing, and benchmarking LiveKit WebRTC media servers across bare-metal and cloud VPS clusters, powering high-throughput broadcasting.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['LiveKit', 'WebRTC', 'JavaScript', 'Linux', 'Docker'],
    category: 'other',
    github: 'https://github.com/OmShrikhande/livekit--Vps-Deployment',
    liveLink: 'https://github.com/OmShrikhande/livekit--Vps-Deployment',
    featured: true,
    order: 6,
  },
  {
    id: '7',
    title: 'E-Learning Application',
    description: 'Interactive online education platform featuring course modules, video lectures, student testing, and grading.',
    longDescription: 'Comprehensive educational management web portal supporting role-based access for students and instructors, interactive video course curriculum, real-time quizzes, grading metrics, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'Bootstrap'],
    category: 'web',
    github: 'https://github.com/OmShrikhande/Elearning-website-php',
    liveLink: 'https://github.com/OmShrikhande/Elearning-website-php',
    featured: false,
    order: 7,
  },
  {
    id: '8',
    title: 'Viscous',
    description: 'Real-time urban transit and school bus tracking system with live GPS telemetry, interactive map feeds, and arrival alerts.',
    longDescription: 'Feature-rich transit tracking application built with React Native and Flutter. Provides real-time bus location tracking, instant arrival notifications, interactive route maps, and a low-cognitive-load parent interface.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['React Native', 'Expo', 'Flutter', 'Google Maps API', 'Firebase'],
    category: 'mobile',
    github: 'https://github.com/OmShrikhande/viscous',
    liveLink: 'https://github.com/OmShrikhande/viscous_frontend',
    featured: false,
    order: 8,
  },
  {
    id: '9',
    title: 'Auto Reel Scroller',
    description: 'Android accessibility automation utility providing configurable touchless scrolling and custom speed curves.',
    longDescription: 'An Android application that provides automated hands-free scrolling functionality across multiple content applications using Android Accessibility Service with customizable gesture timing and speed curves.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Kotlin', 'Android SDK', 'Accessibility Service'],
    category: 'mobile',
    github: 'https://github.com/OmShrikhande/Auto-reel-Scroller',
    liveLink: 'https://github.com/OmShrikhande/Auto-reel-Scroller',
    featured: false,
    order: 9,
  },
  {
    id: '10',
    title: 'Bhav App',
    description: 'Real-time bullion and commodity trading platform with live WebSocket ticks, spread analysis, and charts.',
    longDescription: 'A comprehensive real-time bullion trading platform featuring live price feeds, historical market data analysis, spread calculation, and an ultra-low latency trading interface.',
    image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'WebSocket'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/Bhav-App',
    liveLink: 'https://github.com/OmShrikhande/Bhav-App',
    featured: false,
    order: 10,
  },
  {
    id: '11',
    title: 'Rizzer & Brit AI Assistant Bots',
    description: 'Conversational assistant and automated communication bots with NLP processing and messaging integration.',
    longDescription: 'Suite of AI conversational tools and automation bots (Rizzer, Brit, whatsapp-messaging) facilitating smart suggestions, automated notifications, and seamless chat workflows.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'JavaScript', 'Node.js', 'NLP', 'Automation API'],
    category: 'ai',
    github: 'https://github.com/OmShrikhande',
    liveLink: 'https://github.com/OmShrikhande',
    featured: false,
    order: 11,
  },
  {
    id: '12',
    title: 'NullTor',
    description: 'Encrypted LAN peer-to-peer shared notepad with zero-knowledge browser-side encryption.',
    longDescription: 'A secure shared notepad for multiple PCs on the same Wi-Fi / LAN. Text is encrypted in the browser before transmission, ensuring zero-knowledge relay by the lightweight host server.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['JavaScript', 'Web Cryptography API', 'Node.js', 'WebSockets'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/nulltor',
    liveLink: 'https://github.com/OmShrikhande/nulltor',
    featured: false,
    order: 12,
  },
  {
    id: '13',
    title: 'Whole DB Facial Recognition',
    description: 'High-speed biometric identification system querying live webcam captures against massive profile databases.',
    longDescription: 'A robust computer vision platform built with Flask and OpenCV, enabling real-time face detection, embedding generation, and high-confidence 1:N verification.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'Flask', 'JavaScript', 'OpenCV'],
    category: 'ai',
    github: 'https://github.com/OmShrikhande/whole-db-facial-recogniton',
    liveLink: 'https://github.com/OmShrikhande/whole-db-facial-recogniton',
    featured: false,
    order: 13,
  },
  {
    id: '14',
    title: 'Lamborghini Clone Experience',
    description: 'High-fidelity interactive visual reproduction demonstrating complex layout animations and 60fps micro-interactions.',
    longDescription: 'A visual engineering showcase focusing on fluid GPU animations, asset lazy-loading, and responsive high-end aesthetic execution.',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP'],
    category: 'web',
    github: 'https://github.com/OmShrikhande/LamborginiClone',
    liveLink: 'https://github.com/OmShrikhande/LamborginiClone',
    featured: false,
    order: 14,
  },
]

const categories = [
  { id: 'all', name: 'All Repositories', icon: '⚡' },
  { id: 'fullstack', name: 'Full Stack', icon: '💻' },
  { id: 'ai', name: 'AI & Biometrics', icon: '🧠' },
  { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  { id: 'web', name: 'Web Experiences', icon: '🌐' },
  { id: 'other', name: 'DevOps & Systems', icon: '☁️' },
] as const

type CategoryId = typeof categories[number]['id']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'date'>('featured')

  const filteredProjects = useMemo(() => {
    let filtered =
      selectedCategory === 'all'
        ? projectsData
        : projectsData.filter((p) => p.category === selectedCategory)

    if (searchTerm) {
      const q = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(q))
      )
    }

    return filtered.sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      if (sortBy === 'name') return a.title.localeCompare(b.title)
      if (sortBy === 'date') return b.order - a.order
      return 0
    })
  }, [selectedCategory, searchTerm, sortBy])

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-3">
            Open Source & Commercial Work
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Engineered Projects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A curated showcase of production applications, biometric algorithms, real-time trading engines, and cloud orchestration systems.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-6 border-b border-white/10">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by title, technology, or domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'featured' | 'name' | 'date')}
              className="px-3 py-2 bg-slate-900/80 border border-white/10 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-sky-500 transition-colors"
            >
              <option value="featured">Featured First</option>
              <option value="name">Alphabetical</option>
              <option value="date">Chronological</option>
            </select>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-100 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Project Results Count */}
        <div className="mb-6 text-xs font-mono text-slate-400">
          Showing <span className="text-white font-semibold">{filteredProjects.length}</span> repositories
          {searchTerm && <span> matching "{searchTerm}"</span>}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10"
              >
                <div>
                  {/* Image & Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/90 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                          <Star className="w-2.5 h-2.5 fill-sky-300" />
                          <span>Featured</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex gap-1.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-white/10"
                        title="GitHub Repository"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-white/10"
                        title="Live Link"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="px-5 pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub External Callout */}
        <div className="mt-16 p-8 rounded-2xl glass border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              Interested in more open-source experiments?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse all 52+ public repositories, pull requests, and contributions directly on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/OmShrikhande"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-white/10 text-xs font-semibold transition-colors flex-shrink-0"
          >
            <Github size={16} />
            <span>Visit @OmShrikhande</span>
          </a>
        </div>
      </div>
    </div>
  )
}
