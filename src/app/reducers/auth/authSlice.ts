import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types';

type AuthState = {
  signedInUser: User | null;
  isSigningIn: boolean;
  isSigningOut: boolean;
};

const initialState: AuthState = {
  signedInUser: {
    username: 'washimon7',
    clientName: 'Miguel Coila',
  },
};

export const authSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    signedIn: (state: AuthState, action: PayloadAction<User>) => {
      state.signedInUser = action.payload;
    },
    signedOut: (state: AuthState) => {
      state.signedInUser = null;
    },
    setIsSigningIn: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isSigningIn = action.payload;
    },
    setIsSigningOut: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isSigningOut = action.payload;
    },
  },
});

export const { signedIn, signedOut, setIsSigningIn, setIsSigningOut } =
  authSlice.actions;

export default authSlice.reducer;
