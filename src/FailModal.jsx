import classes from "./Modal.module.css";
import { Fragment } from "react";

const FailModal = ({ open, children, onClose }) => {
  if (open === true) {
    return (
      <Fragment>
        <div className={classes.overlay}></div>
        <div className={`${classes.main_container} ${classes.space_justifier}`}>
          {children} <button onClick={onClose}>Try Again!</button>
        </div>
      </Fragment>
    );
  }
};

export default FailModal;
