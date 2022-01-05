import Navbar from "./components/Navbar"
import Heading from "./components/Headings";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CoffeeHours from "./images/CoffeeHours.png";
import ProjectGlobal from "./images/ProjectGlobal.png";
import CreatorsColosseum from "./images/CreatorsColosseum.png";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro id="about"/>
      <Heading id="experience" title="Where I've worked" />
      <Experience 
        title="Frontend Engineer"
        duration="May 2021 - August 2021"
        org="Modumate"
        bullets={[
          [
            "Singlehandedly developed the frontend to facilitate real-time workspace collaboration among multiple users",
          ],
          [
            "Leveraged ",
            <span> Vue and Vuex</span>,
            " to build critical features which improved the user experience of ",
            <span>3000</span>,
            " enterprise users",
          ],
          [
            "Diagnosed and refactored the codebase, which optimized performance and improved rouRng across the website",
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
      <Experience
        title="Web Developer"
        duration="December 2021"
        org="Naboodeep"
        bullets={[
          [
            "Developed a  ",
            <span>WordPress</span>,
            " website for a Bangladesh Government fertilizer supplying company with a user base of ",
            <span>50+ million</span>,
          ],
        ]}
      />
      <Experience
        title="Technology Department Head"
        duration="Nov 2020 – Feb 2021"
        org="Alate"
        bullets={[
          [
            "Conceived and led a team of 4 to host webinars which improved the programming literacy of over ",
            <span>80+</span>,
            " students",
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
        ext_link="https://devpost.com/software/coffee-hours"
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
          " for the business idea, Creators' Colosseum is a platform dedicated to let artists to showcase their work.", <br></br>,
          <br></br>, "Using ",
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
      <Heading title="Technologies I work with" id="skills" />
      <Technology
        lang_1={["JavaScript", "HTML", "CSS"]}
        lang_2={["Python", "C++", "C"]}
        tools_1={["React.js", "Vue.js", "Firebase"]}
        tools_2={["Git", "Figma", "Wordpress"]}
      />
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
