import "./Experience.scss";

function Experience(prop) {
  return (
    <div className="experience">
      <h1>
        {prop.title} <a href={prop.url}>@ {prop.org}</a>
      </h1>
      <h2>{prop.duration}</h2>

      <ul>
        {prop.bullets.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
