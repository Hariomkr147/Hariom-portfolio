import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { links } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            HARIOM
            <br />
            <span>KUMAR</span>
          </h1>
          <div className="landing-cta">
            <a href="#work" data-href="#work" data-cursor="disable">
              View projects
            </a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" data-cursor="disable">
              Resume
            </a>
          </div>
        </div>
        <div className="landing-info">
          <h3>AI Engineer</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">LLM Apps</div>
            <div className="landing-h2-2">Full-Stack</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Developer</div>
            <div className="landing-h2-info-1">Engineer</div>
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Landing;
