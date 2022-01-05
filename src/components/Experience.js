import "./Experience.scss";

function Experience(prop) {
  return (
    <div className="experience">
      <h1>
        {prop.title} <span>@ {prop.org}</span>
      </h1>
      <h2>{prop.duration}</h2>

      <ul>
        {prop.bullets.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
