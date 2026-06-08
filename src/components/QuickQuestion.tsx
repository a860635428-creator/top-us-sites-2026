import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'

/**
 * Homepage teaser: "Try one free question now!"
 * Randomly selects one medium-difficulty question and lets users answer it inline.
 * After answering, shows result and a CTA to continue practicing.
 */
export default function QuickQuestion() {
  // Pick a random question (stable during this mount)
  const question = useMemo(() => {
    const pool = questions.filter((q) => q.difficulty === 'Medium' || q.difficulty === 'Easy')
    return pool[Math.floor(Math.random() * pool.length)]
  }, [])

  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  if (!question) return null

  const isCorrect = selected === question.correctAnswer

  const handleSelect = (idx: number) => {
    if (revealed) return
    setSelected(idx)
    setRevealed(true)
  }

  const stepLabel =
    question.step === 'step1' ? 'Step 1' : question.step === 'step2' ? 'Step 2 CK' : 'Step 3'

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-10 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚡</span>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Try a Free Question
              </h2>
              <p className="text-gray-600 text-sm mt-0.5">
                See the quality of our questions and multi-language explanations for yourself.
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                {stepLabel}
              </span>
              <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full">
                {question.subject}
              </span>
            </div>
          </div>

          {/* Question text */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 mb-5 shadow-sm">
            <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
              {question.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5 mb-5">
            {question.options.map((opt, idx) => {
              let bg = 'bg-white hover:bg-blue-50 border-gray-200'
              let ring = ''
              if (revealed) {
                if (idx === question.correctAnswer) {
                  bg = 'bg-green-50 border-green-400'
                  ring = 'ring-1 ring-green-500'
                } else if (idx === selected && !isCorrect) {
                  bg = 'bg-red-50 border-red-400'
                  ring = 'ring-1 ring-red-500'
                } else {
                  bg = 'bg-gray-50 border-gray-200 opacity-60'
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={revealed}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${bg} ${ring} ${!revealed ? 'hover:ring-1 hover:ring-blue-300 hover:-translate-y-0.5' : ''}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-gray-800 text-sm sm:text-base">{opt}</span>
                    {revealed && idx === question.correctAnswer && (
                      <span className="text-green-600 text-lg ml-auto">✅</span>
                    )}
                    {revealed && idx === selected && !isCorrect && (
                      <span className="text-red-600 text-lg ml-auto">❌</span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Result feedback */}
          {revealed && (
            <div className={`rounded-xl p-5 mb-5 border ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{isCorrect ? '🎉' : '💡'}</span>
                <span className={`font-bold text-lg ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? "That's correct! Well done." : 'Not quite — here\'s the explanation.'}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {question.explanationEn}
              </p>

              {/* Multi-language hint */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                  🇺🇸 English
                </span>
                <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full">
                  🇨🇳 {question.explanationZh.length > 80
                    ? question.explanationZh.slice(0, 80) + '...'
                    : question.explanationZh}
                </span>
                <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                  🇪🇸 {question.explanationEs.length > 80
                    ? question.explanationEs.slice(0, 80) + '...'
                    : question.explanationEs}
                </span>
              </div>
            </div>
          )}

          {/* CTA after reveal */}
          {revealed && (
            <div className="text-center">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Ready to practice more? 1069+ questions across all 3 Steps.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to={`/quiz/${question.step}`}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Continue {stepLabel} Practice →
                </Link>
                <Link
                  to="/question-bank"
                  className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Browse All Questions
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
