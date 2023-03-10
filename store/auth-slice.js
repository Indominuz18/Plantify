import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isloggedIn: false },
  reducers: {
    logIn(state) {
      state.isloggedIn = true;
    },

    logOut(state) {
      state.isloggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
