import { createSlice } from '@reduxjs/toolkit';

type Favorite = {
  id: string;
};

type FavoritesState = {
  value: Favorite[];
};

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favorite: (state, action) => {
      state.value.push(action.payload);
    },
    unfavorite: (state, action) => {
      state.value = state.value.filter(e => e.id !== action.payload);
    },
  },
});

export const { favorite, unfavorite, } = favoritesSlice.actions;
export default favoritesSlice.reducer;
