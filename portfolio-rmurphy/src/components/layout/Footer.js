import classes from "./Footer.module.css";
import resume from "../../assests/docs/resume_v3.pdf";

function Footer() {
  return (
    <footer>
      <div className={classes.contact__details}>
        <h4 className={classes.footer__heading}>Contact Details</h4>
        <ul className={`${classes.list} ${classes.contact__list}`}>
          <li className={`${classes.list__item} ${classes.footer__item}`}>
            Cell Phone (678) 549-6092
          </li>
          <li className={`${classes.list__item} ${classes.footer__item}`}>
            <a href="mailto:richinatl@gmail.com">Email Me</a>
          </li>
          <li className={`${classes.list__item} ${classes.footer__item}`}>
            <a href="https://linkedin.com/in/richard-murphy-678wd">LinkedIn</a>
          </li>
          <li className={`${classes.list__item} ${classes.footer__item}`}>
            <a href="https://github.com/richinatl">Github</a>
          </li>
          <li className={`${classes.list__item} ${classes.footer__item}`}>
            <a href={resume} download>
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
