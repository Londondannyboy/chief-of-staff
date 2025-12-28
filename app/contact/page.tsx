import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chief of Staff Quest",
  description: "Get in touch with Chief of Staff Quest. Post a job, inquire about recruitment services, or ask questions about Chief of Staff careers.",
};

export default function ContactPage() {
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
              <Link href="/#careers" className="text-gray-300 hover:text-amber-400 transition-colors">Career Paths</Link>
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
              Get In <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Looking to post a Chief of Staff role or have questions about our recruitment services? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="company"
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
                    name="type"
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
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none"
                    placeholder="Tell us about your Chief of Staff hiring needs or how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-lg transition-all btn-shine"
                >
                  Send Message
                </button>
              </form>
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
                      <p className="text-gray-400">UK, US, and Global Remote</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
                <p className="text-gray-300 mb-6">
                  Looking to hire a Chief of Staff? Submit your role and we&apos;ll feature it on our job board for free.
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
                    <Link href="/#jobs" className="text-amber-400 hover:underline">Browse Chief of Staff Jobs</Link>
                  </li>
                  <li>
                    <Link href="/chief-of-staff-salary" className="text-amber-400 hover:underline">Salary Guide</Link>
                  </li>
                  <li>
                    <Link href="/how-to-become-chief-of-staff" className="text-amber-400 hover:underline">How to Become a CoS</Link>
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
            &copy; {new Date().getFullYear()} Chief of Staff Quest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
