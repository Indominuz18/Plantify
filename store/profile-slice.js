import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { name: "", email: "" },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
