const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-lg font-bold text-white">USMLE Prep</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Study in English, Understand in Your Language.
            </p>
            <p className="text-xs text-gray-500">
              © 2026 USMLE Prep. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/question-bank" className="hover:text-white transition-colors">Question Bank</a></li>
              <li><a href="/mock-exam" className="hover:text-white transition-colors">Mock Exam</a></li>
              <li><a href="/wrong-answers" className="hover:text-white transition-colors">Wrong Answers</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Step Exams */}
          <div>
            <h3 className="text-white font-semibold mb-4">USMLE Steps</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/quiz/step1" className="hover:text-white transition-colors">Step 1</a></li>
              <li><a href="/quiz/step2" className="hover:text-white transition-colors">Step 2 CK</a></li>
              <li><a href="/quiz/step3" className="hover:text-white transition-colors">Step 3</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explanations in</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>🇨🇳</span> Chinese (中文)
              </li>
              <li className="flex items-center gap-2">
                <span>🇪🇸</span> Spanish (Español)
              </li>
              <li className="flex items-center gap-2">
                <span>🇺🇸</span> English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
