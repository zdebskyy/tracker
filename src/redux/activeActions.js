import { createAction } from "@reduxjs/toolkit";

const setActive = createAction("active/setActive");

const activeActions = {
  setActive,
};

export default activeActions;
