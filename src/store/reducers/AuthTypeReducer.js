import { createSlice } from "@reduxjs/toolkit";

export const authtypeSlice = createSlice({
  name: "authtype",
  initialState: {
    login: true,
  },
  reducers: {
    toggleType: (state) => {
      state.login = !state.login;
    },

    setLogin: (state) => {
      state.login = true;
    },

    setRegister: (state) => {
      state.login = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleType, setLogin, setRegister } = authtypeSlice.actions;

export default authtypeSlice.reducer;
