import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";
import profileReducer from "./profile-slice";
const store = configureStore({
  reducer: { ui: uiReducer, auth: authReducer, profile: profileReducer },
});

export default store;
