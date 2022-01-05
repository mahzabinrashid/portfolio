import "./Contact.scss";

function Contact(prop) {
  return (
    <div className="contact" id={prop.id}>
      <h1>Get in touch</h1>
      <p>
        If you like my resume, think our interests align, or just want to chat,
        feel free to reach out!
      </p>
      <a href="mailto:m2fariha@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
        Say Hello!
      </a>
    </div>
  );
}

export default Contact;
