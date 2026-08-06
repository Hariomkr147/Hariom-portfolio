import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (CBSE)</h4>
                <h5>Vikas Vidyalaya, Begusarai</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Data Science and Applications</h4>
                <h5>Indian Institute of Technology Madras</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing a comprehensive degree program focusing on machine learning, data analysis, statistical analysis, and programming. Expected completion of Diplomas in Data Science and Programming in 2025/2026.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Kartavya (Academic Team Project)</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Designed normalized database tables, implemented geo-proximity complaint routing using the Haversine formula, built backend logic for complaint lifecycles, and collaborated in a Scrum-based GitHub workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
