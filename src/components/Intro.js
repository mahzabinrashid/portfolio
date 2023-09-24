import "./Intro.scss";
import Resume from "../docs/Mahzabin_RashidFariha_Resume.pdf";
function Intro(prop) {
  return (
    <div className="intro" id={prop.id}>
      <h2>Hi, my name is</h2>
      <h1>Fariha.</h1>
      <p>
        I’m a third-year student at the{" "}
        <a
          href="https://uwaterloo.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Waterloo
        </a>{" "}
        pursuing a degree in{" "}
        <a
          href="https://cs.uwaterloo.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computer Science
        </a>
        . I'm currently seeking SWE Summer+Fall 2024 internship opportunities!
        <br></br>
        <br></br>
        Previously, I interned as a mobile engineer at{" "}
        <a
          href="https://www.wealthsimple.com/en-ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wealthsimple
        </a>
        , a Toronto-based fintech company, where I focused on increasing traffic
        to investment portfolios. I worked as a web engineer at{" "}
        <a
          href="https://www.wattpad.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wattpad
        </a>
        , a global storytelling platform, contributing to projects like the
        Watty Awards and the Design System. Additionally, at{" "}
        <a
          href="https://www.modumate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modumate
        </a>
        , a San Francisco-based startup, I served as the sole front-end
        engineer, leading the workspace collaboration project. Furthermore, I
        co-founded{" "}
        <a
          href="https://www.tutorlab.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TutorLab
        </a>
        , an online marketplace connecting tutors and students, which achieved a
        valuation of $200,000 after a successful pre-seed round.
      </p>
      <a
        className="button"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my resume!
      </a>
    </div>
  );
}

export default Intro;
