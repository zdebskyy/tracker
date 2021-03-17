import { createAction } from "@reduxjs/toolkit";

const addUser = createAction("user/added");
const deleteUser = createAction("user/deleted");
const toggleTracker = createAction("user/toggle");

const userActions = {
  addUser,
  deleteUser,
  toggleTracker,
};

export default userActions;
