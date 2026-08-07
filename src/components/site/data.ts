import projIdp from "@/assets/proj-idp.jpg";
import projMonitor from "@/assets/proj-monitor.jpg";
import projPayment from "@/assets/proj-payment.jpg";
import projSubs from "@/assets/proj-subs.jpg";
import projAdmin from "@/assets/proj-admin.jpg";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  ".NET Full Stack Developer",
  "ASP.NET Core Developer",
  "AI & Intelligent Document Processing Developer",
  "Angular Developer",
  "Problem Solver",
];

export const TECH_TAGS = [
  "ASP.NET Core",
  ".NET Core",
  "C#",
  "MVC",
  "Web API",
  "Angular",
  "SQL Server",
  "Entity Framework",
  "Azure AI",
  "LLM Integration",
  "OCR",
  "Grooper",
  "Intelligent Document Processing",
  "REST APIs",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git",
  "Azure DevOps",
];

export const RESPONSIBILITIES = [
  "Develop enterprise web applications using ASP.NET Core and Angular",
  "Develop REST APIs",
  "Design SQL Server databases and stored procedures",
  "Build intelligent document processing solutions",
  "Integrate Azure AI and GPT-based extraction",
  "Optimize SQL queries for production systems",
  "Work with Grooper OCR platform",
  "Develop automation pipelines",
  "Collaborate with cross-functional teams",
  "Fix production bugs",
  "Improve application performance",
];

export type Project = {
  title: string;
  featured?: boolean;
  image: string;
  description: string;
  features: string[];
  tech: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "BIS Grooper Automation",
    featured: true,
    image: projIdp,
    description:
      "Built an AI-powered Intelligent Document Processing platform using Grooper, OCR, Azure AI, and GPT integration.",
    features: [
      "Hybrid OCR + LLM extraction",
      "JSON-based extraction engine",
      "Confidence validation",
      "Human-in-the-loop workflow",
      "Document classification",
      "Multiple document types",
      "Production automation",
    ],
    tech: ["C#", "Grooper", "Azure AI", "OCR", "GPT", "JSON", "VB.NET"],
  },
  {
    title: "Employee Monitoring System",
    image: projMonitor,
    description:
      "Developed an employee monitoring platform capable of live activity tracking and real-time communication.",
    features: [
      "Screenshot monitoring",
      "Mouse tracking",
      "Keyboard tracking",
      "SignalR communication",
      "Real-time dashboard",
      "Live screen sharing",
    ],
    tech: [".NET MAUI", "ASP.NET Core", "SignalR", "SQL Server"],
  },
  {
    title: "Ghana Online Payment System",
    image: projPayment,
    description: "Built secure online payment modules for an enterprise application.",
    features: [
      "Angular frontend",
      ".NET Core APIs",
      "Role based access",
      "Payment workflow",
      "REST APIs",
    ],
    tech: ["Angular", ".NET Core", "SQL Server", "Bootstrap"],
  },
  {
    title: "PayPal Subscription Platform",
    image: projSubs,
    description: "Subscription management platform supporting recurring payments.",
    features: [
      "Recurring billing",
      "User management",
      "Subscription plans",
      "Payment gateway",
      "Reporting",
    ],
    tech: ["ASP.NET Core", "PayPal API", "Entity Framework", "SQL Server"],
  },
  {
    title: "Admin Dashboard",
    image: projAdmin,
    description:
      "Role-driven administrative dashboard with analytics, reporting and user management.",
    features: [
      "Role based authentication",
      "Analytics",
      "Reports",
      "User management",
      "Dynamic dashboard",
    ],
    tech: [".NET Core", "SQL", "Bootstrap"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 92 },
      { name: ".NET Core", level: 90 },
      { name: "C#", level: 92 },
      { name: "MVC", level: 86 },
      { name: "Web API", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "LINQ", level: 86 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 85 },
      { name: "JavaScript", level: 84 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Bootstrap", level: 88 },
      { name: "jQuery", level: 78 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "Stored Procedures", level: 90 },
      { name: "Views", level: 85 },
      { name: "Functions", level: 82 },
      { name: "Triggers", level: 80 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Azure AI", level: 84 },
      { name: "GPT Integration", level: 88 },
      { name: "OCR", level: 86 },
      { name: "Grooper", level: 88 },
      { name: "IDP", level: 86 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio", level: 92 },
      { name: "Azure DevOps", level: 84 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "Postman", level: 86 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const STATS = [
  { label: "Enterprise Applications Built", value: 10, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "Months Experience", value: 24, suffix: "+" },
  { label: "Production Issues Solved", value: 100, suffix: "+" },
  { label: "Document Automation Pipelines", value: 10, suffix: "+" },
];

export const SERVICES = [
  {
    title: "Enterprise Web Applications",
    body: "Scalable ASP.NET Core + Angular products built for real business load.",
  },
  {
    title: "REST API Development",
    body: "Clean, versioned and secure APIs with solid contracts and documentation.",
  },
  {
    title: ".NET Full Stack Development",
    body: "End-to-end delivery from database schema to polished UI.",
  },
  {
    title: "SQL Optimization",
    body: "Query tuning, indexing and stored procedure refactoring for production systems.",
  },
  {
    title: "AI Automation",
    body: "Azure AI and GPT-powered workflows that remove manual effort.",
  },
  {
    title: "Document Processing",
    body: "OCR + LLM extraction pipelines with confidence scoring and review loops.",
  },
  {
    title: "Business Software",
    body: "Custom internal tools, dashboards and workflow platforms.",
  },
  {
    title: "Maintenance & Support",
    body: "Bug fixing, performance work and long-term product care.",
  },
];

export const WHY_HIRE_ME = [
  "Fast Learner",
  "Clean Code",
  "Problem Solver",
  "Production Experience",
  "Strong SQL Skills",
  "AI Integration Experience",
  "Business Application Development",
  "Excellent Team Collaboration",
];

export const TESTIMONIALS = [
  {
    quote:
      "Divyanshu shipped our document automation pipeline ahead of schedule and it has been running in production without babysitting.",
    name: "Project Manager",
    role: "Enterprise Client (placeholder)",
  },
  {
    quote:
      "Strong ownership on the API layer. Clean code, thoughtful SQL, and always available when production needed attention.",
    name: "Tech Lead",
    role: "SuperTek Software Solutions (placeholder)",
  },
  {
    quote:
      "He translates messy business requirements into working software quickly, and communicates clearly throughout.",
    name: "Business Analyst",
    role: "Product Team (placeholder)",
  },
];

export const CONTACT = {
  email: "divyanshumishra208@gmail.com",
  location: "Lucknow, Uttar Pradesh, India",
  availability: "Open to Full-Time & Freelance Opportunities",
  linkedin: "https://www.linkedin.com/in/divyanshu-mishra-645841216/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJe3nWIEjRGS3AhmcdqlMmA%3D%3D",
  github: "https://github.com/",
};
