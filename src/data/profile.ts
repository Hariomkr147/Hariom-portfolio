// Everything a recruiter reads lives here, so updating the site is a data edit, not a component edit.

export const links = {
  email: "hari18525@gmail.com",
  github: "https://github.com/Hariomkr147",
  linkedin: "https://linkedin.com/in/hariomiitm",
  resume: "/resume.pdf",
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  tools: string;
  image?: string;
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Prayog",
    category: "LLM Simulation Generator · Adhyay AI",
    summary:
      "Turns a class topic into a guided science lesson with an interactive canvas simulation, practice questions and free-explore mode. Every prompt and validator change is measured on a fixed eval set (6 topics × 3 runs).",
    tools: "LLMs, Prompt Engineering, LLM Evaluation, PostgreSQL, HTML Canvas",
  },
  {
    title: "Gyantra",
    category: "LLM Orchestration",
    summary:
      "A 10-stage LLM pipeline that converts educational documents into structured Teacher Knowledge Packages, with a React review UI and live progress over Server-Sent Events.",
    tools: "FastAPI, React, Vite, SSE, Gemini, Groq, OpenRouter",
    image: "/images/gyantra.webp",
    link: "https://github.com/Hariomkr147/Gyantra",
  },
  {
    title: "Doc Mentor",
    category: "RAG Chatbot",
    summary:
      "Q&A over uploaded PDFs and text. Tuned chunk size, top-k retrieval and prompts to reduce hallucinations; containerised with Docker and API-tested in Postman.",
    tools: "FastAPI, LangChain, Gemini, FAISS, Sentence Transformers, Docker, Streamlit",
  },
  {
    title: "Kartavya",
    category: "Civic Complaint Platform · Backend",
    summary:
      "Team of 5 (Scrum). Designed the normalised schema, geo-proximity complaint grouping with the Haversine formula, zone-based routing, complaint lifecycles, audit trails and RBAC.",
    tools: "Database Design, Haversine Geo-proximity, RBAC, Scrum, GitHub PR Reviews",
  },
  {
    title: "Placement Portal",
    category: "Full-Stack Web App",
    summary:
      "Placement platform with Flask REST APIs and a Vue.js frontend, role-based access and company / job approval workflows.",
    tools: "Flask, Vue.js, SQLite, REST APIs, RBAC",
    image: "/images/placement-portal.webp",
    link: "https://github.com/Hariomkr147/placement-portal",
  },
  {
    title: "Cinema Audience Forecasting",
    category: "Machine Learning",
    summary: "Forecasts cinema audience demand with feature-engineered ML models.",
    tools: "Python, Pandas, NumPy, Scikit-learn, Matplotlib",
    image: "/images/cinema-forecasting.webp",
    link: "https://github.com/Hariomkr147/Cinema-Audience-Forecasting-challenge",
  },
];

export const otherWork: Project[] = [
  {
    title: "Navigating Algorithmic Anxiety",
    category: "Qualitative research · Team of 5 · 2026",
    summary: "How a growth mindset helps professionals handle GenAI-driven stress and skill obsolescence.",
    tools: "Interviews, Thematic Analysis, WBS, Risk Management",
    link: "https://github.com/Hariomkr147/navigating-algorithmic-anxiety",
  },
  {
    title: "BDM Capstone",
    category: "Business analytics",
    summary: "Excel-based financial modelling and data cleaning.",
    tools: "Excel, Financial Modelling",
  },
];

export const techStack = [
  { name: "Python", icon: "/images/python.svg" },
  { name: "Java", icon: "/images/java.svg" },
  { name: "FastAPI", icon: "/images/fastapi.svg" },
  { name: "Flask", icon: "/images/flask.svg" },
  { name: "React", icon: "/images/react-new.svg" },
  { name: "Vue.js", icon: "/images/vue.svg" },
  { name: "Pandas", icon: "/images/pandas.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "JavaScript", icon: "/images/javascript.webp" },
];
