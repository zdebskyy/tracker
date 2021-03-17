import { combineReducers, createReducer } from "@reduxjs/toolkit";
import userActions from "./usersActions";
import activeActions from "./activeActions";

const items = createReducer([], {
  [userActions.addUser]: (state, { payload }) => [payload, ...state],
  [userActions.deleteUser]: (state, { payload }) =>
    state.filter((user) => user.id !== payload),
  [userActions.toggleTracker]: (state, { payload }) => {
    // console.log("STATE------------>", state);
    return state.map((item) => {
      if (item.id === payload) {
        return { ...item, activeTrack: !item.activeTrack };
      }
      return item;
    });
  },
});

const active = createReducer(false, {
  [activeActions.setActive]: (state) => {
    return !state;
  },
});

export default combineReducers({ items, active });
