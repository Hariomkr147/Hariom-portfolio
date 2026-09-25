import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt: string;
  title: string;
  link?: string;
}

// The image duplicates the "View on GitHub" link, so it is hidden from keyboard/screen readers.
const WorkImage = ({ image, alt, title, link }: Props) => {
  const content = (
    <>
      {link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {image ? (
        <img src={image} alt={alt} loading="lazy" decoding="async"/>
      ) : (
        <div className="work-placeholder" aria-hidden="true">
          <span>{title}</span>
        </div>
      )}
    </>
  );

  return (
    <div className="work-image">
      {link ? (
        <a
          className="work-image-in"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
          tabIndex={-1}
          aria-hidden="true"
        >
          {content}
        </a>
      ) : (
        <div className="work-image-in">{content}</div>
      )}
    </div>
  );
};

export default WorkImage;
