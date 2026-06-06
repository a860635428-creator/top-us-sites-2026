import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy-load all pages for route-based code splitting
const Home = lazy(() => import('./pages/Home'))
const QuestionBank = lazy(() => import('./pages/QuestionBank'))
const Quiz = lazy(() => import('./pages/Quiz'))
const MockExam = lazy(() => import('./pages/MockExam'))
const WrongAnswers = lazy(() => import('./pages/WrongAnswers'))
const Resources = lazy(() => import('./pages/Resources'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Privacy = lazy(() => import('./pages/Privacy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const About = lazy(() => import('./pages/About'))
const ProgressDashboard = lazy(() => import('./pages/ProgressDashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback for lazy routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

// Track page views for Google Analytics (SPA-friendly)
const RouteTracker = () => {
  const location = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
      const gtag = (window as unknown as Record<string, (...args: unknown[]) => void>).gtag
      gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      })
    }
  }, [location])
  return null
}

// Back to Top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center text-lg"
      title="Back to top"
    >
      ↑
    </button>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteTracker />
        <BackToTop />
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question-bank" element={<QuestionBank />} />
                <Route path="/quiz/:step/:subject?" element={<Quiz />} />
                <Route path="/mock-exam" element={<MockExam />} />
                <Route path="/wrong-answers" element={<WrongAnswers />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<ProgressDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
