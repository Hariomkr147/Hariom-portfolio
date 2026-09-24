import { lazy, PropsWithChildren, Suspense, useEffect, useRef, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { techStack } from "../data/profile";

// Physics scene (three + rapier) is only downloaded when the visitor scrolls near it.
const TechStack = lazy(() => import("./TechStack"));

const hasWebGL = (() => {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
})();

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(window.innerWidth > 1024);
  const [showTechStack, setShowTechStack] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [isDesktopView]);

  useEffect(() => {
    if (!techRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTechStack(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" }
    );
    observer.observe(techRef.current);
    return () => observer.disconnect();
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && hasWebGL ? (
              <div ref={techRef} className="techstack-slot">
                {showTechStack && (
                  <Suspense fallback={null}>
                    <TechStack />
                  </Suspense>
                )}
              </div>
            ) : (
              <section className="techstack-grid section-container" aria-label="Tech stack">
                <h2>My Techstack</h2>
                <ul>
                  {techStack.map(({ name, icon }) => (
                    <li key={name}>
                      <img src={icon} alt="" loading="lazy" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
