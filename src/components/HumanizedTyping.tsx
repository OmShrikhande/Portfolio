import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HumanizedTypingProps {
  phrases: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function HumanizedTyping({
  phrases,
  className = '',
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 2200,
}: HumanizedTypingProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullPhrase = phrases[currentPhraseIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        // Natural deleting speed
        const timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    } else {
      if (currentText.length < currentFullPhrase.length) {
        // Humanized typing cadence: subtle variable delay + pause on punctuation
        const nextChar = currentFullPhrase[currentText.length]
        let delay = typingSpeed + (Math.random() * 40 - 20)
        if (nextChar === ',' || nextChar === ';' || nextChar === '-') {
          delay += 180
        } else if (nextChar === '.' || nextChar === '!' || nextChar === '?') {
          delay += 250
        }

        const timer = setTimeout(() => {
          setCurrentText((prev) => currentFullPhrase.slice(0, prev.length + 1))
        }, delay)
        return () => clearTimeout(timer)
      } else {
        setIsPaused(true)
      }
    }
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 ml-1 bg-sky-400 rounded-sm align-middle"
      />
    </span>
  )
}
