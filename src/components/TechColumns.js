import "./TechColumns.scss";
function TechColumns(prop) {
  return (
    <div className="tech">
      <h1>{prop.title}</h1>
      <div className="tech_columns">
        <div className="tech_bullets bullets">
          <ul>
            {prop.col_1.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="bullets">
          <ul>
            {prop.col_2.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechColumns;
