import React from "react";
import styles from "./ButtonStartPause.module.css";

const ButtonStartPause = ({ play, onStart }) => {
  return (
    <>
      {play ? (
        <button
          type="button"
          className={styles.startBtn}
          onClick={onStart}
        ></button>
      ) : (
        <button
          type="button"
          className={styles.pause}
          onClick={onStart}
        ></button>
      )}
    </>
  );
};

export default ButtonStartPause;
