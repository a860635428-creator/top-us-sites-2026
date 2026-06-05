import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { steps } from '../data/questions'

const MockExam = () => {
  const navigate = useNavigate()
  const [selectedStep, setSelectedStep] = useState<string>('step1')
  const [numQuestions, setNumQuestions] = useState<number>(50)
  const [timeLimit, setTimeLimit] = useState<number>(60) // minutes
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60)
  const [finished, setFinished] = useState(false)

  const totalQuestions = numQuestions

  const handleStart = () => {
    setAnswers(new Array(numQuestions).fill(null))
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
    setFinished(true)
  }

  const answeredCount = answers.filter(a => a !== null).length

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="card">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mock Exam Completed!</h1>
          <p className="text-gray-600 mb-2">
            You answered <span className="font-bold text-blue-600">{answeredCount}</span> out of <span className="font-bold">{totalQuestions}</span> questions.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => { setFinished(false); setStarted(false) }}
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

  if (started) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Timer & Progress */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <div className="text-lg font-bold text-red-600">
            ⏱ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">
            Answered: {answeredCount}/{totalQuestions}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Placeholder Question */}
        <div className="card mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            [Mock Exam Question {currentQuestion + 1}]
            <br />
            <span className="text-base font-normal text-gray-600">
              This is a placeholder for the actual exam question. In the full version, real USMLE-style questions will appear here.
            </span>
          </h2>
          {['A) Option A', 'B) Option B', 'C) Option C', 'D) Option D', 'E) Option E'].map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className={`w-full text-left p-4 rounded-lg border-2 mb-3 transition-all ${
                answers[currentQuestion] === idx
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
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
