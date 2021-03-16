import React, { useState } from "react";
import ButtonStartPause from "./ButtonStartPause";
import styles from "./TrackerList.module.css";

const TrackerList = ({ users, time, onDelete }) => {
  const [play, setPlay] = useState(false);
  const onStart = (userId) => {
    const activeUser = users.find((item) => item.id === userId);

    setPlay((play) => (activeUser.active = !play));
  };

  return (
    <ul className={styles.trackesList}>
      {users
        .map((user) => (
          <li
            key={user.id}
            className={
              user.active
                ? styles.trackesListActiveItem
                : styles.trackesListItem
            }
          >
            <p className={styles.userName}>
              {user.name ? user.name : (user.name = Date.now())}
            </p>
            <div className={styles.btnContainer}>
              <span className={styles.timer}>{time}</span>
              <ButtonStartPause
                play={!user.active}
                onStart={() => onStart(user.id)}
              />
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => onDelete(user.id)}
              ></button>
            </div>
          </li>
        ))
        .reverse()}
    </ul>
  );
};

export default TrackerList;
