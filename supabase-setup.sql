-- ====================================================
-- Supabase setup for USMLE Prep Platform
-- Run this in Supabase SQL Editor:
--   https://zmqtvkswgjjartnwanqi.supabase.co → SQL Editor → New Query
-- ====================================================

-- 1. Create wrong_answers table
CREATE TABLE IF NOT EXISTS public.wrong_answers (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id INT NOT NULL,
  selected_answer INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, question_id)
);

-- 2. Enable Row Level Security
ALTER TABLE public.wrong_answers ENABLE ROW LEVEL SECURITY;

-- 3. Users can read only their own wrong answers
CREATE POLICY "Users can read own wrong answers"
  ON public.wrong_answers
  FOR SELECT
  USING (auth.uid() = user_id);

-- 4. Users can insert only their own wrong answers
CREATE POLICY "Users can insert own wrong answers"
  ON public.wrong_answers
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 5. Users can update only their own wrong answers
CREATE POLICY "Users can update own wrong answers"
  ON public.wrong_answers
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 6. Users can delete only their own wrong answers
CREATE POLICY "Users can delete own wrong answers"
  ON public.wrong_answers
  FOR DELETE
  USING (auth.uid() = user_id);

-- 7. Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_wrong_answers_user_id ON public.wrong_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_wrong_answers_user_question ON public.wrong_answers(user_id, question_id);
