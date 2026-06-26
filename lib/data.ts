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
};

export const filters = ["All", "AI/ML", "GenAI", "Data Engineering", "BI/Analytics"] as const;

export const projects: Project[] = [
  {
    id: "dietitian-referral-ai",
    title: "Dietitian Referral Intelligence System",
    tags: ["ETL Pipeline", "AI / LLM", "Looker Studio", "Google Sheets", "Healthcare"],
    category: ["AI/ML", "Data Engineering", "BI/Analytics"],
    featured: true,
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
  },
  {
    id: "stocks-ai",
    title: "Stocks AI Analyzer",
    tags: ["GenAI", "ML", "Python", "FastAPI"],
    category: ["AI/ML", "GenAI"],
    outcome: "End-to-end AI investing tool with GPT-4 conversational interface",
    emoji: "🤖",
    description:
      "Built a comprehensive AI-powered stock analysis system combining LSTM neural networks, XGBoost, ARIMA forecasting, and NLP sentiment analysis. Integrated LangChain + GPT-4 for a conversational query interface. Deployed on Azure with a Streamlit dashboard.",
    highlights: [
      "~10% forecasting accuracy improvement over ARIMA baseline",
      "GPT-4 agent answers natural language stock questions",
      "Automated daily data refresh with Azure hosting",
    ],
    tech: ["Python", "LangChain", "GPT-4", "LSTM", "XGBoost", "FastAPI", "Streamlit", "Azure", "Docker"],
  },
  {
    id: "umac-hackathon",
    title: "UMAC Hackathon — AI & BI Suite",
    tags: ["CrewAI", "Power BI", "Agentic AI"],
    category: ["AI/ML", "BI/Analytics", "GenAI"],
    outcome: "🏆 1st place · 7% overall KPI improvement demonstrated",
    emoji: "🏆",
    description:
      "Co-led an award-winning hackathon project building two tools: an AI Students ROI model using Agentic AI (CrewAI) and a BI Impact Analyser in Power BI. Won the Best Solution Award at UMAC MI 2024.",
    highlights: [
      "Won Best Solution Award — UMAC MI 2024",
      "7% improvement in conversion KPIs",
      "Agentic AI + Power BI in a single integrated suite",
    ],
    tech: ["CrewAI", "LangChain", "Python", "Power BI", "DAX"],
  },
  {
    id: "nab-grace",
    title: "NAB GRACE Risk Pipeline",
    tags: ["Data Engineering", "Airflow", "AWS"],
    category: ["Data Engineering"],
    outcome: "97% pipeline success rate · enterprise-scale ETL at NAB",
    emoji: "🏦",
    description:
      "Built and managed end-to-end data pipelines for NAB's Governance Risk and Compliance Engine. Complex ETL integrating customer transaction data, with CI/CD via Jenkins and workflow scheduling via Apache Airflow on AWS.",
    highlights: [
      "97% pipeline success rate achieved",
      "Full CI/CD with Git + Jenkins",
      "PyTest coverage across all ETL stages",
    ],
    tech: ["Python", "Apache Airflow", "AWS", "SQL", "Java", "Jenkins", "PyTest"],
  },
  {
    id: "enrollment-funnel",
    title: "Monash Enrollment Funnel BI",
    tags: ["Power BI", "ML", "DAX"],
    category: ["BI/Analytics", "AI/ML"],
    outcome: "50% less manual reporting · 5% enrollment yield improvement",
    emoji: "📊",
    description:
      "Deep analysis of the student conversion funnel, uncovering a 12% drop-off at offer-to-acceptance. Built interactive Power BI dashboards enabling daily data-driven strategy. Logistic regression model achieving 85% accuracy on applicant scoring.",
    highlights: [
      "50% reduction in manual reporting time",
      "5% enrollment yield improvement",
      "85% accuracy on applicant acceptance prediction",
    ],
    tech: ["Power BI", "DAX", "Python", "scikit-learn", "SQL", "ARIMA"],
  },
  {
    id: "flight-delays",
    title: "Real-Time Flight Delay Predictor",
    tags: ["Spark", "Kafka", "ML"],
    category: ["Data Engineering", "AI/ML"],
    outcome: "Real-time stream processing on large-scale aviation data",
    emoji: "✈️",
    description:
      "Real-time streaming prediction for USA flight delays using Apache Kafka and Spark SQL/ML. Binary and multi-class classification using the MLlib/ML APIs on large-scale datasets.",
    highlights: [
      "Real-time streaming pipeline",
      "Binary and multi-class classification",
      "Full pipeline from ingestion to prediction",
    ],
    tech: ["Apache Spark", "Kafka", "PySpark", "MLlib", "Python"],
  },
  {
    id: "covid-nlp",
    title: "COVID-19 Twitter NLP Analysis",
    tags: ["NLP", "BERT", "Python"],
    category: ["AI/ML"],
    outcome: "Sentiment analysis pipeline on a 1M+ tweet dataset",
    emoji: "💬",
    description:
      "Pre-processed and analysed COVID-19 Twitter data using NLP in Python. BERT-based transformer models for sentiment, with a vectorisation pipeline for recommendation-system integration.",
    highlights: [
      "BERT transformer for sentiment analysis",
      "Large-scale tweet vectorisation",
      "Recommendation system integration",
    ],
    tech: ["Python", "NLTK", "BERT", "HuggingFace", "NumPy", "Pandas"],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;

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

export const stats = [
  { value: 85, suffix: "%", label: "ML Model Accuracy", sub: "Enrollment predictor, Monash" },
  { value: 50, suffix: "%", label: "Reporting Time Saved", sub: "Power BI automation" },
  { value: 7, suffix: "%", label: "Conversion KPI Boost", sub: "UMAC hackathon 2024" },
  { value: 1, suffix: "st", label: "Hackathon Place", sub: "Best Solution Award, UMAC MI 2024" },
];

export const timeline = [
  { year: "2011", title: "B.Tech Electronics Engineering", sub: "Guru Gobind Singh Indraprastha University, Delhi" },
  { year: "2018", title: "Data / ML Engineer", sub: "Times Internet · Times of India Group" },
  { year: "2020", title: "Master of Data Science", sub: "Monash University, Melbourne" },
  { year: "2021", title: "Data Scientist", sub: "Monash University" },
  { year: "2021", title: "Independent AI Developer", sub: "Personal projects, ongoing" },
  { year: "2022", title: "Data Consultant", sub: "National Australia Bank, via Infosys" },
  { year: "2022", title: "Data Consultant", sub: "Monash University — Marketing Intelligence, ongoing" },
  { year: "2024", title: "🏆 Best Solution Award", sub: "UMAC MI Hackathon 2024" },
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
    "I believe data should tell stories, not just generate reports. My approach is always to understand the business first — then find the AI or data solution that fits. Not the other way around.",
  beyondTerminal:
    "When I'm not wrangling data pipelines, you'll find me sketching — my way of finding patterns before I model them.",
};

export const contact = {
  email: "datascientist@navalaggarwal.com",
  location: "Melbourne, Victoria, Australia",
  linkedin: "https://www.linkedin.com/in/naval-aggarwal/",
  github: "https://github.com/Naval13/",
  medium: "https://medium.com/@naval.aggarwal2020/",
};

export const trustBar = ["Monash University", "National Australia Bank", "Times Internet", "Infosys"];

export const tagline = {
  line1: "Data drives decisions…",
  line2: "Decisions drive results.",
};
