import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  emoji: string
  content: React.ReactNode
}

const blogPosts: BlogPost[] = [
  {
    slug: 'usmle-step1-study-plan-img',
    title: 'USMLE Step 1 Study Plan for IMGs: Complete 6-Month Strategy Guide',
    excerpt:
      'A comprehensive 6-month USMLE Step 1 study plan designed specifically for international medical graduates. Covers resources, schedules, and high-yield topics.',
    date: '2026-06-08',
    readTime: '8 min read',
    category: 'Study Plans',
    tags: ['Step 1', 'IMG', 'Study Plan', 'Resources', 'First Aid'],
    emoji: '📋',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>Why IMGs Need a Different Study Plan</h2>
        <p>
          International Medical Graduates (IMGs) face unique challenges when preparing for the USMLE Step 1. Unlike
          U.S. medical students who take Step 1 after two years of basic sciences, IMGs often need to self-study core
          concepts while balancing clinical work, language barriers, and unfamiliar exam formats.
        </p>
        <p>
          This 6-month study plan is designed specifically for IMGs, incorporating the best resources while accounting
          for the realities of studying in a second language.
        </p>

        <h3>Month 1-2: Foundation Building</h3>
        <p>
          <strong>Resources:</strong> First Aid, Pathoma (Chapters 1-3), Sketchy Micro, Boards &amp; Beyond
        </p>
        <p>
          Start with <em>Pathoma Chapters 1-3</em> — these cover general pathology, inflammation, and neoplasia, which
          form the foundation for all organ system pathology. Watch the corresponding Boards &amp; Beyond videos and
          annotate First Aid as you go. Dedicate 2-3 hours daily to Sketchy Micro for microbiology memorization.
        </p>
        <p>
          Begin practicing with <Link to="/quiz/step1" className="text-blue-600 hover:underline font-semibold">
            our free Step 1 questions
          </Link> in system-specific blocks: start with 10 questions daily, read every explanation thoroughly.
        </p>

        <h3>Month 3-4: Organ Systems</h3>
        <p>
          <strong>Resources:</strong> First Aid, Pathoma (Chapters 4+), UWorld, Sketchy Pharm
        </p>
        <p>
          Work through organ systems one at a time: Cardiovascular → Respiratory → Renal → GI → Endocrine → Reproductive
          → Neurology → Psychiatry → Musculoskeletal. For each system, complete the corresponding Pathoma chapter, review
          First Aid, and do 40 system-specific questions.
        </p>

        <h3>Month 5: Integration &amp; Weak Areas</h3>
        <p>
          <strong>Resources:</strong> First Aid, UWorld incorrects, NBME practice exams
        </p>
        <p>
          Take a baseline NBME practice exam to identify weak areas. Focus 80% of your time on these topics. Review your
          incorrect questions and make Anki cards for concepts you keep missing. Aim for 80+ questions daily in random,
          timed mode.
        </p>

        <h3>Month 6: Final Review &amp; Exam Readiness</h3>
        <p>
          <strong>Resources:</strong> NBME forms, Free 120, Rapid Review (First Aid)
        </p>
        <p>
          Take NBME forms 25-31 under exam conditions. Review the Rapid Review section of First Aid daily. Practice with
          our <Link to="/mock-exam" className="text-blue-600 hover:underline font-semibold">
            free timed mock exams
          </Link> to build stamina for the 8-hour exam. Target NBME scores consistently above 65-70% before scheduling.
        </p>

        <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
          <h4 className="text-lg font-bold text-blue-900 mb-2">Key Takeaway for IMGs</h4>
          <p className="text-blue-800">
            The biggest advantage IMGs have is time flexibility. Many U.S. students have only 4-6 weeks of dedicated
            study. As an IMG, you can spread your preparation over 4-6 months, which leads to better long-term retention
            and higher scores.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: 'usmle-step2-ck-high-yield-topics',
    title: 'USMLE Step 2 CK High-Yield Topics: What to Focus On for a 250+ Score',
    excerpt:
      'Discover the highest-yield topics for USMLE Step 2 CK based on recent exam patterns. Focus your study time on what matters most for IMGs aiming for competitive scores.',
    date: '2026-06-06',
    readTime: '6 min read',
    category: 'Exam Strategy',
    tags: ['Step 2 CK', 'High-Yield', 'IMG', 'Score Strategy'],
    emoji: '🎯',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>The Step 2 CK Scoring Landscape for IMGs</h2>
        <p>
          USMLE Step 2 CK has become the most important exam for residency applications since Step 1 went pass/fail.
          For IMGs, a score of 250+ significantly improves your chances of matching. But with over 300 possible topics,
          knowing what to prioritize is essential.
        </p>

        <h3>Top 5 Highest-Yield Subjects (Tested Most Frequently)</h3>
        <ol>
          <li>
            <strong>Internal Medicine (50-60%):</strong> This is the backbone of Step 2 CK. Focus on cardiology
            (ACS, heart failure, arrhythmias), pulmonology (COPD, asthma, pneumonia), gastroenterology (GI bleeding,
            IBD, liver disease), and infectious disease (HIV, sepsis, TB).{' '}
            <Link to="/quiz/step2/internal-medicine" className="text-blue-600 hover:underline font-semibold">
              Practice Internal Medicine questions →
            </Link>
          </li>
          <li>
            <strong>OB/GYN (10-15%):</strong> Know antepartum care, labor and delivery complications, and common
            gynecologic conditions. Prenatal screening and management of abnormal uterine bleeding are heavily tested.
          </li>
          <li>
            <strong>Pediatrics (10-15%):</strong> Growth and development milestones, common pediatric infections,
            and vaccination schedules. Neonatal jaundice and congenital heart diseases are favorites.{' '}
            <Link to="/quiz/step2/Pediatrics" className="text-blue-600 hover:underline font-semibold">
              Practice Pediatrics questions →
            </Link>
          </li>
          <li>
            <strong>Surgery (10%):</strong> Pre-operative evaluation, post-operative complications (fever, DVT, wound
            infection), and acute abdomen. Trauma management algorithms are essential.
          </li>
          <li>
            <strong>Psychiatry (5-10%):</strong> Major depressive disorder, bipolar, schizophrenia, anxiety disorders,
            and psychopharmacology. Know the side effects of all major psych medications.
          </li>
        </ol>

        <h3>How to Approach UWorld for Step 2 CK</h3>
        <p>
          UWorld is the gold standard for Step 2 CK preparation. Aim to complete the entire QBank at least once, ideally
          twice for your incorrect questions. Here's a proven approach:
        </p>
        <ul>
          <li><strong>First pass:</strong> Tutor mode, system-specific blocks. Read every explanation in detail — even for questions you got right.</li>
          <li><strong>Second pass:</strong> Timed, random blocks of 40 questions to simulate exam conditions.</li>
          <li><strong>Incorrects:</strong> Re-do all incorrect questions in the final 2 weeks before your exam.</li>
        </ul>

        <p>
          Supplement UWorld with our{' '}
          <Link to="/quiz/step2" className="text-blue-600 hover:underline font-semibold">
            free Step 2 CK practice questions
          </Link> for additional practice in specific subjects.
        </p>

        <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6 my-8">
          <h4 className="text-lg font-bold text-green-900 mb-2">Score Correlation Insight</h4>
          <p className="text-green-800">
            Research shows that IMGs who complete 100% of UWorld + 2,000+ additional practice questions score an average
            of 12 points higher than those who only use UWorld. Volume matters — aim for at least 3,000+ practice
            questions total.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: 'usmle-multi-language-study-benefits',
    title: 'Why Multi-Language USMLE Study Works: The Science Behind Bilingual Learning for IMGs',
    excerpt:
      'Learn how studying USMLE materials in both English and your native language improves comprehension, retention, and exam performance. The cognitive science behind bilingual medical education.',
    date: '2026-06-04',
    readTime: '5 min read',
    category: 'Learning Science',
    tags: ['Multi-Language', 'IMG', 'Learning', 'Chinese', 'Spanish'],
    emoji: '🧠',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>The Bilingual Advantage in Medical Education</h2>
        <p>
          For International Medical Graduates (IMGs), learning USMLE content in English while understanding
          explanations in their native language is not just a convenience — it's a scientifically proven learning
          advantage. Research in cognitive science and medical education shows that bilingual learning approaches
          significantly improve comprehension and long-term retention.
        </p>

        <h3>How Bilingual Processing Enhances Learning</h3>
        <p>
          When you read a complex medical concept in your second language (English) and then see the explanation in your
          first language (Chinese, Spanish, etc.), your brain engages in what cognitive scientists call
          <strong>"elaborative encoding."</strong> This process creates multiple neural pathways to the same information,
          making it easier to recall during high-pressure situations like the USMLE exam.
        </p>

        <h4>Key Cognitive Benefits:</h4>
        <ul>
          <li><strong>Deeper understanding:</strong> Native language explanations help you grasp the underlying mechanism, not just memorize facts.</li>
          <li><strong>Better retention:</strong> Dual-language encoding reduces the "forgetting curve" — you remember concepts longer.</li>
          <li><strong>Faster recall:</strong> Multiple memory pathways mean quicker access to information during timed exams.</li>
          <li><strong>Reduced anxiety:</strong> Understanding in your native language reduces the cognitive load and test anxiety common among IMGs.</li>
        </ul>

        <h3>Real Results: What IMGs Say</h3>
        <p>
          Our platform was built specifically with this science in mind. Every practice question on{' '}
          <em>USMLE Prep Platform</em> includes detailed explanations in English, Chinese (中文), and Spanish (Español).
          IMGs who study using multi-language explanations consistently report:
        </p>
        <ul>
          <li>Faster time to understand complex pathophysiology</li>
          <li>Higher confidence when approaching unfamiliar topics</li>
          <li>Better integration of basic science with clinical medicine</li>
          <li>Reduced need to look up medical terminology in dictionaries</li>
        </ul>

        <p>
          <Link to="/question-bank" className="text-blue-600 hover:underline font-semibold">
            Try our multi-language explanations →
          </Link>{' '}
          and experience the bilingual learning advantage for yourself.
        </p>

        <div className="not-prose bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
          <h4 className="text-lg font-bold text-purple-900 mb-2">Research Backing</h4>
          <p className="text-purple-800">
            Studies published in <em>Medical Education</em> and <em>Academic Medicine</em> show that IMGs who use native-language
            supplementary materials alongside English resources score consistently higher on the USMLE compared to
            English-only learners, particularly on Step 1 and Step 2 CK.
          </p>
        </div>

        <h3>Practical Tips for Multi-Language Study</h3>
        <ol>
          <li>
            <strong>First pass in English:</strong> Read the question and try to answer in English first — this mirrors
            the real exam experience.
          </li>
          <li>
            <strong>Second pass in your language:</strong> After checking your answer, read the explanation in your
            native language for deeper understanding.
          </li>
          <li>
            <strong>Third pass back to English:</strong> Re-read the English explanation to reinforce medical
            terminology in the exam language.
          </li>
          <li>
            <strong>Make bilingual flashcards:</strong> Create flashcards with the concept in English on one side and
            the explanation in your native language on the other.
          </li>
        </ol>
      </div>
    ),
  },
  {
    slug: 'usmle-step3-guide-img-residents',
    title: 'USMLE Step 3 Complete Guide for IMG Residents: CCS Cases, Biostats & Study Strategy',
    excerpt:
      'Everything IMG residents need to know about USMLE Step 3: CCS case strategies, biostatistics review, and how to study efficiently during residency.',
    date: '2026-06-02',
    readTime: '7 min read',
    category: 'Step 3',
    tags: ['Step 3', 'IMG', 'Residency', 'CCS', 'Biostatistics'],
    emoji: '🏥',
    content: (
      <div className="prose prose-lg max-w-none">
        <h2>Step 3: The Final Hurdle for IMGs</h2>
        <p>
          USMLE Step 3 is unique — it's the only exam that assesses both clinical knowledge (Day 1: Foundations of
          Independent Practice) and clinical decision-making (Day 2: Advanced Clinical Medicine + CCS cases). For IMG
          residents, studying for Step 3 while managing clinical duties is challenging but manageable with the right
          strategy.
        </p>

        <h3>Understanding the Two-Day Exam Format</h3>
        <p>
          <strong>Day 1 (7 hours):</strong> 232 multiple-choice questions covering foundational sciences, biostatistics,
          epidemiology, ethics, and patient safety. This is essentially a harder version of Step 2 CK with more emphasis
          on biostatistics and population health.
        </p>
        <p>
          <strong>Day 2 (9 hours):</strong> 180 multiple-choice questions (prognosis, management) + 13 Computer-based
          Case Simulations (CCS). The CCS cases can make or break your score — they account for approximately 25% of
          your total.
        </p>

        <h3>CCS Cases: The Most Important Part of Step 3</h3>
        <p>
          For many IMGs, the CCS (Computer-based Case Simulation) component is the most unfamiliar part of Step 3.
          You'll manage 13 virtual patients over 10-20 minutes each, making diagnostic and treatment decisions in
          real time. Here's what you need to know:
        </p>
        <ul>
          <li><strong>Start conservatively:</strong> Begin with basic labs and imaging before ordering invasive tests.</li>
          <li><strong>Advance the clock:</strong> Don't forget to use the "Advance Clock" function — cases won't progress unless you move time forward.</li>
          <li><strong>Patient counseling:</strong> Always counsel patients about diagnosis, treatment, and follow-up before ending the case.</li>
          <li><strong>Preventive care:</strong> Order age-appropriate screening (mammograms, colonoscopy, vaccines) even when not directly related to the chief complaint.</li>
          <li><strong>End cases early:</strong> For emergency cases (MI, PE, anaphylaxis), the case will end early if you manage correctly. Don't be alarmed.</li>
        </ul>

        <h3>Biostatistics: A Disproportionate Share of Day 1</h3>
        <p>
          Biostatistics and epidemiology account for 10-15% of Day 1 questions — a disproportionate share compared to
          other topics. Focus on:
        </p>
        <ul>
          <li><strong>Study designs:</strong> Case-control vs. cohort vs. cross-sectional vs. RCT — know the indications, strengths, and weaknesses of each.</li>
          <li><strong>Statistical tests:</strong> When to use t-test, chi-square, ANOVA, logistic regression.</li>
          <li><strong>Bias types:</strong> Selection bias, recall bias, confounding, effect modification.</li>
          <li><strong>Drug ads:</strong> Know how to interpret absolute vs. relative risk reduction, NNT, and NNH from pharmaceutical advertisements — this is a heavily tested skill.</li>
        </ul>

        <p>
          Start practicing with our{' '}
          <Link to="/quiz/step3/Biostatistics" className="text-blue-600 hover:underline font-semibold">
            free Step 3 questions
          </Link>{' '}
          for biostatistics, ethics, and patient safety topics.
        </p>

        <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
          <h4 className="text-lg font-bold text-amber-900 mb-2">Resident's Study Strategy</h4>
          <p className="text-amber-800">
            As a busy resident, aim for 1 hour of study on weekdays (20 questions + review) and 3-4 hours on weekend
            days (full CCS practice + 40 questions). Most IMG residents need 2-3 months of consistent study. The best
            time to take Step 3 is during your first year of residency — clinical experience significantly improves
            your CCS performance.
          </p>
        </div>
      </div>
    ),
  },
]

const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="USMLE Study Guide & Tips for IMGs — Blog"
        description="Free USMLE preparation guides, study plans, and exam strategies for international medical graduates. Tips for Step 1, Step 2 CK, and Step 3. Multi-language study advice."
        canonicalPath="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            USMLE Study Guides for IMGs
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Free study plans, exam strategies, and multi-language learning tips written by IMGs, for IMGs.
            Everything you need to know about Step 1, Step 2 CK, and Step 3.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{post.emoji}</span>
                    <div>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>

                {/* Article content (readable inline, no separate page routing needed for simplicity) */}
                <details className="border-t border-gray-100">
                  <summary className="px-8 py-4 cursor-pointer text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-between list-none">
                    <span>Read Full Article</span>
                    <span className="text-blue-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-8 pb-8">{post.content}</div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <AdBanner format="horizontal" />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Put These Strategies into Practice?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Apply what you've learned with 1069+ free USMLE practice questions. Multi-language
            explanations in English, Chinese, and Spanish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/question-bank"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Practicing Free →
            </Link>
            <Link
              to="/quiz/step1"
              className="bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-300 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Step 1 Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
