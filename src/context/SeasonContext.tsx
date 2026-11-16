import React, { createContext, useContext, useState, useEffect } from 'react'

export type Season = 'winter' | 'autumn' | 'spring' | 'summer'

export interface SeasonTheme {
  id: Season
  name: string
  icon: string
  subtitle: string
  accentColor: string
  accentGlow: string
  particleName: string
  badgeText: string
}

export const SEASONS: Record<Season, SeasonTheme> = {
  winter: {
    id: 'winter',
    name: 'Winter',
    icon: '❄️',
    subtitle: 'Crisp & Crystalline',
    accentColor: '#38bdf8', // Ice Blue
    accentGlow: 'rgba(56, 189, 248, 0.25)',
    particleName: 'Falling Snowflakes',
    badgeText: 'Winter Edition',
  },
  autumn: {
    id: 'autumn',
    name: 'Autumn',
    icon: '🍂',
    subtitle: 'Golden Amber & Falling Leaves',
    accentColor: '#f59e0b', // Warm Amber
    accentGlow: 'rgba(245, 158, 11, 0.25)',
    particleName: 'Drifting Foliage',
    badgeText: 'Autumn Edition',
  },
  spring: {
    id: 'spring',
    name: 'Spring',
    icon: '🌸',
    subtitle: 'Fresh Bloom & Sakura',
    accentColor: '#10b981', // Emerald Mint
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    particleName: 'Sakura Petals',
    badgeText: 'Spring Edition',
  },
  summer: {
    id: 'summer',
    name: 'Summer',
    icon: '☀️',
    subtitle: 'Twilight Fireflies & Radiant Warmth',
    accentColor: '#0ea5e9', // Deep Sky Azure
    accentGlow: 'rgba(14, 165, 233, 0.25)',
    particleName: 'Ambient Fireflies',
    badgeText: 'Summer Edition',
  },
}

function detectCurrentSeason(): Season {
  const month = new Date().getMonth() // 0 = Jan, 11 = Dec
  // In November (10), check if mid/late Nov -> winter or autumn
  // Nov 15 to Feb: Winter
  const day = new Date().getDate()
  if (month === 11 || month === 0 || month === 1 || (month === 10 && day >= 15)) {
    return 'winter'
  }
  if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  }
  if (month === 5 || month === 6 || month === 7) {
    return 'summer'
  }
  return 'autumn'
}

interface SeasonContextType {
  season: Season
  theme: SeasonTheme
  isAuto: boolean
  setSeason: (season: Season) => void
  toggleAuto: () => void
  cycleSeason: () => void
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined)

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [isAuto, setIsAuto] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_season_mode')
    return saved ? saved === 'auto' : true
  })

  const [season, setSeasonState] = useState<Season>(() => {
    const savedSeason = localStorage.getItem('portfolio_season') as Season | null
    const savedMode = localStorage.getItem('portfolio_season_mode')
    if (savedMode === 'manual' && savedSeason && SEASONS[savedSeason]) {
      return savedSeason
    }
    return detectCurrentSeason()
  })

  useEffect(() => {
    if (isAuto) {
      const current = detectCurrentSeason()
      setSeasonState(current)
    }
  }, [isAuto])

  const setSeason = (newSeason: Season) => {
    setIsAuto(false)
    setSeasonState(newSeason)
    localStorage.setItem('portfolio_season', newSeason)
    localStorage.setItem('portfolio_season_mode', 'manual')
  }

  const toggleAuto = () => {
    const nextAuto = !isAuto
    setIsAuto(nextAuto)
    localStorage.setItem('portfolio_season_mode', nextAuto ? 'auto' : 'manual')
    if (nextAuto) {
      setSeasonState(detectCurrentSeason())
    }
  }

  const cycleSeason = () => {
    const order: Season[] = ['winter', 'autumn', 'spring', 'summer']
    const nextIdx = (order.indexOf(season) + 1) % order.length
    setSeason(order[nextIdx])
  }

  return (
    <SeasonContext.Provider
      value={{
        season,
        theme: SEASONS[season],
        isAuto,
        setSeason,
        toggleAuto,
        cycleSeason,
      }}
    >
      {children}
    </SeasonContext.Provider>
  )
}

export function useSeason() {
  const context = useContext(SeasonContext)
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider')
  }
  return context
}
