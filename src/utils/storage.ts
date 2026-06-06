import { supabase } from '../lib/supabase'
import { isOfflineMode, getCurrentUser } from './auth'

export interface WrongAnswerEntry {
  questionId: number
  selectedAnswer: number
  timestamp: number
}

const LOCAL_WRONG_ANSWERS_KEY = 'usmle_wrong_answers'

// ── Local helpers ─────────────────────────────────────────

function loadLocalWrongAnswers(): WrongAnswerEntry[] {
  try {
    const raw = localStorage.getItem(LOCAL_WRONG_ANSWERS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveLocalWrongAnswers(entries: WrongAnswerEntry[]): void {
  localStorage.setItem(LOCAL_WRONG_ANSWERS_KEY, JSON.stringify(entries))
}

async function getUserId(): Promise<string | null> {
  const user = getCurrentUser()
  return user?.id || null
}

// ── Get Wrong Answer IDs (for quick checking) ─────────────
export async function getWrongAnswers(): Promise<number[]> {
  const entries = await getWrongAnswerEntries()
  return entries.map((e) => e.questionId)
}

// ── Get Full Wrong Answer Entries ─────────────────────────
export async function getWrongAnswerEntries(): Promise<WrongAnswerEntry[]> {
  const userId = await getUserId()
  if (!userId) return []

  // Offline mode: use localStorage
  if (isOfflineMode()) {
    return loadLocalWrongAnswers()
  }

  // Online mode: try Supabase
  try {
    const { data, error } = await supabase
      .from('wrong_answers')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[Storage] getWrongAnswerEntries error:', error)
      return loadLocalWrongAnswers()
    }

    return data
      ? data.map((r: any) => ({
          questionId: r.question_id,
          selectedAnswer: r.selected_answer,
          timestamp: new Date(r.created_at).getTime(),
        }))
      : []
  } catch (err: any) {
    console.error('[Storage] getWrongAnswerEntries network error:', err)
    return loadLocalWrongAnswers()
  }
}

// ── Add Wrong Answer ─────────────────────────────────────
export async function addWrongAnswer(questionId: number, selectedAnswer: number): Promise<void> {
  const userId = await getUserId()
  if (!userId) return

  // Offline mode: save to localStorage
  if (isOfflineMode()) {
    const entries = loadLocalWrongAnswers()
    const idx = entries.findIndex((e) => e.questionId === questionId)
    if (idx >= 0) {
      entries[idx] = { questionId, selectedAnswer, timestamp: Date.now() }
    } else {
      entries.unshift({ questionId, selectedAnswer, timestamp: Date.now() })
    }
    saveLocalWrongAnswers(entries)
    return
  }

  // Online mode: try Supabase, fall back to localStorage on failure
  try {
    const { error } = await supabase.from('wrong_answers').upsert(
      {
        user_id: userId,
        question_id: questionId,
        selected_answer: selectedAnswer,
      },
      { onConflict: 'user_id,question_id' }
    )

    if (error) {
      console.error('[Storage] addWrongAnswer error:', error)
      // Fall back to localStorage on Supabase error
      const entries = loadLocalWrongAnswers()
      const idx = entries.findIndex((e) => e.questionId === questionId)
      if (idx >= 0) {
        entries[idx] = { questionId, selectedAnswer, timestamp: Date.now() }
      } else {
        entries.unshift({ questionId, selectedAnswer, timestamp: Date.now() })
      }
      saveLocalWrongAnswers(entries)
    }
  } catch (err: any) {
    console.error('[Storage] addWrongAnswer network error:', err)
    // Network failure — save to localStorage as backup
    const entries = loadLocalWrongAnswers()
    const idx = entries.findIndex((e) => e.questionId === questionId)
    if (idx >= 0) {
      entries[idx] = { questionId, selectedAnswer, timestamp: Date.now() }
    } else {
      entries.unshift({ questionId, selectedAnswer, timestamp: Date.now() })
    }
    saveLocalWrongAnswers(entries)
  }
}

// ── Remove Wrong Answer ───────────────────────────────────
export async function removeWrongAnswer(questionId: number): Promise<void> {
  const userId = await getUserId()
  if (!userId) return

  // Offline mode: remove from localStorage
  if (isOfflineMode()) {
    const entries = loadLocalWrongAnswers().filter((e) => e.questionId !== questionId)
    saveLocalWrongAnswers(entries)
    return
  }

  // Online mode: try Supabase, fall back to localStorage
  try {
    const { error } = await supabase
      .from('wrong_answers')
      .delete()
      .eq('user_id', userId)
      .eq('question_id', questionId)

    if (error) {
      console.error('[Storage] removeWrongAnswer error:', error)
      const entries = loadLocalWrongAnswers().filter((e) => e.questionId !== questionId)
      saveLocalWrongAnswers(entries)
    }
  } catch {
    const entries = loadLocalWrongAnswers().filter((e) => e.questionId !== questionId)
    saveLocalWrongAnswers(entries)
  }
}

// ── Utility ───────────────────────────────────────────────
export async function isWrongAnswer(questionId: number): Promise<boolean> {
  const ids = await getWrongAnswers()
  return ids.includes(questionId)
}

export async function getWrongAnswerCount(): Promise<number> {
  const entries = await getWrongAnswerEntries()
  return entries.length
}
