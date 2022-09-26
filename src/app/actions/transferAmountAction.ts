import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Transfer, TransferForm, TransferResponse } from '../../types';
import {
  gotTransferResponse,
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
      const response = await fetch(
        'https://transfer-project-313f8.web.app/operacion.json',
      );
      const transferObj = (await response.json()) as TransferResponse;

      if (transferObj) {
        dispatch(gotTransferResponse(transferObj));
        dispatch(transferedSuccessfully(true));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsTransfering(true));
    }
  };
};
