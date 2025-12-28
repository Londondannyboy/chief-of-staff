export type JobCategory =
  | 'tech'
  | 'finance'
  | 'healthcare'
  | 'consulting'
  | 'nonprofit'
  | 'startup'
  | 'enterprise';

export type JobType = 'Full-time' | 'Part-time' | 'Contract';
export type WorkMode = 'Remote' | 'Hybrid' | 'On-site';

export interface ChiefOfStaffJob {
  id: string;
  title: string;
  company: string;
  heroImage: string;
  heroImageAlt: string;
  location: string;
  country: string;
  workMode: WorkMode;
  type: JobType;
  salary: string;
  description: string;
  requirements?: string;
  skills: string[];
  postedDate: string;
  validThrough?: string;
  externalUrl: string;
  source: 'linkedin' | 'company-site' | 'job-board';
  category: JobCategory;
  executiveType: 'CEO' | 'COO' | 'Founder' | 'Managing Partner' | 'President' | 'Division Head';
  companyStage: 'Seed' | 'Series A' | 'Series B' | 'Series C+' | 'Growth' | 'Enterprise' | 'Public';
}

export const categoryLabels: Record<JobCategory, string> = {
  tech: 'Technology',
  finance: 'Finance & Banking',
  healthcare: 'Healthcare',
  consulting: 'Consulting',
  nonprofit: 'Nonprofit & Government',
  startup: 'Startup',
  enterprise: 'Enterprise',
};

export const categoryColors: Record<JobCategory, { bg: string; border: string; text: string }> = {
  tech: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  finance: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  healthcare: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  consulting: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  nonprofit: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400' },
  startup: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  enterprise: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
};

export const chiefOfStaffJobs: ChiefOfStaffJob[] = [
  // Tech Jobs
  {
    id: "1",
    title: "Chief of Staff to CEO",
    company: "Series B Fintech Startup",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    heroImageAlt: "Modern office building representing fintech startup",
    location: "London, UK",
    country: "United Kingdom",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "£90,000 - £120,000 + Equity",
    description: "Join a fast-growing fintech startup as Chief of Staff to the CEO. You'll drive strategic initiatives, manage board preparation, and lead cross-functional projects.",
    requirements: "5+ years in consulting, operations, or strategy. Fintech experience preferred.",
    skills: ["Strategy", "Operations", "Financial Analysis", "Board Management"],
    postedDate: "2024-12-20",
    validThrough: "2025-02-20",
    externalUrl: "#",
    source: "linkedin",
    category: "tech",
    executiveType: "CEO",
    companyStage: "Series B",
  },
  {
    id: "2",
    title: "Chief of Staff, Technology Division",
    company: "Global Tech Enterprise",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    heroImageAlt: "Tech company office space",
    location: "New York, US",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    description: "Support the CTO of a Fortune 500 tech company. Lead strategic planning, manage executive communications, and drive technology transformation initiatives.",
    requirements: "7+ years experience with tech background. MBA preferred.",
    skills: ["Tech Operations", "Program Management", "Executive Communication", "Strategic Planning"],
    postedDate: "2024-12-18",
    validThrough: "2025-02-18",
    externalUrl: "#",
    source: "company-site",
    category: "tech",
    executiveType: "Division Head",
    companyStage: "Public",
  },
  {
    id: "3",
    title: "Chief of Staff to Founder",
    company: "AI Startup",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    heroImageAlt: "AI and technology concept",
    location: "San Francisco, US",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$120,000 - $150,000 + 0.5% Equity",
    description: "Be the right hand to a serial entrepreneur building the next AI unicorn. Help with fundraising, hiring, and scaling operations.",
    requirements: "3-5 years experience. Comfort with ambiguity. AI/ML knowledge a plus.",
    skills: ["AI/ML Knowledge", "Startup Operations", "Fundraising Support", "Hiring"],
    postedDate: "2024-12-22",
    validThrough: "2025-02-22",
    externalUrl: "#",
    source: "linkedin",
    category: "startup",
    executiveType: "Founder",
    companyStage: "Seed",
  },
  // Finance Jobs
  {
    id: "4",
    title: "Chief of Staff to Managing Partner",
    company: "Top-Tier PE Firm",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    heroImageAlt: "Private equity office",
    location: "London, UK",
    country: "United Kingdom",
    workMode: "On-site",
    type: "Full-time",
    salary: "£120,000 - £160,000 + Carry",
    description: "Support the Managing Partner of a leading PE firm. Manage deal pipeline coordination, LP communications, and portfolio company initiatives.",
    requirements: "Investment banking or PE background required. 5+ years experience.",
    skills: ["Private Equity", "Financial Modeling", "LP Relations", "Portfolio Management"],
    postedDate: "2024-12-15",
    validThrough: "2025-02-15",
    externalUrl: "#",
    source: "company-site",
    category: "finance",
    executiveType: "Managing Partner",
    companyStage: "Enterprise",
  },
  {
    id: "5",
    title: "Chief of Staff to CEO",
    company: "Investment Bank",
    heroImage: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
    heroImageAlt: "Banking district skyline",
    location: "New York, US",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$180,000 - $250,000",
    description: "Chief of Staff to the CEO of a bulge bracket investment bank. Drive strategic initiatives, manage board preparation, and lead transformation projects.",
    requirements: "8+ years in banking or consulting. MBA from top program.",
    skills: ["Investment Banking", "Board Management", "Strategic Initiatives", "Change Management"],
    postedDate: "2024-12-10",
    validThrough: "2025-02-10",
    externalUrl: "#",
    source: "linkedin",
    category: "finance",
    executiveType: "CEO",
    companyStage: "Public",
  },
  // Healthcare Jobs
  {
    id: "6",
    title: "Chief of Staff, Healthcare Division",
    company: "Fortune 100 Healthcare Company",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    heroImageAlt: "Healthcare facility",
    location: "Remote (US)",
    country: "United States",
    workMode: "Remote",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "Support the Division President of a major healthcare company. Lead strategic planning, manage cross-functional initiatives, and drive operational excellence.",
    requirements: "Healthcare industry experience required. 6+ years in operations or consulting.",
    skills: ["Healthcare Industry", "Change Management", "Executive Support", "Strategic Planning"],
    postedDate: "2024-12-19",
    validThrough: "2025-02-19",
    externalUrl: "#",
    source: "company-site",
    category: "healthcare",
    executiveType: "Division Head",
    companyStage: "Public",
  },
  {
    id: "7",
    title: "Chief of Staff to CEO",
    company: "Digital Health Startup",
    heroImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    heroImageAlt: "Digital health technology",
    location: "Boston, US",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$130,000 - $160,000 + Equity",
    description: "Join a Series C digital health company as CoS to the CEO. Drive growth initiatives, manage investor relations, and lead strategic projects.",
    requirements: "Healthcare or tech background. 5+ years experience.",
    skills: ["Digital Health", "Investor Relations", "Growth Strategy", "Operations"],
    postedDate: "2024-12-21",
    validThrough: "2025-02-21",
    externalUrl: "#",
    source: "linkedin",
    category: "healthcare",
    executiveType: "CEO",
    companyStage: "Series C+",
  },
  // Consulting Jobs
  {
    id: "8",
    title: "Chief of Staff to Managing Partner",
    company: "Top-Tier Consulting Firm",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    heroImageAlt: "Consulting firm meeting room",
    location: "London, UK",
    country: "United Kingdom",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "£100,000 - £140,000",
    description: "Support the UK Managing Partner of a leading strategy consultancy. Manage firm operations, client initiatives, and partner communications.",
    requirements: "Consulting background strongly preferred. 5-7 years experience.",
    skills: ["Consulting Background", "Stakeholder Management", "Strategy", "Operations"],
    postedDate: "2024-12-17",
    validThrough: "2025-02-17",
    externalUrl: "#",
    source: "company-site",
    category: "consulting",
    executiveType: "Managing Partner",
    companyStage: "Enterprise",
  },
  // Startup Jobs
  {
    id: "9",
    title: "Chief of Staff to COO",
    company: "E-commerce Scale-up",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    heroImageAlt: "E-commerce warehouse",
    location: "Berlin, Germany",
    country: "Germany",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "€80,000 - €110,000",
    description: "Support the COO of a fast-growing e-commerce company. Lead operational initiatives, manage cross-functional projects, and drive efficiency improvements.",
    requirements: "E-commerce or operations background. 4+ years experience.",
    skills: ["E-commerce", "Operations", "Data Analysis", "Process Improvement"],
    postedDate: "2024-12-16",
    validThrough: "2025-02-16",
    externalUrl: "#",
    source: "linkedin",
    category: "startup",
    executiveType: "COO",
    companyStage: "Growth",
  },
  {
    id: "10",
    title: "Chief of Staff to Founder/CEO",
    company: "Climate Tech Startup",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    heroImageAlt: "Renewable energy wind turbines",
    location: "Remote (UK/EU)",
    country: "United Kingdom",
    workMode: "Remote",
    type: "Full-time",
    salary: "£70,000 - £90,000 + Equity",
    description: "Join a mission-driven climate tech startup. Help the founder scale operations, manage fundraising, and build the team.",
    requirements: "Passion for climate. 3+ years in startups or consulting.",
    skills: ["Climate Tech", "Fundraising", "Team Building", "Operations"],
    postedDate: "2024-12-23",
    validThrough: "2025-02-23",
    externalUrl: "#",
    source: "linkedin",
    category: "startup",
    executiveType: "Founder",
    companyStage: "Series A",
  },
  // Nonprofit Jobs
  {
    id: "11",
    title: "Chief of Staff to Executive Director",
    company: "Global Nonprofit Organization",
    heroImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    heroImageAlt: "Nonprofit community work",
    location: "Washington, DC, US",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Support the Executive Director of a leading international nonprofit. Manage board relations, strategic planning, and cross-organizational initiatives.",
    requirements: "Nonprofit or government experience preferred. 5+ years experience.",
    skills: ["Nonprofit Management", "Board Relations", "Strategic Planning", "Stakeholder Engagement"],
    postedDate: "2024-12-14",
    validThrough: "2025-02-14",
    externalUrl: "#",
    source: "company-site",
    category: "nonprofit",
    executiveType: "CEO",
    companyStage: "Enterprise",
  },
  // Enterprise Jobs
  {
    id: "12",
    title: "Chief of Staff to President",
    company: "Global Consumer Goods Company",
    heroImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
    heroImageAlt: "Corporate headquarters building",
    location: "Chicago, US",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$160,000 - $200,000",
    description: "Chief of Staff to the President of a Fortune 200 company. Drive strategic initiatives, manage executive communications, and lead transformation programs.",
    requirements: "10+ years experience. MBA required. Consumer goods experience preferred.",
    skills: ["Consumer Goods", "Strategic Initiatives", "Executive Communications", "Change Management"],
    postedDate: "2024-12-12",
    validThrough: "2025-02-12",
    externalUrl: "#",
    source: "company-site",
    category: "enterprise",
    executiveType: "President",
    companyStage: "Public",
  },
];

// Get unique categories from jobs
export const getCategories = (): JobCategory[] => {
  const categories = new Set(chiefOfStaffJobs.map(job => job.category));
  return Array.from(categories);
};

// Get jobs by category
export const getJobsByCategory = (category: JobCategory): ChiefOfStaffJob[] => {
  return chiefOfStaffJobs.filter(job => job.category === category);
};

// Get job count by category
export const getJobCountByCategory = (): Record<JobCategory, number> => {
  const counts = {} as Record<JobCategory, number>;
  chiefOfStaffJobs.forEach(job => {
    counts[job.category] = (counts[job.category] || 0) + 1;
  });
  return counts;
};
