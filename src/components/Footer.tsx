import { Link } from 'react-router-dom'

const Footer = () => {
  const buildDate = '2026-06-06'
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Global Disclaimer Banner */}
      <div className="bg-amber-900/40 border-b border-amber-700/50 px-4 py-3 text-center text-xs leading-relaxed text-amber-200">
        <strong className="text-amber-100">Disclaimer / 免责声明：</strong>
        This site is <strong>not affiliated</strong> with NBME, USMLE, or FSMB.
        All practice questions are <strong>AI-generated</strong> for educational purposes only.
        Accuracy is not guaranteed — please verify with official resources.
        <span className="hidden sm:inline"> / 本网站与 NBME、USMLE 或 FSMB <strong>无关</strong>。所有练习题均为 <strong>AI 生成</strong>，仅供教育目的。准确性不予保证——请与官方资源核实。</span>
      </div>
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
              <li><Link to="/question-bank" className="hover:text-white transition-colors">Question Bank</Link></li>
              <li><Link to="/mock-exam" className="hover:text-white transition-colors">Mock Exam</Link></li>
              <li><Link to="/wrong-answers" className="hover:text-white transition-colors">Wrong Answers</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Step Exams */}
          <div>
            <h3 className="text-white font-semibold mb-4">USMLE Steps</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/quiz/step1" className="hover:text-white transition-colors">Step 1</Link></li>
              <li><Link to="/quiz/step2" className="hover:text-white transition-colors">Step 2 CK</Link></li>
              <li><Link to="/quiz/step3" className="hover:text-white transition-colors">Step 3</Link></li>
            </ul>
          </div>

          {/* Legal & Languages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li className="text-gray-500">Explanations: English · 中文 · Español</li>
              <li className="text-gray-500 text-xs mt-2">External links are not owned by us. Resource recommendations are for reference only.</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 USMLE Prep Platform. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <a href="mailto:a860635428@gmail.com" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <p className="text-gray-600">Last updated: {buildDate}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
