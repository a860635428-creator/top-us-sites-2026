import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About USMLE Prep Platform</h1>
        <p className="text-gray-500 mb-10">Helping IMGs succeed since 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg">
              USMLE Prep Platform was built to help International Medical Graduates (IMGs) prepare for the USMLE exams
              with confidence. We believe that language should never be a barrier to accessing high-quality medical education.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-gray-900 mb-2">80+ Practice Questions</h3>
                <p className="text-sm text-gray-600">
                  USMLE-style questions with detailed explanations in English, Chinese, and Spanish.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Language Support</h3>
                <p className="text-sm text-gray-600">
                  Study in English and review explanations in your native language — 中文 or Español.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Smart Analytics</h3>
                <p className="text-sm text-gray-600">
                  Track your progress, identify weak areas, and focus your study time effectively.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p>
              As a team of medical professionals and educators, we understand the unique challenges IMGs face when preparing
              for the USMLE. Many of us have been through the journey ourselves — struggling with complex medical concepts
              while adapting to a new language and healthcare system.
            </p>
            <p className="mt-4">
              We created this platform to bridge that gap. Every question on our platform is carefully crafted to match
              the style and difficulty of actual USMLE questions, and every explanation is written to help you truly
              understand the underlying concepts — not just memorize answers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>International Medical Graduates (IMGs)</strong> preparing for USMLE Step 1, Step 2 CK, and Step 3</li>
              <li><strong>Medical students</strong> who prefer studying with explanations in their native language</li>
              <li><strong>Repeat test-takers</strong> looking for a fresh approach to exam preparation</li>
              <li><strong>Busy clinicians</strong> who need efficient, high-yield study materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p>
              We are committed to providing accurate, up-to-date, and high-quality educational content. Our questions
              are regularly reviewed and updated to reflect the latest exam formats and medical guidelines. We respect your
              privacy and are transparent about how we use your data (see our{' '}
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>Have questions, suggestions, or feedback? We'd love to hear from you.</p>
            <div className="mt-4 space-y-2">
              <p>📧 <a href="mailto:a860635428@gmail.com" className="text-blue-600 hover:underline">a860635428@gmail.com</a></p>
              <p>🔒 Your data is safe with us. Read our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
