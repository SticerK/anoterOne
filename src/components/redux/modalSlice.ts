import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardTypes } from '../../types/type';

interface ModalState {
  open: boolean;
  card: any;
}

const initialState: ModalState = {
  open: false,
  card: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<CardTypes>) {
      state.open = !state.open;
      if (state.open) state.card = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
