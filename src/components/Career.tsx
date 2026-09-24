import "./styles/Career.css";

const timeline = [
  {
    role: "AI Engineer",
    org: "Adhyay AI Pvt. Ltd. · Remote",
    date: "NOW",
    text: "Since Sep 2026. Building Prayog, an LLM simulation generator for school science. Prototyped a teacher–student LLM pipeline grounded in NCERT data with an A/B harness for quality and token cost. Also making the Next.js app bilingual (i18n) and building AI video generation for lessons.",
  },
  {
    role: "Diplomas in Data Science & Programming",
    org: "Indian Institute of Technology Madras",
    date: "2026",
    text: "Diploma in Data Science (Dec 2025) and Diploma in Programming and Application Development (May 2026).",
  },
  {
    role: "BS in Data Science and Applications",
    org: "Indian Institute of Technology Madras",
    date: "2023",
    text: "2023 – present. Coursework in Machine Learning, Deep Learning, Software Engineering, DBMS, and Data Structures & Algorithms.",
  },
];

const Career = () => {
  return (
    <section className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {timeline.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.org}</h5>
                </div>
                <h3>{item.date}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
