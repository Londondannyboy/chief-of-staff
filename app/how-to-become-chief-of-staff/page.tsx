import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/how-to-become-chief-of-staff",
      url: "https://chiefofstaff.quest/how-to-become-chief-of-staff",
      name: "How to Become a Chief of Staff | Complete Career Guide 2025",
      description: "Step-by-step guide to becoming a Chief of Staff. Learn the skills, experience, and strategies needed to land your first CoS role.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Chief of Staff Recruitment Agency", item: "https://chiefofstaff.quest" },
        { "@type": "ListItem", position: 2, name: "How to Become a Chief of Staff", item: "https://chiefofstaff.quest/how-to-become-chief-of-staff" }
      ]
    },
    {
      "@type": "HowTo",
      name: "How to Become a Chief of Staff",
      description: "A comprehensive guide to launching your career as a Chief of Staff",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Build the Right Foundation",
          text: "Gain 5-10 years of experience in consulting, investment banking, operations, or strategy roles. Develop strong analytical, communication, and project management skills."
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Develop Cross-Functional Expertise",
          text: "Work across multiple business functions to understand how organisations operate. Chiefs of Staff need to navigate all areas from finance to product to HR."
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Build Executive Relationships",
          text: "Seek opportunities to work closely with senior executives. Shadow leaders, take on strategic projects, and demonstrate your ability to operate at the executive level."
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Target the Right Opportunities",
          text: "Apply to CoS roles at companies where your background is relevant. Startups often hire first-time CoS, while enterprises prefer experienced candidates."
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Ace the Interview Process",
          text: "Prepare for case studies, demonstrate strategic thinking, show you can work autonomously, and prove you understand the specific needs of the executive you'd support."
        }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What qualifications do you need to become a Chief of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Chiefs of Staff have 5-10 years of experience in consulting, investment banking, strategy, or operations. An MBA or advanced degree is common but not required. Key qualifications include: strategic thinking, project management, stakeholder management, executive presence, and the ability to operate ambiguously and autonomously."
          }
        },
        {
          "@type": "Question",
          name: "What is the typical career path to Chief of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common paths include: Management Consulting (McKinsey, BCG, Bain) → CoS; Investment Banking → CoS; Internal promotion from strategy/ops roles; MBA → CoS; Startup operator → CoS. The most common backgrounds are consulting (40%), banking/finance (25%), and internal promotion (20%)."
          }
        },
        {
          "@type": "Question",
          name: "Can you become a Chief of Staff without consulting experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, while consulting is a common path, many successful Chiefs of Staff come from operations, product management, business development, or internal strategy roles. What matters most is demonstrating strategic thinking, cross-functional experience, and the ability to work effectively with executives. Startup experience can be particularly valuable."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take to become a Chief of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most people become Chiefs of Staff after 5-10 years of professional experience. However, some startup CoS roles are accessible with 3-5 years of experience, especially for high-performers from top firms or with relevant domain expertise. Senior CoS roles at larger companies typically require 8+ years."
          }
        },
        {
          "@type": "Question",
          name: "Is Chief of Staff a good career move?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Chief of Staff is widely considered one of the best career accelerators. Benefits include: direct access to executive decision-making, exposure to all business functions, accelerated learning and network building, and strong exit opportunities to C-suite, VP, GM, or founder roles within 2-4 years."
          }
        }
      ]
    }
  ]
};

// Target keyword: "how to become chief of staff"
export const metadata: Metadata = {
  title: "How to Become a Chief of Staff 🚀 Complete Career Guide 2025",
  description: "📚 How to become a Chief of Staff: skills, experience & strategies needed. Ex-consultant? Banker? Operator? Learn the path to landing your first CoS role.",
  keywords: "how to become chief of staff, chief of staff career path, cos career guide",
  openGraph: {
    title: "How to Become a Chief of Staff 🚀 Complete Career Guide 2025",
    description: "📚 How to become a Chief of Staff: skills, experience & strategies needed.",
    type: "website",
    url: "https://chiefofstaff.quest/how-to-become-chief-of-staff",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/how-to-become-chief-of-staff",
  },
};

const careerPaths = [
  {
    path: "Management Consulting",
    percentage: "40%",
    firms: "McKinsey, BCG, Bain, Big 4",
    advantage: "Strategic thinking, structured problem-solving, client management",
    timeline: "2-4 years post-MBA or 4-6 years pre-MBA"
  },
  {
    path: "Investment Banking / Finance",
    percentage: "25%",
    firms: "Goldman Sachs, JPMorgan, Morgan Stanley, PE/VC",
    advantage: "Financial modelling, deal execution, high-pressure environment",
    timeline: "3-5 years as analyst/associate"
  },
  {
    path: "Internal Promotion",
    percentage: "20%",
    firms: "Strategy, BizOps, or CEO's office roles",
    advantage: "Deep company knowledge, existing executive relationships",
    timeline: "2-4 years in current role"
  },
  {
    path: "Startup / Operations",
    percentage: "15%",
    firms: "Early-stage startups, scale-up operations",
    advantage: "Hands-on execution, ambiguity tolerance, broad skill set",
    timeline: "3-6 years building and scaling"
  },
];

const essentialSkills = [
  { skill: "Strategic Thinking", description: "Ability to see the big picture and connect dots across the organisation" },
  { skill: "Project Management", description: "Drive complex cross-functional initiatives from concept to completion" },
  { skill: "Executive Communication", description: "Communicate clearly and concisely with C-suite and board members" },
  { skill: "Stakeholder Management", description: "Navigate organisational politics and build relationships at all levels" },
  { skill: "Problem Solving", description: "Break down ambiguous problems and develop actionable solutions" },
  { skill: "Discretion & Judgment", description: "Handle sensitive information with absolute confidentiality" },
  { skill: "Adaptability", description: "Context-switch rapidly and thrive in ambiguous environments" },
  { skill: "Execution Excellence", description: "Deliver results independently with minimal supervision" },
];

const interviewTips = [
  { tip: "Research the Executive", details: "Understand the CEO/executive's background, priorities, and leadership style" },
  { tip: "Prepare Case Studies", details: "Be ready to walk through how you'd handle strategic projects or crises" },
  { tip: "Show Strategic Thinking", details: "Demonstrate you can think several steps ahead and anticipate needs" },
  { tip: "Prove Autonomy", details: "Give examples of working independently on high-stakes projects" },
  { tip: "Ask Smart Questions", details: "Inquire about the exec's expectations, company challenges, and success metrics" },
];

export default function HowToBecomeChiefOfStaff() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
              <Link href="/jobs" className="text-gray-300 hover:text-amber-400 transition-colors">Jobs</Link>
              <Link href="/how-to-become-chief-of-staff" className="text-amber-400">Career Guide</Link>
              <Link href="/chief-of-staff-salary-uk" className="text-gray-300 hover:text-amber-400 transition-colors">Salaries</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-amber-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-gray-400">
              <Link href="/" className="hover:text-amber-400 underline">Chief of Staff Recruitment Agency</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-400">Career Guide</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How to Become a Chief of Staff:{" "}
              <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                Complete Career Guide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              The Chief of Staff role is one of the most sought-after positions in business. Our <strong>Chief of Staff recruitment agency</strong> has
              created this comprehensive guide to help you land your first CoS role.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">5-10 yrs</div>
                <div className="text-sm text-gray-400">Typical Experience</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">40%</div>
                <div className="text-sm text-gray-400">Ex-Consultants</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-green-400">2-4 yrs</div>
                <div className="text-sm text-gray-400">To C-Suite Exit</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400">High</div>
                <div className="text-sm text-gray-400">Demand Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Common Paths to Chief of Staff</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((path) => (
                <div key={path.path} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{path.path}</h3>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full font-medium">
                      {path.percentage} of CoS
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3"><strong>Common firms:</strong> {path.firms}</p>
                  <p className="text-gray-400 text-sm mb-3"><strong>Key advantage:</strong> {path.advantage}</p>
                  <p className="text-gray-500 text-sm"><strong>Timeline:</strong> {path.timeline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Skills */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Essential Skills for Chiefs of Staff</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {essentialSkills.map((item) => (
                <div key={item.skill} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-bold text-white mb-2">{item.skill}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Step-by-Step: Landing Your First CoS Role</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Build the Right Foundation (Years 1-5)</h3>
                  <p className="text-gray-400">Start in consulting, banking, or high-growth startups. Focus on developing structured problem-solving, stakeholder management, and execution skills. Seek opportunities for cross-functional projects.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Develop Executive Exposure (Years 3-7)</h3>
                  <p className="text-gray-400">Actively seek opportunities to work with senior executives. Volunteer for strategic projects, join CEO office initiatives, or take on an executive assistant to leadership role. Build your network with C-suite professionals.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Position Yourself for CoS Roles (Year 5+)</h3>
                  <p className="text-gray-400">Update your LinkedIn to highlight strategic project experience. Network with current Chiefs of Staff. Consider an MBA if you want to accelerate the transition. Work with specialist recruiters like our Chief of Staff recruitment agency.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Target the Right Companies</h3>
                  <p className="text-gray-400">First-time CoS candidates often have better luck at startups (Series A-C) where executives value hustle over pedigree. Enterprise CoS roles typically require prior CoS experience or exceptional credentials.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Nail the Interview Process</h3>
                  <p className="text-gray-400">Prepare for case studies, demonstrate strategic thinking, and show you can operate autonomously. Research the executive thoroughly. Ask smart questions about their priorities and how they envision the CoS role.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Tips */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Chief of Staff Interview Tips</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {interviewTips.map((item, idx) => (
                <div key={item.tip} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                  <div className="text-amber-400 font-bold mb-2">Tip {idx + 1}</div>
                  <h3 className="font-bold text-white mb-2">{item.tip}</h3>
                  <p className="text-gray-400 text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes a Great CoS */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              What Makes a <span className="text-amber-400">Great Chief of Staff</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="mb-6">
                The best Chiefs of Staff share several key characteristics that go beyond technical skills:
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Extreme Ownership</h3>
              <p className="mb-6">
                Great CoS professionals take complete ownership of outcomes. They don&apos;t wait for direction—they anticipate needs, identify problems before they escalate, and drive solutions without being asked.
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Ego-Free Leadership</h3>
              <p className="mb-6">
                The CoS role requires operating behind the scenes. You enable your executive&apos;s success rather than seeking personal credit. The best CoS professionals find satisfaction in making others successful.
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Curiosity</h3>
              <p className="mb-6">
                Chiefs of Staff need to rapidly understand diverse topics—from technical product decisions to financial modelling to people strategy. A genuine curiosity and love of learning is essential.
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Political Savvy</h3>
              <p className="mb-6">
                Navigating organisational dynamics is a key part of the role. Understanding who influences decisions, how to build coalitions, and when to push vs. pull requires sophisticated emotional intelligence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-600/20 via-[#0a0a0f] to-amber-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Chief of Staff Journey?</h2>
            <p className="text-gray-300 mb-8">Browse current opportunities and take the first step toward your CoS career.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-xl">
                Browse CoS Jobs
              </Link>
              <Link href="/chief-of-staff-salary-uk" className="px-8 py-4 bg-gray-800 text-white rounded-xl border border-gray-700">
                Salary Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold mb-6 text-white">Explore More</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                Chief of Staff Recruitment Agency
              </Link>
              <Link href="/jobs" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                All Jobs
              </Link>
              <Link href="/chief-of-staff-jobs-uk" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                UK Jobs
              </Link>
              <Link href="/chief-of-staff-salary-uk" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                Salary Guide
              </Link>
            </div>
          </div>
        </section>
      </main>

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
            &copy; {new Date().getFullYear()} Chief of Staff Quest - UK&apos;s Leading <Link href="/" className="hover:text-amber-400 underline">Chief of Staff Recruitment Agency</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
