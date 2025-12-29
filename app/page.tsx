import Link from "next/link";
import { chiefOfStaffJobs } from "../lib/jobs-data";

// Homepage-specific structured data - fully optimized for "chief of staff recruitment agency"
const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chiefofstaff.quest/#website",
      url: "https://chiefofstaff.quest",
      name: "Chief of Staff Quest - Chief of Staff Recruitment Agency",
      description: "The UK's leading Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles.",
      publisher: { "@id": "https://chiefofstaff.quest/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://chiefofstaff.quest/jobs?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://chiefofstaff.quest/#organization",
      name: "Chief of Staff Quest",
      alternateName: "Chief of Staff Recruitment Agency",
      url: "https://chiefofstaff.quest",
      logo: "https://chiefofstaff.quest/logo.png",
      description: "UK-based Chief of Staff recruitment agency specialising in executive CoS placements.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB"
      },
      sameAs: [
        "https://www.linkedin.com/company/chief-of-staff-quest"
      ],
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Europe" }
      ],
      serviceType: "Chief of Staff Recruitment Agency"
    },
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/#webpage",
      url: "https://chiefofstaff.quest",
      name: "Chief of Staff Recruitment Agency UK | Chief of Staff Jobs",
      description: "The UK's leading Chief of Staff recruitment agency. Browse CoS jobs at top companies. Free job board for employers.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" },
      about: { "@id": "https://chiefofstaff.quest/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://chiefofstaff.quest/og-image.png"
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-description"]
      }
    },
    {
      "@type": "EmploymentAgency",
      "@id": "https://chiefofstaff.quest/#agency",
      name: "Chief of Staff Quest - Chief of Staff Recruitment Agency",
      description: "Specialist Chief of Staff recruitment agency based in London, UK.",
      url: "https://chiefofstaff.quest",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278
      },
      priceRange: "Free for candidates"
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a Chief of Staff do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Chief of Staff serves as a strategic partner to the CEO or executive leadership, handling cross-functional initiatives, managing special projects, facilitating communication across teams, and ensuring organisational priorities are executed effectively. They act as a force multiplier for executives.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Chief of Staff recruitment agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Chief of Staff recruitment agency specialises in placing professionals in Chief of Staff roles. These agencies understand the unique requirements of the CoS position and connect qualified candidates with companies seeking strategic executive support.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average Chief of Staff salary in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chief of Staff salaries in the UK typically range from £70,000 to £150,000 depending on company size, industry, and seniority. Senior CoS roles at large enterprises or PE-backed companies can exceed £200,000. Startup CoS roles often include equity compensation.",
          },
        },
        {
          "@type": "Question",
          name: "Is Chief of Staff a good career path?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Chief of Staff is widely regarded as one of the best career accelerators. It provides unparalleled exposure to executive decision-making, cross-functional experience across all business areas, and strategic business operations. Many CoS professionals go on to become CEOs, COOs, VPs, or successful founders.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries hire Chiefs of Staff?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chiefs of Staff are hired across virtually all industries including technology, finance, consulting, healthcare, nonprofits, government, private equity, and startups. Tech companies and high-growth startups have been particularly active in hiring CoS roles.",
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
          name: "Chief of Staff Recruitment Agency",
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
      "Partner directly with the CEO as their strategic right hand. Drive company-wide initiatives, manage board communications, and ensure executive priorities are executed across the organisation.",
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
      "Lead strategic initiatives at FTSE 100 companies. Manage complex stakeholder relationships, drive transformation programmes, and influence decisions at the highest levels.",
    features: ["Large Scale Impact", "Global Scope", "Executive Visibility"],
  },
  {
    icon: "📊",
    title: "Operations Chief of Staff",
    description:
      "Focus on operational excellence and business performance. Optimise processes, lead cross-functional projects, and ensure the organisation runs efficiently.",
    features: ["Process Optimisation", "Performance Metrics", "Cross-Functional"],
  },
  {
    icon: "🏛️",
    title: "Government & Nonprofit CoS",
    description:
      "Serve in mission-driven organisations making real-world impact. Support leaders in government, NGOs, and nonprofits to achieve their strategic objectives.",
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

// UK-focused stats - no dollar signs
const stats = [
  { value: "40%", label: "Salary Growth in 5 Years" },
  { value: "85%", label: "Promoted Within 3 Years" },
  { value: "£120K", label: "Average UK CoS Salary" },
  { value: "100%", label: "Free Job Board" },
];

// Use real jobs from the shared data file
const featuredJobs = chiefOfStaffJobs.slice(0, 6);

// Real companies from our job listings
const companies = [
  "Barclays",
  "Northrop Grumman",
  "MongoDB",
  "Scale AI",
  "Dataiku",
  "Compass",
  "Zipline",
  "Addepar",
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
    roles: ["Operations Manager", "Programme Manager", "Business Operations", "Strategy & Ops"],
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

// UK-focused industry stats - no dollar signs
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
    label: "Of FTSE 100 CEOs now have a Chief of Staff supporting their strategic priorities.",
  },
  {
    stat: "£180K+",
    label: "Top-tier Chief of Staff compensation at leading tech companies and PE-backed firms in the UK.",
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

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
            poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          >
            <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        </div>

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
          {/* BBC Featured Badge - Authoritative Link */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.bbc.co.uk/news/business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-gray-900/50 text-gray-300 text-sm hover:border-amber-500/50 transition-all"
            >
              <span className="font-bold">BBC</span>
              <span>Business News</span>
            </a>
            <div className="inline-block px-4 py-2 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-400 text-sm font-medium">
              UK&apos;s #1 Chief of Staff Recruitment Agency
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">CHIEF OF STAFF</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              RECRUITMENT AGENCY
            </span>
          </h1>
          <p className="hero-description text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The UK&apos;s leading <strong>Chief of Staff recruitment agency</strong> connecting ambitious professionals with strategic CoS roles at top companies in tech, startups, consulting, and enterprise.
          </p>

          {/* Search Bar with Country Filter */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search Chief of Staff jobs..."
                className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              />
              <select
                defaultValue="UK"
                className="px-4 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-amber-500 min-w-[140px]"
              >
                <option value="UK">🇬🇧 United Kingdom</option>
                <option value="EU">🇪🇺 Europe</option>
                <option value="Remote">🌍 Remote</option>
                <option value="All">🌐 All Countries</option>
              </select>
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all btn-shine whitespace-nowrap">
                Search Jobs
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-gray-400">Popular:</span>
            <a href="#jobs" className="text-amber-400 hover:underline">CEO Chief of Staff</a>
            <a href="#jobs" className="text-amber-400 hover:underline">Startup CoS</a>
            <a href="#jobs" className="text-amber-400 hover:underline">London</a>
            <a href="#jobs" className="text-amber-400 hover:underline">Remote UK</a>
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

      {/* What is a Chief of Staff Recruitment Agency */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              Your <span className="text-amber-400">Chief of Staff Recruitment Agency</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                As a specialised Chief of Staff recruitment agency, we connect exceptional professionals with strategic CoS roles at leading organisations. The Chief of Staff role has emerged as one of the most impactful positions in modern business.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                A Chief of Staff serves as a force multiplier for executives—managing cross-functional initiatives, driving strategic projects, and ensuring organisational priorities are executed. According to the <a href="https://csa.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Chief of Staff Association</a>, demand for CoS roles has grown 300% over the past five years. The <a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">BBC</a> has also reported on the rising importance of this strategic role in UK businesses.
              </p>
              <p className="text-lg text-gray-400">
                Whether you are a consultant looking to go in-house, an operator ready for executive exposure, or a rising leader seeking the ultimate career accelerator, our Chief of Staff recruitment agency aggregates CoS jobs from top companies to help you find your next role.
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
              Chief of Staff <span className="text-amber-400">Recruitment Agency</span> Jobs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Live job listings from top companies. Apply directly to employers through our Chief of Staff recruitment agency.
            </p>
          </div>

          <div className="grid gap-4">
            {featuredJobs.map((job) => (
              <a
                key={job.id}
                href={job.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="job-card bg-gray-900/50 rounded-xl overflow-hidden flex flex-col md:flex-row hover:bg-gray-800/50 transition-colors group"
              >
                {/* Hero Image */}
                <div className="relative w-full md:w-52 h-36 md:h-auto flex-shrink-0">
                  <img
                    src={job.heroImage}
                    alt={`Chief of Staff recruitment agency - ${job.title} at ${job.company}`}
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
                      <span>💷 {job.salary.replace(/\$/g, '£').replace('USD', 'GBP')}</span>
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
              Our Chief of Staff recruitment agency covers CoS opportunities across industries, company stages, and specialisations.
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
              The Chief of Staff role is a proven career accelerator. Our Chief of Staff recruitment agency helps professionals transition into and out of CoS roles.
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
              The demand for Chief of Staff professionals is accelerating across the UK and globally.
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
              Companies hiring through our Chief of Staff recruitment agency
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
            <h2 className="text-2xl font-bold mb-4">Chief of Staff Recruitment Agency Resources</h2>
            <p className="text-gray-400">Trusted organisations supporting Chief of Staff professionals</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">BBC Business</h3>
              <p className="text-gray-400 text-sm">UK business and careers news</p>
            </a>
            <a href="https://csa.org" target="_blank" rel="noopener noreferrer" className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all text-center">
              <h3 className="font-bold text-white mb-2">Chief of Staff Association</h3>
              <p className="text-gray-400 text-sm">Global community for CoS professionals</p>
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
              How Our <span className="text-amber-400">Chief of Staff Recruitment Agency</span> Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow these steps to find and secure your ideal CoS position through our Chief of Staff recruitment agency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse Opportunities",
                description: "Search through Chief of Staff job listings aggregated by our recruitment agency from LinkedIn, company career pages, and job boards. Filter by industry, location, and seniority level.",
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
            Our Chief of Staff recruitment agency aggregates CoS jobs from top companies. Browse the latest opportunities and take the next step in your executive career.
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with SEO alt text */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Chief of Staff recruitment agency team helping UK professionals find executive CoS roles"
                title="Chief of Staff Recruitment Agency UK"
                className="w-full h-auto rounded-2xl"
                width={800}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                About Our <span className="text-amber-400">Chief of Staff Recruitment Agency</span>
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                We&apos;re a UK-based Chief of Staff recruitment agency dedicated to connecting exceptional professionals with strategic CoS roles.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We aggregate job listings from LinkedIn, company career pages, and job boards so you can find all Chief of Staff opportunities in one place. Whether you&apos;re targeting a Series A startup or a FTSE 100 enterprise, our Chief of Staff recruitment agency helps you discover roles that match your ambitions.
              </p>
              <ul className="inline-flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 mb-8">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Chief of Staff <span className="text-amber-400">Recruitment Agency</span> FAQ
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about Chief of Staff roles and our recruitment agency
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What does a Chief of Staff actually do?",
                a: "A Chief of Staff serves as a strategic partner to the CEO or executive leadership. Responsibilities include managing cross-functional initiatives, driving special projects, facilitating communication across teams, preparing for board meetings, and ensuring organisational priorities are executed effectively. The role varies significantly based on company size, stage, and the executive's needs.",
              },
              {
                q: "What is a Chief of Staff recruitment agency?",
                a: "A Chief of Staff recruitment agency, like Chief of Staff Quest, specialises in placing professionals in CoS roles. We understand the unique requirements of the position and connect qualified candidates with companies seeking strategic executive support. Our Chief of Staff recruitment agency aggregates jobs from multiple sources to give you the most comprehensive view of the market.",
              },
              {
                q: "What qualifications do you need to become a Chief of Staff?",
                a: "Most Chief of Staff roles require 5-10 years of professional experience, typically in consulting, operations, strategy, or a related field. An MBA or advanced degree is often preferred but not always required. Key skills include strategic thinking, project management, excellent communication, stakeholder management, and the ability to operate at all levels of an organisation.",
              },
              {
                q: "What is the average Chief of Staff salary in the UK?",
                a: "Chief of Staff salaries in the UK typically range from £70,000 to £150,000 depending on company size, industry, and seniority. Startup CoS roles often include equity compensation that can significantly increase total compensation. Senior CoS roles at large enterprises or PE-backed companies can exceed £200,000.",
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
                a: "Chiefs of Staff are hired across virtually all industries including technology, finance, consulting, healthcare, nonprofits, government, private equity, and startups. Tech companies and high-growth startups have been particularly active in hiring CoS roles. The role is also common in large enterprises, PE-backed portfolio companies, and mission-driven organisations.",
              },
              {
                q: "How do I transition from consulting to Chief of Staff?",
                a: "Consulting is one of the most common backgrounds for Chiefs of Staff. To make the transition, leverage your strategic thinking, stakeholder management, and project execution skills. Network with executives looking for CoS support, target companies in industries you've served as a consultant, and emphasise your ability to operate independently and drive results without a large team.",
              },
              {
                q: "Are Chief of Staff roles remote-friendly?",
                a: "Increasingly, yes. Many companies offer hybrid or fully remote Chief of Staff positions, especially in the tech sector. However, some CoS roles require in-person presence due to the nature of executive support and cross-functional coordination. The availability of remote options depends on the company culture, industry, and specific role requirements.",
              },
              {
                q: "How can I use this Chief of Staff recruitment agency?",
                a: "Simply browse our job listings, filter by location or category, and apply directly to companies through the links provided. Our Chief of Staff recruitment agency aggregates roles from multiple sources - we don't handle applications directly. If you're an employer, use our contact form to submit your CoS role for free listing.",
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
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <span className="font-bold text-xl">
                  <span className="text-amber-400">Chief of Staff</span> Quest
                </span>
              </Link>
              <p className="text-gray-400 text-sm">
                The UK&apos;s leading Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles at top companies.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
                  <li><Link href="/jobs" className="hover:text-amber-400">Browse Jobs</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-400">Post a Job</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">BBC Business</a></li>
                  <li><a href="https://csa.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Chief of Staff Association</a></li>
                  <li><a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Harvard Business Review</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Chief of Staff Quest - Chief of Staff Recruitment Agency UK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
