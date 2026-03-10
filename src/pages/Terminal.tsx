import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, ChevronRight, History, Award, Briefcase, User, Mail, Globe, Command } from 'lucide-react'

interface CommandResponse {
  type: 'output' | 'error' | 'success' | 'info'
  content: string | React.ReactNode
}

interface CommandHistory {
  command: string
  responses: CommandResponse[]
}

const COMMANDS = [
  { name: 'help', description: 'List all available commands', icon: <Command size={14} /> },
  { name: 'history', description: 'Show your command history', icon: <History size={14} /> },
  { name: 'achievements', description: 'View my professional achievements', icon: <Award size={14} /> },
  { name: 'projects', description: 'List my featured projects', icon: <Briefcase size={14} /> },
  { name: 'about', description: 'Learn more about me', icon: <User size={14} /> },
  { name: 'contact', description: 'Get my contact information', icon: <Mail size={14} /> },
  { name: 'socials', description: 'My social media links', icon: <Globe size={14} /> },
  { name: 'clear', description: 'Clear the terminal screen', icon: <TerminalIcon size={14} /> },
]

export default function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      responses: [
        { type: 'info', content: 'Welcome to the Developer Terminal v1.0.0' },
        { type: 'info', content: 'Type "help" to see available commands.' }
      ]
    }
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

    setCommandHistory(prev => [trimmedCmd, ...prev])
    setHistoryIndex(-1)

    let responses: CommandResponse[] = []

    switch (trimmedCmd) {
      case 'help':
        responses = [
          { type: 'info', content: 'Available Commands:' },
          ...COMMANDS.map(c => ({
            type: 'output' as const,
            content: (
              <div className="flex items-center gap-4">
                <span className="text-neon-cyan font-mono w-24">{c.name}</span>
                <span className="text-slate-500">-</span>
                <span className="text-slate-400">{c.description}</span>
              </div>
            )
          }))
        ]
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      case 'history':
        responses = commandHistory.length > 0
          ? commandHistory.map((h, i) => ({ type: 'output' as const, content: `${commandHistory.length - i}. ${h}` }))
          : [{ type: 'info', content: 'No command history yet.' }]
        break
      case 'achievements':
        responses = [
          { type: 'success', content: '🏆 Top Rated Full-Stack Developer on various platforms' },
          { type: 'success', content: '🚀 Built and Scaled 10+ Web & Mobile Applications' },
          { type: 'success', content: '💡 Specialized in AI & Biometric Integration' },
          { type: 'success', content: '🌟 52+ Public Repositories on GitHub with innovative solutions' },
        ]
        break
      case 'projects':
        responses = [
          { type: 'info', content: 'Featured Projects:' },
          { type: 'output', content: '1. Kalasnikavo - Dual Biometric Recognition' },
          { type: 'output', content: '2. Bhav App - Real-Time Bullion Trading' },
          { type: 'output', content: '3. Viscous - Bus Tracking Platform' },
          { type: 'output', content: '4. Eva Dropping - Local File Transfer' },
          { type: 'info', content: 'Type "view projects" to go to the projects page.' }
        ]
        break
      case 'about':
        responses = [
          { type: 'output', content: 'I am Om Shrikhande, a MERN & React Native Engineer building scalable systems.' },
          { type: 'output', content: 'I focus on performance, security, and exceptional user experiences.' },
        ]
        break
      case 'contact':
        responses = [
          { type: 'output', content: 'Email: omshrikhande@example.com' },
          { type: 'output', content: 'Location: Nagpur, Maharashtra' },
        ]
        break
      case 'socials':
        responses = [
          { type: 'output', content: 'GitHub: https://github.com/OmShrikhande' },
          { type: 'output', content: 'LinkedIn: https://linkedin.com/in/om-shrikhande-37108926a' },
        ]
        break
      case 'whoami':
        responses = [{ type: 'info', content: 'You are a guest exploring the portfolio of Om Shrikhande.' }]
        break
      default:
        responses = [{ type: 'error', content: `Command not found: ${trimmedCmd}. Type "help" for a list of commands.` }]
    }

    setHistory(prev => [...prev, { command: trimmedCmd, responses }])
    setInput('')
    
    // Ensure scroll after state update
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
    <div className="min-h-screen pt-24 pb-12 px-4 bg-dark-bg font-mono">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-hidden flex flex-col h-[70vh] glass-card"
        >
          {/* Terminal Header */}
          <div className="bg-dark-bg/80 border-b border-dark-border px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <TerminalIcon size={14} className="text-neon-blue animate-pulse" />
              <span className="glitch-text" data-text="om-shrikhande-terminal">om-shrikhande-terminal</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalContentRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar"
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence mode="popLayout">
              {history.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-1"
                >
                  {item.command !== 'welcome' && (
                    <div className="flex items-center gap-2 text-neon-blue">
                      <ChevronRight size={16} />
                      <span className="font-bold">{item.command}</span>
                    </div>
                  )}
                  <div className="pl-4 space-y-1">
                    {item.responses.map((resp, respIdx) => (
                      <div
                        key={respIdx}
                        className={`text-sm leading-relaxed ${
                          resp.type === 'error' ? 'text-red-400' :
                          resp.type === 'success' ? 'text-green-400' :
                          resp.type === 'info' ? 'text-neon-cyan font-bold' :
                          'text-slate-300'
                        }`}
                      >
                        {resp.content}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input */}
          <div className="p-4 bg-dark-bg/50 border-t border-dark-border flex items-center gap-2">
            <span className="text-neon-blue font-bold flex items-center gap-1">
              <ChevronRight size={18} />
              <span>visitor@portfolio:~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-200 font-mono text-sm caret-neon-blue"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </motion.div>


        {/* Quick Tips */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMMANDS.slice(0, 4).map((cmd) => (
            <motion.button
              key={cmd.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCommand(cmd.name)}
              className="p-3 glass rounded-xl border border-dark-border hover:border-neon-blue/50 transition-all flex flex-col items-center gap-2 text-slate-400 hover:text-neon-blue"
            >
              {cmd.icon}
              <span className="text-xs font-bold uppercase tracking-wider">{cmd.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
