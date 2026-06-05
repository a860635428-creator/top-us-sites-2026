import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Study in English,
              <br />
              <span className="text-blue-200">Understand in Your Language</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              The USMLE preparation platform designed for international medical graduates.
              Practice with English questions and get explanations in Chinese or Spanish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/question-bank" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3">
                Start Practicing
              </Link>
              <Link to="/register" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1200 60 960 90 720 60C480 30 240 0 0 0L0 120Z" fill="rgb(249 250 251)" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Pass USMLE
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation tools designed for international medical graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Question Bank</h3>
              <p className="text-gray-600">
                Hundreds of practice questions organized by Step and subject.
                Covers all major topics tested on USMLE.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Language Explanations</h3>
              <p className="text-gray-600">
                Get detailed explanations in Chinese () or Spanish (Español).
                Study in English, understand in your language.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mock Exams</h3>
              <p className="text-gray-600">
                Timed practice exams that simulate the real USMLE experience.
                Track your progress and identify weak areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Steps to Success
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage of all USMLE exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="card border-2 border-blue-200">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Foundational Sciences</h3>
                <p className="text-gray-600 mb-4">
                  Master the basic medical sciences and mechanisms of disease.
                  Covers pathology, pharmacology, physiology, and more.
                </p>
                <Link to="/quiz/step1" className="text-blue-600 font-semibold hover:text-blue-700">
                  Start Step 1 Practice →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="card border-2 border-green-200">
                <div className="absolute -top-4 left-6 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 2 CK
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Clinical Knowledge</h3>
                <p className="text-gray-600 mb-4">
                  Apply medical knowledge in clinical scenarios.
                  Focus on patient care and disease management.
                </p>
                <Link to="/quiz/step2" className="text-green-600 font-semibold hover:text-green-700">
                  Start Step 2 Practice →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="card border-2 border-purple-200">
                <div className="absolute -top-4 left-6 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Patient Management</h3>
                <p className="text-gray-600 mb-4">
                  Demonstrate ability to practice unsupervised medicine.
                  Focus on independent decision-making.
                </p>
                <Link to="/quiz/step3" className="text-purple-600 font-semibold hover:text-purple-700">
                  Start Step 3 Practice →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your USMLE Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of international medical graduates who are preparing for USMLE with multi-language support.
          </p>
          <Link to="/register" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-4 inline-block">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
