import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
  setIsSigningIn,
  signedInSuccessfully,
  signedIn,
} from '../reducers/auth/authSlice';
import { RootState } from '../store';
import { UserForm } from '../../types';

export const signInAction = ({}: UserForm): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async dispatch => {
    dispatch(setIsSigningIn(true));
    try {
      const response = await simulateSignIn();

      if (response) {
        dispatch(
          signedIn({ username: 'washimon7', clientName: 'Miguel Coila' }),
        );
        dispatch(signedInSuccessfully(true));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsSigningIn(true));
    }
  };
};

const simulateSignIn = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
