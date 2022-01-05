import "./Headings.scss";

function Heading(prop) {
  return (
    <div className="heading" id={prop.id}>
      <h1>{prop.title}</h1>
    </div>
  );
}

export default Heading;
