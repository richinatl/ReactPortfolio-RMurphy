import classes from "./BannerBlock.module.css";
import bio_pic2 from "../../assests/images/bio_pic2.jpg";

function BannerBlock() {
  return (
    <section
      className={`${classes.banner__block} ${classes.block__skewed} ${classes.block__dark}`}
    >
      <h1 className={classes.title}>Richard Murphy</h1>
      <p className={classes.banner__tagline}>
        A hard working, dependable, web developer ready to serve your needs
      </p>
      <div className={classes.banner__pic}>
        <img src={bio_pic2} alt="Richard Murphy" />
      </div>
    </section>
  );
}

export default BannerBlock;
