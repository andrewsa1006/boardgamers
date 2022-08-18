import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer";
import authTypeReducer from "./reducers/AuthTypeReducer";
import playReducer from "./reducers/PlayReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    authtype: authTypeReducer,
    play: playReducer,
  },
});
