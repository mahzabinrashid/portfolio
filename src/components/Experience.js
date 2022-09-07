import "./Experience.scss";

function Experience(prop) {
  return (
    <div className="experience">
      <h1>
        {prop.title}{" "}
        <span>
          @{" "}
          <a
            className="hover-underline-animation"
            href={prop.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {prop.org}
          </a>
        </span>
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
