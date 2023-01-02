import { createSlice } from '@reduxjs/toolkit';

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
    toggleModal(state) {
      state.open = !state.open;
    },
  },
});

export default modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
