import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const featuredProjects = [
    {
      id: 1,
      title: 'Project Name',
      description: 'Brief description of your project',
      image: 'https://via.placeholder.com/400x300',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Another Project',
      description: 'Another amazing project description',
      image: 'https://via.placeholder.com/400x300',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-20 md:py-32 min-h-[calc(100vh-80px)] flex flex-col justify-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-neon-cyan text-lg font-mono">Hi, my name is</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Your Name<span className="gradient-text">.</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
        >
          I build amazing digital experiences.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed"
        >
          I'm a passionate full-stack developer with expertise in building modern web applications. 
          I specialize in creating responsive, high-performance solutions that solve real-world problems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-glow transition-all"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-neon-blue rounded-lg font-semibold text-neon-blue hover:bg-neon-blue/10 transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-neon-cyan" size={32} />
        </motion.div>
      </motion.section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 gradient-text">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group"
              >
                <div className="glass rounded-lg overflow-hidden hover-lift">
                  <div className="relative overflow-hidden h-64 bg-dark-bg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          className="p-2 bg-neon-blue/20 rounded-lg hover:bg-neon-blue/40 transition"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.live}
                          className="p-2 bg-neon-blue/20 rounded-lg hover:bg-neon-blue/40 transition"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link to="/projects">
              <button className="px-8 py-3 border border-neon-blue rounded-lg font-semibold text-neon-blue hover:bg-neon-blue/10 transition-all inline-block">
                View All Projects
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
