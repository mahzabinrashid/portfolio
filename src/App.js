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
        title="Software Engineer"
        duration="January 2023 - Present"
        org="Wealthsimple"
        url="https://www.wealthsimple.com/en-ca"
        bullets={[
          [
            "Presently contributing to the Managed Experience product team, responsible for client-facing aspects of the managed investing product, using",
            <span> Ruby on Rails </span>,
            "and",
            <span> React</span>,
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
            "Redesigned and optimized the React frontend component for the Watty Awards 2022, resulting in",
            <span> 40% </span>,
            "faster load times and seamless handling of over",
            <span> 35,000+ </span>,
            "submissions",
          ],
          [
            "Successfully resolved and closed multiple",
            <span> Jira </span>,
            "tickets, resulting in the resolution of various software bugs and errors",
          ],
          [
            "Created components for the",
            <span> Web UI Library </span>,
            "which",
            <span> 50+ </span>,
            "Wattpad engineers use for their front-end projects",
          ],
          [
            "Spearheaded the user accessibility project, reducing accessibility issues by",
            <span> 20% </span>,
            "using",
            <span> axe DevTools</span>,
          ],
          [
            "Led the investigation and planning of modernizing the comment codebase to improve developer efficiency",
          ],
          [
            "Wrote unit tests using",
            <span> Jest </span>,
            "and",
            <span> Enzyme </span>,
            "achieving",
            <span> 80% </span>,
            "coverage of the entire codebase, enhancing code reliability",
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
            "Pioneered the development of a cutting-edge collaboration project allowing real-time collaboration among architects, utilizing",
            <span> Vue </span>,
            "and",
            <span> Vuex </span>,
            "to build membership, invitation, project, and settings pages, resulting in improved productivity for",
            <span> 3000+ </span>,
            "enterprise users",
          ],
          [
            "Restructured the authentication flow and integrated Vue routing, resulting in a streamlined user experience",
          ],
          [
            "Created custom",
            <span> SQL </span>,
            "queries to filter data, resulting in more efficient data processing for user engagement statistics",
          ],
          [
            "Implemented the",
            <span> Klaviyo API </span>,
            "for automated messaging, removing manual process for workspace invitations and password resets, resulting in increased user satisfaction",
          ],
          [
            "Integrated",
            <span> Google Analytics </span>,
            "and",
            <span> Facebook Ads Manager </span>,
            "for improved tracking and analysis, resulting in more effective digital marketing campaigns",
          ],
        ]}
      />
      <Experience
        title="Co-Founder"
        duration="May 2022 - Present"
        org="TutorLab"
        url="https://tutorlab.io/"
        bullets={[
          [
            "Led the development and launch of a fully-functional marketplace platform, achieving a",
            <span> $200,000 </span>,
            "after the pre-seed round",
          ],
          [
            "Architected the frontend using",
            <span> React </span>,
            "implemented",
            <span> Redux </span>,
            "for state management, and designed the web app using",
            <span> Figma </span>,
            "singlehandedly creating over",
            <span> 13 </span>,
            "pages resulting in an intuitive and user-friendly interface",
          ],
          [
            "Configured a custom domain to host the app on",
            <span> App Engine </span>,
            "in",
            <span> GCP </span>,
            "resulting in a more easily accessible web presence ",
          ],
        ]}
      />
      <Experience
        title="Engineering Lead"
        url="https://www.itstechnova.org/"
        duration="May 2022 - Present"
        org="TechNova"
        bullets={[
          [
            "Assigned as Engineering Lead for the third iteration of TechNova, responsible for driving the development and deployment of advanced",
            <span> React </span>,
            "animations and transitions",
          ],
          [
            "Organized the University of Waterloo’s first women-in-tech hackathon, attracting",
            <span> 400+ </span>,
            "hackers internationally, prompting diversity and inclusion in the tech industry",
          ],
          [
            "Collaborated with designers to develop an app receiving",
            <span> 950+ </span>,
            "website visits, leading to enhanced user engagement",
          ],
        ]}
      />
      <Heading id="projects" title="Some things I've built" />
      <Project
        pic={CoffeeHours}
        p={[
          "Coffee Hours is a mobile-responsive web application that facilitates virtual coffee chats between students, faculty members, and alumni from universities across Canada. The application was awarded the",
          <span> best pitch </span>,
          "in",
          <span> TechNova 2021 </span>,
          "among",
          <span> 300+ </span>,
          "participants and was prototyped in",
          <span> 36 </span>,
          "hours.",
          <br></br>,
          <br></br>,
          "The frontend of the application was built using",
          <span> React </span>,
          "and includes a filter functionality to sort mentors according to students’ needs. The application also includes an email authentication system with error messages for incorrect credentials using",
          <span> Firebase</span>,
          ". Data storage was integrated using",
          <span> Cloud Firestore</span>,
          ". Additionally, I deployed the app on Firebase, ensuring secure",
          <span> hosting </span>,
          "for the project.",
        ]}
        techstack="Firebase  React  SCSS"
        git="https://github.com/mahzabinrashid/Coffee-Hours"
        ext_link="https://coffee-hours-technova.web.app/"
      />
      <Project
        pic={Algorithma}
        p={[
          "I was part of a team of four that designed and developed a blog using",
          <span> HTML </span>,
          <span> CSS </span>,
          "and pure",
          <span> JavaScript </span>,
          "The blog features interactive visualizations of computational algorithms, with the goal of making them more interesting and understandable for a wider audience.",
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
          ". Designed the pages and prototyped the app using",
          <span> Figma </span>,
          "to develop a high fidelity mockup of the application.",
        ]}
        techstack="Figma"
        bool={true}
        ext_link="https://www.figma.com/file/0NAgq8pRdypDrXPWXyDmHo/Project-Global?node-id=0%3A1"
      />
      <Project
        pic={CreatorsColosseum}
        p={[
          "Winning first place in the ",
          <span> Upper Division </span>,
          "of",
          <span> Spring Ideathon </span>,
          "by",
          <span> Tomorrow's Entrepreneurs </span>,
          "for the business idea, Creators' Colosseum is a platform dedicated to let artists to showcase their work.",
          <br></br>,
          <br></br>,
          "To build the platform, we used",
          <span> Wordpress </span>,
          "to create the website and",
          <span> Adobe Photoshop</span>,
          ",",
          <span> Figma </span>,
          "and",
          <span> Canva </span>,
          "to design the UI. Through our efforts, we were able to build an online community of over",
          <span> 500 </span>,
          "artists and arranged a virtual competition, receiving over",
          <span> 100 </span>,
          "submissions.",
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
