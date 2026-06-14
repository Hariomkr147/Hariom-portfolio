import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Tech Mahindra</h5>
              </div>
              <h3>2010</h3>
            </div>
            <p>
              Supported production batch operations, managed incident queues,
              maintained SLAs, and handled recurring issue RCA for application
              and backup jobs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Control-M Analyst / Consultant</h4>
                <h5>Capgemini, Atos, Bank of Singapore, UOB</h5>
              </div>
              <h3>2014</h3>
            </div>
            <p>
              Led Control-M scheduling, administration, migrations, upgrades,
              DR checks, workflow design, incident management, and banking
              production support across Unix, Windows, AIX, and mainframe flows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Staff Technical Support Analyst</h4>
                <h5>BMC Software Asia Pacific</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Provide L2/L3 Control-M support, guide enterprise customers on
              architecture and upgrades, perform RCA, validate fixes in labs,
              and build AI-driven tools such as Control-M Log Analyzer and
              Salesforce Case Follow-Up Automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
