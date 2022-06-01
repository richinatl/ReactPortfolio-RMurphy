import Card from "../ui/Card";
import classes from "./Project.module.css";
import movieHunter from "../../assests/images/movieHunter.png";
import weatherDashboard from "../../assests/images/weatherDashboard.png";
import passwordGenerator from "../../assests/images/passwordGenerator.png";
import proj2ss from "../../assests/images/proj2ss2.png";
import moshify from "../../assests/images/moshify.png";
import placeHolder from "../../assests/images/project3PlaceHolder.jpg";

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
    title: "Yeet-a-Job",
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
    image: placeHolder,
    github: "coming soon",
    deployed: "coming soon",
    description: `To be added on completion`,
    tech: "A future full stack application",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className={classes.card__heading}>Projects</h2>
      <div className={classes.grid}>
        {PROJECT_DATA.map(
          ({ id, image, title, github, deployed, description, tech }) => {
            return (
              <div className={classes.projects__div}>
                <article key={id}>
                  <div>
                    <img
                      src={image}
                      className={classes.project__image}
                      alt={title}
                    />
                  </div>
                  <h3 className={classes.project__title}>{title}</h3>
                  <p className={classes.project__descriptions}>{description}</p>
                  <h4 className={classes.project__tech}>{tech}</h4>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className={classes.project__link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code Here
                    </a>
                    <a
                      href={deployed}
                      className={classes.project__link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed here
                    </a>
                  </div>
                </article>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
