import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="text-7xl mb-6">🔬</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 — Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        This page doesn't exist. Maybe you were looking for some USMLE practice questions?
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="btn-primary">Back to Home / 返回首页</Link>
        <Link to="/question-bank" className="btn-secondary">Question Bank / 题库</Link>
        <Link to="/mock-exam" className="btn-secondary">Mock Exam / 模拟考试</Link>
      </div>
    </div>
  )
}

export default NotFound
