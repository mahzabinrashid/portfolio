import "./Intro.scss";

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
        . Currently, I'm seeking Winter 2023 internship opportunities.<br></br>
        <br></br>
        Most recently, I worked at{" "}
        <a
          href="https://www.wattpad.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wattpad
        </a>
        , a platform which connects a global community of millions of readers
        and writers through the power of story. Previously, I worked at{" "}
        <a
          href="https://www.modumate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modumate
        </a>
        , a startup based in San Francisco, as the only self-managed{" "}
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
        href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1X7xY9Lt8UNeA0FwLaPUKfTD71uCar9B2/export?format=pdf&ouid=100862227451210315993&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my resume!
      </a>
    </div>
  );
}

export default Intro;
