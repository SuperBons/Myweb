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
      "Partnered with core engineering to develop and validate latent fault checks for new platform architectures, analyzing CAN and FlexRay signal data to isolate system anomalies and enforce strict operational tolerances.",
      "Advanced depot automation initiatives by testing ADV charging workflows and sleep-state routines, utilizing system dashboards to identify and isolate operational bugs.",
      "Led operational testing for a team of 7 specialists, ensuring strict adherence to quality protocols and safety standards for Level 4 autonomous vehicle deployment.",
      "Validated and qualified new software and firmware builds for production release, executing critical go/no-go testing to ensure systems are safe for public roads.",
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
      "Optimized the scraper pipeline — cutting runtime by 40% and error rate by 15% — to ensure reliable, high-volume data collection.",
    ],
  },
  {
    org: "CITRIS and the Banatao Institute",
    title: "Web Developer Intern",
    dates: "2024 — JULY 2025",
    location: "Merced, CA",
    bullets: [
      "Aided development of a large-scale web application with 400,000+ lines of code, improving functionality and efficiency.",
      "Designed a user-friendly interface using HTML, CSS, jQuery, JavaScript, and CSS libraries.",
    ],
  },
  {
    org: "CITRIS and the Banatao Institute",
    title: "Educational Robotics Intern",
    dates: "2024 — JULY 2025",
    location: "Merced, CA",
    bullets: [
      "Designed and delivered K–12 STEM curriculum on Python, NexTech robotics, and CoDrone EDU UAVs for precision agriculture.",
      "Developed hands-on modules showcasing automation and AGTech to advance sustainability and food security.",
      "Engaged students in emerging ag-technology, inspiring exploration of tech careers in agriculture.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "Java",
      "C/C++",
      "JavaScript",
      "SQL",
      "HTML/CSS",
      "React",
      "Spanish (Fluent)",
    ],
  },
  {
    label: "Developer Tools",
    items: ["VS Code", "JetBrains", "GitHub", "Docker", "AI Programming Tools"],
  },
  {
    label: "Technologies",
    items: [
      "Linux",
      "LangChain",
      "SQLAlchemy",
      "Firebase",
      "Firecrawl",
      "Node.js",
      "Flask",
      "WordPress",
    ],
  },
];

export const coursework: { code: string; name: string }[] = [
  { code: "CORE_01", name: "Data Structures" },
  { code: "CORE_02", name: "Algorithms and Design" },
  { code: "CORE_03", name: "Software Engineering" },
  { code: "CORE_04", name: "Operating Systems" },
  { code: "CORE_05", name: "Computer Architecture" },
  { code: "CORE_06", name: "Compiler Construction" },
  { code: "CORE_07", name: "Artificial Intelligence" },
  { code: "CORE_08", name: "Databases" },
  { code: "CORE_09", name: "Database Implementation" },
  { code: "CORE_10", name: "Full Stack Development" },
  { code: "CORE_11", name: "Circuit Theory" },
  { code: "CORE_12", name: "Engineering Math" },
];
