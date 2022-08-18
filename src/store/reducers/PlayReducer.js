import { createSlice } from "@reduxjs/toolkit";

export const playSlice = createSlice({
  name: "play",
  initialState: {
    plays: [
      {
        play_id: 14,
        game_name: "Terraforming Mars",
        players: [
          {
            id: 1,
            display_name: "Rageclinic",
            win: true,
            score: 141,
          },
          {
            id: 1,
            display_name: "Meakerz",
            win: false,
            score: 111,
          },
          {
            id: 1,
            display_name: "KnightFinch",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Jboozie",
            win: false,
            score: 24,
          },
        ],
      },
      {
        play_id: 15,
        game_name: "DC Deckbuilder",
        players: [
          {
            id: 1,
            display_name: "Rageclinic",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Meakerz",
            win: true,
            score: 111,
          },
          {
            id: 1,
            display_name: "KnightFinch",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Jboozie",
            win: false,
            score: 24,
          },
        ],
      },
      {
        play_id: 16,
        game_name: "Arcana",
        players: [
          {
            id: 1,
            display_name: "Rageclinic",
            win: false,
            score: 101,
          },
          {
            id: 1,
            display_name: "Meakerz",
            win: false,
            score: 111,
          },
          {
            id: 1,
            display_name: "KnightFinch",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Jboozie",
            win: true,
            score: 141,
          },
        ],
      },
      {
        play_id: 17,
        game_name: "Dune: Imperium",
        players: [
          {
            id: 1,
            display_name: "Rageclinic",
            win: true,
            score: 119,
          },
          {
            id: 1,
            display_name: "Meakerz",
            win: false,
            score: 111,
          },
          {
            id: 1,
            display_name: "KnightFinch",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Jboozie",
            win: false,
            score: 24,
          },
        ],
      },
      {
        play_id: 18,
        game_name: "Dune: Imperium",
        players: [
          {
            id: 1,
            display_name: "Rageclinic",
            win: true,
            score: 123,
          },
          {
            id: 1,
            display_name: "Meakerz",
            win: false,
            score: 111,
          },
          {
            id: 1,
            display_name: "KnightFinch",
            win: false,
            score: 107,
          },
          {
            id: 1,
            display_name: "Jboozie",
            win: false,
            score: 24,
          },
        ],
      },
    ],
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
export const { toggleType, setLogin, setRegister } = playSlice.actions;

export default playSlice.reducer;
