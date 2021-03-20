import React, { useState, useEffect } from "react";
import TrackerList from "../TrackerList/TrackerList";
import styles from "./Tracker.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/usersActions";
import { usersSelector } from "../../redux/usersSelector";

const Tracker = () => {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const intervalId = setInterval(setTime(time + 1), 1000);
  //   // console.log(time);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [time]);

  const users = useSelector(usersSelector);

  const userName = (e) => {
    setName(e.target.value);
  };
  const userToDelete = (userId) => {
    dispatch(userActions.deleteUser(userId));
  };

  const onSubmitform = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name: name ? name : Date.now(),
      activeTrack: false,
    };
    dispatch(userActions.addUser(user));
    setName("");
  };
  // console.log(users);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Tracker</h2>
        <form
          className={styles.inputContainer}
          onSubmit={(e) => onSubmitform(e)}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            className={styles.input}
            onChange={(e) => userName(e)}
          ></input>
          <button type="submit" className={styles.submitBtn}></button>
        </form>
        <div className={styles.trackesContainer}>
          {users.length < 1 ? (
            <span className={styles.noData}>There is no data yet</span>
          ) : (
            <TrackerList
              users={users}
              time={time}
              userToDelete={userToDelete}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Tracker;
