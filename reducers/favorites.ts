import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export  type FavoritesState = {
  value: string[];
};

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favorite: (state, action: PayloadAction<string>) => {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
    unfavorite: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(id => id !== action.payload);
    },
  },
});

export const { favorite, unfavorite, } = favoritesSlice.actions;
export default favoritesSlice.reducer;
