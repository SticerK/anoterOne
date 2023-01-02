import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../redux/modalSlice';
import themeSlice from '../redux/themeSlice';

const store = configureStore({
  reducer: {
    modalSlice,
    themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
