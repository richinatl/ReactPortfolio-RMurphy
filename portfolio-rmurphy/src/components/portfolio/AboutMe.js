import classes from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={classes.about__block}>
      <h2 className={classes.about__heading}>Hi there! A little about me</h2>
      <p className={classes.about__p}>
        It's been a long journey from my first days in tech as a
        telecommunications installer and an optical test engineer. After taking
        some time to spend with my daughters, now I am ready to get back to
        where my heart always was, learning new technologies and exploring new
        ideas. I have dedicated all my time and every ounce of my effort into
        becoming the best software developer I can possibly be. I have a stellar
        record of being reliable, of working hard, and through my experience,
        being the one responsible for the profitability of a company, I know
        what it's like to have to meet a payroll and how important it is for an
        employee to give his all.
      </p>
    </div>
  );
}

export default AboutMe;
