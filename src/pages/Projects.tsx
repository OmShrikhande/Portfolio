import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, ExternalLink, Search, Filter, Star, Calendar } from 'lucide-react'
import { Project } from '@types/index'
import ParallaxSection from '@components/ParallaxSection'
import MagneticButton from '@components/MagneticButton'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Eva Dropping',
    description: 'Local File Transfer System wirelessly transferring files between laptop and mobile devices.',
    longDescription: 'A lightweight, high-performance solution for wirelessly transferring files between your laptop and mobile devices over the same Wi-Fi network. Built entirely with Node.js and HTML5.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Node.js', 'HTML5', 'WebSockets', 'File API'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/EVA-DROPING',
    liveLink: 'https://github.com/OmShrikhande/EVA-DROPING',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Kalasnikavo',
    description: 'Dual Biometric Recognition System combining facial and fingerprint analysis.',
    longDescription: 'A cutting-edge security solution that combines the power of facial recognition and fingerprint analysis to provide robust, multi-modal biometric authentication. Built with Flask and React.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'Flask', 'React', 'OpenCV', 'TensorFlow'],
    category: 'ai',
    github: 'https://github.com/OmShrikhande/KALASNIKAVO',
    liveLink: 'https://github.com/OmShrikhande/KALASNIKAVO',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Viscous',
    description: 'Modern bus tracking application with real-time location and notifications.',
    longDescription: 'Feature-rich bus tracking application built with React Native and Expo. Provides real-time bus location tracking, notifications, interactive maps, and a beautiful UI.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['React Native', 'Expo', 'Google Maps API', 'Firebase'],
    category: 'mobile',
    github: 'https://github.com/OmShrikhande/VISCOUS',
    liveLink: 'https://github.com/OmShrikhande/VISCOUS',
    featured: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Auto Reel Scroller',
    description: 'Android application for automatic scrolling functionality across all apps.',
    longDescription: 'An Android application that provides automatic scrolling functionality across all apps using Android Accessibility Service, with customizable timers and scroll speeds.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Kotlin', 'Android SDK', 'Accessibility Service'],
    category: 'mobile',
    github: 'https://github.com/OmShrikhande/AUTO-REEL-SCROLLER',
    liveLink: 'https://github.com/OmShrikhande/AUTO-REEL-SCROLLER',
    featured: false,
    order: 4,
  },
  {
    id: '5',
    title: 'Bhav App',
    description: 'Real-Time Bullion Trading Platform for tracking precious metal prices.',
    longDescription: 'A comprehensive real-time bullion trading platform featuring live price updates, historical data analysis, and secure trading interface. Built with TypeScript.',
    image: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['TypeScript', 'React', 'Tailwind', 'WebSocket'],
    category: 'fullstack',
    github: 'https://github.com/OmShrikhande/BHAV-APP',
    liveLink: 'https://github.com/OmShrikhande/BHAV-APP',
    featured: true,
    order: 5,
  },
  {
    id: '6',
    title: 'LiveKit VPS Deployment',
    description: 'High-performance script for deploying LiveKit WebRTC on Virtual Private Servers.',
    longDescription: 'A streamlined deployment solution for setting up LiveKit WebRTC servers on VPS environments, optimized for low latency and high scalability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['JavaScript', 'LiveKit', 'WebRTC', 'Linux', 'Docker'],
    category: 'other',
    github: 'https://github.com/OmShrikhande/LIVEKIT--VPS-DEPLOYMENT',
    liveLink: 'https://github.com/OmShrikhande/LIVEKIT--VPS-DEPLOYMENT',
    featured: false,
    order: 6,
  },
  {
    id: '7',
    title: 'Whole DB Facial Recognition',
    description: 'Large-scale facial recognition and person verification system using webcam input.',
    longDescription: 'A robust facial recognition system built with Flask, enabling real-time face detection, recognition, and registration against a large database of profiles.',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['Python', 'Flask', 'JavaScript', 'OpenCV'],
    category: 'ai',
    github: 'https://github.com/OmShrikhande/WHOLE-DB-FACIAL-RECOGNITON',
    liveLink: 'https://github.com/OmShrikhande/WHOLE-DB-FACIAL-RECOGNITON',
    featured: false,
    order: 7,
  },
  {
    id: '8',
    title: 'Lamborgini Clone',
    description: 'A high-performance visual clone of the official Lamborghini website.',
    longDescription: 'A visual tribute to the Lamborghini website, focusing on premium animations, high-fidelity graphics, and immersive user experience.',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP'],
    category: 'web',
    github: 'https://github.com/OmShrikhande/LAMBORGINICLONE',
    liveLink: 'https://github.com/OmShrikhande/LAMBORGINICLONE',
    featured: false,
    order: 8,
  },
]

const categories = [
  { id: 'all', name: 'All Projects', icon: '🚀' },
  { id: 'web', name: 'Web Apps', icon: '🌐' },
  { id: 'mobile', name: 'Mobile', icon: '📱' },
  { id: 'fullstack', name: 'Full Stack', icon: '⚡' },
  { id: 'ai', name: 'AI/ML', icon: '🤖' },
  { id: 'other', name: 'Other', icon: '🔧' },
] as const

type CategoryId = typeof categories[number]['id']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'featured'>('featured')

  const filteredProjects = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === selectedCategory)

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered.sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      if (sortBy === 'name') return a.title.localeCompare(b.title)
      if (sortBy === 'date') return b.order - a.order
      return 0
    })
  }, [selectedCategory, searchTerm, sortBy])

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen pt-20 pb-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.2}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              A showcase of innovative solutions built with cutting-edge technologies, 
              each project representing a unique challenge and creative solution.
            </motion.p>
            
            {/* Search and Filter Controls */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue transition-all w-80"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'date' | 'featured')}
                className="px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white focus:outline-none focus:border-neon-blue transition-all"
              >
                <option value="featured">Sort by Featured</option>
                <option value="name">Sort by Name</option>
                <option value="date">Sort by Date</option>
              </select>
            </motion.div>
          </motion.div>
        </ParallaxSection>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <MagneticButton
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow-lg'
                      : 'glass-hover text-slate-300 hover:text-neon-blue border border-neon-blue/30 hover:border-neon-blue/60'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="categoryIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-8 text-center">
          <p className="text-slate-400">
            Showing <span className="text-neon-blue font-semibold">{filteredProjects.length}</span> projects
            {searchTerm && (
              <span> matching "<span className="text-neon-cyan">{searchTerm}</span>"
              </span>
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="glass-hover rounded-2xl overflow-hidden h-full flex flex-col hover-lift relative group">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <motion.div 
                        className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-bold text-white shadow-glow"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3" />
                        <span>Featured</span>
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-dark-bg to-dark-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 glass rounded-xl hover:bg-neon-blue/20 transition-all backdrop-blur-md"
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 glass rounded-xl hover:bg-neon-purple/20 transition-all backdrop-blur-md"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-cyan text-sm rounded-full border border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-glow transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-dark-border/50">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition text-sm font-medium flex-1 p-2 rounded-lg hover:bg-neon-blue/5"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-neon-purple hover:text-neon-pink transition text-sm font-medium flex-1 p-2 rounded-lg hover:bg-neon-purple/5"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
