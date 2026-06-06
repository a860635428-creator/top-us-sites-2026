import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuestionBank from './pages/QuestionBank'
import Quiz from './pages/Quiz'
import MockExam from './pages/MockExam'
import WrongAnswers from './pages/WrongAnswers'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Register from './pages/Register'
import Privacy from './pages/Privacy'
import TermsOfService from './pages/TermsOfService'
import About from './pages/About'

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

function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
