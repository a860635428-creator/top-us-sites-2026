import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { questions, steps } from '../data/questions'
import { getWrongAnswers } from '../utils/storage'

interface ExamHistoryEntry {
  step: string
  totalQuestions: number
  correctCount: number
  timeSpent: number
  date: string
}

const ProgressDashboard = () => {
  const navigate = useNavigate()
  const [wrongAnswerIds, setWrongAnswerIds] = useState<number[]>([])
  const [examHistory, setExamHistory] = useState<ExamHistoryEntry[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'weak'>('overview')

  useEffect(() => {
    // Load wrong answers
    getWrongAnswers().then(setWrongAnswerIds).catch(() => {})

    // Load exam history
    try {
      const history = JSON.parse(localStorage.getItem('usmle_exam_history') || '[]')
      setExamHistory(history)
    } catch {
      setExamHistory([])
    }
  }, [])

  // Compute stats
  const wrongByStep: Record<string, number> = {}
  const wrongBySubject: Record<string, number> = {}

  wrongAnswerIds.forEach(id => {
    const q = questions.find(q => q.id === id)
    if (!q) return
    wrongByStep[q.step] = (wrongByStep[q.step] || 0) + 1
    wrongBySubject[q.subject] = (wrongBySubject[q.subject] || 0) + 1
  })

  const totalQuestions = questions.length
  const totalWrong = wrongAnswerIds.length
  const weakSubjects = Object.entries(wrongBySubject)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  // Accuracy rate (if we have exam history)
  const avgScore = examHistory.length > 0
    ? Math.round(examHistory.reduce((sum, e) => sum + (e.correctCount / e.totalQuestions) * 100, 0) / examHistory.length)
    : null

  const totalQuestionsByStep = (stepId: string) =>
    questions.filter(q => q.step === stepId).length

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-flex items-center gap-1"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress Dashboard</h1>
        <p className="text-gray-600">Track your USMLE prep journey — focus on weak areas to improve.</p>
        {wrongAnswerIds.length === 0 && examHistory.length === 0 && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              👋 <strong>New here?</strong> Start practicing to unlock your dashboard!
              <span className="hidden sm:inline"> / 开始做题，解锁个人仪表盘！</span>
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Your wrong answers and mock exam results will appear here automatically.
              <span className="hidden sm:inline"> / 错题和模拟考试成绩会自动记录在这里。</span>
            </p>
          </div>
        )}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Questions', value: totalQuestions, color: 'blue', icon: '📚' },
          { label: 'Wrong Answers', value: totalWrong, color: 'red', icon: '❌' },
          { label: 'Accuracy', value: avgScore !== null ? `${avgScore}%` : 'N/A', color: 'green', icon: '📊' },
          { label: 'Exams Taken', value: examHistory.length, color: 'purple', icon: '📝' },
        ].map((stat, i) => {
          const borderColorMap: Record<string, string> = {
            blue: 'border-t-4 border-blue-500',
            red: 'border-t-4 border-red-500',
            green: 'border-t-4 border-green-500',
            purple: 'border-t-4 border-purple-500',
          }
          const textColorMap: Record<string, string> = {
            blue: 'text-blue-600',
            red: 'text-red-600',
            green: 'text-green-600',
            purple: 'text-purple-600',
          }
          return (
          <div key={i} className={`bg-white rounded-2xl p-5 shadow-sm ${borderColorMap[stat.color] || 'border-t-4 border-blue-500'}`}>
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className={`text-2xl font-bold ${textColorMap[stat.color] || 'text-blue-600'}`}>{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        )})}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {([
          { key: 'overview', label: '📊 Overview / 总览' },
          { key: 'weak', label: '🎯 Weak Areas / 薄弱项' },
        ] as { key: 'overview' | 'weak'; label: string }[]).map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Wrong Answers by Step */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Wrong Answers by Step / 各 Step 错题分布</h2>
            <div className="space-y-3">
              {steps.map(s => {
                const count = wrongByStep[s.id] || 0
                const total = totalQuestionsByStep(s.id)
                const pct = total > 0 ? Math.round((count / total) * 100) : 0
                return (
                  <div key={s.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{s.label}</span>
                      <span className="text-gray-500">{count} wrong / {total} total</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all ${pct > 30 ? 'bg-red-500' : pct > 15 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Exam History */}
          {examHistory.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Mock Exam History / 模拟考试记录</h2>
              <div className="space-y-3">
                {examHistory.slice(-5).reverse().map((exam, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{exam.step.toUpperCase()}</span>
                      <span className="text-xs text-gray-500 ml-2">{exam.totalQuestions} questions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${exam.correctCount / exam.totalQuestions >= 0.8 ? 'text-green-600' : exam.correctCount / exam.totalQuestions >= 0.6 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {Math.round((exam.correctCount / exam.totalQuestions) * 100)}%
                      </span>
                      <span className="text-xs text-gray-400">{new Date(exam.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'weak' && (
        <div className="space-y-6">
          {/* Weak Subjects */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">🔥 Weakest Subjects / 最薄弱科目</h2>
            {weakSubjects.length === 0 ? (
              <p className="text-gray-500 text-sm py-4 text-center">No wrong answer data yet. Start practicing to see your weak areas! / 暂无数据，开始练习后显示薄弱科目。</p>
            ) : (
              <div className="space-y-3">
                {weakSubjects.map(([subject, count], idx) => {
                  const total = questions.filter(q => q.subject === subject).length
                  return (
                    <div key={subject} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <span className="text-lg">{['🥇', '🥈', '🥉', '④', '⑤'][idx]}</span>
                      <div className="flex-grow">
                        <div className="font-medium text-gray-900">{subject}</div>
                        <div className="text-xs text-gray-500">{count} wrong out of {total} questions</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="h-2 rounded-full bg-red-500"
                            style={{ width: `${Math.min(Math.round((count / total) * 100), 100)}%` }}
                          />
                        </div>
                      </div>
                      <Link
                        to={`/quiz/${questions.find(q => q.subject === subject)?.step || 'step1'}/${subject.toLowerCase().replace(/\s+/g, '-')}`}
                        className="btn-primary text-sm whitespace-nowrap"
                      >
                        Practice / 练习 →
                      </Link>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Study Tips for Weak Areas */}
          {weakSubjects.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">💡 Study Tips for Your Weak Areas</h2>
              <div className="space-y-3">
                {weakSubjects.slice(0, 3).map(([subject]) => (
                  <div key={subject} className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{subject}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {subject === 'Pathology' && 'Focus on mechanism-based learning. Use Pathoma Chapters 1-3 for fundamentals. / 重点理解发病机制，配合 Pathoma 1-3 章打基础。'}
                      {subject === 'Pharmacology' && 'Use Sketchy or Picmonic for memorization. Focus on side effects and mechanisms. / 用 Sketchy 记忆，重点掌握副作用和机制。'}
                      {subject === 'Internal Medicine' && 'Practice more CCS cases for Step 3. Review UpToDate for guidelines. / Step 3 多做 CCS 模拟，复习 UpToDate 指南。'}
                      {subject === 'Physiology' && 'Master the "why" behind every concept. First Aid physiology section is high-yield. / 理解每个概念的"为什么"，First Aid 生理部分是高频考点。'}
                      {subject === 'Surgery' && 'Focus on pre-op clearance, post-op complications, and cancer staging. / 重点：术前评估、术后并发症、癌症分期。'}
                      {!['Pathology', 'Pharmacology', 'Internal Medicine', 'Physiology', 'Surgery'].includes(subject) &&
                        'Review First Aid related sections and do 10 practice questions daily for this subject. / 每天做 10 道该科目练习题，结合 First Aid 复习相关章节。'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4">🚀 Quick Actions / 快速操作</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link to="/quiz/step1" className="btn-primary text-center">Practice Step 1 →</Link>
          <Link to="/quiz/step2" className="btn-primary text-center bg-green-600 hover:bg-green-700">Practice Step 2 →</Link>
          <Link to="/mock-exam" className="btn-primary text-center bg-purple-600 hover:bg-purple-700">Take Mock Exam →</Link>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center mt-8">
        ⚠️ Data is stored locally in your browser. Clearing browser data will reset your progress.
        / 数据存储在浏览器本地，清除浏览器数据会重置进度。
      </p>
    </div>
  )
}

export default ProgressDashboard
