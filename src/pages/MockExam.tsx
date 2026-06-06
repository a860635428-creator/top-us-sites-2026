import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions, steps } from '../data/questions'
import { addWrongAnswer } from '../utils/storage'

type Question = typeof questions[number]
type Lang = 'en' | 'zh' | 'es'

const langLabels: Record<Lang, string> = { en: 'English', zh: '中文', es: 'Español' }

const MockExam = () => {
  const navigate = useNavigate()
  const [selectedStep, setSelectedStep] = useState<string>('step1')
  const [numQuestions, setNumQuestions] = useState<number>(50)
  const [timeLimit, setTimeLimit] = useState<number>(60)
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [timeLeft, setTimeLeft] = useState(60 * 60)
  const [finished, setFinished] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewLang, setReviewLang] = useState<Lang>('en')
  const [examQuestions, setExamQuestions] = useState<Question[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Timer
  useEffect(() => {
    if (started && !finished) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!)
            setFinished(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [started, finished])

  const totalQuestions = examQuestions.length

  const handleStart = () => {
    // Filter questions by step and randomly pick
    const filtered = questions.filter(q => q.step === selectedStep)
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length))
    setExamQuestions(selected)
    setAnswers(new Array(selected.length).fill(null))
    setStarted(true)
    setCurrentQuestion(0)
    setTimeLeft(timeLimit * 60)
    setFinished(false)
  }

  const handleAnswer = (answerIdx: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIdx
    setAnswers(newAnswers)
  }

  const handleFinish = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    // Record wrong answers to Supabase
    answers.forEach((ans, idx) => {
      if (ans !== null && ans !== examQuestions[idx].correctAnswer) {
        addWrongAnswer(examQuestions[idx].id, ans)
      }
    })
    setFinished(true)
  }

  const correctCount = answers.reduce<number>((count, ans, idx) => {
    if (ans === null || ans === undefined) return count
    return ans === examQuestions[idx].correctAnswer ? count + 1 : count
  }, 0)

  const answeredCount = answers.filter(a => a !== null).length

  if (finished) {
    // Review mode: show each question with answer & explanation
    if (reviewMode) {
      const q = examQuestions[reviewIndex]
      const userAnswer = answers[reviewIndex]
      const isCorrect = userAnswer === q.correctAnswer
      const options = q.options

      const getExplanation = () => {
        switch (reviewLang) {
          case 'zh': return q.explanationZh
          case 'es': return q.explanationEs
          default: return q.explanationEn
        }
      }

      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Review Answers</h1>
            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setReviewLang(l)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      reviewLang === l ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {reviewIndex + 1} / {totalQuestions}
              </span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((reviewIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          <div className="card mb-6">
            <div className="flex gap-2 mb-4">
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {q.step.toUpperCase()}
              </span>
              <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {q.subject}
              </span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isCorrect ? '✓ Correct' : '✗ Incorrect'}
              </span>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
              {q.question}
            </h2>

            {options.map((opt, idx) => {
              let optClass = 'w-full text-left p-4 rounded-lg border-2 mb-3 transition-all '
              if (idx === q.correctAnswer) {
                optClass += 'border-green-500 bg-green-50 text-green-800'
              } else if (idx === userAnswer && userAnswer !== q.correctAnswer) {
                optClass += 'border-red-500 bg-red-50 text-red-800'
              } else {
                optClass += 'border-gray-200 bg-gray-50 text-gray-500'
              }

              return (
                <div key={idx} className={optClass}>
                  <div className="flex items-start gap-3">
                    <span className={`font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      idx === q.correctAnswer ? 'bg-green-500 text-white' :
                      idx === userAnswer && userAnswer !== q.correctAnswer ? 'bg-red-500 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="pt-1">{opt}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Explanation */}
          <div className="card mb-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-900 mb-3">
              Explanation ({langLabels[reviewLang]})
            </h3>
            <p className="text-gray-700 leading-relaxed">{getExplanation()}</p>
          </div>

          {/* Review Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))}
              disabled={reviewIndex === 0}
              className="px-6 py-2 rounded-lg border-2 border-gray-300 disabled:opacity-50"
            >
              ← Previous
            </button>

            {reviewIndex < totalQuestions - 1 ? (
              <button onClick={() => setReviewIndex(reviewIndex + 1)} className="btn-primary">
                Next →
              </button>
            ) : (
              <button
                onClick={() => { setReviewMode(false); setReviewIndex(0) }}
                className="btn-primary bg-green-600 hover:bg-green-700"
              >
                Back to Results
              </button>
            )}
          </div>
        </div>
      )
    }

    // Results screen
    const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
    const scoreFeedback = scorePercent >= 80 ? { emoji: '🏆', text: 'Excellent work! You\'re well prepared.' }
      : scorePercent >= 60 ? { emoji: '👍', text: 'Good job! Keep practicing to improve.' }
      : { emoji: '📚', text: 'Keep studying! Focus on weak areas.' }

    const shareText = `I scored ${scorePercent}% on the USMLE ${selectedStep === 'step1' ? 'Step 1' : selectedStep === 'step2' ? 'Step 2 CK' : 'Step 3'} mock exam at hebin.fun! 🩺 Free practice for IMGs.`
    const shareUrl = 'https://hebin.fun'

    const handleShare = () => {
      if (navigator.share) {
        navigator.share({ title: 'My USMLE Mock Exam Score', text: shareText, url: shareUrl })
      } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
      }
    }

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="card">
          <div className="text-6xl mb-6">{scoreFeedback.emoji}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Exam Completed!</h1>
          <p className="text-gray-500 mb-6">{scoreFeedback.text}</p>

          <div className="bg-blue-50 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-bold text-blue-600 mb-2">{scorePercent}%</div>
            <p className="text-gray-600">
              You got <span className="font-bold text-blue-600">{correctCount}</span> out of{' '}
              <span className="font-bold">{totalQuestions}</span> correct
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Questions answered: {answeredCount}/{totalQuestions}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button
              onClick={() => { setReviewMode(true); setReviewIndex(0) }}
              className="btn-primary bg-purple-600 hover:bg-purple-700"
            >
              📋 Review All Answers
            </button>
            <button
              onClick={handleShare}
              className="btn-primary bg-sky-500 hover:bg-sky-600"
            >
              🐦 Share Your Score
            </button>
            <button
              onClick={() => { setFinished(false); setStarted(false); setExamQuestions([]) }}
              className="btn-primary"
            >
              Take Another Exam
            </button>
            <button
              onClick={() => navigate('/question-bank')}
              className="btn-secondary"
            >
              Back to Question Bank
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (started && examQuestions.length > 0) {
    const q = examQuestions[currentQuestion]
    const options = q.options
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timer & Progress */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <div className={`text-lg font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-900'}`}>
            ⏱ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">
            Answered: {answeredCount}/{totalQuestions}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="card mb-6">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {q.step.toUpperCase()}
            </span>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {q.subject}
            </span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
            {q.question}
          </h2>
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className={`w-full text-left p-4 rounded-lg border-2 mb-3 transition-all ${
                answers[currentQuestion] === idx
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)})</span>
              {opt}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-2 rounded-lg border-2 border-gray-300 disabled:opacity-50"
          >
            ← Previous
          </button>
          {currentQuestion < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className="btn-primary"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="btn-primary bg-green-600 hover:bg-green-700"
            >
              Finish Exam
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Exam</h1>
        <p className="text-gray-600">
          Simulate the real USMLE exam experience with timed practice sessions.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Exam Settings</h2>

        {/* Step Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Select Step</label>
          <div className="flex gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStep(s.id)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  selectedStep === s.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Questions */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Number of Questions: {numQuestions}
          </label>
          <input
            type="range"
            min="10"
            max="100"
            step="10"
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>10</span>
            <span>100</span>
          </div>
        </div>

        {/* Time Limit */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Time Limit: {timeLimit} minutes
          </label>
          <input
            type="range"
            min="15"
            max="180"
            step="15"
            value={timeLimit}
            onChange={(e) => setTimeLimit(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>15 min</span>
            <span>180 min</span>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="btn-primary w-full text-lg py-3"
        >
          Start Mock Exam
        </button>
      </div>
    </div>
  )
}

export default MockExam
