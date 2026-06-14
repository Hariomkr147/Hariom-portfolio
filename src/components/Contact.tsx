import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:jyotisinha0526@gmail.com" data-cursor="disable">
                jyotisinha0526@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Information Technology</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://ctm-log-analyzer.netlify.app/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Log Analyzer Demo <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7453443679396003840/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Case Automation <MdArrowOutward />
            </a>
            <a
              href="/Jyoti_Sinha_Resume.pdf"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio for <br /> <span>Jyoti Sinha</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
