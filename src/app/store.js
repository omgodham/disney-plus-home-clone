import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Movies/movieSlice';
import userReducer from '../features/User/userSlice';
import {composeWithDevTools} from "redux-devtools-extension";

export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userReducer
  },
}, composeWithDevTools());
