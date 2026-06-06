import { useState } from 'react'
import { Link } from 'react-router-dom'
import { steps, subjects } from '../data/questions'
import AdBanner from '../components/AdBanner'
import SEO from '../components/SEO'

const QuestionBank = () => {
  const [selectedStep, setSelectedStep] = useState<string>('step1')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="USMLE Question Bank 鈥?Step 1, 2 & 3 Practice Questions"
        description="Browse 1069+ free USMLE practice questions organized by Step 1, Step 2 CK, and Step 3. Filter by subject area including Pathology, Pharmacology, Internal Medicine, and more. No signup required."
        canonicalPath="/question-bank"
      />
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">USMLE Question Bank 鈥?Step 1, 2 & 3 Practice Questions</h1>
        <p className="text-gray-600">
          Browse 1069+ free USMLE practice questions across all steps. Filter by subject to focus your study.
        </p>
      </div>

      {/* Step Selector */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setSelectedStep(step.id)}
            className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${
              selectedStep === step.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* Step Description */}
      {steps.map((step) => (
        <div key={step.id} className={selectedStep === step.id ? 'block' : 'hidden'}>
          <p className="text-gray-600 mb-6">{step.description}</p>

          {/* Subject Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects[step.id as keyof typeof subjects]?.map((subject) => (
              <Link
                key={subject}
                to={`/quiz/${step.id}/${subject.replace(/\s+/g, '-').toLowerCase()}`}
                className="card hover:border-blue-300 border-2 border-transparent group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {subject}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Practice questions
                    </p>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    鈫?                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Start - All Questions */}
          <div className="mt-6">
            <Link
              to={`/quiz/${step.id}`}
              className="btn-primary inline-block mb-6"
            >
              Practice All {step.label} Questions
            </Link>
          </div>
          <AdBanner format="horizontal" className="!mt-2" />
        </div>
      ))}
    </div>
  )
}

export default QuestionBank
