import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { links } from "../data/profile";

const socials = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Resume", href: links.resume },
];

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${links.email}`} data-cursor="disable">
                {links.email}
              </a>
            </p>
            <h4>Location</h4>
            <p>Begusarai, Bihar · Open to remote</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {s.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed & built by <br /> <span>Hariom Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
