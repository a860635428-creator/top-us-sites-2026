import { supabase } from '../lib/supabase'

export interface WrongAnswerEntry {
  questionId: number
  selectedAnswer: number
  timestamp: number
}

async function getUserId(): Promise<string | null> {
  const { data } = await supabase.auth.getSession()
  return data.session?.user?.id || null
}

// ── Get Wrong Answer IDs (for quick checking) ─────────────
export async function getWrongAnswers(): Promise<number[]> {
  const userId = await getUserId()
  if (!userId) return []

  const { data, error } = await supabase
    .from('wrong_answers')
    .select('question_id')
    .eq('user_id', userId)

  if (error) {
    console.error('[Storage] getWrongAnswers error:', error)
    return []
  }

  return data ? data.map((r: any) => r.question_id) : []
}

// ── Get Full Wrong Answer Entries ─────────────────────────
export async function getWrongAnswerEntries(): Promise<WrongAnswerEntry[]> {
  const userId = await getUserId()
  if (!userId) return []

  const { data, error } = await supabase
    .from('wrong_answers')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[Storage] getWrongAnswerEntries error:', error)
    return []
  }

  return data
    ? data.map((r: any) => ({
        questionId: r.question_id,
        selectedAnswer: r.selected_answer,
        timestamp: new Date(r.created_at).getTime(),
      }))
    : []
}

// ── Add Wrong Answer ─────────────────────────────────────
export async function addWrongAnswer(questionId: number, selectedAnswer: number): Promise<void> {
  const userId = await getUserId()
  if (!userId) return

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
  }
}

// ── Remove Wrong Answer ───────────────────────────────────
export async function removeWrongAnswer(questionId: number): Promise<void> {
  const userId = await getUserId()
  if (!userId) return

  const { error } = await supabase
    .from('wrong_answers')
    .delete()
    .eq('user_id', userId)
    .eq('question_id', questionId)

  if (error) {
    console.error('[Storage] removeWrongAnswer error:', error)
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
