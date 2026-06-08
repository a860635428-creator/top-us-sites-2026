import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { questions, steps } from '../data/questions'
import { addWrongAnswer } from '../utils/storage'
import { recordActivity } from '../utils/streak'
import AdBanner from '../components/AdBanner'
import ConfettiCanvas from '../components/ConfettiCanvas'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'

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
  const [timerOn, setTimerOn] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [showConfetti, setShowConfetti] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Report Error modal state
  const [showReport, setShowReport] = useState(false)
  const [reportText, setReportText] = useState('')
  const [reportType, setReportType] = useState('')
  const [reportStatus, setReportStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

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
    setShowConfetti(false)
    setTimeLeft(60)
    stopTimer()
  }, [step, subject])

  // Timer logic
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!timerOn || showResult) {
      stopTimer()
      return
    }
    setTimeLeft(60)
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up — auto-reveal as wrong
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => stopTimer()
  }, [currentIndex, timerOn, showResult, stopTimer])

  // Auto-submit when timer hits 0
  useEffect(() => {
    if (timerOn && timeLeft === 0 && !showResult) {
      setShowResult(true)
      setSelectedAnswer(-1) // no answer selected = wrong
      setWrongAnswers((prev) => [...prev, currentQuestion.id])
      addWrongAnswer(currentQuestion.id, -1)
    }
  }, [timeLeft, timerOn, showResult, currentQuestion.id])

  // Reset timer state on question change
  useEffect(() => {
    if (timerOn && !showResult) {
      setTimeLeft(60)
    }
  }, [currentIndex, timerOn, showResult])

  const handleAnswer = async (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    // Record daily streak activity
    recordActivity()
    if (index !== currentQuestion.correctAnswer) {
      setWrongAnswers(prev => [...prev, currentQuestion.id])
      await addWrongAnswer(currentQuestion.id, index)
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
      <SEO
        title={`${stepLabel} Practice Questions — USMLE Prep`}
        description={`Free USMLE ${stepLabel} practice questions${subject ? ` focused on ${subject.replace(/-/g, ' ')}` : ''}. Interactive quiz with detailed explanations in English, Chinese and Spanish for IMGs.`}
        canonicalPath={`/quiz/${step}${subject ? `/${subject}` : ''}`}
      />
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Question Bank', path: '/question-bank' },
        { label: `${stepLabel}` },
        ...(subject ? [{ label: subject.replace(/-/g, ' ') }] : []),
      ]} />
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
            {/* Timer Toggle */}
            <button
              onClick={() => { setTimerOn(!timerOn); setTimeLeft(60) }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                timerOn
                  ? 'bg-amber-100 text-amber-700 border border-amber-300'
                  : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
              }`}
              title={timerOn ? 'Disable per-question timer' : 'Enable 60-second per-question timer'}
            >
              ⏱ {timerOn ? `${timeLeft}s` : 'Timer'}
            </button>
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

        {/* AI Disclaimer Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r mb-4 text-xs text-amber-800 leading-relaxed">
          <strong>AI-Generated Content / AI 生成内容：</strong>
          This question was generated by AI for educational purposes. Accuracy is not guaranteed.
          Please verify with official resources (First Aid, UWorld, NBME).
          <span className="hidden sm:inline">/ 此题由 AI 生成，仅供学习参考，准确性不予保证，请结合官方资源核实。</span>
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
          {timerOn && (
            <span className={`ml-3 font-bold ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : timeLeft <= 20 ? 'text-amber-600' : 'text-blue-600'}`}>
              ⏱ {timeLeft}s
            </span>
          )}
        </p>
      </div>

      {/* Question Card */}
      <div className="card mb-6">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {currentQuestion.subject}
          </span>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {stepLabel}
          </span>
          {currentQuestion.difficulty && (
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              currentQuestion.difficulty === 'Hard' ? 'bg-red-100 text-red-700' :
              currentQuestion.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {currentQuestion.difficulty}
            </span>
          )}
          {currentQuestion.highYieldTag && (
            <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded">
              🔥 {currentQuestion.highYieldTag}
            </span>
          )}
          {currentQuestion.aiGenerated !== false && (
            <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded">
              🤖 AI
            </span>
          )}
        </div>

        <p className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
          {currentQuestion.question}
        </p>

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
          <p className="text-gray-700 leading-relaxed mb-3">{getExplanation()}</p>
          <p className="text-xs text-gray-400 italic mb-3">
            ⚠️ AI-generated explanation. Please verify with official resources (First Aid, UWorld, NBME) before your exam.
            <span className="hidden sm:inline">/ AI 生成解释，请结合官方资源（First Aid、UWorld、NBME）核实。</span>
          </p>
          <button
            onClick={() => { setShowReport(true); setReportText('') }}
            className="text-xs text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline transition-colors"
          >
            🐛 Report Error / 报告错误
          </button>
        </div>
      )}

      {/* Ad: Every 4th question, between explanation and nav */}
      {selectedAnswer !== null && currentIndex > 0 && currentIndex % 4 === 0 && (
        <AdBanner format="horizontal" className="!my-6" />
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
            onClick={() => {
              setShowConfetti(true)
              setTimeout(() => navigate('/question-bank'), 1800)
            }}
            className="btn-primary bg-green-600 hover:bg-green-700 animate-pulse"
          >
            🎉 Complete! View Results →
          </button>
        )}
      </div>

      {/* Report Error Modal */}
      {showReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowReport(false)}
          />
          {/* Modal */}
          <div className="relative bg-white rounded-2xl p-6 lg:p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Report a Problem / 报告错误</h3>
            <p className="text-xs text-gray-500 mb-4">
              Question #{currentQuestion.id} · {currentQuestion.subject}
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setReportStatus('sending')
                try {
                  const formData = new FormData()
                  formData.append('access_key', 'cb94bc7d-3efb-466a-b5e4-01bc5e4c755a')
                  formData.append('subject', `🚨 Question Error Report #${currentQuestion.id}`)
                  formData.append('question_id', String(currentQuestion.id))
                  formData.append('question_subject', currentQuestion.subject)
                  formData.append('question_text', currentQuestion.question.slice(0, 200))
                  formData.append('user_comment', `[${reportType}] ${reportText}`)
                  formData.append('page_url', window.location.href)
                  formData.append('from_name', 'USMLE Prep User')
                  const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
                  const data = await res.json()
                  if (data.success) {
                    setReportStatus('sent')
                    setTimeout(() => { setShowReport(false); setReportStatus('idle'); setReportText('') }, 2000)
                  } else {
                    setReportStatus('error')
                  }
                } catch {
                  setReportStatus('error')
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What's wrong? / 问题描述</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="">-- Select / 选择 --</option>
                  <option value="wrong-answer">Wrong answer / 答案错误</option>
                  <option value="typo">Typo / 错别字</option>
                  <option value="confusing">Confusing explanation / 解释不清楚</option>
                  <option value="outdated">Outdated info / 信息过时</option>
                  <option value="other">Other / 其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Details (optional) / 详细说明</label>
                <textarea
                  value={reportText}
                  onChange={ev => setReportText(ev.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the issue... / 描述问题..."
                />
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => { setShowReport(false); setReportStatus('idle'); setReportText('') }}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={reportStatus === 'sending'}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {reportStatus === 'sending' ? 'Sending...' : reportStatus === 'sent' ? '✓ Sent!' : 'Submit / 提交'}
                </button>
              </div>
              {reportStatus === 'sent' && (
                <p className="text-sm text-green-600 text-center">Thank you! We'll review this question. / 感谢反馈！</p>
              )}
              {reportStatus === 'error' && (
                <p className="text-sm text-red-600 text-center">Failed to send. Please email us directly. / 发送失败，请直接发邮件。</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Celebration confetti on completion */}
      <ConfettiCanvas active={showConfetti} />
    </div>
  )
}

export default Quiz
