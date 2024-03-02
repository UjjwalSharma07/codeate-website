import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  newuser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  name: "new",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.newuser = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  }
});

export const { login, logout,updateUser } = authSlice.actions;

export default authSlice.reducer;

export const userState = (state) => state?.auth?.user;
export const newuserState = (state) => state?.new?.newuser;
