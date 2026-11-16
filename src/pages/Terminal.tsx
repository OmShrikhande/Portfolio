import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, ChevronRight, History, Award, Briefcase, User, Mail, Globe, Command, Sparkles, Download, Code2 } from 'lucide-react'
import { useSeason, Season } from '@context/SeasonContext'

interface CommandResponse {
  type: 'output' | 'error' | 'success' | 'info'
  content: string | React.ReactNode
}

interface CommandHistory {
  command: string
  responses: CommandResponse[]
}

const COMMANDS = [
  { name: 'help', description: 'List all available terminal commands', icon: <Command size={14} /> },
  { name: 'season', description: 'Change atmosphere (winter, autumn, spring, summer)', icon: <Sparkles size={14} /> },
  { name: 'skills', description: 'Inspect technical stack and frameworks', icon: <Code2 size={14} /> },
  { name: 'projects', description: 'Display flagship production repositories', icon: <Briefcase size={14} /> },
  { name: 'achievements', description: 'View key engineering milestones', icon: <Award size={14} /> },
  { name: 'about', description: 'Background narrative and credentials', icon: <User size={14} /> },
  { name: 'contact', description: 'Retrieve direct communication endpoints', icon: <Mail size={14} /> },
  { name: 'socials', description: 'GitHub, LinkedIn, and social profiles', icon: <Globe size={14} /> },
  { name: 'resume', description: 'Download latest Curriculum Vitae PDF', icon: <Download size={14} /> },
  { name: 'clear', description: 'Clear active terminal buffer', icon: <TerminalIcon size={14} /> },
]

export default function Terminal() {
  const { season, setSeason, theme } = useSeason()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      responses: [
        { type: 'info', content: 'Om Shrikhande System Console v2.4.0 [x86_64-node-react]' },
        { type: 'output', content: `Active Atmosphere: ${theme.name} (${theme.particleName})` },
        { type: 'info', content: 'Type "help" to inspect commands or "season <name>" to adjust the season.' },
      ],
    },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalContentRef = useRef<HTMLDivElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [history])

  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
    }
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    if (!trimmedCmd) return

    setCommandHistory((prev) => [trimmedCmd, ...prev])
    setHistoryIndex(-1)

    const parts = trimmedCmd.split(' ')
    const mainCmd = parts[0]
    const arg = parts[1]

    let responses: CommandResponse[] = []

    switch (mainCmd) {
      case 'help':
        responses = [
          { type: 'info', content: 'SYSTEM COMMAND INVENTORY:' },
          ...COMMANDS.map((c) => ({
            type: 'output' as const,
            content: (
              <div className="flex items-center gap-3">
                <span className="text-sky-300 font-mono w-28 font-semibold">{c.name}</span>
                <span className="text-slate-600">-</span>
                <span className="text-slate-300 text-xs">{c.description}</span>
              </div>
            ),
          })),
        ]
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      case 'season':
        if (!arg) {
          responses = [
            { type: 'info', content: `Current season: ${season.toUpperCase()}` },
            { type: 'output', content: 'Usage: season <winter | autumn | spring | summer>' },
          ]
        } else if (['winter', 'autumn', 'spring', 'summer'].includes(arg)) {
          setSeason(arg as Season)
          responses = [
            { type: 'success', content: `[OK] Atmosphere updated to: ${arg.toUpperCase()} (${arg === 'winter' ? 'Snowflakes' : arg === 'autumn' ? 'Falling Leaves' : arg === 'spring' ? 'Sakura Petals' : 'Fireflies'})` },
          ]
        } else {
          responses = [
            { type: 'error', content: `Unknown season: "${arg}". Valid options: winter, autumn, spring, summer.` },
          ]
        }
        break

      case 'skills':
        responses = [
          { type: 'info', content: 'CORE TECHNICAL PROFICIENCIES:' },
          { type: 'output', content: '• Frontend: React 19, TypeScript, Next.js, Tailwind CSS, Framer Motion, Three.js' },
          { type: 'output', content: '• Backend: Node.js, Express, Python (Flask/FastAPI), REST, WebSockets, WebRTC' },
          { type: 'output', content: '• Databases: PostgreSQL, MongoDB, Redis, SQLite' },
          { type: 'output', content: '• AI & Biometrics: OpenCV, TensorFlow, Dual Biometric Facial/Fingerprint models' },
          { type: 'output', content: '• Cloud & DevOps: Docker, AWS, LiveKit WebRTC, Linux/VPS orchestration, Git' },
        ]
        break

      case 'history':
        responses =
          commandHistory.length > 0
            ? commandHistory.map((h, i) => ({
                type: 'output' as const,
                content: `${commandHistory.length - i}. ${h}`,
              }))
            : [{ type: 'info', content: 'No prior command history.' }]
        break

      case 'achievements':
        responses = [
          { type: 'success', content: '🏆 Dual Biometrics Security System: Kalasnikavo production architecture' },
          { type: 'success', content: '🚀 Real-time Bullion Exchange Engine (Bhav App) with low-latency WebSocket ticks' },
          { type: 'success', content: '💡 Automated WebRTC Media Server orchestration on bare VPS instances' },
          { type: 'success', content: '🌟 52+ Public Repositories authored on GitHub' },
        ]
        break

      case 'projects':
        responses = [
          { type: 'info', content: 'FLAGSHIP REPOSITORIES:' },
          { type: 'output', content: '1. Kalasnikavo - Biometric Facial & Fingerprint Recognition (Flask/OpenCV)' },
          { type: 'output', content: '2. Bhav App - Real-Time Precious Metal Trading Platform (TypeScript/React)' },
          { type: 'output', content: '3. Viscous - Urban Bus Telemetry & GPS Tracking (React Native/Firebase)' },
          { type: 'output', content: '4. Eva Dropping - Local Zero-Cloud Wireless File Transfer (Node.js)' },
          { type: 'output', content: '5. LiveKit VPS - Scalable WebRTC Video/Audio deployment script' },
        ]
        break

      case 'about':
        responses = [
          { type: 'output', content: 'Om Shrikhande — Full-Stack Software Engineer & System Architect.' },
          { type: 'output', content: 'B.Tech in Computer Science & Engineering. Passionate about real-time distributed systems, modern React paradigms, and high-performance engineering.' },
        ]
        break

      case 'contact':
        responses = [
          { type: 'info', content: 'COMMUNICATION CHANNELS:' },
          { type: 'output', content: 'Email: omshrikhande@gmail.com' },
          { type: 'output', content: 'Phone: +91 7028165780' },
          { type: 'output', content: 'Location: Nagpur, Maharashtra, India' },
          { type: 'output', content: 'Timezone: Indian Standard Time (UTC+5:30)' },
        ]
        break

      case 'socials':
        responses = [
          { type: 'output', content: 'GitHub:   https://github.com/OmShrikhande' },
          { type: 'output', content: 'LinkedIn: https://linkedin.com/in/om-shrikhande-37108926a' },
          { type: 'output', content: 'Twitter:  https://twitter.com/OmShrikhande' },
        ]
        break

      case 'resume':
        responses = [
          { type: 'success', content: 'Triggering resume download: /CV curicullum vite.pdf' },
        ]
        window.open('/CV curicullum vite.pdf', '_blank')
        break

      case 'whoami':
        responses = [
          { type: 'info', content: 'Role: Authenticated Guest Visitor' },
          { type: 'output', content: 'Location: Remote Client' },
        ]
        break

      default:
        responses = [
          {
            type: 'error',
            content: `Command not recognized: "${trimmedCmd}". Type "help" to inspect supported commands.`,
          },
        ]
    }

    setHistory((prev) => [...prev, { command: trimmedCmd, responses }])
    setInput('')
    setTimeout(scrollToBottom, 50)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-dark-bg font-mono">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-950/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[72vh] backdrop-blur-2xl"
        >
          {/* Terminal Window Chrome */}
          <div className="bg-slate-900/90 border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <TerminalIcon size={14} className="text-sky-400" />
              <span>om-shrikhande@console:~</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">bash 5.2</div>
          </div>

          {/* Terminal Output */}
          <div
            ref={terminalContentRef}
            className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-3 custom-scrollbar"
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence mode="popLayout">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-xs sm:text-sm">
                      <ChevronRight size={14} />
                      <span>{item.command}</span>
                    </div>
                  )}
                  <div className="pl-4 space-y-1">
                    {item.responses.map((resp, respIdx) => (
                      <div
                        key={respIdx}
                        className={`text-xs sm:text-sm leading-relaxed font-mono ${
                          resp.type === 'error'
                            ? 'text-rose-400'
                            : resp.type === 'success'
                            ? 'text-emerald-400 font-medium'
                            : resp.type === 'info'
                            ? 'text-sky-300 font-bold'
                            : 'text-slate-300'
                        }`}
                      >
                        {resp.content}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatePresence>
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="p-3 sm:p-4 bg-slate-900/60 border-t border-white/10 flex items-center gap-2">
            <span className="text-sky-400 font-bold flex items-center gap-1 text-xs sm:text-sm">
              <ChevronRight size={16} />
              <span>visitor@portfolio:~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm caret-sky-400 placeholder-slate-600"
              placeholder="Type a command (try 'season winter', 'skills', 'help')..."
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </motion.div>

        {/* Quick Launch Shortcuts */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {COMMANDS.slice(0, 6).map((cmd) => (
            <button
              key={cmd.name}
              onClick={() => handleCommand(cmd.name)}
              className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              {cmd.icon}
              <span>{cmd.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
