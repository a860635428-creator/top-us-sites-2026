import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <BrowserRouter>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
