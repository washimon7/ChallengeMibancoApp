import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Transfer } from '../../types';
import {
  gotLastTransfers,
  setIsGettingLastTransfers,
} from '../reducers/transfers/transfersSlice';
import { RootState } from '../store';

export const getTransfersAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async dispatch => {
    dispatch(setIsGettingLastTransfers(true));
    try {
      const response = await fetch(
        'https://transfer-project-313f8.web.app/transacciones.json',
      );
      const decodedData = await response.json();

      if (decodedData?.transacciones) {
        const transfers = decodedData.transacciones as Transfer[];

        dispatch(gotLastTransfers(transfers));
      }
      console.log({ decodedData });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsGettingLastTransfers(false));
    }
  };
};
