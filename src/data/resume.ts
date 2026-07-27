export const profile = {
  name: "Alejandro Sanchez Rubio",
  firstName: "Alejandro",
  lastName: "Sanchez Rubio",
  role: "Systems Engineering Test Conductor",
  summary:
    "Specializing in autonomous vehicle diagnostics and L4 deployment infrastructure. Bridging the gap between software reliability and hardware performance in extreme environmental conditions.",
  location: "Merced, CA",
  academic: "UC Merced BS CSE",
  github: "@SuperBons",
  githubUrl: "https://github.com/SuperBons",
  linkedin: "/alex-sanchez2002",
  linkedinUrl: "https://linkedin.com/in/alex-sanchez2002",
  email: "sanchezalejandro77@gmail.com",
  phone: "+1 559 605 9697",
  phoneHref: "tel:+15596059697",
};

export interface Role {
  org: string;
  title: string;
  dates: string;
  location: string;
  current?: boolean;
  bullets: string[];
}

export const roles: Role[] = [
  {
    org: "Transdev with Waymo",
    title: "Systems Engineering Test Conductor",
    dates: "JUNE 2025 — PRESENT",
    location: "Atwater, CA",
    current: true,
    bullets: [
      "Executed high-priority thermal diagnostics alongside Waymo senior and staff engineers to pinpoint an ECU fault impacting ten percent of the fleet, then ran rigorous regression testing on new ECUs to validate system stability.",
      "Conducted structured thermal load scenarios across varied environmental conditions to evaluate cooling efficiency and validate hardware design improvements.",
      "Assited with core engineering to develop and validate latent fault checks for new platform architectures, analyzing CAN and FlexRay signal data to isolate system anomalies and enforce strict operational tolerances.",
      "Advanced depot automation initiatives by testing ADV charging workflows and sleep-state routines, utilizing system dashboards to identify and isolate operational bugs.",
      "Analyze collision avoidance simulations to validate non-ADV dynamic agent behaviors, ensuring surrounding actor trajectories remain strictly within realistic physical limits and constraints.",      "Validated and qualified new software and firmware builds for production release, executing critical go/no-go testing to ensure systems are safe for public roads.",
      "Troubleshot complex hardware-software interface faults in the field using command-line diagnostics to identify root causes and minimize vehicle downtime.",
      "Generated detailed technical logs and bug reports for software engineering teams, documenting disengagements, latency issues, and hardware anomalies."
    ],
  },
  {
    org: "x10e",
    title: "Software Engineer Intern",
    dates: "AUG 2024 — JAN 2025",
    location: "Mountain View, CA",
    bullets: [
      "Designed and implemented a retrieval-augmented generation (RAG) pipeline for an LLM analyzing real-time molecular data from a wearable arm patch.",
      "Engineered Python data pipelines to ingest and enrich bloodstream molecule metrics, ensuring accurate model prompts.",
      "Built full-stack features with React, SCSS, Flask, and Express.js to visualize biomarker trends and deliver actionable health insights.",
    ],
  },
  {
    org: "Conectado",
    title: "Software Engineer Intern",
    dates: "MAY 2025 — JULY 2025",
    location: "Remote",
    bullets: [
      "Developed AI-powered web scrapers with Firecrawl to auto-ingest job opportunities into Firebase, boosting listings by 30%.",
      'Built the "Digital AI Backpack" full-stack app using Firebase, Node.js, React, and Firebase Genkit for data management and user interface.',
      "Optimized the scraper pipeline architecture — cutting runtime by 40% and error rates by 15% — to ensure reliable data collection.",
    ],
  },
  {
    org: "CITRIS and the Banatao Institute",
    title: "Web Developer Intern",
    dates: "2024 — JULY 2025",
    location: "Merced, CA",
    bullets: [
      "Contributed to full-stack web applications serving campus-wide initiatives, leveraging JavaScript (jQuery), HTML, and CSS framework libraries to optimize UI responsiveness.",
      "Aided development and maintenance of a large-scale enterprise web application codebase (400,000+ lines of code).",
    ],
  },
  {
    org: "CITRIS and the Banatao Institute",
    title: "Educational Robotics Intern",
    dates: "2024 — JULY 2025",
    location: "Merced, CA",
    bullets: [
      "Designed and delivered K–12 STEM curriculum on Python programming, NexTech robotics, and CoDrone EDU UAVs for precision agriculture applications.",
      "Developed interactive technical modules demonstrating field automation, AGTech hardware, and environmental monitoring.",
    ],
  },
];

export interface Project {
  name: string;
  tech: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    name: "Advanced Database Engine Implementation",
    tech: "C++",
    bullets: [
      "Engineered a high-performance B+Tree index with O(log n) search complexity for accelerated data access.",
      "Developed a SQL compilation pipeline: SQL → parse tree → optimized execution plan.",
      "Applied cost-based optimization techniques, yielding 15–30% query performance gains.",
      "Validated against the TPC-H benchmark on a 10 GB dataset and built a multi-phase verification framework with 50+ test queries.",
    ],
  },
  {
    name: "Memory Leak Detector",
    tech: "C++, Dynamic Memory Analysis, Tooling",
    bullets: [
      "Developed a dynamic memory tracking tool to monitor heap allocations and deallocations, flagging unhandled memory leaks at runtime.",
      "Implemented custom allocation wrappers to inspect pointer lifecycles, improving debugging efficiency for low-level systems programming.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "C/C++",
      "Java",
      "JavaScript",
      "SQL",
      "HTML/CSS",
      "React",
      "Node.js",
      "Flask",
      "Express.js"
    ],
  },
  {
    label: "Developer Tools",
    items: ["Linux", "VS Code", "JetBrains", "GitHub", "Docker"],
  },
  {
    label: "Technologies",
    items: [
      "Firebase",
      "Firecrawl",
      "Firebase Genkit",
      "LangChain",
      "SQLAlchemy",
      "WordPress"
    ],
  },
];

export const coursework: { code: string; name: string }[] = [
  { code: "CSE 177", name: "Database Systems Implementation" },
  { code: "CSE 141", name: "Introduction to Compiler Construction" },
  { code: "CSE 150", name: "Operating Systems" },
  { code: "CSE 100", name: "Algorithm Design and Analysis" },
  { code: "CSE 120", name: "Software Engineering" },
  { code: "CSE 111", name: "Database Systems" },
  { code: "CSE 108", name: "Full Stack Web Development" },
  { code: "CSE 175", name: "Introduction to Artificial Intelligence" },
  { code: "CSE 031", name: "Computer Organization" },
  { code: "CSE 030", name: "Data Structures" },
  { code: "CSE 015", name: "Discrete Mathematics" },
  { code: "MATH 024", name: "Linear Algebra & Differential Equations" },
  { code: "MATH 032", name: "Probability and Statistics" },
];