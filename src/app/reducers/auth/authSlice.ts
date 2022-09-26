import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types';

type AuthState = {
  signedInUser: User | null;
  isSigningIn: boolean;
  isSigningOut: boolean;
  justSignedOut: boolean;
  justSignedIn: boolean;
};

const initialState: AuthState = {
  signedInUser: {
    username: 'washimon7',
    clientName: 'Miguel Coila',
  },
  isSigningIn: false,
  isSigningOut: false,
  justSignedOut: false,
  justSignedIn: true,
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
    signedOutSuccessfully: (
      state: AuthState,
      action: PayloadAction<boolean>,
    ) => {
      state.justSignedOut = action.payload;
    },
    signedInSuccessfully: (
      state: AuthState,
      action: PayloadAction<boolean>,
    ) => {
      state.justSignedIn = action.payload;
    },
  },
});

export const {
  signedIn,
  signedOut,
  setIsSigningIn,
  setIsSigningOut,
  signedOutSuccessfully,
  signedInSuccessfully,
} = authSlice.actions;

export default authSlice.reducer;
