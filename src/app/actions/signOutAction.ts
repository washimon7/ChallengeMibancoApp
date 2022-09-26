import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  setIsSigningOut,
  signedOut,
  signedOutSuccessfully,
} from '../reducers/auth/authSlice';
import { RootState } from '../store';

export const signOutAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async dispatch => {
    dispatch(setIsSigningOut(true));
    try {
      const response = await simulateSignOut();
      if (response) {
        dispatch(signedOut());
        dispatch(signedOutSuccessfully(true));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsSigningOut(false));
    }
  };
};

const simulateSignOut = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
