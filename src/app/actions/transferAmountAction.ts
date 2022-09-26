import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { TransferForm } from '../../types';
import {
  setIsTransfering,
  transferedSuccessfully,
} from '../reducers/transfers/transfersSlice';
import { RootState } from '../store';

export const transferAmountAction = ({}: TransferForm): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async dispatch => {
    dispatch(setIsTransfering(true));
    try {
      dispatch(transferedSuccessfully(true));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsTransfering(true));
    }
  };
};
