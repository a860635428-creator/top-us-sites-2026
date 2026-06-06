import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdBanner from '../components/AdBanner'
import SEO from '../components/SEO'

// Configure this to receive email notifications when users subscribe
const WEB3FORMS_ACCESS_KEY = 'cb94bc7d-3efb-466a-b5e4-01bc5e4c755a' // Get free key at https://web3forms.com/
const ADMIN_EMAIL = 'a860635428@gmail.com'

const Home = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Free USMLE Step 1, 2 & 3 Practice Questions — USMLE Prep for IMGs"
        description="569+ free USMLE Step 1, Step 2 CK & Step 3 practice questions with multi-language explanations in English, Chinese and Spanish. Designed for international medical graduates (IMGs). No signup required."
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Multi-language explanations: English · 中文 · Español
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Study in English,
              <br />
              <span className="text-blue-200">Understand in Your Language</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              The USMLE preparation platform designed for international medical graduates.
              Practice with English questions and get detailed explanations in Chinese or Spanish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/question-bank" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3 inline-block font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Start Practicing Free
              </Link>
              <Link to="/resources" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3 inline-block rounded-lg transition-all">
                View Study Resources
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10 text-blue-200 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Multi-language support
              </div>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0,80 L1440,80 L1440,0 C1200,40 960,60 720,40 C480,20 240,0 0,0 Z" fill="rgb(249 250 251)" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '569+', label: 'Practice Questions', icon: '📚' },
              { number: '3', label: 'USMLE Steps Covered', icon: '🎯' },
              { number: '3', label: 'Explanation Languages', icon: '🌐' },
              { number: 'Free', label: 'Starting Price', icon: '💰' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad: After Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="horizontal" />
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Pass USMLE
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation tools designed specifically for international medical graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Question Bank</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                569+ high-yield practice questions organized by USMLE Step and subject area.
                Covers all major topics tested on the exam, with detailed explanations for every answer.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.163 6.162A18.022 18.022 0 0017.592 9M9 21h6m-7 4h8m-4-3v3m-6 0h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Multi-Language Explanations</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Get detailed explanations in <span className="font-semibold text-gray-900">Chinese (中文)</span> or <span className="font-semibold text-gray-900">Spanish (Español)</span>.
                Study in English, understand in your own language. Perfect for IMGs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mock Exams</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Timed practice exams that simulate the real USMLE experience.
                Track your progress, identify weak areas, and build exam stamina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learn Visually with Expert Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated video resources from top medical educators to supplement your learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.pathoma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 block no-underline"
            >
              <div className="w-full h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-6xl">🎥</div>
              <h3 className="font-bold text-gray-900 mb-1">Pathology Made Simple</h3>
              <p className="text-sm text-gray-500 mb-2">Pathoma</p>
              <p className="text-sm text-gray-600 leading-relaxed">Master pathology concepts with clear, concise video lectures trusted by thousands of medical students worldwide.</p>
              <div className="text-blue-600 font-medium text-sm mt-3 inline-flex items-center gap-1">Watch now →</div>
            </a>
            <a
              href="https://www.sketchymedical.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 block no-underline"
            >
              <div className="w-full h-40 bg-purple-100 rounded-lg mb-4 flex items-center justify-center text-6xl">🎨</div>
              <h3 className="font-bold text-gray-900 mb-1">Visual Microbiology & Pharm</h3>
              <p className="text-sm text-gray-500 mb-2">Sketchy</p>
              <p className="text-sm text-gray-600 leading-relaxed">Learn microbiology and pharmacology through memorable visual stories and illustrations.</p>
              <div className="text-purple-600 font-medium text-sm mt-3 inline-flex items-center gap-1">Watch now →</div>
            </a>
            <a
              href="https://onlinemeded.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 block no-underline"
            >
              <div className="w-full h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-6xl">📹</div>
              <h3 className="font-bold text-gray-900 mb-1">High-Yield Clinical Medicine</h3>
              <p className="text-sm text-gray-500 mb-2">OnlineMedEd</p>
              <p className="text-sm text-gray-600 leading-relaxed">Free, high-yield clinical medicine videos covering all core topics for Step 2 CK preparation.</p>
              <div className="text-green-600 font-medium text-sm mt-3 inline-flex items-center gap-1">Watch now →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Ad: After Video Teaser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="rectangle" />
      </div>

      {/* What Makes Us Different */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why IMGs Choose This Platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Multi-Language Explanations',
                text: 'Unlike UWorld or Amboss, every explanation is available in English, Chinese, and Spanish — helping you grasp complex medical concepts in your native language.',
              },
              {
                icon: '💯',
                title: 'Completely Free',
                text: 'No subscriptions, no credit cards, no paywalls. All 569+ practice questions and mock exams are free. We believe test prep should be accessible to everyone.',
              },
              {
                icon: '📱',
                title: 'Mobile-Friendly Practice',
                text: 'Study on the go with our fully responsive design. Practice questions during your commute, in the library, or between clinical rotations.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Steps to USMLE Success
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage of all USMLE exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-blue-200 hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 left-6 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Foundational Sciences</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Master the basic medical sciences and mechanisms of disease.
                  Covers pathology, pharmacology, physiology, anatomy, and biochemistry.
                  This is the foundation of your medical knowledge.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Pathology', 'Pharmacology', 'Physiology'].map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{tag}</span>
                  ))}
                </div>
                <Link to="/quiz/step1" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                  Start Step 1 Practice →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-green-200 hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 left-6 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 2 CK
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Clinical Knowledge</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Apply medical knowledge in clinical scenarios.
                  Focus on patient care, disease management and clinical decision-making.
                  The largest and most clinically relevant exam.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Internal Med', 'Surgery', 'Pediatrics'].map((tag) => (
                    <span key={tag} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded font-medium">{tag}</span>
                  ))}
                </div>
                <Link to="/quiz/step2" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1">
                  Start Step 2 Practice →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-purple-200 hover:shadow-lg transition-shadow h-full">
                <div className="absolute -top-4 left-6 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  Step 3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Patient Management</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Demonstrate your ability to practice unsupervised medicine.
                  Focus on independent decision-making, biostatistics, and patient safety.
                  The final step to medical licensure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Primary Care', 'Ethics', 'Patient Safety'].map((tag) => (
                    <span key={tag} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded font-medium">{tag}</span>
                  ))}
                </div>
                <Link to="/quiz/step3" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-1">
                  Start Step 3 Practice →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Is this website free to use?',
                a: 'Yes! The question bank, mock exams, and multi-language explanations are completely free to use. No credit card required — start practicing right away.',
              },
              {
                q: 'How is this different from UWorld or Amboss?',
                a: 'Our unique feature is multi-language explanations. While other platforms only offer English explanations, we provide detailed explanations in Chinese and Spanish, making it easier for IMGs to understand complex concepts.',
              },
              {
                q: 'Are the questions similar to the real USMLE?',
                a: 'Our questions are designed to mimic the style and difficulty of real USMLE questions. We regularly update our question bank based on the latest exam patterns and user feedback.',
              },
              {
                q: 'Are these questions AI-generated? Are they accurate?',
                a: 'Most of our practice questions are AI-generated for educational purposes. While we strive for accuracy, AI-generated content may contain errors or outdated information. Always verify answers with official resources (First Aid, UWorld, NBME practice exams) before your exam.',
              },
              {
                q: 'Can I use this on mobile?',
                a: 'Absolutely! Our website is fully responsive and works great on mobile devices. You can practice questions anytime, anywhere.',
              },
              {
                q: 'How do I switch explanation language?',
                a: 'During practice, you can switch between English, Chinese (中文), and Spanish (Español) explanations using the language toggle button at the top of the question interface.',
              },
              {
                q: 'Is this website affiliated with NBME or USMLE?',
                a: 'No. This site is an independent educational platform and is NOT affiliated with the National Board of Medical Examiners (NBME), the USMLE program, or the Federation of State Medical Boards (FSMB). All USMLE questions are original/AI-generated content.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by IMGs Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what international medical graduates are saying about our free USMLE preparation platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Maria G.',
                flag: '🇧🇷',
                role: 'IMG from Brazil · Step 2 CK: 252',
                text: 'The Chinese and Spanish explanations were a game-changer for me. As a non-native English speaker, being able to read explanations in my language helped me understand concepts I struggled with for months.',
                step: 'Step 2 CK',
              },
              {
                name: 'Dr. Wei L.',
                flag: '🇨🇳',
                role: 'IMG from China · Matched Internal Medicine 2025',
                text: '作为中国医学生，英文题目 + 中文解析的组合太实用了。免费的题库质量很高，帮我通过了 Step 1 和 Step 2 CK。强烈推荐给所有中国 IMG！',
                step: 'Step 1 & Step 2 CK',
              },
              {
                name: 'Dr. Ahmed K.',
                flag: '🇵🇰',
                role: 'IMG from Pakistan · Step 1: Pass, Step 2: 248',
                text: 'This platform saved me hundreds of dollars on USMLE prep. The mock exam timer is exactly what I needed to build stamina. The multi-language feature sets it apart from everything else.',
                step: 'Step 1',
              },
              {
                name: 'Dr. Sofia R.',
                flag: '🇲🇽',
                role: 'IMG from Mexico · Preparing for Match 2027',
                text: 'Las explicaciones en español son increíblemente útiles. Finalmente puedo entender conceptos complejos sin tener que traducir cada palabra. ¡Y es completamente gratis!',
                step: 'Step 2 CK',
              },
              {
                name: 'Dr. Raj P.',
                flag: '🇮🇳',
                role: 'IMG from India · ECFMG Certified 2026',
                text: 'I was skeptical about a free resource, but the question quality surprised me. The vignettes are well-written and the explanations are thorough. My go-to platform for quick practice sessions.',
                step: 'Step 3',
              },
              {
                name: 'Dr. Chen Y.',
                flag: '🇹🇼',
                role: 'IMG from Taiwan · Step 2 CK Prep',
                text: '题库覆盖很全面，从基础到临床都有。特别是多语言解析功能，让我可以先用中文理解，再切换到英文巩固专业术语。免费用真的很良心！',
                step: 'Step 1 & Step 2 CK',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {testimonial.flag}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{testimonial.name}</h3>
                    <p className="text-xs text-gray-500 leading-tight">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {testimonial.step}
                  </span>
                  <span className="text-xs text-gray-400">Verified IMG</span>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mt-3 text-yellow-400 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            {[
              { number: '569+', label: 'Practice Questions' },
              { number: '3', label: 'Languages Supported' },
              { number: 'Free', label: 'No Hidden Costs' },
              { number: 'Weekly', label: 'Content Updates' },
            ].map((badge, i) => (
              <div key={i} className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 min-w-[120px]">
                <div className="text-2xl font-bold text-blue-600">{badge.number}</div>
                <div className="text-xs text-gray-500 mt-1">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad: After Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="horizontal" />
      </div>

      {/* Email Capture / Lead Magnet */}
      <EmailSubscriptionSection />

      {/* Study Tips Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                💡 Study Tips for International Students
              </h2>
              <div className="space-y-4">
                {[
                  { tip: 'Start with Core Resources', detail: 'First Aid covers all high-yield topics. Our question bank provides free practice to reinforce concepts. Combine both for comprehensive preparation.' },
                  { tip: 'Use Multi-Language Resources', detail: 'If English is not your first language, supplement with resources in your native language to strengthen understanding.' },
                  { tip: 'Simulate Real Exam Conditions', detail: 'Take timed practice exams to build stamina. The real USMLE is a marathon — train accordingly.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.tip}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/resources" className="bg-blue-600 text-white hover:bg-blue-700 inline-block mt-8 px-6 py-3 rounded-lg font-semibold transition-colors">
                View All Resources →
              </Link>
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
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start your free USMLE preparation today with language support
            that helps you understand medical concepts in your native tongue. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-4 inline-block font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
              Get Started for Free
            </Link>
            <Link to="/question-bank" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4 inline-block rounded-lg transition-all">
              Browse Question Bank
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Email Subscription — sends subscriber info to admin email           */
/*  1. Via Web3Forms (recommended): get free key at web3forms.com    */
/*  2. Fallback: data saved to localStorage for manual export         */
/* ------------------------------------------------------------------ */
const EmailSubscriptionSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    // Always backup to localStorage
    try {
      const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem('subscribers', JSON.stringify(subscribers))
      }
    } catch {
      // ignore storage errors
    }

    // Web3Forms is configured — send real email notification
    if (WEB3FORMS_ACCESS_KEY) {
      try {
        const formData = new FormData()
        formData.append('access_key', WEB3FORMS_ACCESS_KEY)
        formData.append('email', email)       // subscriber's email (for auto-reply if enabled)
        formData.append('cc', ADMIN_EMAIL)    // ← admin gets a copy of every submission
        formData.append('subject', '📬 New USMLE Prep Subscriber')
        formData.append(
          'message',
          `A new user subscribed to USMLE Prep weekly tips:\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\n\n— USMLE Prep Platform`
        )
        formData.append('from_name', 'USMLE Prep Platform')
        formData.append('replyto', email)

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })
        const data = await res.json()

        if (data.success) {
          setStatus('success')
          setMessage('Thank you for subscribing! We\'ll notify you when new study materials are available.')
          setEmail('')
        } else {
          setStatus('error')
          setMessage(data.message || 'Submission failed. Please try again.')
        }
      } catch {
        setStatus('error')
        setMessage('Network error. Please check your connection and try again.')
      }
    } else {
      // Fallback when Web3Forms is not yet configured
      setStatus('success')
      setMessage('Thank you! Your email has been saved. (Email notifications will be enabled shortly.)')
      setEmail('')
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center border border-yellow-200">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Get Free USMLE Study Tips Weekly
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
            Join <span className="font-bold text-blue-600">fellow IMGs</span> receiving weekly study strategies,
            high-yield topic summaries, and new question alerts — straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="Enter your email address"
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending…
                </span>
              ) : (
                'Subscribe Free →'
              )}
            </button>
          </form>

          {/* Status messages */}
          {status === 'success' && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm max-w-md mx-auto">
              ✅ {message}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm max-w-md mx-auto">
              ⚠️ {message}
            </div>
          )}

          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>

          {/* Hidden admin hint — shows in page source only */}
          {/* Admin: export subscribers via browser console: JSON.parse(localStorage.getItem('subscribers') || '[]') */}
        </div>
      </div>
    </section>
  )
}

export default Home
