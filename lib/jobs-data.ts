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
  source: 'greenhouse' | 'linkedin' | 'company-site' | 'job-board';
  category: JobCategory;
  executiveType: 'CEO' | 'COO' | 'CFO' | 'Founder' | 'Managing Partner' | 'President' | 'Division Head';
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

// Real Chief of Staff jobs from Greenhouse API - December 2024
export const chiefOfStaffJobs: ChiefOfStaffJob[] = [
  // Tech / AI Jobs
  {
    id: "nuro-ai-platform",
    title: "Chief of Staff, AI Platform",
    company: "Nuro",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    heroImageAlt: "Autonomous vehicle technology",
    location: "Mountain View, California",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$160,000 - $240,000",
    description: "Join Nuro, the leader in autonomous delivery vehicles, as Chief of Staff to the AI Platform team. Drive strategic initiatives and cross-functional collaboration for our AI/ML platform.",
    skills: ["Strategic Planning", "Technical Program Management", "Cross-Functional Collaboration", "Analytical Judgment"],
    postedDate: "2024-12-20",
    externalUrl: "https://nuro.ai/careersitem?gh_jid=7235577",
    source: "greenhouse",
    category: "tech",
    executiveType: "Division Head",
    companyStage: "Series C+",
  },
  {
    id: "nuro-hardware",
    title: "Chief of Staff, Vehicle Platform & Hardware",
    company: "Nuro",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    heroImageAlt: "Robotics and hardware engineering",
    location: "Mountain View, California",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$176,400 - $264,600",
    description: "Lead strategic operations for Nuro's Vehicle Platform & Hardware division. Partner with engineering leadership to drive program execution and team effectiveness.",
    skills: ["Strategic Operations", "Analytical Skills", "Project Management", "Technical Acumen"],
    postedDate: "2024-12-18",
    externalUrl: "https://nuro.ai/careersitem?gh_jid=7378154",
    source: "greenhouse",
    category: "tech",
    executiveType: "Division Head",
    companyStage: "Series C+",
  },
  {
    id: "scale-ai",
    title: "Chief of Staff",
    company: "Scale AI",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    heroImageAlt: "AI and machine learning technology",
    location: "San Francisco, California",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$180,600 - $225,750",
    description: "Scale AI is accelerating AI development. As Chief of Staff, you'll work directly with leadership to drive company-wide strategic initiatives and operational excellence.",
    skills: ["Management Consulting", "Finance", "High-Growth Technology", "Marketplace Business"],
    postedDate: "2024-12-15",
    externalUrl: "https://job-boards.greenhouse.io/scaleai/jobs/4642756005",
    source: "greenhouse",
    category: "tech",
    executiveType: "CEO",
    companyStage: "Growth",
  },
  {
    id: "addepar-rd",
    title: "Chief of Staff - R&D",
    company: "Addepar",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heroImageAlt: "Financial technology platform",
    location: "United States (Remote)",
    country: "United States",
    workMode: "Remote",
    type: "Full-time",
    salary: "$143,000 - $224,000",
    description: "Addepar is the financial technology platform for wealth management. Join as Chief of Staff to R&D, driving strategic initiatives and operational excellence across engineering.",
    skills: ["Strategic Thinking", "Technical Fluency", "Operational Follow-Through", "Communication"],
    postedDate: "2024-12-22",
    externalUrl: "https://job-boards.greenhouse.io/addepar1/jobs/8120254002",
    source: "greenhouse",
    category: "tech",
    executiveType: "Division Head",
    companyStage: "Growth",
  },
  {
    id: "dataiku",
    title: "Chief of Staff to CEO",
    company: "Dataiku",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    heroImageAlt: "Data analytics platform",
    location: "New York, New York",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$180,000 - $220,000",
    description: "Dataiku is the platform for Everyday AI. As Chief of Staff to the CEO, you'll drive strategic initiatives, board preparation, and cross-functional alignment.",
    skills: ["Strategy", "Board Management", "Cross-Functional Leadership", "Analytics"],
    postedDate: "2024-12-19",
    externalUrl: "https://job-boards.greenhouse.io/dataikiujobs/jobs/7718718002",
    source: "greenhouse",
    category: "tech",
    executiveType: "CEO",
    companyStage: "Series C+",
  },
  // Finance Jobs
  {
    id: "mongodb-cfo",
    title: "Chief of Staff to the CFO",
    company: "MongoDB",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    heroImageAlt: "MongoDB database technology company",
    location: "Austin, Texas",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$129,000 - $253,000",
    description: "MongoDB is the leading modern database platform. As Chief of Staff to the CFO, you'll drive strategic finance initiatives, manage key projects, and support executive decision-making.",
    skills: ["Program Management", "Analytical Thinking", "Communication", "Organizational Skills"],
    postedDate: "2024-12-17",
    externalUrl: "https://www.mongodb.com/careers/job/?gh_jid=7380013",
    source: "greenhouse",
    category: "finance",
    executiveType: "CFO",
    companyStage: "Public",
  },
  // Healthcare Jobs
  {
    id: "iterative-health",
    title: "Chief of Staff to COO",
    company: "Iterative Health",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    heroImageAlt: "Healthcare AI technology",
    location: "Cambridge, Massachusetts",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$190,000 - $250,000",
    description: "Iterative Health uses AI to transform gastroenterology care. As Chief of Staff to the COO, you'll lead strategic operations, drive cross-functional initiatives, and support company scaling.",
    skills: ["Management Consulting", "Operations", "Strategy", "Program Management"],
    postedDate: "2024-12-16",
    externalUrl: "https://job-boards.greenhouse.io/iterativehealth/jobs/4627574006",
    source: "greenhouse",
    category: "healthcare",
    executiveType: "COO",
    companyStage: "Series B",
  },
  {
    id: "lantern",
    title: "Chief of Staff",
    company: "Lantern",
    heroImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    heroImageAlt: "Mental health technology",
    location: "San Francisco, California",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    description: "Lantern is transforming specialty care navigation. As Chief of Staff, you'll work closely with the CEO to drive strategic initiatives and company-wide operations.",
    skills: ["Strategy", "Operations", "Healthcare", "Cross-Functional Leadership"],
    postedDate: "2024-12-20",
    externalUrl: "https://job-boards.greenhouse.io/lantern/jobs/7741854002",
    source: "greenhouse",
    category: "healthcare",
    executiveType: "CEO",
    companyStage: "Series B",
  },
  // Enterprise Jobs
  {
    id: "simplisafe",
    title: "Chief of Staff to the President",
    company: "SimpliSafe",
    heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    heroImageAlt: "Home security technology",
    location: "Boston, Massachusetts",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$225,000 - $275,000",
    description: "SimpliSafe protects millions of homes. As Chief of Staff to the President, you'll drive GTM strategy, lead cross-functional initiatives, and support executive decision-making.",
    skills: ["GTM Strategy", "Management Consulting", "Product Strategy", "CX Leadership"],
    postedDate: "2024-12-14",
    externalUrl: "https://job-boards.greenhouse.io/simplisafe/jobs/7440434",
    source: "greenhouse",
    category: "enterprise",
    executiveType: "President",
    companyStage: "Growth",
  },
  {
    id: "compass",
    title: "Chief of Staff",
    company: "Compass",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    heroImageAlt: "Real estate technology platform",
    location: "New York, New York",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$175,000 - $225,000",
    description: "Compass is the largest independent real estate brokerage. As Chief of Staff, you'll partner with executive leadership to drive strategic initiatives and operational excellence.",
    skills: ["Strategy", "Operations", "Real Estate", "Cross-Functional Leadership"],
    postedDate: "2024-12-18",
    externalUrl: "https://job-boards.greenhouse.io/compass/jobs/7741267002",
    source: "greenhouse",
    category: "enterprise",
    executiveType: "CEO",
    companyStage: "Public",
  },
  // Startup Jobs
  {
    id: "shopmy",
    title: "Chief of Staff to the COO",
    company: "ShopMy",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    heroImageAlt: "E-commerce and creator platform",
    location: "New York, New York",
    country: "United States",
    workMode: "On-site",
    type: "Full-time",
    salary: "$140,000 - $150,000",
    description: "ShopMy is the leading creator commerce platform. As Chief of Staff to the COO, you'll drive operations, strategy, and cross-functional initiatives in a fast-paced startup.",
    skills: ["Management Consulting", "Business Operations", "Strategy", "Product Management"],
    postedDate: "2024-12-21",
    externalUrl: "https://job-boards.greenhouse.io/shopmy/jobs/5040854008",
    source: "greenhouse",
    category: "startup",
    executiveType: "COO",
    companyStage: "Series B",
  },
  {
    id: "xendit",
    title: "Chief of Staff - LATAM",
    company: "Xendit",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    heroImageAlt: "Fintech payment infrastructure",
    location: "Mexico City, Mexico",
    country: "Mexico",
    workMode: "On-site",
    type: "Full-time",
    salary: "Competitive + Equity",
    description: "Xendit provides payment infrastructure across Southeast Asia. As Chief of Staff for LATAM expansion, you'll work with the GM to launch Xendit in Latin America.",
    skills: ["Strategy", "Operations", "Project Management", "Communication"],
    postedDate: "2024-12-24",
    externalUrl: "https://www.xendit.co/en/careers/job-application/?gh_jid=7562315003",
    source: "greenhouse",
    category: "startup",
    executiveType: "Founder",
    companyStage: "Series C+",
  },
  {
    id: "babylist",
    title: "Chief of Staff",
    company: "Babylist",
    heroImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
    heroImageAlt: "Baby registry and commerce platform",
    location: "San Francisco, California",
    country: "United States",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "$160,000 - $200,000",
    description: "Babylist is the leading baby registry platform. As Chief of Staff, you'll partner with executive leadership to drive company strategy and cross-functional initiatives.",
    skills: ["Strategy", "E-commerce", "Operations", "Cross-Functional Leadership"],
    postedDate: "2024-12-19",
    externalUrl: "https://job-boards.greenhouse.io/babylist/jobs/7741856002",
    source: "greenhouse",
    category: "startup",
    executiveType: "CEO",
    companyStage: "Growth",
  },
  // Nonprofit / Mission-Driven
  {
    id: "zipline",
    title: "Chief of Staff",
    company: "Zipline",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    heroImageAlt: "Drone delivery for healthcare",
    location: "Kigali, Rwanda",
    country: "Rwanda",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "Competitive",
    description: "Zipline designs, manufactures, and operates the world's largest drone delivery network. As Chief of Staff, you'll support strategic initiatives in our mission to provide instant logistics.",
    skills: ["Program Management", "Project Management", "Partnerships", "Stakeholder Management"],
    postedDate: "2024-12-15",
    externalUrl: "https://www.flyzipline.com/careers/open-roles?gh_jid=7337300003",
    source: "greenhouse",
    category: "nonprofit",
    executiveType: "CEO",
    companyStage: "Series C+",
  },
  {
    id: "instiglio",
    title: "Associate/Senior Associate Chief of Staff",
    company: "Instiglio",
    heroImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    heroImageAlt: "Global development consulting",
    location: "Remote (Global)",
    country: "Global",
    workMode: "Hybrid",
    type: "Full-time",
    salary: "Competitive",
    description: "Instiglio is a mission-driven organization working with governments and NGOs. As Chief of Staff, you'll drive strategic initiatives, change management, and AI integration.",
    skills: ["Strategic Leadership", "Change Management", "AI Integration", "Project Management"],
    postedDate: "2024-12-20",
    externalUrl: "https://job-boards.greenhouse.io/instiglio/jobs/5742477004",
    source: "greenhouse",
    category: "nonprofit",
    executiveType: "CEO",
    companyStage: "Growth",
  },
  // Consulting
  {
    id: "human-agency",
    title: "Chief of Staff",
    company: "Human Agency",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    heroImageAlt: "Consulting and strategy firm",
    location: "Toronto, Ontario",
    country: "Canada",
    workMode: "Remote",
    type: "Full-time",
    salary: "Competitive",
    description: "Human Agency is a strategic consulting firm. As Chief of Staff, you'll support operations, client services, and strategic initiatives in a fast-paced consulting environment.",
    skills: ["Operations", "Client Services", "Project Management", "AI Fluency"],
    postedDate: "2024-12-22",
    externalUrl: "https://job-boards.greenhouse.io/humanagency/jobs/7571668003",
    source: "greenhouse",
    category: "consulting",
    executiveType: "Managing Partner",
    companyStage: "Growth",
  },
  {
    id: "wave",
    title: "Chief of Staff",
    company: "Wave",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    heroImageAlt: "Mobile money and fintech",
    location: "Remote (Africa-focused)",
    country: "Global",
    workMode: "Remote",
    type: "Full-time",
    salary: "Competitive",
    description: "Wave is building mobile money infrastructure for Africa. As Chief of Staff, you'll drive strategic projects and cross-functional collaboration in our mission to provide financial access.",
    skills: ["Project Management", "Communication", "Collaboration", "Interpersonal Skills"],
    postedDate: "2024-12-18",
    externalUrl: "https://www.wave.com/en/careers/job/5661509004?gh_jid=5661509004",
    source: "greenhouse",
    category: "startup",
    executiveType: "CEO",
    companyStage: "Series C+",
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
