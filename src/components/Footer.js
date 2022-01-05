import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/mahzabinrashid/" target="_blank" rel="noopener noreferrer">
        <div className="circle">
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/mahzabin-rashid/" target="_blank" rel="noopener noreferrer">
        <div className="circle">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </a>
      <a href="https://www.instagram.com/mhzabin/" target="_blank" rel="noopener noreferrer">
        <div className="circle">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
    </div>
  );
}

export default Footer;
