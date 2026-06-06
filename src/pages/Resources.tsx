import { useState } from 'react'
import AdBanner from '../components/AdBanner'

const resources = [
  // === Books ===
  {
    title: 'First Aid for the USMLE Step 1',
    description: 'The most trusted resource for Step 1 preparation. Covers all high-yield topics in a concise, outline format. Essential for every medical student.',
    type: 'Book',
    step: 'Step 1',
    url: 'https://www.amazon.com/First-Aid-USMLE-Step-2026/dp/1264289073',
    rating: '★★★★★',
    price: '~$65',
  },
  {
    title: 'First Aid for the USMLE Step 2 CK',
    description: 'Comprehensive review for Step 2 CK. Covers clinical knowledge topics with high-yield facts and clinical pearls.',
    type: 'Book',
    step: 'Step 2 CK',
    url: 'https://www.amazon.com/First-Aid-USMLE-Step-Clinical/dp/1264270135',
    rating: '★★★★★',
    price: '~$60',
  },
  {
    title: 'Master the Boards USMLE Step 2 CK',
    description: 'Concise, high-yield review by Dr. Conrad Fischer. Focuses on clinical decision-making and patient management.',
    type: 'Book',
    step: 'Step 2 CK',
    url: 'https://www.amazon.com/Master-Boards-USMLE-Step-Clinical/dp/1506248212',
    rating: '★★★★☆',
    price: '~$45',
  },
  {
    title: 'USMLE Step 3 Secrets',
    description: 'Focused on patient management, biostatistics, and decision-making for independent practice. Great for Step 3 prep.',
    type: 'Book',
    step: 'Step 3',
    url: 'https://www.amazon.com/USMLE-Step-Secrets-Elsevier/dp/0323479168',
    rating: '★★★★☆',
    price: '~$50',
  },
  // === QBanks ===
  {
    title: 'UWorld Step 1 QBank',
    description: 'Gold standard for USMLE practice questions. Highly recommended for all students. Detailed explanations for every answer choice.',
    type: 'QBank',
    step: 'Step 1',
    url: 'https://www.uworld.com',
    rating: '★★★★★',
    price: '~$399',
  },
  {
    title: 'UWorld Step 2 CK QBank',
    description: 'The most realistic clinical question bank. Essential for Step 2 CK success. Simulates real exam format and difficulty.',
    type: 'QBank',
    step: 'Step 2 CK',
    url: 'https://www.uworld.com',
    rating: '★★★★★',
    price: '~$399',
  },
  {
    title: 'AMBOSS QBank',
    description: 'High-quality practice questions with detailed explanations in multiple languages including Spanish and German. Great value alternative.',
    type: 'QBank',
    step: 'All Steps',
    url: 'https://www.amboss.com',
    rating: '★★★★★',
    price: '~$99/yr',
  },
  {
    title: 'USMLE-Rx QBank',
    description: 'Integrated with First Aid. Good for reinforcing concepts while reading. More affordable than UWorld, good for early prep.',
    type: 'QBank',
    step: 'Step 1',
    url: 'https://www.usmle-rx.com',
    rating: '★★★★☆',
    price: '~$149/yr',
  },
  // === Video Resources ===
  {
    title: 'Pathoma - Pathology Mastery',
    description: 'Dr. Sattar\'s legendary pathology lectures. Essential for Step 1. Clear, concise, and high-yield. Available via subscription with full video library.',
    type: 'Video',
    step: 'Step 1',
    url: 'https://www.pathoma.com',
    videoUrl: 'https://www.youtube.com/watch?v=L8uMOkHiZu8',
    rating: '★★★★★',
    price: '~$99/yr',
  },
  {
    title: 'Sketchy Medical - Visual Learning',
    description: 'Master microbiology, pharmacology, and pathology through memorable visual stories and illustrations. Perfect for visual learners.',
    type: 'Video',
    step: 'Step 1',
    url: 'https://www.sketchymedical.com',
    videoUrl: 'https://www.youtube.com/watch?v=1FZCA4pgWc',
    rating: '★★★★★',
    price: '~$349/yr',
  },
  {
    title: 'OnlineMedEd - Clinical Medicine',
    description: 'Free, high-yield clinical medicine videos covering all core topics for Step 2 CK and clinical rotations. Trusted by students worldwide.',
    type: 'Video',
    step: 'Step 2 CK',
    url: 'https://onlinemeded.org',
    videoUrl: 'https://www.youtube.com/watch?v=rgOAnSPSWyA',
    rating: '★★★★★',
    price: 'Free / ~$149',
  },
  {
    title: 'Pixorize - Visual Mnemonics',
    description: 'Visual learning for biochemistry, immunology, and microbiology. High-yield illustrations that help you remember complex concepts.',
    type: 'Video',
    step: 'Step 1',
    url: 'https://www.pixorize.com',
    videoUrl: 'https://www.youtube.com/watch?v=Qrtsg2ayYIs',
    rating: '★★★★☆',
    price: '~$149/yr',
  },
  {
    title: 'Boards & Beyond',
    description: 'Comprehensive video lectures covering all Step 1 and Step 2 CK topics. Dr. Ryan\'s clear teaching style is loved by thousands.',
    type: 'Video',
    step: 'Step 1 & 2',
    url: 'https://www.boardsbeyond.com',
    videoUrl: 'https://www.youtube.com/watch?v=G2tX8ih6EI',
    rating: '★★★★★',
    price: '~$299/yr',
  },
  // === Practice/CCS ===
  {
    title: 'USMLE Step 3 CCS Cases',
    description: 'Computer-based case simulations practice for Step 3. Master the CCS format with realistic patient management scenarios.',
    type: 'Practice',
    step: 'Step 3',
    url: 'https://www.ccscases.com',
    rating: '★★★★☆',
    price: '~$99',
  },
  {
    title: 'NBME Practice Exams',
    description: 'Official practice exams from the NBME. The closest thing to the real exam. Highly recommended for predicting your actual score.',
    type: 'Practice',
    step: 'All Steps',
    url: 'https://www.nbme.org',
    rating: '★★★★★',
    price: '~$60/exam',
  },
]

const typeColors: Record<string, string> = {
  'Book': 'bg-blue-100 text-blue-700',
  'QBank': 'bg-green-100 text-green-700',
  'Video': 'bg-purple-100 text-purple-700',
  'Practice': 'bg-orange-100 text-orange-700',
}

const stepColors: Record<string, string> = {
  'Step 1': 'bg-blue-50 text-blue-700',
  'Step 2 CK': 'bg-green-50 text-green-700',
  'Step 3': 'bg-purple-50 text-purple-700',
  'All Steps': 'bg-gray-100 text-gray-700',
  'Step 1 & 2': 'bg-indigo-50 text-indigo-700',
}

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filteredResources = activeFilter === 'All'
    ? resources
    : resources.filter(r => r.type === activeFilter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Resources</h1>
        <p className="text-gray-600">
          Curated list of the best resources for USMLE preparation.
          These are affiliate links — your support helps keep this platform free.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {['All', 'Book', 'QBank', 'Video', 'Practice'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter === 'All' ? '🔘 All' : `📚 ${filter}s`}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, idx) => (
          <div key={idx} className="card hover:border-blue-300 border-2 border-transparent hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${typeColors[resource.type] || 'bg-gray-100 text-gray-700'}`}>
                {resource.type}
              </span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${stepColors[resource.step] || 'bg-gray-100 text-gray-600'}`}>
                {resource.step}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{resource.title}</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{resource.description}</p>
            <div className="flex items-center gap-3 mb-4 text-sm">
              {resource.rating && <span className="text-yellow-500">{resource.rating}</span>}
              {resource.price && <span className="text-gray-500 font-medium">{resource.price}</span>}
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1"
              >
                Visit Official Site →
              </a>
              {resource.videoUrl && (
                <a
                  href={resource.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center gap-1"
                >
                  ▶ Watch Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🎥 Free Video Resources</h2>
        <p className="text-gray-600 mb-8">High-quality free videos from top medical educators on YouTube</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'USMLE Step 1 Complete Review',
              channel: 'MedSchoolInsiders',
              url: 'https://www.youtube.com/watch?v=Q1u7m2fcC8',
              description: 'Comprehensive Step 1 review strategies and study plan from top medical educators.',
            },
            {
              title: 'Pathology Explained Simply',
              channel: 'OneMinuteMed',
              url: 'https://www.youtube.com/c/OneMinuteMed',
              description: 'Short, high-yield pathology videos that make complex topics simple and memorable.',
            },
            {
              title: 'Step 2 CK Clinical Review',
              channel: 'Divine Intervention',
              url: 'https://www.youtube.com/c/DivineInterventionPodcast',
              description: 'High-yield clinical reviews for Step 2 CK and shelf exams. Very popular among students.',
            },
            {
              title: 'Biostatistics Made Easy',
              channel: 'Randy Neil MD',
              url: 'https://www.youtube.com/c/RandyNeilMD',
              description: 'Master USMLE biostatistics with clear, step-by-step video explanations.',
            },
            {
              title: 'Ethics & Patient Safety',
              channel: 'USMLE Success Academy',
              url: 'https://www.youtube.com/c/USMLESuccesAcademy',
              description: 'Essential ethics, patient safety, and communication skills for Step 2 and Step 3.',
            },
            {
              title: 'Anatomy Crash Course',
              channel: 'Armando Hasudungan',
              url: 'https://www.youtube.com/user/armandohasudungan',
              description: 'Detailed anatomy and physiology videos with beautiful hand-drawn illustrations.',
            },
          ].map((video, i) => (
            <a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg hover:-translate-y-1 transition-all block no-underline"
            >
              <div className="w-full h-36 bg-red-50 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{video.channel}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{video.description}</p>
              <div className="text-red-600 font-medium text-sm mt-3 inline-flex items-center gap-1">
                Watch on YouTube →
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ad: Between videos and study tips */}
      <AdBanner format="horizontal" />

      {/* Study Tips Section */}
      <div className="mt-16 card bg-blue-50 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📖 Study Tips for International Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="font-bold text-gray-900">Start with First Aid + UWorld</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Use First Aid as your primary outline. UWorld questions are the gold standard —
              complete all questions and read every explanation carefully, even for questions you get right.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="font-bold text-gray-900">Use Multi-Language Resources</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              If English is not your first language, use resources in your native language to supplement.
              Our platform provides explanations in Chinese and Spanish alongside English.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <h3 className="font-bold text-gray-900">Take Timed Practice Exams</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simulate the real exam experience with timed practice exams. This builds stamina
              and helps identify weak areas. Aim for at least 3 full-length exams before your test date.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <h3 className="font-bold text-gray-900">Focus on High-Yield Topics</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Not all topics are equally tested. Focus on high-yield areas: pathology, pharmacology,
              physiology, and clinical decision-making. Use First Aid's asterisks as a guide.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <h3 className="font-bold text-gray-900">Join Study Groups & Forums</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connect with other IMGs on Reddit (r/USMLE), Student Doctor Network, or Discord study groups.
              Sharing resources and strategies can significantly boost your preparation.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
              <h3 className="font-bold text-gray-900">Review Mistakes Thoroughly</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Keep a "mistake notebook." Every time you get a question wrong, write down why
              and the correct concept. Review this notebook regularly — it's your most valuable study resource.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Study Schedule */}
      <div className="mt-12 card bg-green-50 border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Sample 8-Week Study Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-green-200">
                <th className="text-left py-3 px-4 font-bold text-gray-900">Week</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Focus Area</th>
                <th className="text-left py-3 px-4 font-bold text-gray-900">Daily Goal</th>
              </tr>
            </thead>
            <tbody>
              {[
                { week: '1-2', focus: 'Pathology + Pharm', goal: '60 UWorld Qs/day + Pathoma' },
                { week: '3-4', focus: 'Physiology + Micro', goal: '80 UWorld Qs/day + Sketchy' },
                { week: '5-6', focus: 'Full Review + Weak Areas', goal: '100 UWorld Qs/day + First Aid' },
                { week: '7', focus: 'NBME Practice Exams', goal: '1 NBME every 3 days' },
                { week: '8', focus: 'Final Review + CCS (Step 3)', goal: 'Review mistake notebook' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-green-100">
                  <td className="py-3 px-4 font-semibold text-green-700">{row.week}</td>
                  <td className="py-3 px-4 text-gray-700">{row.focus}</td>
                  <td className="py-3 px-4 text-gray-600">{row.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Resources
