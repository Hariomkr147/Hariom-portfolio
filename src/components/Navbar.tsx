import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: reduceMotion ? 0 : 1.7,
      speed: reduceMotion ? 1 : 1.7,
      effects: !reduceMotion,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll<HTMLAnchorElement>("a[data-href]");
    const onLinkClick = (e: MouseEvent) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const section = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href");
        smoother.scrollTo(section, true, "top top");
      }
    };
    const onResize = () => ScrollTrigger.refresh(true);
    links.forEach((link) => link.addEventListener("click", onLinkClick));
    window.addEventListener("resize", onResize);
    return () => {
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
      window.removeEventListener("resize", onResize);
      smoother.kill();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Hariom Kumar, home">
          HK
        </a>
        <a
          href="mailto:hari18525@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          hari18525@gmail.com
        </a>
        <nav aria-label="Primary">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
