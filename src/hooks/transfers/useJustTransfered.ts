import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { transferedSuccessfully } from '../../app/reducers/transfers/transfersSlice';
import { DrawerProps } from '../../types/mainTypes';

export const useJustTransfered = ({ navigation }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const { transferResponse } = useAppSelector(state => state.transfers);

  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  const goToTransferencia = () => {
    resetState();
    navigation.jumpTo('Transferencia');
  };

  const resetState = () => {
    dispatch(transferedSuccessfully(false));
  };

  return { transferResponse, goToTransferencia };
};
