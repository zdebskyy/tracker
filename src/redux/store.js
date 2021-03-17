import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import itemsReduser from "./usersReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userConfig = {
  key: "users",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userConfig, itemsReduser),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     users: itemsReduser,
//   },
// });
