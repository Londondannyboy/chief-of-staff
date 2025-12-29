"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'post-job',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', company: '', type: 'post-job', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">
                <span className="text-amber-400">Chief of Staff</span> Quest
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#jobs" className="text-gray-300 hover:text-amber-400 transition-colors">Browse Jobs</Link>
              <Link href="/#categories" className="text-gray-300 hover:text-amber-400 transition-colors">Categories</Link>
              <Link href="/#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Contact Our <span className="text-amber-400">Chief of Staff Recruitment Agency</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Looking to post a Chief of Staff role or have questions about our recruitment services? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              {formState === 'success' ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 text-center">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting our Chief of Staff recruitment agency. We&apos;ll be in touch shortly.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-4 text-amber-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
                      What can we help with?
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="post-job">Post a Job</option>
                      <option value="recruitment">Recruitment Services</option>
                      <option value="candidate">I&apos;m a Candidate</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none"
                      placeholder="Tell us about your Chief of Staff hiring needs or how we can help..."
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/50 text-black font-bold py-4 px-8 rounded-lg transition-all btn-shine"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <h3 className="font-bold text-white">Email</h3>
                      <p className="text-gray-400">hello@chiefofstaff.quest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h3 className="font-bold text-white">Location</h3>
                      <p className="text-gray-400">London, United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <h3 className="font-bold text-white">Coverage</h3>
                      <p className="text-gray-400">UK, Europe, and Global Remote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Post a Chief of Staff Job</h2>
                <p className="text-gray-300 mb-6">
                  Looking to hire a Chief of Staff? Submit your role to our Chief of Staff recruitment agency and we&apos;ll feature it for free.
                </p>
                <ul className="space-y-3 text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">&#10003;</span>
                    <span>Free job posting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">&#10003;</span>
                    <span>Reach qualified CoS candidates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">&#10003;</span>
                    <span>Direct applications to your ATS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                <ul className="space-y-3">
                  <li>
                    <Link href="/jobs" className="text-amber-400 hover:underline">Browse Chief of Staff Jobs</Link>
                  </li>
                  <li>
                    <a href="https://csa.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Chief of Staff Association</a>
                  </li>
                  <li>
                    <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Harvard Business Review</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-xl">
              <span className="text-amber-400">Chief of Staff</span> Quest
            </span>
          </Link>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chief of Staff Quest - Chief of Staff Recruitment Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
