import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id");
      localStorage.setItem("session_id", action.payload.session_id);
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const { userSelector } = (state) => state.user;
