import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const checkActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-gray-900">USMLE Prep</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/question-bank"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                checkActive('/question-bank')
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Question Bank
            </Link>
            <Link
              to="/mock-exam"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                checkActive('/mock-exam')
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Mock Exam
            </Link>
            <Link
              to="/wrong-answers"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                checkActive('/wrong-answers')
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Wrong Answers
            </Link>
            <Link
              to="/resources"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                checkActive('/resources')
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Resources
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="btn-primary text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
