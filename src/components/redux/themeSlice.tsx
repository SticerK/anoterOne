import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Theme from '../header/theme';

interface Theme {
  mode: number;
}

const initialState: Theme = {
  mode: 0,
};

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMod(state, action: PayloadAction<number>) {
      state.mode = action.payload;
    },
  },
});

export default theme.reducer;

export const { changeMod } = theme.actions;
