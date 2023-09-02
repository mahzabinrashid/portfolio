import "./Intro.scss";
import Resume from "../docs/Mahzabin-Rashid-Fariha-Resume.pdf";
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
        . I'm currently seeking SWE Summer+Fall 2024 internships internship opportunities!<br></br>
        <br></br>
        Previously, I worked as a software engineer intern at{" "}
        <a
          href="https://www.wealthsimple.com/en-ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wealthsimple
        </a>
        , a Canadian online investment management service which provides
        financial tools to help users grow and manage their money. I also interned as a software engineer
        at{" "}
        <a
          href="https://www.wattpad.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wattpad
        </a>
        , a platform which connects a global community of millions of readers
        and writers through the power of story. My first co-op was at{" "}
        <a
          href="https://www.modumate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modumate
        </a>
        , a startup based in San Francisco, where I worked as the only self-managed{" "}
        <span>frontend engineer</span> of the team. I co-founded{" "}
        <a
          href="https://www.tutorlab.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TutorLab
        </a>
        , an online marketplace that connects tutors and students, with a
        valuation of $200,000 after the pre-seed round.
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
