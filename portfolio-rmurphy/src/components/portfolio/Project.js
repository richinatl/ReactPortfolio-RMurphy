import Card from "../ui/Card";
import classes from "./Project.module.css";
import movieHunter from "../../assests/images/movieHunter.png";
import weatherDashboard from "../../assests/images/weatherDashboard.png";
import passwordGenerator from "../../assests/images/passwordGenerator.png";
import proj2ss from "../../assests/images/proj2ss.png";
import moshify from "../../assests/images/moshify.png";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Movie Hunter",
    image: movieHunter,
    github: "https://github.com/richinatl/MovieHunter",
    deployed: "https://richinatl.github.io/MovieHunter/",
    description: `An app to find streaming sources & reviews, intuitive and
      easy to navigate`,
    tech: "HTML, CSS, JavaScript, API's",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    image: weatherDashboard,
    github: "https://github.com/richinatl/MovieHunter",
    deployed: "https://richinatl.github.io/weather-dashboard/",
    description: `A simple and easy to use tool for planning your day or planning a trip`,
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: 3,
    title: "Password Generator",
    image: passwordGenerator,
    github: "https://github.com/richinatl/javaScript-passwordGenerator",
    deployed: "https://richinatl.github.io/javaScript-passwordGenerator/",
    description: `Using the power of JavaScript to generate, strong, reliable passwords`,
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: 4,
    title: "Yeet=a-Job",
    image: proj2ss,
    github: "https://github.com/richinatl/Freelance-Job-Board",
    deployed: "https://job-board-project.herokuapp.com/",
    description: `A full stack build of a job board that makes posting & browsing a breeze`,
    tech: "HTML, CSS, JavaScript, Handlebars, Sequelize, NodeJs",
  },
  {
    id: 5,
    title: "Moshify",
    image: moshify,
    github: "https://github.com/richinatl/Moshify",
    deployed: "https://richinatl.github.io/Moshify/",
    description: `A complete website for a fictional company, completed with HTML and CSS`,
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: 6,
    title: "Project 3",
    image: movieHunter,
    github: "coming soon",
    deployed: "coming soon",
    description: `{An app to find streaming sources & reviews, intuitive and
        easy to navigate}`,
    tech: "HTML, CSS, JavaScript, API's",
  },
];

const Projects = () => {
  PROJECT_DATA.map(
    ({ id, title, image, github, deployed, description, tech }) => {
      return (
        <article key={id} className={classes.project__card}>
          <Card>
            <div className={classes.project__image}>
              <img src={image} alt={title} />
            </div>
            <div className={classes.project__details}>
              <h3 className={classes.project__title}>{title}</h3>
              <p className={classes.project__description}>{description}</p>
              <p className={classes.project__tech}>{tech}</p>
              <a
                href={github}
                className={classes.project__link}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={deployed}
                className={classes.project__link}
                target="_blank"
                rel="noreferrer"
              >
                Deployed Live here
              </a>
            </div>
          </Card>
        </article>
      );
    }
  );
};

export default Projects;
