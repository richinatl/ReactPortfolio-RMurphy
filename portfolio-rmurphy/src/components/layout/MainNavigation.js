import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <nav className={classes.nav__header}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link to="/">About Me</Link>
          </li>
          <li className={classes.nav__item}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={classes.nav__item}>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
