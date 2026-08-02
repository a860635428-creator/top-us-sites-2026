import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const WEB3FORMS_ACCESS_KEY = 'cb94bc7d-3efb-466a-b5e4-01bc5e4c755a'
const ADMIN_EMAIL = 'a860635428@gmail.com'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'USMLE Prep — Contact Form Message',
          from_name: form.name || 'Anonymous',
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white">
      <SEO
        title="Contact Us — USMLE Prep Platform"
        description="Get in touch with the USMLE Prep team. Report errors, suggest questions, or ask about the platform. We typically respond within 48 hours."
        canonicalPath="/contact"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 mb-10">
          Questions, suggestions, or found an error in a practice question? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: direct contact */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600 mb-2">Best for detailed questions or corrections.</p>
              <a href={`mailto:${ADMIN_EMAIL}`} className="text-blue-600 hover:underline font-medium break-all">
                {ADMIN_EMAIL}
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 mb-1">Community</h3>
              <p className="text-sm text-gray-600 mb-2">Study with other IMGs.</p>
              <a
                href="https://discord.gg/usmle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Join our Discord
              </a>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              We typically respond within 48 hours. For urgent content corrections, email works best.
            </p>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="text-green-600 text-sm font-medium">✅ Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm font-medium">
                  Something went wrong. Please email us directly at{' '}
                  <a href={`mailto:${ADMIN_EMAIL}`} className="underline">{ADMIN_EMAIL}</a>.
                </p>
              )}
            </form>
          </div>
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

export default Contact
