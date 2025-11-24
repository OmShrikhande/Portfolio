import { motion } from 'framer-motion'

export default function About() {
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

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'] },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Started Learning Web Development',
      description: 'Began my journey into web development with HTML, CSS, and JavaScript',
    },
    {
      year: '2021',
      title: 'First Project Launch',
      description: 'Built and deployed my first production web application',
    },
    {
      year: '2022',
      title: 'Professional Experience',
      description: 'Started working as a full-stack developer at a tech company',
    },
    {
      year: '2024',
      title: 'Freelance Developer',
      description: 'Transitioned to freelance development, building solutions for startups',
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8 gradient-text"
          >
            About Me
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="glass rounded-lg p-8">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Profile"
                  className="w-full rounded-lg mb-6 object-cover h-96"
                />
                <h2 className="text-2xl font-bold mb-4">I'm passionate about creating web experiences</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  With over 4 years of experience in web development, I've had the opportunity to work on diverse projects ranging from single-page applications to complex enterprise systems. I'm passionate about writing clean code, solving complex problems, and continuously learning new technologies.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-neon-blue mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-sm font-medium text-neon-cyan hover:border-neon-blue/60 transition cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-12 gradient-text"
          >
            My Journey
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass rounded-lg p-8 border-l-4 border-neon-blue hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-white font-bold">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 gradient-text"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-8"
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:shadow-glow transition-all"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
