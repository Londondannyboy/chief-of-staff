import Link from "next/link";

// Homepage-specific structured data
const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/#webpage",
      url: "https://chiefofstaff.quest",
      name: "Chief of Staff Recruitment Agency | Chief of Staff Jobs UK & US",
      description: "Leading Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles at top companies in tech, startups, consulting, and enterprise.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" },
      about: { "@id": "https://chiefofstaff.quest/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://chiefofstaff.quest/og-image.png"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a Chief of Staff do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Chief of Staff serves as a strategic partner to the CEO or executive leadership, handling cross-functional initiatives, managing special projects, facilitating communication across teams, and ensuring organizational priorities are executed effectively. They act as a force multiplier for executives.",
          },
        },
        {
          "@type": "Question",
          name: "What qualifications do you need to become a Chief of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Chief of Staff roles require 5-10 years of experience in consulting, operations, or business strategy. An MBA or advanced degree is often preferred. Key skills include strategic thinking, project management, excellent communication, and the ability to work across all levels of an organization.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average Chief of Staff salary?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chief of Staff salaries vary by company size and location. In the UK, salaries typically range from GBP70,000 to GBP150,000. In the US, the range is $120,000 to $250,000+. Startup CoS roles may include equity compensation. Senior CoS roles at large enterprises can exceed these ranges.",
          },
        },
        {
          "@type": "Question",
          name: "Is Chief of Staff a good career path?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Chief of Staff is an excellent career accelerator. It provides exposure to executive decision-making, cross-functional experience, and strategic business operations. Many CoS professionals go on to become CEOs, COOs, VPs, or successful founders.",
          },
        },
        {
          "@type": "Question",
          name: "What industries hire Chiefs of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chiefs of Staff are hired across all industries including technology, finance, consulting, healthcare, nonprofits, government, and startups. Tech companies and high-growth startups have been particularly active in hiring CoS roles in recent years.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://chiefofstaff.quest"
        }
      ]
    }
  ],
};

const jobCategories = [
  {
    icon: "🎯",
    title: "CEO Chief of Staff",
    description:
      "Partner directly with the CEO as their strategic right hand. Drive company-wide initiatives, manage board communications, and ensure executive priorities are executed across the organization.",
    features: ["Executive Strategy", "Board Relations", "Special Projects"],
  },
  {
    icon: "🚀",
    title: "Startup Chief of Staff",
    description:
      "Join a high-growth startup as the founder's force multiplier. Wear multiple hats, build processes from scratch, and help scale the company from early stage to market leader.",
    features: ["Hypergrowth", "Equity Package", "Founder Access"],
  },
  {
    icon: "💼",
    title: "Enterprise Chief of Staff",
    description:
      "Lead strategic initiatives at Fortune 500 companies. Manage complex stakeholder relationships, drive transformation programs, and influence decisions at the highest levels.",
    features: ["Large Scale Impact", "Global Scope", "Executive Visibility"],
  },
  {
    icon: "📊",
    title: "Operations Chief of Staff",
    description:
      "Focus on operational excellence and business performance. Optimize processes, lead cross-functional projects, and ensure the organization runs efficiently.",
    features: ["Process Optimization", "Performance Metrics", "Cross-Functional"],
  },
  {
    icon: "🏛️",
    title: "Government & Nonprofit CoS",
    description:
      "Serve in mission-driven organizations making real-world impact. Support leaders in government, NGOs, and nonprofits to achieve their strategic objectives.",
    features: ["Mission-Driven", "Policy Impact", "Stakeholder Management"],
  },
  {
    icon: "💡",
    title: "Consulting to CoS",
    description:
      "Transition from consulting to an in-house Chief of Staff role. Apply your analytical skills and strategic frameworks in a high-impact operational position.",
    features: ["Strategy Execution", "Problem Solving", "Client-Side Impact"],
  },
];

const stats = [
  { value: "40%", label: "Salary Growth in 5 Years" },
  { value: "85%", label: "Promoted Within 3 Years" },
  { value: "$180K", label: "Average US CoS Salary" },
  { value: "100%", label: "Free Job Board" },
];

const featuredJobs = [
  {
    id: "1",
    title: "Chief of Staff to CEO",
    company: "Series B Fintech Startup",
    location: "London, UK",
    salary: "GBP90,000 - GBP120,000 + Equity",
    type: "Full-time",
    skills: ["Strategy", "Operations", "Financial Analysis"],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    externalUrl: "#",
  },
  {
    id: "2",
    title: "Chief of Staff, Technology",
    company: "Global Tech Enterprise",
    location: "New York, US (Hybrid)",
    salary: "$150,000 - $200,000",
    type: "Full-time",
    skills: ["Tech Operations", "Program Management", "Executive Communication"],
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    externalUrl: "#",
  },
  {
    id: "3",
    title: "Chief of Staff to Managing Partner",
    company: "Top-Tier Consulting Firm",
    location: "London, UK",
    salary: "GBP100,000 - GBP140,000",
    type: "Full-time",
    skills: ["Consulting Background", "Stakeholder Management", "Strategy"],
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    externalUrl: "#",
  },
  {
    id: "4",
    title: "Chief of Staff to Founder",
    company: "AI Startup (Seed Stage)",
    location: "San Francisco, US",
    salary: "$120,000 - $150,000 + 0.5% Equity",
    type: "Full-time",
    skills: ["AI/ML Knowledge", "Startup Operations", "Fundraising Support"],
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    externalUrl: "#",
  },
  {
    id: "5",
    title: "Chief of Staff, Healthcare Division",
    company: "Fortune 100 Healthcare Company",
    location: "Remote (US)",
    salary: "$140,000 - $180,000",
    type: "Full-time",
    skills: ["Healthcare Industry", "Change Management", "Executive Support"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    externalUrl: "#",
  },
  {
    id: "6",
    title: "Chief of Staff to COO",
    company: "E-commerce Scale-up",
    location: "Berlin, Germany",
    salary: "EUR80,000 - EUR110,000",
    type: "Full-time",
    skills: ["E-commerce", "Operations", "Data Analysis"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    externalUrl: "#",
  },
];

const companies = [
  "Google",
  "Meta",
  "Stripe",
  "McKinsey",
  "Goldman Sachs",
  "Andreessen Horowitz",
  "Spotify",
  "Airbnb",
];

const careerPaths = [
  {
    title: "Consulting to CoS",
    description: "Leverage your MBB or Big 4 experience to transition into a high-impact Chief of Staff role.",
    roles: ["Strategy Consultant", "Management Consultant", "Senior Analyst", "Principal"],
    icon: "📈",
  },
  {
    title: "Operations to CoS",
    description: "Build on your operational expertise to become a CEO's strategic partner.",
    roles: ["Operations Manager", "Program Manager", "Business Operations", "Strategy & Ops"],
    icon: "⚙️",
  },
  {
    title: "Finance to CoS",
    description: "Apply your financial acumen to drive business strategy at the executive level.",
    roles: ["Investment Banking", "Private Equity", "FP&A", "Corporate Development"],
    icon: "💰",
  },
  {
    title: "CoS to Executive",
    description: "Use your Chief of Staff experience as a launchpad to C-suite leadership.",
    roles: ["CEO", "COO", "VP Operations", "General Manager", "Founder"],
    icon: "🎯",
  },
];

const industryStats = [
  {
    stat: "300%",
    label: "Growth in Chief of Staff job postings over the past 5 years, according to LinkedIn data.",
  },
  {
    stat: "3 Years",
    label: "Average time for a Chief of Staff to get promoted to VP, C-suite, or launch their own venture.",
  },
  {
    stat: "65%",
    label: "Of Fortune 500 CEOs now have a Chief of Staff supporting their strategic priorities.",
  },
  {
    stat: "$250K+",
    label: "Top-tier Chief of Staff compensation at leading tech companies and PE-backed firms.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Page-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 animated-gradient" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />

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
                <a href="#jobs" className="text-gray-300 hover:text-amber-400 transition-colors">Browse Jobs</a>
                <a href="#categories" className="text-gray-300 hover:text-amber-400 transition-colors">Categories</a>
                <a href="#careers" className="text-gray-300 hover:text-amber-400 transition-colors">Career Paths</a>
                <a href="#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</a>
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-400 text-sm font-medium">
            The #1 Chief of Staff Recruitment Agency
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block">CHIEF OF STAFF</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              RECRUITMENT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The leading Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles at top companies in tech, startups, consulting, and enterprise.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search Chief of Staff jobs..."
                className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all btn-shine">
                Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-gray-400">Popular:</span>
            <a href="#" className="text-amber-400 hover:underline">CEO Chief of Staff</a>
            <a href="#" className="text-amber-400 hover:underline">Startup CoS</a>
            <a href="#" className="text-amber-400 hover:underline">Remote</a>
            <a href="#" className="text-amber-400 hover:underline">Tech</a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-amber-500/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-amber-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black stat-value mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a Chief of Staff */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              Your <span className="text-amber-400">Chief of Staff</span> Recruitment Agency
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                As a specialised <Link href="/" className="text-amber-400 hover:underline">Chief of Staff recruitment agency</Link>, we connect exceptional professionals with strategic CoS roles at leading organisations. The Chief of Staff role has emerged as one of the most impactful positions in modern business.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                A Chief of Staff serves as a force multiplier for executives—managing cross-functional initiatives, driving strategic projects, and ensuring organizational priorities are executed. According to the <a href="https://chiefofstaff.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Chief of Staff Association</a>, demand for CoS roles has grown 300% over the past five years.
              </p>
              <p className="text-lg text-gray-400">
                Whether you are a consultant looking to go in-house, an operator ready for executive exposure, or a rising leader seeking the ultimate career accelerator, we aggregate <Link href="/" className="text-amber-400 hover:underline">Chief of Staff jobs</Link> from top companies to help you find your next role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section id="jobs" className="py-24 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Real <span className="text-amber-400">Chief of Staff Jobs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Live job listings from top companies. Apply directly to employers.
            </p>
          </div>

          <div className="grid gap-4">
            {featuredJobs.map((job) => (
              <a
                key={job.id}
                href={job.externalUrl}
                className="job-card bg-gray-900/50 rounded-xl overflow-hidden flex flex-col md:flex-row hover:bg-gray-800/50 transition-colors group"
              >
                {/* Hero Image */}
                <div className="relative w-full md:w-52 h-36 md:h-auto flex-shrink-0">
                  <img
                    src={job.heroImage}
                    alt={`${job.title} at ${job.company}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{job.title}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                      <span className="font-medium text-amber-400">{job.company}</span>
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs rounded-full badge-fulltime">
                      {job.type}
                    </span>
                    <span className="bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-5 rounded transition-all">
                      Apply
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/jobs" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/20 font-bold py-3 px-8 rounded-lg transition-all">
              View All Chief of Staff Jobs
              <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Chief of Staff <span className="text-amber-400">Categories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore CoS opportunities across industries, company stages, and specialisations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section id="careers" className="py-24 animated-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Chief of Staff <span className="text-amber-400">Career Paths</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The Chief of Staff role is a proven career accelerator. See how professionals transition into and out of CoS roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{path.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{path.description}</p>
                <div className="flex flex-wrap gap-2">
                  {path.roles.map((role, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Chief of Staff <span className="text-amber-400">Market Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The demand for Chief of Staff professionals is accelerating.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industryStats.map((item, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
                <div className="text-4xl font-black text-amber-400 mb-4">{item.stat}</div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 bg-[#0d0d15] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-400 uppercase tracking-wider text-sm">
              Companies hiring <Link href="/" className="hover:text-amber-400">Chiefs of Staff</Link>
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Chief of Staff Resources</h2>
            <p className="text-gray-400">Trusted organisations supporting <Link href="/" className="text-amber-400 hover:underline">Chief of Staff</Link> professionals</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="https://chiefofstaff.org" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">Chief of Staff Association</h3>
              <p className="text-gray-400 text-sm">Global community for CoS professionals</p>
            </a>
            <a href="https://www.mckinsey.com" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">McKinsey Insights</h3>
              <p className="text-gray-400 text-sm">Executive leadership research</p>
            </a>
            <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">Harvard Business Review</h3>
              <p className="text-gray-400 text-sm">Leadership and strategy articles</p>
            </a>
            <a href="https://www.linkedin.com/jobs/chief-of-staff-jobs" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">LinkedIn CoS Jobs</h3>
              <p className="text-gray-400 text-sm">Global job listings</p>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              How to Land Your <span className="text-amber-400">Chief of Staff Role</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow these steps to find and secure your ideal CoS position.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse Opportunities",
                description: "Search through Chief of Staff job listings aggregated from LinkedIn, company career pages, and job boards. Filter by industry, location, and seniority level.",
              },
              {
                step: "02",
                title: "Apply Strategically",
                description: "Tailor your application to each role. Highlight your strategic thinking, cross-functional experience, and ability to operate at the executive level.",
              },
              {
                step: "03",
                title: "Land Your Role",
                description: "Prepare for case studies and situational interviews. Demonstrate how you'll be a force multiplier for the executive you'll support.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-black text-amber-500/10 absolute -top-4 -left-2">
                  {item.step}
                </div>
                <div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-8 pt-12">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-yellow-900/50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Your Chief of Staff Role Today
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We aggregate Chief of Staff jobs from top companies worldwide. Browse the latest opportunities and take the next step in your executive career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#jobs" className="bg-white text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all transform hover:scale-105 btn-shine inline-flex items-center justify-center">
              Browse CoS Jobs
            </a>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg text-lg transition-all inline-flex items-center justify-center">
              Post a Job
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              About Our <span className="text-amber-400">Recruitment Agency</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              We&apos;re a <strong>Chief of Staff recruitment agency</strong> dedicated to connecting exceptional professionals with strategic CoS roles.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We aggregate job listings from LinkedIn, company career pages, and job boards so you can find all Chief of Staff opportunities in one place. Whether you&apos;re targeting a Series A startup or a Fortune 500 enterprise, we help you discover roles that match your ambitions.
            </p>
            <ul className="inline-flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#10003;</span>
                <span>Real job listings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#10003;</span>
                <span>Career resources</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#10003;</span>
                <span>Industry insights</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">&#10003;</span>
                <span>100% free</span>
              </li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-lg transition-all">
              Get In Touch
              <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Career Guides Section */}
      <section id="guides" className="py-24 bg-gradient-to-b from-[#0a0a12] to-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Career <span className="text-amber-400">Guides & Resources</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive guides to help you break into and excel as a Chief of Staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/chief-of-staff-jobs-uk" className="p-6 rounded-xl bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-500/20 hover:border-amber-500/50 transition-all group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400">CoS Jobs UK</h3>
              <p className="text-gray-400 text-sm">Complete guide to Chief of Staff roles in the United Kingdom.</p>
            </Link>
            <Link href="/chief-of-staff-jobs-us" className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400">CoS Jobs US</h3>
              <p className="text-gray-400 text-sm">Chief of Staff opportunities across the United States.</p>
            </Link>
            <Link href="/chief-of-staff-salary" className="p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 hover:border-green-500/50 transition-all group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">Salary Guide</h3>
              <p className="text-gray-400 text-sm">Compensation data for CoS roles by industry and location.</p>
            </Link>
            <Link href="/how-to-become-chief-of-staff" className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400">How to Become CoS</h3>
              <p className="text-gray-400 text-sm">Step-by-step guide to landing your first CoS role.</p>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/startup-chief-of-staff" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">Startup CoS</span>
            </Link>
            <Link href="/tech-chief-of-staff" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">Tech CoS</span>
            </Link>
            <Link href="/remote-chief-of-staff" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">Remote CoS</span>
            </Link>
            <Link href="/chief-of-staff-interview" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">Interview Guide</span>
            </Link>
            <Link href="/chief-of-staff-resume" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">Resume Tips</span>
            </Link>
            <Link href="/cos-vs-ea" className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-amber-500/50 transition-all text-center">
              <span className="text-gray-300 text-sm">CoS vs EA</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Chief of Staff <span className="text-amber-400">FAQ</span>
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about Chief of Staff roles and careers
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What does a Chief of Staff actually do?",
                a: "A Chief of Staff serves as a strategic partner to the CEO or executive leadership. Responsibilities include managing cross-functional initiatives, driving special projects, facilitating communication across teams, preparing for board meetings, and ensuring organizational priorities are executed effectively. The role varies significantly based on company size, stage, and the executive's needs.",
              },
              {
                q: "What qualifications do you need to become a Chief of Staff?",
                a: "Most Chief of Staff roles require 5-10 years of professional experience, typically in consulting, operations, strategy, or a related field. An MBA or advanced degree is often preferred but not always required. Key skills include strategic thinking, project management, excellent communication, stakeholder management, and the ability to operate at all levels of an organization.",
              },
              {
                q: "What is the average Chief of Staff salary?",
                a: "Chief of Staff salaries vary significantly by company size, industry, and location. In the UK, salaries typically range from GBP70,000 to GBP150,000. In the US, the range is $120,000 to $250,000+. Startup CoS roles often include equity compensation that can significantly increase total compensation. Senior CoS roles at large enterprises or PE-backed companies can exceed these ranges.",
              },
              {
                q: "Is Chief of Staff a good career path?",
                a: "Yes, Chief of Staff is widely regarded as one of the best career accelerators. It provides unparalleled exposure to executive decision-making, cross-functional experience across all business areas, and strategic business operations. Many CoS professionals go on to become CEOs, COOs, VPs, General Managers, or successful founders within 3-5 years of their CoS tenure.",
              },
              {
                q: "What's the difference between Chief of Staff and Executive Assistant?",
                a: "While both roles support executives, they differ significantly in scope and focus. Executive Assistants primarily handle administrative tasks, scheduling, and logistics. Chiefs of Staff focus on strategic initiatives, cross-functional projects, and business operations. CoS roles require more experience and typically involve decision-making authority, whereas EA roles are more supportive in nature.",
              },
              {
                q: "Which industries hire Chiefs of Staff?",
                a: "Chiefs of Staff are hired across virtually all industries including technology, finance, consulting, healthcare, nonprofits, government, private equity, and startups. Tech companies and high-growth startups have been particularly active in hiring CoS roles. The role is also common in large enterprises, PE-backed portfolio companies, and mission-driven organizations.",
              },
              {
                q: "How do I transition from consulting to Chief of Staff?",
                a: "Consulting is one of the most common backgrounds for Chiefs of Staff. To make the transition, leverage your strategic thinking, stakeholder management, and project execution skills. Network with executives looking for CoS support, target companies in industries you've served as a consultant, and emphasize your ability to operate independently and drive results without a large team.",
              },
              {
                q: "Can I become a Chief of Staff without an MBA?",
                a: "Absolutely. While an MBA is valued, many successful Chiefs of Staff don't have one. What matters more is demonstrable strategic thinking, project management skills, and the ability to work effectively with executives. Strong performers from consulting, operations, product, or finance backgrounds often transition into CoS roles based on their track record rather than credentials.",
              },
              {
                q: "Are Chief of Staff roles remote-friendly?",
                a: "Increasingly, yes. Many companies offer hybrid or fully remote Chief of Staff positions, especially in the tech sector. However, some CoS roles require in-person presence due to the nature of executive support and cross-functional coordination. The availability of remote options depends on the company culture, industry, and specific role requirements.",
              },
              {
                q: "What's the typical tenure for a Chief of Staff?",
                a: "Most Chiefs of Staff serve in the role for 2-4 years before moving on to their next position. The role is often designed as a development opportunity rather than a permanent position. After their CoS tenure, professionals typically move into operating roles like VP of Operations, GM, or C-suite positions, or they may join a portfolio company in a leadership role.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <span className="font-bold text-lg text-white pr-4">{faq.q}</span>
                  <span className="text-amber-400 text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <span className="font-bold text-xl">
                  <span className="text-amber-400">Chief of Staff</span> Quest
                </span>
              </Link>
              <p className="text-gray-400 text-sm">
                The leading Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Job Guides</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/chief-of-staff-jobs-uk" className="hover:text-amber-400">CoS Jobs UK</Link></li>
                <li><Link href="/chief-of-staff-jobs-us" className="hover:text-amber-400">CoS Jobs US</Link></li>
                <li><Link href="/startup-chief-of-staff" className="hover:text-amber-400">Startup CoS</Link></li>
                <li><Link href="/tech-chief-of-staff" className="hover:text-amber-400">Tech CoS</Link></li>
                <li><Link href="/remote-chief-of-staff" className="hover:text-amber-400">Remote CoS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/chief-of-staff-salary" className="hover:text-amber-400">Salary Guide</Link></li>
                <li><Link href="/how-to-become-chief-of-staff" className="hover:text-amber-400">How to Become CoS</Link></li>
                <li><Link href="/chief-of-staff-interview" className="hover:text-amber-400">Interview Guide</Link></li>
                <li><Link href="/chief-of-staff-resume" className="hover:text-amber-400">Resume Tips</Link></li>
                <li><Link href="/cos-vs-ea" className="hover:text-amber-400">CoS vs EA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-amber-400">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400">Post a Job</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Chief of Staff Quest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
