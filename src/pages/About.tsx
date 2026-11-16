import { motion } from 'framer-motion'
import { Award, Calendar, Code, MapPin, CheckCircle2, ArrowRight, Github, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import TechSphere from '@components/TechSphere'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const stats = [
    { label: 'Engineering Experience', value: '4+ Years', icon: Calendar },
    { label: 'Public Repositories', value: '52+', icon: Code },
    { label: 'Biometrics & Security', value: 'Production', icon: Award },
    { label: 'Base Location', value: 'Nagpur, India', icon: MapPin },
  ]

  const timeline = [
    {
      year: '2022',
      title: 'Full-Stack Foundations & Educational Platforms',
      description: 'Built Elearning-website-php (full course management, video lectures, and student evaluation portal) along with modular PHP, MySQL, and JavaScript microservices.',
    },
    {
      year: '2023',
      title: 'Local Wireless Networking & Transit Telemetry',
      description: 'Engineered eva-droping (zero-cloud encrypted local Wi-Fi file transfer between PC & mobile) and Viscous (real-time school bus GPS tracking with React Native and Expo).',
    },
    {
      year: '2024',
      title: 'Biometrics, Computer Vision & Enterprise Management',
      description: 'Developed Kalasnikavo (Dual Biometric Facial & Fingerprint Recognition platform with OpenCV), whole-db-facial-recogniton, and the comprehensive Gym Management System / Capita Prime HMS.',
    },
    {
      year: '2025',
      title: 'Algorithmic Trading Bots & WebRTC Streaming',
      description: 'Architected zdron (Zero Drawdown Bot), headless-MT5, frx-corelation Forex bots, and LiveKit VPS Deployment for low-latency live streaming (ProxStream).',
    },
    {
      year: '2026',
      title: 'Ecosystem Architect & Open-Source Builder',
      description: 'Leading production deployments for Baba Beri App, maintaining 52+ open-source GitHub repositories, and creating AI utility agents (Rizzer, Brit, NullTor).',
    },
  ]

  const competencies = [
    {
      title: 'Automated Trading & Signal Bots',
      desc: 'Engineered zdron (Zero Drawdown Bot), headless-MT5 MetaTrader 5 execution engine, and frx-corelation Forex correlation metrics alongside automated Telegram signal alert bots.',
    },
    {
      title: 'Enterprise Management & Healthcare',
      desc: 'Architected Capita Prime HMS (Hospital Management System) and Gym Management Platform handling complete member billing lifecycles, class scheduling, attendance tracking, and reporting.',
    },
    {
      title: 'E-Commerce & Community Platforms',
      desc: 'Developed Baba Beri App (BabaBeri) featuring responsive user flows, secure cart mechanics, catalog management, and payment gateway integration.',
    },
    {
      title: 'Live Video Streaming & VPS Infrastructure',
      desc: 'Orchestrated ProxStream and LiveKit VPS Deployment on bare-metal and cloud VPS nodes for ultra-low latency WebRTC audio/video distribution.',
    },
    {
      title: 'Local Wireless Networking & Security',
      desc: 'Built eva-droping (zero-cloud encrypted Wi-Fi file transfer between PC and mobile) and NullTor (encrypted LAN peer-to-peer shared notepad with zero-knowledge encryption).',
    },
    {
      title: 'Biometrics, Computer Vision & Mobile',
      desc: 'Created Kalasnikavo (Dual Biometric Facial Landmark & Fingerprint Authentication), Auto-reel-Scroller (Android accessibility scroller in Kotlin), and Viscous (transit GPS telemetry).',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pt-6 pb-12"
        >
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-2.5">
              Engineer Profile & Background
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              Engineering with precision,{' '}
              <span className="gradient-text-accent">driven by impact.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I am a software engineer dedicated to building resilient, performant systems. From computer vision biometrics and algorithmic trading bots to enterprise management platforms, I transform complex technical problems into elegant, production-grade software.
            </p>
          </div>

          {/* Bio & Character Presentation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            {/* Left Column: 3D Character Avatar Presentation + Quick Stats */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden glass p-4 border border-white/10 shadow-2xl flex flex-col items-center">
                <div className="relative w-full aspect-square flex items-center justify-center p-2">
                  <img
                    src="/images/om-waving.gif"
                    alt="Om Shrikhande - 3D Character Avatar waving hello"
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = '/images/om-waving-avatar-opt.png'
                    }}
                  />
                </div>
                
                {/* Overlay Badge */}
                <div className="w-full mt-2 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-sm">Om Shrikhande</p>
                      <p className="text-slate-400 text-xs font-mono">B.Tech in Computer Science & Engineering</p>
                    </div>
                    <span className="text-xl">👋</span>
                  </div>
                </div>
              </div>

              {/* Quick Stat Cards directly below Avatar */}
              <div className="w-full max-w-[380px] grid grid-cols-2 gap-3">
                {stats.map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <div key={idx} className="glass p-3 rounded-2xl border border-white/5 flex flex-col">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="w-3.5 h-3.5 text-sky-400" />
                        <span className="text-[11px] text-slate-400">{s.label}</span>
                      </div>
                      <span className="text-base font-bold text-white font-mono">{s.value}</span>
                    </div>
                  )
                })}
              </div>

              {/* GitHub Link Action */}
              <div className="w-full max-w-[380px] flex items-center gap-3">
                <a
                  href="https://github.com/OmShrikhande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub @OmShrikhande</span>
                </a>
                <a
                  href="/CV curicullum vite.pdf"
                  download
                  className="py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>CV</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: In-depth Narrative & Real Projects */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-6">
              <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Full-Stack Architecture & High-Performance Engineering
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  My journey began with deep curiosity about how large-scale digital platforms operate under heavy concurrency. Over the last four years, I have architected systems ranging from multi-modal biometrics authentication and automated trading bots to real-time WebRTC media streaming and enterprise platforms.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  With over <strong>52 open-source repositories</strong> on GitHub, I believe in writing code that is clean, observable, and built to scale. I enjoy bridging the gap between high-level intuitive UI design and low-level backend throughput.
                </p>

                {/* Key Engineered Systems Competencies */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-xs uppercase font-mono tracking-wider text-sky-400 font-semibold mb-2">
                    Key Engineered Systems & Focus Areas
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {competencies.map((comp, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                          <h3 className="text-xs font-bold text-white">{comp.title}</h3>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal pl-6">
                          {comp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full Tech Stack Matrix - Positioned cleanly right after bio */}
          <div className="mt-4 mb-14">
            <TechSphere
              technologies={[
                'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Framer Motion',
                'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB',
                'AWS', 'Docker', 'Git', 'VS Code', 'Figma', 'Kubernetes',
                'JavaScript', 'HTML', 'CSS', 'GraphQL', 'Redux', 'Linux'
              ]}
            />
          </div>

          {/* Career Timeline */}
          <div className="my-14">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest font-mono text-sky-400 block mb-2">
                Milestones & Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Journey
              </h2>
            </div>

            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                    <span className="px-3 py-1 rounded-lg bg-sky-950/80 border border-sky-800/40 text-sky-300 font-mono text-sm font-bold w-fit">
                      {item.year}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Call to Action */}
          <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Let's Build Something High-Impact
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Whether you're looking for a full-stack engineer to lead a project from scratch, optimize system performance, or build real-time trading and biometrics architectures, let's connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Initiate Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-semibold text-sm transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
