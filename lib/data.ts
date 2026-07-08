export type Metric = {
  value: string;
  label: string;
  sub: string;
};

export type Project = {
  id: string;
  title: string;
  tags: string[];
  category: string[];
  outcome: string;
  emoji: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
  industry?: string;
  showDiagram?: boolean;
  metrics?: Metric[];
  caseStudySlug?: string;
};

export const projects: Project[] = [
  {
    id: "dietitian-referral-ai",
    title: "Dietitian Referral Intelligence System",
    tags: ["ETL Pipeline", "AI / LLM", "Looker Studio", "Google Sheets", "Healthcare"],
    category: ["AI/ML", "Data Engineering", "BI/Analytics"],
    featured: true,
    caseStudySlug: "dietitian-referral-system",
    industry: "Healthcare · Private Practice",
    outcome: "Eliminated manual referral review · AI booking recommendations · live practice dashboard",
    emoji: "🏥",
    description:
      "Built a complete referral intelligence system for a Melbourne dietitian. An automated ETL pipeline extracts structured data from referral emails via the Gmail API, transforms it with Python, then passes the text through an LLM (OpenAI) to generate personalised client recommendations and classify referral urgency. Clean, booking-ready data loads automatically into Google Sheets. A live Looker Studio dashboard gives the practitioner full visibility into her referral pipeline, conversion funnel, practice gaps, and content opportunities.",
    highlights: [
      "Eliminated hours of manual email review — fully automated intake",
      "AI layer generates personalised recommendations per referral",
      "First time the practitioner had complete referral pipeline visibility",
      "Looker Studio dashboard reveals practice gaps and content themes",
      "100% referral capture — zero missed bookings",
    ],
    tech: ["Python", "Gmail API", "OpenAI", "Google Sheets API", "Looker Studio", "Pandas", "ETL"],
    showDiagram: true,
    // Sample placeholder figures — swap with the dietitian's confirmed numbers
    // once finalised (see naval-deploy-and-assets.md Part 5 for the drop-in pattern).
    metrics: [
      { value: "~5", label: "Hours saved / week", sub: "Manual email review → automated" },
      { value: "100%", label: "Referrals captured", sub: "Zero missed bookings" },
      { value: "AI", label: "Personalised recs", sub: "Generated per referral" },
      { value: "Live", label: "Looker dashboard", sub: "Practice insights always fresh" },
    ],
  },
  {
    id: "stocks-ai",
    title: "Stocks AI Analyzer",
    tags: ["Agentic AI", "CrewAI", "GenAI", "Python"],
    category: ["AI/ML", "GenAI"],
    outcome: "End-to-end agentic AI system for stock analysis and portfolio insights",
    emoji: "🤖",
    description:
      "A live, production agentic AI tool built entirely with CrewAI, orchestrating multiple specialised agents to analyse market data, evaluate portfolio positions, and surface actionable insights. Demonstrates end-to-end GenAI system design with real-world reliability.",
    highlights: [
      "Fully agentic architecture using CrewAI framework",
      "Live in production, self-hosted, always running",
      "Multi-agent orchestration for data gathering, analysis, and insight generation",
    ],
    tech: ["CrewAI", "Python", "OpenAI", "Financial APIs", "LangChain"],
  },
  {
    id: "umac-hackathon",
    title: "Hackathon — AI & BI Suite",
    tags: ["CrewAI", "Power BI", "Agentic AI"],
    category: ["AI/ML", "BI/Analytics", "GenAI"],
    outcome: "🏆 1st place · 7% overall KPI improvement demonstrated",
    emoji: "🏆",
    description:
      "Co-led an award-winning hackathon project building two tools: an AI Students ROI model using Agentic AI (CrewAI) and a BI Impact Analyser in Power BI. Won the Best Solution Award at MI 2024.",
    highlights: [
      "Won Best Solution Award — MI 2024",
      "7% improvement in conversion KPIs",
      "Agentic AI + Power BI in a single integrated suite",
    ],
    tech: ["CrewAI", "LangChain", "Python", "Power BI", "DAX"],
  },
];

export type Service = {
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  tech: string[];
  proof?: string;
};

export const services: Service[] = [
  {
    number: "01",
    icon: "⚡",
    title: "AI Automation Solutions",
    tagline: "Replace repetitive work with intelligent agents",
    description:
      "Agentic AI workflows (CrewAI, LangChain), GPT-4 integrations, intelligent chatbots, document AI, and automated decision pipelines tailored to your business.",
    bestFor: "Businesses wanting to automate repetitive knowledge work",
    tech: ["LangChain", "CrewAI", "GPT-4", "FastAPI", "Python"],
  },
  {
    number: "02",
    icon: "🔧",
    title: "Data Engineering & Pipelines",
    tagline: "Turn your data chaos into reliable infrastructure",
    description:
      "ETL pipeline design, cloud data architecture (Azure/AWS/GCP), real-time streaming with Kafka and Spark, and Airflow orchestration — built to scale.",
    bestFor: "Companies drowning in data but not using it",
    tech: ["Apache Airflow", "Spark", "Kafka", "Azure", "AWS", "Docker"],
  },
  {
    number: "03",
    icon: "📊",
    title: "BI Dashboards & Analytics",
    tagline: "Insights your team will actually use",
    description:
      "Power BI dashboard design with complex DAX measures, Looker Studio reports, KPI frameworks, funnel analysis, and statistical forecasting.",
    bestFor: "Teams that need faster, data-backed decisions",
    tech: ["Power BI", "DAX", "Looker Studio", "Python", "SQL"],
  },
  {
    number: "04",
    icon: "🔗",
    title: "AI Integration Consulting",
    tagline: "Find where AI fits in your business",
    description:
      "Audit your existing tools, identify high-value AI entry points, connect LLMs to your stack via APIs, and build a practical GenAI roadmap.",
    bestFor: "Founders and leaders exploring where AI fits",
    tech: ["OpenAI API", "LangChain", "REST APIs", "Python", "Azure"],
    proof:
      "Like the referral intelligence system I built for a healthcare practice in Melbourne — automated, AI-powered, live on day one.",
  },
];

export const process = [
  { step: "01", title: "Discover", desc: "Understand your problem before touching a keyboard" },
  { step: "02", title: "Design", desc: "Architecture and tech plan, shared before we build" },
  { step: "03", title: "Build", desc: "Sprint-based development with regular check-ins" },
  { step: "04", title: "Deliver", desc: "Full handover with documentation" },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  staticDisplay?: string;
};

export const stats: Stat[] = [
  { value: 100, suffix: "%", label: "Referral capture rate", sub: "Dietitian referral system" },
  { value: 0, suffix: "", label: "KPI review included", sub: "Every engagement, no exception", staticDisplay: "30-day" },
  { value: 9, suffix: "+ yrs", label: "Building data systems", sub: "Enterprise + startup + healthcare" },
  { value: 0, suffix: "", label: "Best Solution Award", sub: "Hackathon 2024", staticDisplay: "1st 🏆" },
];

export const timeline = [
  { year: "2011", title: "B.Tech Electronics Engineering", sub: "Guru Gobind Singh Indraprastha University, Delhi" },
  { year: "2018", title: "Data / ML Engineer", sub: "Times Internet · Times of India Group" },
  { year: "2020", title: "Master of Data Science", sub: "Monash University, Melbourne" },
  { year: "2021", title: "Data Scientist", sub: "Monash University" },
  { year: "2021", title: "Independent AI Developer", sub: "Personal projects, ongoing" },
  { year: "2022", title: "Data Consultant", sub: "National Australia Bank, via Infosys" },
  { year: "2022", title: "Data Consultant", sub: "Monash University — Marketing Intelligence, ongoing" },
  { year: "2024", title: "🏆 Best Solution Award", sub: "Hackathon 2024" },
  { year: "2024", title: "🏆 Never Stop Learning Award", sub: "Monash University" },
];

export type SkillCategory = {
  name: string;
  color: "teal" | "amber" | "purple" | "red" | "blue" | "green";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { name: "Programming", color: "teal", skills: ["Python", "SQL", "Java", "R", "JavaScript", "DAX"] },
  {
    name: "AI & Machine Learning",
    color: "amber",
    skills: ["LangChain", "CrewAI", "GPT-4", "LSTM", "XGBoost", "BERT", "HuggingFace"],
  },
  {
    name: "Data Engineering",
    color: "purple",
    skills: ["Airflow", "Spark", "Kafka", "ETL", "PySpark", "FastAPI", "Docker"],
  },
  { name: "Cloud", color: "red", skills: ["Azure", "AWS", "GCP", "Databricks", "Jenkins", "CI/CD"] },
  { name: "Business Intelligence", color: "blue", skills: ["Power BI", "DAX", "Looker Studio", "Data Visualisation"] },
  {
    name: "Soft Skills",
    color: "green",
    skills: ["Client Management", "Project Management", "Agile", "Technical Writing"],
  },
];

export const bio = {
  paragraphs: [
    "I'm Naval — an AI and Data Engineer based in Melbourne. I came from Electronics Engineering in Delhi, fell in love with data at Times Internet, then did my Master of Data Science at Monash University.",
    "Since then I've built production ML systems, enterprise data pipelines, award-winning AI prototypes, and Power BI dashboards that actually get used. I work best at the intersection of technical depth and business outcome.",
    "I'm not just interested in building the model. I want to know what decision it enables and whether that decision made things better.",
  ],
  quote:
    "I believe partnerships are built on trust — and trust is built on doing what you said you'd do, then a little more. Every system I build is designed to keep working long after I step back. That's not a feature — that's my definition of a job well done.",
  beyondTerminal:
    "Data drives what I build. But sketching is how I think. There's a connection between drawing patterns on paper and finding patterns in data — both are about learning to see clearly before you act. This is the part of me that clients say makes me a good partner: I bring a builder's craft to technical work.",
};

export const contact = {
  email: "datascientist@navalaggarwal.com",
  location: "Melbourne, Victoria, Australia",
  linkedin: "https://www.linkedin.com/in/naval-aggarwal/",
  github: "https://github.com/Naval13/",
  medium: "https://medium.com/@naval.aggarwal2020/",
  calLink: "naval-aggarwal/discovery-call",
};

export const trustBar = ["Monash University", "National Australia Bank", "Times Internet", "Infosys"];

export const tagline = {
  line1: "Data drives decisions…",
  line2: "Decisions drive results.",
};

export type Testimonial = {
  id: string;
  active: boolean;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    active: false,
    quote: "[Placeholder — replace with real dietitian quote]",
    author: "[Client name]",
    role: "[Their role]",
    company: "Melbourne healthcare practice",
  },
  {
    id: "t2",
    active: false,
    quote: "[Placeholder — Monash colleague quote]",
    author: "[Name]",
    role: "[Role]",
    company: "Monash University",
  },
  {
    id: "t3",
    active: false,
    quote: "[Placeholder — third testimonial slot]",
    author: "[Name]",
    role: "[Role]",
    company: "[Company]",
  },
];
