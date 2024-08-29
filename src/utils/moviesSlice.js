import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerMovies: (state, action) => {
      state.trailerMovie = action.payload;
    },
  },
});

export const { addPlayingMovies, addTrailerMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
