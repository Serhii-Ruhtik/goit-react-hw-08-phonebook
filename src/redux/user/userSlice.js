import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  logInUser,
  logOutUser,
  refreshCurrentUser,
  registerUser,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [registerUser.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [registerUser.pending](state) {
      state.isLoading = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logInUser.rejected](state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    [logInUser.pending](state) {
      state.isLoading = true;
    },
    [logOutUser.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [logOutUser.pending](state) {
      state.isLoading = true;
    },
    [refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: 'userSlice',
  storage,
  whitelist: ['token'],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
