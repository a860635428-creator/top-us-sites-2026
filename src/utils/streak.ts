/**
 * Daily streak & activity tracking for user engagement.
 * Persists to localStorage. No backend required.
 */

const STREAK_KEY = 'usmle_streak'
const ACTIVITY_KEY = 'usmle_activity_dates'

export interface StreakState {
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null // 'YYYY-MM-DD'
}

const todayStr = (): string => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const yesterdayStr = (): string => {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export const getStreak = (): StreakState => {
  try {
    const raw = localStorage.getItem(STREAK_KEY)
    if (!raw) return { currentStreak: 0, longestStreak: 0, lastActiveDate: null }
    return JSON.parse(raw)
  } catch {
    return { currentStreak: 0, longestStreak: 0, lastActiveDate: null }
  }
}

/**
 * Call this whenever the user answers a question.
 * Updates the streak and activity log.
 */
export const recordActivity = (): StreakState => {
  const now = todayStr()
  const state = getStreak()

  // Already recorded today
  if (state.lastActiveDate === now) return state

  const yesterday = yesterdayStr()

  let newStreak: number
  if (state.lastActiveDate === yesterday) {
    // Consecutive — streak continues
    newStreak = state.currentStreak + 1
  } else if (state.lastActiveDate === now) {
    // Same day, no change
    newStreak = state.currentStreak
  } else {
    // Streak broken — start over
    newStreak = 1
  }

  const updated: StreakState = {
    currentStreak: newStreak,
    longestStreak: Math.max(state.longestStreak, newStreak),
    lastActiveDate: now,
  }

  localStorage.setItem(STREAK_KEY, JSON.stringify(updated))

  // Also record activity date
  try {
    const dates: string[] = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]')
    if (!dates.includes(now)) {
      dates.push(now)
      // Keep only last 180 days
      const trimmed = dates.slice(-180)
      localStorage.setItem(ACTIVITY_KEY, JSON.stringify(trimmed))
    }
  } catch { /* ignore */ }

  return updated
}

/**
 * Get all active dates (for calendar heatmap)
 */
export const getActivityDates = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]')
  } catch {
    return []
  }
}

/**
 * Check if user has been active today
 */
export const isActiveToday = (): boolean => {
  const state = getStreak()
  return state.lastActiveDate === todayStr()
}
