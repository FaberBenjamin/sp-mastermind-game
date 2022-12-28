import { Fragment } from "react";
import classes from "./Modal.module.css";

const RulesModal = ({ open, children, onClose }) => {
  if (open === true) {
    return (
      <Fragment>
        <div className={classes.overlay}></div>
        <div className={classes.main_container}>
          {children} <button onClick={onClose}>Got it</button>
        </div>
      </Fragment>
    );
  }
};

export default RulesModal;
