import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./styles/SocialIcons.css";
import { TbActivityHeartbeat, TbMail, TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { links } from "../data/profile";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    const cleanups = Array.from(social.querySelectorAll("span")).map((elem) => {
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let raf = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        raf = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const inside = x < 40 && x > 10 && y < 40 && y > 5;
        mouseX = inside ? x : rect.width / 2;
        mouseY = inside ? y : rect.height / 2;
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();
      return () => {
        cancelAnimationFrame(raf);
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume (PDF)">
            <TbNotes />
          </a>
        </span>
        <span>
          <a href={`mailto:${links.email}`} aria-label="Email">
            <TbMail />
          </a>
        </span>
      </div>
      <a className="resume-button" href={links.resume} target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbActivityHeartbeat />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
