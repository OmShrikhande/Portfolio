import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Project } from '@types/index'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    longDescription: 'A complete e-commerce platform built with React and Node.js, featuring shopping cart, checkout, and payment processing with Stripe.',
    image: 'https://via.placeholder.com/400x300',
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

const categories = ['all', 'web', 'mobile', 'fullstack', 'ai', 'other'] as const

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory)

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
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A curated collection of projects I've built using modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow'
                  : 'glass text-slate-300 hover:text-neon-blue border-neon-blue/30 hover:border-neon-blue/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                exit={{ opacity: 0, y: 20 }}
                layoutId={project.id}
                className="group"
              >
                <div className="glass rounded-lg overflow-hidden h-full flex flex-col hover-lift">
                  <div className="relative overflow-hidden h-48 bg-dark-bg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.featured && (
                        <span className="px-2 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded text-xs font-bold text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neon-blue/10 text-neon-cyan text-xs rounded border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-slate-500 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-dark-border">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition text-sm font-medium flex-1"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition text-sm font-medium flex-1"
                      >
                        <ExternalLink size={16} />
                        Live
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
