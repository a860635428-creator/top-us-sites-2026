import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getUser, clearUser, onAuthChange, isOfflineMode, type User } from '../utils/auth'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [offline, setOffline] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Initial auth check + Supabase auth state listener
  useEffect(() => {
    const init = async () => {
      const currentUser = await getUser()
      setLoggedIn(!!currentUser)
      setUser(currentUser)
      setOffline(isOfflineMode())
    }
    init()

    // Listen for Supabase auth state changes
    const unsubscribe = onAuthChange((authUser) => {
      setLoggedIn(!!authUser)
      setUser(authUser)
      setOffline(isOfflineMode())
    })

    return () => unsubscribe()
  }, [])

  // Re-check auth on route change
  useEffect(() => {
    const check = async () => {
      const currentUser = await getUser()
      setLoggedIn(!!currentUser)
      setUser(currentUser)
      setOffline(isOfflineMode())
    }
    check()
  }, [location.key])

  const checkActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const handleLogout = async () => {
    await clearUser()
    setLoggedIn(false)
    setUser(null)
    setMenuOpen(false)
    navigate('/')
  }

  const closeMenus = () => {
    setMenuOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenus}>
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-gray-900">USMLE Prep</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Question Bank', path: '/question-bank' },
              { label: 'Mock Exam', path: '/mock-exam' },
              { label: 'Wrong Answers', path: '/wrong-answers' },
              { label: 'Resources', path: '/resources' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  checkActive(path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {loggedIn && user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[120px] truncate hidden lg:inline">{user.name}</span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {menuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                        <div className="text-xs text-gray-500 truncate">{user.email}</div>
                        {offline && (
                          <div className="text-[10px] text-amber-600 mt-1 font-medium">
                            Offline mode — progress saved locally
                          </div>
                        )}
                      </div>
                      <Link
                        to="/wrong-answers"
                        onClick={() => setMenuOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        📝 My Wrong Answers
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-1">
            {[
              { label: 'Question Bank', path: '/question-bank' },
              { label: 'Mock Exam', path: '/mock-exam' },
              { label: 'Wrong Answers', path: '/wrong-answers' },
              { label: 'Resources', path: '/resources' },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenus}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  checkActive(path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3">
              {loggedIn && user ? (
                <>
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Signed in as <span className="font-medium text-gray-900">{user.name}</span>
                    {offline && (
                      <span className="block text-[10px] text-amber-600 mt-0.5">Offline mode — progress saved locally</span>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="flex gap-3 px-3">
                  <Link
                    to="/login"
                    onClick={closeMenus}
                    className="flex-1 text-center py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenus}
                    className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
