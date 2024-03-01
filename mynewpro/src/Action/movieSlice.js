import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movieData: [],
  searchTerm: '',
  dataNotFound: false,
  status: 'idle',
  error: null,
};

export const fetchMovieData = createAsyncThunk('movie/fetchMovieData', async (searchTerm) => {
  try {
    const apikey = 't2IaGGA1Im5dxrwur9s8nBMY6GdBwvVYrpBKPWXzh4KC09QEXzulsud4';
    let apiurl = '';

    if (searchTerm) {
      apiurl = `https://api.pexels.com/v1/search?query=${searchTerm}`;
    } else {
      apiurl = 'https://api.pexels.com/v1/search?query=india';
    }

    const response = await axios.get(apiurl, {
      headers: {
        "Authorization": apikey
      }
    });

    return response.data['photos'];
  } catch (error) {
    throw error;
  }
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDataNotFound: (state, action) => {
      state.dataNotFound = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieData = action.payload;
        state.dataNotFound = action.payload.length === 0;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, setDataNotFound } = movieSlice.actions;

export const selectMovieData = (state) => state.movie.movieData;
export const selectSearchTerm = (state) => state.movie.searchTerm;
export const selectDataNotFound = (state) => state.movie.dataNotFound;
export const selectStatus = (state) => state.movie.status;
export const selectError = (state) => state.movie.error;

export default movieSlice.reducer;
