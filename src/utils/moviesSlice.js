import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    topRated: null,
    popularMovies: null,

  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerMovies: (state, action) => {
      state.trailerMovie = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
      },


  },
});

export const {
  addPlayingMovies,
  addTrailerMovies,
  addTopRatedMovies,
  addPopularMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
