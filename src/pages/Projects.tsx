import { useState, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, ExternalLink, Search, Filter, Star, Calendar } from 'lucide-react'
import { Project } from '@types/index'
import ParallaxSection from '@components/ParallaxSection'
import MagneticButton from '@components/MagneticButton'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    longDescription: 'A complete e-commerce platform built with React and Node.js, featuring shopping cart, checkout, and payment processing with Stripe.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    longDescription: 'Real-time task management application with WebSocket support for collaborative work.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    category: 'web',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Mobile Chat App',
    description: 'Native mobile chat application with message encryption',
    longDescription: 'Secure messaging application built with React Native featuring end-to-end encryption.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React Native', 'Firebase', 'Encryption'],
    category: 'mobile',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 3,
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'Machine learning powered content generation tool',
    longDescription: 'AI-powered content generator using OpenAI API for creating marketing content.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Next.js', 'OpenAI', 'Python', 'PostgreSQL'],
    category: 'ai',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: true,
    order: 4,
  },
  {
    id: '5',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics and reporting dashboard',
    longDescription: 'Comprehensive analytics dashboard with real-time data visualization and reporting.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    category: 'web',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 5,
  },
  {
    id: '6',
    title: 'Weather Forecast API',
    description: 'RESTful API for weather forecasting',
    longDescription: 'Backend API service providing weather forecasting data with caching and optimization.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    category: 'fullstack',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 6,
  },
  {
    id: '7',
    title: 'Video Streaming Platform',
    description: 'Scalable video streaming service',
    longDescription: 'Full-featured video streaming platform with transcoding and adaptive bitrate.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Next.js', 'Node.js', 'AWS', 'FFmpeg'],
    category: 'fullstack',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: true,
    order: 7,
  },
  {
    id: '8',
    title: 'Social Network',
    description: 'Social platform with real-time messaging',
    longDescription: 'Social networking platform with profile systems, messaging, and real-time notifications.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 8,
  },
  {
    id: '9',
    title: 'Fitness Tracker Mobile',
    description: 'Health and fitness tracking mobile app',
    longDescription: 'Mobile application for tracking fitness activities with data visualization.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
    category: 'mobile',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 9,
  },
  {
    id: '10',
    title: 'Blockchain Wallet',
    description: 'Cryptocurrency wallet management system',
    longDescription: 'Secure cryptocurrency wallet with blockchain integration and transaction management.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Web3.js', 'Node.js', 'Blockchain'],
    category: 'other',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 10,
  },
  {
    id: '11',
    title: 'ML Model Deployment',
    description: 'Machine learning model serving platform',
    longDescription: 'Platform for deploying and managing machine learning models at scale.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
    category: 'ai',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 11,
  },
  {
    id: '12',
    title: 'Design System Library',
    description: 'Reusable component library and design system',
    longDescription: 'Comprehensive design system with React components, documentation, and Storybook.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'TypeScript', 'Storybook', 'npm'],
    category: 'web',
    github: 'https://github.com',
    liveLink: 'https://example.com',
    featured: false,
    order: 12,
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
