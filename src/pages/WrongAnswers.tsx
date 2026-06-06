import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { getWrongAnswers, removeWrongAnswer } from '../utils/storage'
import SEO from '../components/SEO'

const WrongAnswers = () => {
  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>([])
  const [showingAnswer, setShowingAnswer] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    setLoading(true)
    const ids = await getWrongAnswers()
    setWrongQuestionIds(ids)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const wrongQuestions = questions.filter(q => wrongQuestionIds.includes(q.id))

  const handleRemove = async (id: number) => {
    await removeWrongAnswer(id)
    setWrongQuestionIds(prev => prev.filter(qid => qid !== id))
    if (showingAnswer === id) setShowingAnswer(null)
  }

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to clear all wrong answers?')) {
      for (const id of wrongQuestionIds) {
        await removeWrongAnswer(id)
      }
      setWrongQuestionIds([])
      setShowingAnswer(null)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-500">Loading your wrong answers...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="Wrong Answer Review — USMLE Practice"
        description="Review your incorrectly answered USMLE practice questions. Identify weak areas, understand correct answers, and improve your Step 1, Step 2 CK, and Step 3 exam scores with targeted review."
        canonicalPath="/wrong-answers"
      />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">USMLE Wrong Answer Review — Learn From Your Mistakes</h1>
        <p className="text-gray-600">
          Review and re-study USMLE questions you've answered incorrectly. Master weak areas with focused practice.
        </p>
      </div>

      {wrongQuestions.length === 0 ? (
        <div className="card text-center py-16">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Wrong Answers Yet!</h2>
          <p className="text-gray-600 mb-8">
            Start practicing questions — any incorrect answers will appear here for review.
          </p>
          <Link to="/question-bank" className="btn-primary">
            Start Practicing
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {wrongQuestions.length} question{wrongQuestions.length > 1 ? 's' : ''} to review
            </span>
            <button
              onClick={handleClearAll}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-4">
            {wrongQuestions.map((q) => (
              <div key={q.id} className="card border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">
                      {q.step.toUpperCase()}
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {q.subject}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemove(q.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    title="Remove from wrong answers"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-900 font-medium mb-3">{q.question}</p>

                {/* Toggle: Show Answer */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowingAnswer(showingAnswer === q.id ? null : q.id)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showingAnswer === q.id ? 'Hide Answer' : 'Show Correct Answer'}
                  </button>
                  <Link
                    to={`/quiz/${q.step}`}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Practice Again →
                  </Link>
                </div>

                {showingAnswer === q.id && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      <span className="font-bold">Correct Answer: {String.fromCharCode(65 + q.correctAnswer)}</span>
                      {' — '}{q.options[q.correctAnswer]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default WrongAnswers
