import type { Metadata } from "next";
import Link from "next/link";
import { chiefOfStaffJobs } from "../../lib/jobs-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/chief-of-staff-jobs-london",
      url: "https://chiefofstaff.quest/chief-of-staff-jobs-london",
      name: "Chief of Staff Jobs London | Executive Roles in the Capital",
      description: "Find Chief of Staff jobs in London. The UK's executive hub with top companies hiring CoS professionals.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Chief of Staff Recruitment Agency", item: "https://chiefofstaff.quest" },
        { "@type": "ListItem", position: 2, name: "Chief of Staff Jobs UK", item: "https://chiefofstaff.quest/chief-of-staff-jobs-uk" },
        { "@type": "ListItem", position: 3, name: "London", item: "https://chiefofstaff.quest/chief-of-staff-jobs-london" }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is London the best city for Chief of Staff jobs in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "London is the UK's executive hub, home to the headquarters of FTSE 100 companies, major tech firms, and high-growth startups. The city offers 70%+ of UK Chief of Staff jobs, higher salaries (20-30% London premium), exceptional networking opportunities, and access to top CEOs and executives. London's financial district, tech ecosystem in Shoreditch, and startup scene create abundant opportunities for CoS professionals."
          }
        },
        {
          "@type": "Question",
          name: "What is the average Chief of Staff salary in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chief of Staff salaries in London typically range from £80,000 to £180,000 depending on company size and seniority. Startup CoS roles often include equity worth £50K-200K+. Senior CoS at FTSE 100 companies, PE-backed firms, or major tech companies can earn £150,000-£250,000+ with bonuses. London offers a 20-30% premium over UK regional salaries."
          }
        },
        {
          "@type": "Question",
          name: "Which London areas have the most Chief of Staff opportunities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The City of London and Canary Wharf house financial services firms. Shoreditch and Old Street (Silicon Roundabout) have tech startups. Mayfair and St James's host private equity and hedge funds. Victoria and Westminster have government and nonprofit headquarters. West London (Hammersmith, Chiswick) has media companies. Most roles are accessible via tube."
          }
        },
        {
          "@type": "Question",
          name: "Can I work remotely as a Chief of Staff in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many London-based companies offer hybrid arrangements (2-3 days in office). However, due to the strategic nature of the Chief of Staff role and need for close executive collaboration, fully remote CoS positions are less common. Most London CoS roles expect some in-person presence for board meetings, executive sessions, and cross-functional coordination."
          }
        },
        {
          "@type": "Question",
          name: "What industries hire Chiefs of Staff in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "London's diverse economy creates CoS opportunities across: Financial Services (investment banks, PE, hedge funds), Technology (startups, scale-ups, Big Tech), Consulting (Big 4, strategy firms), Healthcare & Biotech, Media & Entertainment, and Nonprofits/Government. Tech and financial services are the largest employers of Chiefs of Staff in London."
          }
        }
      ]
    }
  ]
};

// Target keyword: "chief of staff jobs london"
export const metadata: Metadata = {
  title: "Chief of Staff Jobs London 📍 Executive Capital",
  description: "🎯 Chief of Staff jobs London - the UK's executive hub with FTSE 100, tech startups & PE firms. Browse CoS roles in the capital. Apply direct to employers.",
  keywords: "chief of staff jobs london, cos jobs london, chief of staff london",
  openGraph: {
    title: "Chief of Staff Jobs London 📍 Executive Capital",
    description: "🎯 Chief of Staff jobs London - the UK's executive hub with top companies hiring.",
    type: "website",
    url: "https://chiefofstaff.quest/chief-of-staff-jobs-london",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/chief-of-staff-jobs-london",
  },
};

const londonCompanies = [
  { name: "Goldman Sachs", type: "Investment Bank", roles: "5+", focus: "Finance, Operations" },
  { name: "Deliveroo", type: "Tech Scale-up", roles: "3+", focus: "Operations, Strategy" },
  { name: "Revolut", type: "FinTech", roles: "4+", focus: "Strategy, Growth" },
  { name: "Stripe", type: "Payments Tech", roles: "3+", focus: "Operations, Partnerships" },
  { name: "Checkout.com", type: "FinTech", roles: "3+", focus: "Strategy, Expansion" },
  { name: "Meta", type: "Big Tech", roles: "2+", focus: "Policy, Operations" },
  { name: "Permira", type: "Private Equity", roles: "2+", focus: "Portfolio, Strategy" },
  { name: "King", type: "Gaming", roles: "2+", focus: "Strategy, Operations" },
];

const salaryComparison = [
  { role: "Chief of Staff (Startup)", london: "£80,000 - £120,000", ukAvg: "£65,000 - £95,000" },
  { role: "Chief of Staff (Scale-up)", london: "£100,000 - £150,000", ukAvg: "£80,000 - £120,000" },
  { role: "Chief of Staff (Enterprise)", london: "£130,000 - £180,000", ukAvg: "£100,000 - £140,000" },
  { role: "Chief of Staff (PE/VC)", london: "£120,000 - £200,000", ukAvg: "£90,000 - £150,000" },
  { role: "Senior Chief of Staff", london: "£150,000 - £250,000", ukAvg: "£120,000 - £180,000" },
];

const areas = [
  { area: "City of London", description: "Investment banks, law firms, and corporate headquarters" },
  { area: "Canary Wharf", description: "Major banks and financial services firms" },
  { area: "Shoreditch/Old Street", description: "Tech startups and scale-ups (Silicon Roundabout)" },
  { area: "Mayfair/St James's", description: "Private equity, hedge funds, and family offices" },
  { area: "Victoria/Westminster", description: "Government, nonprofits, and political organisations" },
];

// Filter London jobs
const londonJobs = chiefOfStaffJobs.filter(job =>
  job.location.toLowerCase().includes("london") ||
  (job.country === "United Kingdom" && job.location.toLowerCase().includes("uk"))
);

export default function ChiefOfStaffJobsLondon() {
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
              <Link href="/jobs" className="text-gray-300 hover:text-amber-400 transition-colors">All Jobs</Link>
              <Link href="/chief-of-staff-jobs-uk" className="text-gray-300 hover:text-amber-400 transition-colors">UK Jobs</Link>
              <Link href="/chief-of-staff-jobs-london" className="text-amber-400">London Jobs</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-yellow-600/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <nav className="text-sm mb-8 text-gray-400">
              <Link href="/" className="hover:text-amber-400 underline">Chief of Staff Recruitment Agency</Link>
              <span className="mx-2">/</span>
              <Link href="/chief-of-staff-jobs-uk" className="hover:text-amber-400 underline">UK Jobs</Link>
              <span className="mx-2">/</span>
              <span className="text-amber-400">London</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chief of Staff Jobs London:{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                The UK&apos;s Executive Capital
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              London is the heart of UK executive recruitment. Home to FTSE 100 headquarters, leading tech companies,
              and the world&apos;s top private equity firms, the capital offers more Chief of Staff opportunities than anywhere else in Britain.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">70%</div>
                <div className="text-sm text-gray-400">Of UK CoS Jobs</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-400">Companies Hiring</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">+25%</div>
                <div className="text-sm text-gray-400">London Premium</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-amber-400">Hybrid</div>
                <div className="text-sm text-gray-400">Most Roles</div>
              </div>
            </div>

            <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-xl hover:opacity-90 transition-all inline-block">
              Browse London Jobs
            </Link>
          </div>
        </section>

        {/* London Jobs List */}
        {londonJobs.length > 0 && (
          <section className="py-16 bg-[#0d0d15]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Current London <span className="text-amber-400">Chief of Staff</span> Opportunities
              </h2>
              <div className="grid gap-4 mb-8">
                {londonJobs.slice(0, 6).map((job) => (
                  <a
                    key={job.id}
                    href={job.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                          <span className="font-medium text-amber-400">{job.company}</span>
                          <span>📍 {job.location}</span>
                          <span>💷 {job.salary}</span>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                            {job.workMode}
                          </span>
                        </div>
                      </div>
                      <span className="bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-6 rounded transition-all whitespace-nowrap">
                        Apply Now
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-center">
                <Link href="/chief-of-staff-jobs-uk" className="text-amber-400 hover:text-amber-300 underline">
                  View all UK Chief of Staff jobs →
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Top London Employers for Chiefs of Staff</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {londonCompanies.map((company) => (
                <div key={company.name} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-2">{company.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{company.type}</p>
                  <p className="text-xs text-gray-500 mb-2">{company.focus}</p>
                  <span className="text-amber-400 text-sm">{company.roles} CoS roles</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">London Chief of Staff Salary Guide</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/50 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">London Salary</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">UK Average</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryComparison.map((row, idx) => (
                    <tr key={row.role} className={idx % 2 === 0 ? "bg-gray-800/30" : "bg-gray-800/10"}>
                      <td className="px-6 py-4 text-gray-300">{row.role}</td>
                      <td className="px-6 py-4 text-amber-400">{row.london}</td>
                      <td className="px-6 py-4 text-gray-400">{row.ukAvg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              * Salaries exclude equity and bonuses. London CoS roles at startups often include equity worth £50K-200K+.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">London Business Hubs for Chiefs of Staff</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {areas.map((area) => (
                <div key={area.area} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <h3 className="font-bold text-white mb-2">{area.area}</h3>
                  <p className="text-gray-400 text-xs">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-[#0d0d15]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              About Chief of Staff Jobs in <span className="text-amber-400">London</span>
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="mb-6">
                London is the undisputed centre for <strong>Chief of Staff jobs in the UK</strong>. Our <strong>Chief of Staff recruitment agency</strong> has observed that approximately 70% of all UK CoS roles are based in or around London, making it the primary destination for ambitious professionals seeking strategic executive support roles.
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why Chiefs of Staff Choose London</h3>
              <p className="mb-6">
                London offers unparalleled access to top executives and decision-makers. The concentration of FTSE 100 headquarters, high-growth tech scale-ups, private equity firms, and international businesses creates a dynamic market for Chief of Staff professionals. The networking opportunities, exposure to world-class leadership, and career progression potential are unmatched.
              </p>
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">The London CoS Salary Premium</h3>
              <p className="mb-6">
                Chiefs of Staff in London earn a 20-30% premium over UK regional salaries. While London living costs are higher, the career advancement opportunities often outweigh this. Many London-based CoS professionals transition to C-suite roles, VP positions, or founding their own companies within 3-5 years.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-amber-600/20 via-[#0a0a0f] to-yellow-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your London Chief of Staff Role</h2>
            <p className="text-gray-300 mb-8">Browse current opportunities in the UK&apos;s executive capital through our specialist Chief of Staff recruitment agency.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#jobs" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-xl">
                Browse London Jobs
              </Link>
              <Link href="/chief-of-staff-jobs-uk" className="px-8 py-4 bg-gray-800 text-white rounded-xl border border-gray-700">
                All UK Jobs
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
                All Chief of Staff Jobs
              </Link>
              <Link href="/chief-of-staff-jobs-uk" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                UK Jobs
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors text-gray-300">
                Post a Job
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
