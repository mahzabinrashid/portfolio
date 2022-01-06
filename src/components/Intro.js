import "./Intro.scss";
import Resume from "./../documents/resume.pdf";

function Intro(prop) {
  return (
    <div className="intro" id={prop.id}>
      <h2>Hi, my name is</h2>
      <h1>Mahzabin Rashid.</h1>
      <p>
        I’m a second-year student at the <span>University of Waterloo</span>{" "}
        pursuing a degree in <span>Computer Science</span>. Currently, I'm
        seeking Summer 2022 internship opportunities.<br></br>
        <br></br>
        I previously worked at <span>Modumate</span>, a startup based in San
        Francisco as the only self-managed <span>frontend engineer</span> of the
        team. Most recently, I worked on <span>Coffee Hours</span>, a
        youth-friendly website used for facilitating virtual coffee chats with
        current students, faculty members and alumni from universities across
        Canada.
      </p>
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        Check out my resume!
      </a>
    </div>
  );
}

export default Intro;
