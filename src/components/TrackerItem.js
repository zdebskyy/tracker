import React, { useState } from "react";
import ButtonStartPause from "./ButtonStartPause/ButtonStartPause";
import styles from "./TrackerItem.module.css";
import userActions from "../redux/usersActions";
import { useDispatch } from "react-redux";

const TrackerItem = ({ user, time, userToDelete }) => {
  const dispatch = useDispatch();

  const togglePlay = () => {
    dispatch(userActions.toggleTracker(user.id));
  };

  return (
    <>
      <li
        className={
          user.activeTrack
            ? styles.trackesListActiveItem
            : styles.trackesListItem
        }
      >
        <p className={styles.userName}>{user.name}</p>
        <div className={styles.btnContainer}>
          <span className={styles.timer}>{time}</span>
          <ButtonStartPause play={!user.activeTrack} onStart={togglePlay} />
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => userToDelete(user.id)}
          ></button>
        </div>
      </li>
    </>
  );
};

export default TrackerItem;
