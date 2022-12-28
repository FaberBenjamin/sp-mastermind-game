import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.flex_container}>
      <div>
        <h1>Contact</h1>
      </div>
      <div className={classes.row_container}>
        <div>
          <h3>Email</h3>
          <p>benjamin.faber00@gmail.com</p>
        </div>
        <div>
          <h3>GitHub</h3>
          <p>github.com/FaberBenjamin</p>
        </div>
        <div>
          <h3>Twitter</h3>
          <p>twitter.com/Faber_Benjamin0</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
