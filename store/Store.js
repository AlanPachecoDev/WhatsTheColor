
import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './ColorSlice';

const Store = configureStore({
  reducer: {
    color: colorReducer
  }
});

export default Store;
