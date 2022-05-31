import Projects from "../components/portfolio/Project";

function AllProjectsPage() {
  return (
    <section className={`${classes.project__grid}`}>
      <h2 className={classes.work__heading}>Projects</h2>
      <Projects />
    </section>
  );
}

export default AllProjectsPage;
