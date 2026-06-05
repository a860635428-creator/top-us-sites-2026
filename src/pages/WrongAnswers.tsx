import { useState } from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../data/questions'

// Mock wrong answers - in real app this would come from localStorage or backend
const mockWrongIds = [1, 3, 7]

const WrongAnswers = () => {
  const [reviewedIds, setReviewedIds] = useState<number[]>([])
  const wrongQuestions = questions.filter(q => mockWrongIds.includes(q.id) && !reviewedIds.includes(q.id))

  const handleMarkReviewed = (id: number) => {
    setReviewedIds(prev => [...prev, id])
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Wrong Answers</h1>
        <p className="text-gray-600">
          Review questions you've answered incorrectly. Focus on your weak areas.
        </p>
      </div>

      {wrongQuestions.length === 0 ? (
        <div className="card text-center py-16">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Wrong Answers!</h2>
          <p className="text-gray-600 mb-8">
            You've reviewed all your incorrect answers. Keep up the great work!
          </p>
          <Link to="/question-bank" className="btn-primary">
            Continue Practicing
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {wrongQuestions.length} question{wrongQuestions.length > 1 ? 's' : ''} to review
            </span>
            <span className="text-sm text-gray-500">
              {reviewedIds.length} reviewed
            </span>
          </div>

          <div className="space-y-4">
            {wrongQuestions.map((q) => (
              <div key={q.id} className="card border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">
                      {q.step.toUpperCase()}
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {q.subject}
                    </span>
                  </div>
                </div>
                <p className="text-gray-900 font-medium mb-4 line-clamp-2">
                  {q.question}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-semibold">
                    Correct Answer: {String.fromCharCode(65 + q.correctAnswer)}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`/quiz/${q.step}`}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Practice Again
                    </Link>
                    <button
                      onClick={() => handleMarkReviewed(q.id)}
                      className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      Mark as Reviewed ✓
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default WrongAnswers
