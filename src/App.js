import Navbar from "./components/Navbar";
import Heading from "./components/Headings";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoffeeHours from "./images/CoffeeHours.png";
import Algorithma from "./images/Algorithma.png";
import ProjectGlobal from "./images/ProjectGlobal.png";
import CreatorsColosseum from "./images/CreatorsColosseum.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro id="about" />
      <Heading id="experience" title="Where I've worked" />
      <Experience
        title="Co-Founder"
        duration="May 2022 - Present"
        org="TutorLab"
        url="https://tutorlab.io/"
        bullets={[
          [
            "Conceived and developed an online marketplace that connects tutors and students",
          ],
          [
            "Received a valuation of ",
            <span> 200,000 </span>,
            "after the pre-seed round",
          ],
          ["Created over", <span> 13 </span>, "pages single-handedly"],
          [
            "Architected the frontend using",
            <span> React </span>,
            " and implemented",
            <span> Redux </span>,
            " for state management",
          ],
          ["Designed the web app using", <span> Figma </span>],

          [
            "Configured a custom domain to host the app on ",
            <span> App Engine </span>,
            "in the ",
            <span> Google Cloud Platform </span>,
          ],
        ]}
      />
      <Experience
        title="Associate Web Engineer"
        duration="May 2022 - August 2022"
        org="Wattpad"
        url="https://www.wattpad.com/"
        bullets={[
          [
            "Updated the",
            <span> React </span>,
            "frontend of",
            <span> 2000+ </span>,
            "lines for the Watty Awards 2022 and received",
            <span> 35,000+ </span>,
            "submissions",
          ],
          [
            "Wrote unit tests using",
            <span> Jest </span>,
            "and ",
            <span> Enzyme </span>,
            " with ",
            <span> 80% </span>,
            " coverage to enhance code reliability and maintainability",
          ],
          [
            "Detected accessibility errors in the web app with ",
            <span> axe DevTools </span>,
            " and reduced accessibility issues by over ",
            <span> 20% </span>,
          ],
          [
            "Mocked components for the",
            <span> Web UI library </span>,
            "and investigated legacy code to make a plan of action for the comments revamp project",
          ],
        ]}
      />

      <Experience
        title="Engineering Coordinator"
        url="https://www.itstechnova.org/"
        duration="May 2022 - August 2022"
        org="TechNova"
        bullets={[
          ["Organized University of Waterloo’s first Women in Tech hackathon"],
          [
            "Worked with a team of 2 engineers to create and host a web application for ",
            <span> 400+ </span>,
            " attendees using ",
            <span> React </span>,
          ],
          [
            "Coordinated cross-functionally with designers to build the web app, receiving ",
            <span> 950+ </span>,
            "unique website visits",
          ],
        ]}
      />
      <Experience
        title="Frontend Engineer"
        duration="May 2021 - August 2021"
        org="Modumate"
        url="https://www.modumate.com/"
        bullets={[
          [
            "Singlehandedly developed the frontend to facilitate real-time workspace collaboration among multiple users",
          ],
          [
            "Leveraged ",
            <span> Vue and Vuex</span>,
            " to build critical features which improved the user experience of ",
            <span>3000+</span>,
            " enterprise users",
          ],
          [
            "Diagnosed and refactored the codebase, which optimized performance and improved routing across the website",
          ],
          [
            "Wrote ",
            <span>SQL queries</span>,
            " to improve data handling and streamline the process of collecting user engagement statistics",
          ],
          [
            "Developed the authentication flow and data validation which significantly improved customer retention",
          ],
          [
            "Integrated and used ",
            <span>Google Analytics</span>,
            " to measure drop off rates and leveraged  ",
            <span>Klaviyo</span>,
            " to improve user acquisition",
          ],
        ]}
      />

      <Heading id="projects" title="Some things I've built" />

      <Project
        pic={CoffeeHours}
        p={[
          "Awarded ",
          <span>Best Pitch</span>,
          " in ",
          <span>TechNova 2021</span>,
          " and prototyped in ",
          <span>36 hours</span>,
          " Coffee Hours is a youth-friendly website used for facilitating virtual coffee chats with current students, faculty members and alumni from universities across Canada.",
          <br></br>,
          <br></br>,
          "Includes an authentication system with error messages for incorrect credentials using ",
          <span>Firebase</span>,
          " and data storage for user comments by integrating ",
          <span>Cloud Firestore</span>,
          ".",
        ]}
        techstack="Firebase  React  SCSS"
        git="https://github.com/mahzabinrashid/Coffee-Hours"
        ext_link="https://coffee-hours-technova.web.app/"
      />
      <Project
        pic={Algorithma}
        p={[
          "Designed the UI and developed a blog where a combination of HTML, CSS, and some JavaScript Libraries are used to host aesthetic visualizations of computational algorithms to make them more intriguing and intelligible for people. ",
        ]}
        techstack="HTML  CSS  JavaScript"
        git="https://github.com/hamza-yusuff/AlgoVisualization"
        ext_link="https://algorithma.netlify.app/"
      />
      <Project
        pic={ProjectGlobal}
        p={[
          "Worked on the UI/UX of an app idea which won ",
          <span>Outstanding Social Impact</span>,
          " in ",
          <span>T9Hacks 2021</span>,
          ". Designed the pages and prototyped the app using Figma to develop a high fidelity mockup of the application.",
        ]}
        techstack="Figma"
        bool={true}
        ext_link="https://devpost.com/software/project-global"
      />
      <Project
        pic={CreatorsColosseum}
        p={[
          "Winning first place in the ",
          <span>Upper Division</span>,
          " of ",
          <span>Spring Ideathon</span>,
          " by ",
          <span>Tomorrow's Entrepreneurs</span>,
          " for the business idea, Creators' Colosseum is a platform dedicated to let artists to showcase their work.",
          <br></br>,
          <br></br>,
          "Using ",
          <span>Wordpress</span>,
          " to make the website and ",
          <span>Adobe Photoshop</span>,
          ", ",
          <span>Figma</span>,
          " and ",
          <span>Canva</span>,
          " to design the UI, we built an online community of over ",
          <span>500</span>,
          " artists and arranged a virtual competition, receiving over ",
          <span>100</span>,
          " submissions.",
        ]}
        techstack="WordPress Photoshop  Figma Canva"
        bool={true}
        ext_link="https://creatorscolosseum.com/"
      />

      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
