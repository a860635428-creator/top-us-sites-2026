import { Link } from 'react-router-dom'

const Footer = () => {
  const buildDate = '2026-06-10'
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Global Disclaimer Banner */}
      <div className="bg-amber-900/40 border-b border-amber-700/50 px-4 py-3 text-center text-xs leading-relaxed text-amber-200">
        <p><strong className="text-amber-100">Disclaimer / 免责声明：</strong></p>
        <p className="mt-1">
          USMLE<strong>&reg;</strong> is a registered trademark of the National Board of Medical Examiners (NBME) and the Federation of State Medical Boards (FSMB).
          This site is <strong>not affiliated</strong> with, endorsed by, or sponsored by NBME, USMLE, or FSMB.
        </p>
        <p className="mt-1">
          Practice questions are <strong>AI-generated</strong> for educational reference only.
          Content does <strong>NOT</strong> constitute medical advice, diagnosis, or treatment.
          Accuracy is not guaranteed — please verify with official resources. Found an error? <a href="mailto:a860635428@gmail.com" className="text-amber-100 hover:text-white underline font-medium">Report it here</a>.
        </p>
        <p className="mt-1 hidden sm:block">
          本网站与 NBME、USMLE 或 FSMB <strong>无关</strong>。练习题由 <strong>AI 生成</strong>，仅供学习参考，<strong>不构成医疗建议</strong>。准确性不予保证，如有错误欢迎<a href="mailto:a860635428@gmail.com" className="text-amber-100 hover:text-white underline font-medium">反馈</a>。
        </p>
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
              <li><Link to="/blog" className="hover:text-white transition-colors">Study Guides & Blog</Link></li>
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

        {/* Community Links */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span className="text-gray-500 font-medium">Join our community:</span>
          <a href="https://discord.gg/usmle" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            Discord
          </a>
          <a href="https://www.reddit.com/r/IMGreddit/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547.8-3.747c.016-.078.086-.133.165-.117l2.88.396zm-9.526.664c.68 0 1.24.56 1.24 1.25a1.25 1.25 0 0 1-2.5 0c0-.69.56-1.25 1.26-1.25zm7.637 8.329c-.254.346-.645.653-1.162.916a7.49 7.49 0 0 1-1.69.53l.34 1.657c1.61-.18 2.87-.699 3.79-1.445.181-.147.372-.313.571-.498a3.81 3.81 0 0 0 .55-.644c.223-.357.342-.749.342-1.145 0-.456-.13-.873-.404-1.25-.273-.376-.645-.653-1.162-.916a7.49 7.49 0 0 0-1.69-.53l.34-1.657c1.61.18 2.87.699 3.79 1.445.181.147.372.313.571.498.215.2.41.42.55.644.223.357.342.749.342 1.145 0 .396-.119.813-.342 1.143z"/></svg>
            Reddit r/IMGreddit
          </a>
          <span className="inline-flex items-center gap-1.5 text-gray-500 cursor-default" title="WeChat USMLE Group — coming soon">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348z"/><path d="M18.405 10.8c-3.434 0-6.22 2.321-6.22 5.186 0 2.865 2.786 5.186 6.22 5.186.334 0 .667-.024.996-.072a.561.561 0 0 1 .44.16l1.481.865a.207.207 0 0 0 .104.034.184.184 0 0 0 .18-.184.233.233 0 0 0-.03-.132l-.305-1.152a.374.374 0 0 1 .133-.412c1.424-1.051 2.255-2.581 2.255-4.293 0-2.865-2.786-5.186-6.22-5.186z"/></svg>
            WeChat Group
          </span>
          <a href="https://twitter.com/usmleprep" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            X / Twitter
          </a>
          <a href="https://github.com/a860635428-creator/top-us-sites-2026" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
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
