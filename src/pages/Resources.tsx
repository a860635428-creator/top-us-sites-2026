// Resources page - no router imports needed

const resources = [
  {
    title: 'First Aid for the USMLE Step 1',
    description: 'The most trusted resource for Step 1 preparation. Covers all high-yield topics.',
    type: 'Book',
    step: 'Step 1'
  },
  {
    title: 'UWorld Step 1 QBank',
    description: 'Gold standard for USMLE practice questions. Highly recommended for all students.',
    type: 'QBank',
    step: 'Step 1'
  },
  {
    title: 'First Aid for the USMLE Step 2 CK',
    description: 'Comprehensive review for Step 2 CK. Covers clinical knowledge topics.',
    type: 'Book',
    step: 'Step 2 CK'
  },
  {
    title: 'Amboss QBank',
    description: 'High-quality practice questions with detailed explanations in multiple languages.',
    type: 'QBank',
    step: 'All Steps'
  },
  {
    title: 'USMLE Step 3 CCS Cases',
    description: 'Computer-based case simulations practice for Step 3.',
    type: 'Practice',
    step: 'Step 3'
  },
  {
    title: 'Pathoma',
    description: 'Comprehensive pathology review. Essential for Step 1 preparation.',
    type: 'Video',
    step: 'Step 1'
  },
  {
    title: 'Sketchy Medical',
    description: 'Visual learning for microbiology, pharmacology, and pathology.',
    type: 'Video',
    step: 'Step 1'
  },
  {
    title: 'Online MedEd',
    description: 'High-yield clinical medicine videos for Step 2 and clinical rotations.',
    type: 'Video',
    step: 'Step 2 CK'
  }
]

const typeColors: Record<string, string> = {
  'Book': 'bg-blue-100 text-blue-700',
  'QBank': 'bg-green-100 text-green-700',
  'Video': 'bg-purple-100 text-purple-700',
  'Practice': 'bg-orange-100 text-orange-700'
}

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Resources</h1>
        <p className="text-gray-600">
          Curated list of recommended resources for USMLE preparation.
          These are affiliate links that help support this platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, idx) => (
          <div key={idx} className="card hover:border-blue-300 border-2 border-transparent">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${typeColors[resource.type] || 'bg-gray-100 text-gray-700'}`}>
                {resource.type}
              </span>
              <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {resource.step}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Study Tips Section */}
      <div className="mt-16 card bg-blue-50 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Study Tips for International Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">1. Start with First Aid</h3>
            <p className="text-gray-600 text-sm">
              Use First Aid for the USMLE Step 1 as your primary resource.
              It covers all high-yield topics in a concise format.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">2. Practice with UWorld</h3>
            <p className="text-gray-600 text-sm">
              UWorld questions are the gold standard. Complete all questions and read every explanation carefully.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">3. Use Multi-Language Resources</h3>
            <p className="text-gray-600 text-sm">
              If English is not your first language, use resources in your native language to supplement your learning.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">4. Take Practice Exams</h3>
            <p className="text-gray-600 text-sm">
              Simulate the real exam experience with timed practice exams. This helps build stamina and identify weak areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
