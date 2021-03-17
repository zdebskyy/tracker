import React from "react";
import TrackerItem from "./TrackerItem";
import styles from "./TrackerList.module.css";

const TrackerList = ({ users, time, userToDelete }) => {
  return (
    <ul className={styles.trackesList}>
      {users.map((user) => (
        <TrackerItem
          key={user.id}
          user={user}
          time={time}
          userToDelete={userToDelete}
        />
      ))}
    </ul>
  );
};

export default TrackerList;
