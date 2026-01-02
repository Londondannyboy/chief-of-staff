import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/chief-of-staff-salary-uk",
      url: "https://chiefofstaff.quest/chief-of-staff-salary-uk",
      name: "Chief of Staff Salary UK 2025 | Complete Compensation Guide",
      description: "Comprehensive guide to Chief of Staff salaries in the UK. Data on pay by experience, location, industry, and company size.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Chief of Staff Recruitment Agency", item: "https://chiefofstaff.quest" },
        { "@type": "ListItem", position: 2, name: "Salary Guide", item: "https://chiefofstaff.quest/chief-of-staff-salary-uk" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the average Chief of Staff salary in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The average Chief of Staff salary in the UK ranges from £70,000 to £150,000 for mid to senior-level roles. Entry-level CoS positions start around £50,000-70,000, while senior Chiefs of Staff at FTSE 100 companies or PE-backed firms can earn £150,000-250,000+ including bonuses and equity."
          }
        },
        {
          "@type": "Question",
          name: "Do Chiefs of Staff get equity compensation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, particularly at startups and scale-ups. Chief of Staff equity packages typically range from 0.1% to 0.5% at early-stage startups, worth potentially £50,000-500,000+ at exit. Later-stage companies offer smaller percentages but higher valuations. PE-backed companies may offer carried interest or co-investment opportunities."
          }
        },
        {
          "@type": "Question",
          name: "How much more do Chiefs of Staff earn in London vs other UK cities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "London Chiefs of Staff typically earn a 20-30% premium over regional UK salaries. A role paying £80,000 in Manchester might offer £100,000-110,000 in London. However, higher London salaries reflect increased living costs. Hybrid and remote roles are narrowing this gap."
          }
        },
        {
          "@type": "Question",
          name: "What factors affect Chief of Staff salary in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key factors include: company stage (startup vs enterprise), industry (PE/VC and tech pay highest), location (London premium), years of experience, previous background (ex-McKinsey/Goldman commands premium), and scope of role (team size, budget responsibility, executive access level)."
          }
        },
        {
          "@type": "Question",
          name: "Is Chief of Staff a well-paid role?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Chief of Staff is among the highest-paid non-C-suite roles. Total compensation often exceeds comparable operations or strategy manager positions by 20-40%. The role's proximity to executives, strategic scope, and career progression potential justify premium compensation."
          }
        }
      ]
    }
  ]
};

// Target keyword: "chief of staff salary uk"
export const metadata: Metadata = {
  title: "Chief of Staff Salary UK 2025 💷 Complete Compensation Guide",
  description: "💰 Chief of Staff salary UK guide for 2025. Average £70K-£150K base, plus equity & bonuses. Breakdown by experience, location, industry & company size.",
  keywords: "chief of staff salary uk, cos salary, chief of staff pay uk, chief of staff compensation",
  openGraph: {
    title: "Chief of Staff Salary UK 2025 💷 Complete Compensation Guide",
    description: "💰 Chief of Staff salary UK guide. Average £70K-£150K base, plus equity & bonuses.",
    type: "website",
    url: "https://chiefofstaff.quest/chief-of-staff-salary-uk",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/chief-of-staff-salary-uk",
  },
};

const salaryByExperience = [
  { level: "Entry-Level CoS", years: "0-2 years", salary: "£50,000 - £70,000", notes: "Often called 'Associate CoS' or 'Junior CoS'" },
  { level: "Mid-Level CoS", years: "3-5 years", salary: "£70,000 - £100,000", notes: "Most common CoS salary range" },
  { level: "Senior CoS", years: "5-8 years", salary: "£100,000 - £150,000", notes: "May manage small team" },
  { level: "VP-Level / Head of CoS", years: "8+ years", salary: "£150,000 - £250,000+", notes: "C-suite track, often with equity" },
];

const salaryByLocation = [
  { location: "London", range: "£80,000 - £180,000", premium: "+25%", notes: "Highest volume of roles" },
  { location: "Manchester", range: "£60,000 - £120,000", premium: "Baseline", notes: "Growing tech scene" },
  { location: "Edinburgh", range: "£65,000 - £130,000", premium: "+5%", notes: "Financial services hub" },
  { location: "Birmingham", range: "£55,000 - £110,000", premium: "-5%", notes: "Emerging market" },
  { location: "Remote UK", range: "£65,000 - £130,000", premium: "Varies", notes: "Location-agnostic pay" },
];

const salaryByIndustry = [
  { industry: "Private Equity / VC", range: "£100,000 - £200,000+", notes: "Highest paying, often includes carry" },
  { industry: "Technology / SaaS", range: "£80,000 - £160,000", notes: "Strong equity packages" },
  { industry: "Financial Services", range: "£90,000 - £170,000", notes: "Banks, hedge funds, asset managers" },
  { industry: "Consulting", range: "£80,000 - £140,000", notes: "Big 4 and strategy firms" },
  { industry: "Healthcare / Biotech", range: "£70,000 - £130,000", notes: "Growing sector" },
  { industry: "Nonprofit / Government", range: "£50,000 - £90,000", notes: "Mission-driven roles" },
];

const salaryByCompanySize = [
  { size: "Seed / Series A", employees: "10-50", range: "£60,000 - £90,000", equity: "0.2% - 0.5%", notes: "Higher risk/reward" },
  { size: "Series B/C Scale-up", employees: "50-200", range: "£80,000 - £130,000", equity: "0.05% - 0.2%", notes: "Sweet spot for many" },
  { size: "Late-Stage / Pre-IPO", employees: "200-1000", range: "£100,000 - £160,000", equity: "0.01% - 0.1%", notes: "Lower risk, higher base" },
  { size: "Enterprise / Public", employees: "1000+", range: "£120,000 - £200,000", equity: "RSUs", notes: "Highest base salaries" },
];

export default function ChiefOfStaffSalaryUK() {
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
              <Link href="/chief-of-staff-salary-uk" className="text-amber-400">Salary Guide</Link>
              <Link href="/#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-amber-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-gray-400">
              <Link href="/" className="hover:text-amber-400 underline">Chief of Staff Recruitment Agency</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-400">Salary Guide UK</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chief of Staff Salary UK:{" "}
              <span className="bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
                2025 Compensation Guide
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Comprehensive data on Chief of Staff salaries across the UK. Our <strong>Chief of Staff recruitment agency</strong> has compiled
              this guide based on market data, job postings, and industry insights to help you negotiate your worth.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-green-400">£70K-£150K</div>
                <div className="text-sm text-gray-400">Average Base</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">+20-50%</div>
                <div className="text-sm text-gray-400">With Bonus</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">0.1-0.5%</div>
                <div className="text-sm text-gray-400">Startup Equity</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400">+25%</div>
                <div className="text-sm text-gray-400">London Premium</div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary by Experience */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Chief of Staff Salary by Experience Level</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Experience</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Salary Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByExperience.map((row, idx) => (
                    <tr key={row.level} className={idx % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"}>
                      <td className="px-6 py-4 text-white font-medium">{row.level}</td>
                      <td className="px-6 py-4 text-gray-400">{row.years}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{row.salary}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Salary by Location */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Chief of Staff Salary by UK Location</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Salary Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Premium</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByLocation.map((row, idx) => (
                    <tr key={row.location} className={idx % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"}>
                      <td className="px-6 py-4 text-white font-medium">{row.location}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{row.range}</td>
                      <td className="px-6 py-4 text-amber-400">{row.premium}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Salary by Industry */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Chief of Staff Salary by Industry</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salaryByIndustry.map((industry) => (
                <div key={industry.industry} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-2">{industry.industry}</h3>
                  <div className="text-2xl font-bold text-green-400 mb-2">{industry.range}</div>
                  <p className="text-gray-400 text-sm">{industry.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary by Company Size */}
        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Chief of Staff Salary by Company Stage</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Stage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Employees</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Base Salary</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Typical Equity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryByCompanySize.map((row, idx) => (
                    <tr key={row.size} className={idx % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"}>
                      <td className="px-6 py-4 text-white font-medium">{row.size}</td>
                      <td className="px-6 py-4 text-gray-400">{row.employees}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{row.range}</td>
                      <td className="px-6 py-4 text-purple-400">{row.equity}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Understanding <span className="text-amber-400">Chief of Staff Compensation</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Beyond Base Salary: Total Compensation</h3>
              <p className="mb-6">
                When evaluating Chief of Staff roles, base salary is just one component. Total compensation often includes:
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li><strong>Annual bonus:</strong> 15-30% of base at most companies</li>
                <li><strong>Equity/Stock options:</strong> Significant at startups (0.1-0.5%)</li>
                <li><strong>Signing bonus:</strong> £5,000-30,000 for competitive hires</li>
                <li><strong>Benefits:</strong> Private healthcare, pension, L&D budgets</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Negotiating Your Chief of Staff Salary</h3>
              <p className="mb-6">
                Chiefs of Staff are in high demand. Our <strong>Chief of Staff recruitment agency</strong> recommends:
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li>• Research comparable roles using this guide and job boards</li>
                <li>• Consider total compensation, not just base salary</li>
                <li>• Negotiate equity vesting acceleration and refresh grants</li>
                <li>• Ask about performance bonus structures and targets</li>
                <li>• Factor in career progression and CEO access</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Salary Progression for Chiefs of Staff</h3>
              <p className="mb-6">
                The Chief of Staff role is known for rapid career progression. Many CoS professionals see 20-40% salary increases when transitioning to their next role within 2-3 years. Common progressions include COO, VP Operations, General Manager, or founding their own company.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600/20 via-[#0a0a0f] to-amber-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Next Chief of Staff Role</h2>
            <p className="text-gray-300 mb-8">Browse current opportunities and compare salaries across the UK market.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-xl">
                Browse Jobs
              </Link>
              <Link href="/chief-of-staff-jobs-london" className="px-8 py-4 bg-gray-800 text-white rounded-xl border border-gray-700">
                London Jobs
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
              <Link href="/chief-of-staff-jobs-london" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                London Jobs
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
