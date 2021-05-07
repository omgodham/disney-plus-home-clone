import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Movies/movieSlice';
import userReducer from '../features/User/userSlice';

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userReducer
  },
});
