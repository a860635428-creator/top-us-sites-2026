import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { questions, steps } from '../data/questions'

type Lang = 'en' | 'zh' | 'es'

const langLabels: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español'
}

const Quiz = () => {
  const { step, subject } = useParams<{ step: string; subject?: string }>()
  const navigate = useNavigate()
  const [lang, setLang] = useState<Lang>('en')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([])

  // Filter questions by step and optional subject
  const filteredQuestions = questions.filter((q) => {
    if (subject) {
      const subjectName = subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      return q.step === step && q.subject.toLowerCase() === subjectName.toLowerCase()
    }
    return q.step === step
  })

  const currentQuestion = filteredQuestions[currentIndex]
  const progress = filteredQuestions.length > 0 ? ((currentIndex + 1) / filteredQuestions.length) * 100 : 0

  useEffect(() => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }, [step, subject])

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    if (index !== currentQuestion.correctAnswer) {
      setWrongAnswers(prev => [...prev, currentQuestion.id])
    }
  }

  const nextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">No Questions Found</h1>
        <p className="text-gray-600 mb-8">
          No questions available for this step/subject combination yet.
        </p>
        <button
          onClick={() => navigate('/question-bank')}
          className="btn-primary"
        >
          Back to Question Bank
        </button>
      </div>
    )
  }

  const getExplanation = () => {
    switch (lang) {
      case 'zh': return currentQuestion.explanationZh
      case 'es': return currentQuestion.explanationEs
      default: return currentQuestion.explanationEn
    }
  }

  const stepLabel = steps.find(s => s.id === step)?.label || step

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {stepLabel} Practice
            </h1>
            {subject && (
              <p className="text-gray-600">{subject.replace(/-/g, ' ')}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    lang === l
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Question {currentIndex + 1} of {filteredQuestions.length}
        </p>
      </div>

      {/* Question Card */}
      <div className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {currentQuestion.subject}
          </span>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {stepLabel}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let optionClass = 'w-full text-left p-4 rounded-lg border-2 transition-all '

            if (!showResult) {
              optionClass += selectedAnswer === idx
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
            } else {
              if (idx === currentQuestion.correctAnswer) {
                optionClass += 'border-green-500 bg-green-50 text-green-800'
              } else if (idx === selectedAnswer && idx !== currentQuestion.correctAnswer) {
                optionClass += 'border-red-500 bg-red-50 text-red-800'
              } else {
                optionClass += 'border-gray-200 bg-gray-50 text-gray-500'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={optionClass}
                disabled={showResult}
              >
                <div className="flex items-start gap-3">
                  <span className={`font-bold flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    showResult && idx === currentQuestion.correctAnswer
                      ? 'bg-green-500 text-white'
                      : showResult && idx === selectedAnswer && idx !== currentQuestion.correctAnswer
                      ? 'bg-red-500 text-white'
                      : selectedAnswer === idx
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="pt-1">{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Explanation (shown after answering) */}
      {showResult && (
        <div className="card mb-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-900 mb-3">
            Explanation ({langLabels[lang]})
          </h3>
          <p className="text-gray-700 leading-relaxed">{getExplanation()}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-600 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <span className="text-sm text-gray-500">
          Wrong: {wrongAnswers.length}
        </span>

        {currentIndex < filteredQuestions.length - 1 ? (
          <button
            onClick={nextQuestion}
            className="btn-primary"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => navigate('/question-bank')}
            className="btn-primary bg-green-600 hover:bg-green-700"
          >
            Finish ✓
          </button>
        )}
      </div>
    </div>
  )
}

export default Quiz
