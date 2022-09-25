import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types';

type AuthState = {
  loggedInUser: User | null;
};

const initialState: AuthState = {
  loggedInUser: null,
};

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    loggedIn: (state: AuthState, action: PayloadAction<User>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { loggedIn } = authSlice.actions;

export default authSlice.reducer;
