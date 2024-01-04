import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://connections-api.herokuapp.com';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/signup`, userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`, {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logInUser = createAsyncThunk(
  'user/logIn',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`, {
        autoClose: 3000,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post(`${BASE_URL}/users/logout`);
      unsetToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.user.token;

    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(savedToken);
      const response = await axios.get(`${BASE_URL}/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
