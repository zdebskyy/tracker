import React, { useState, useEffect } from "react";
import TrackerList from "./TrackerList";
import Moment from "react-moment";
import moment from "moment";
import styles from "./Tracker.module.css";
import { v4 as uuidv4 } from "uuid";

const Tracker = () => {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const start = moment().add(0, "s");

  const userName = (e) => {
    setName(e.target.value);
  };

  const onSubmitform = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name,
      active: false,
    };
    setUsers((prevUsers) => [...prevUsers, user]);
    setName("");
  };

  const userToDelete = (userId) => {
    setUsers(
      users.filter((user) => {
        return user.id !== userId;
      })
    );
  };

  //   useEffect(() => {
  //     const intevalId = setInterval(() => {
  //       setTime(time + 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(intevalId);
  //     };
  //   });

  //   let intevalId;
  //   const startCount = () => {
  //     intevalId = setInterval(() => {
  //       setTime(time + 1);
  //     }, 1000);
  //   };
  //   const stopCount = () => {
  //     clearInterval(intevalId);
  //   };

  return (
    <>
      <div className={styles.container}>
        {<Moment date={start} format="hh:mm:ss" durationFromNow />}

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
          <TrackerList users={users} time={time} onDelete={userToDelete} />
        </div>
      </div>
    </>
  );
};

export default Tracker;
