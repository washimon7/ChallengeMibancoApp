import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TransferForm } from '../../types';
import { transferAmountAction } from '../../app/actions/transferAmountAction';
import { DrawerProps } from '../../types/mainTypes';
import { transferedSuccessfully } from '../../app/reducers/transfers/transfersSlice';

const initialState: TransferForm = {
  cellphoneNumber: '',
  amount: '',
};

export const useTransferAmount = ({ navigation }: DrawerProps) => {
  const dispatch = useAppDispatch();
  const { isTransfering, justTransfered } = useAppSelector(
    state => state.transfers,
  );
  const [transfer, setTransfer] = useState<TransferForm>(initialState);
  const canTransfer: boolean =
    transfer.amount !== '' && transfer.cellphoneNumber !== '';

  useEffect(() => {
    if (justTransfered) {
      navigation.jumpTo('JustTransfered');
      clearForm();
      dispatch(transferedSuccessfully(false));
    }
  }, [justTransfered]);

  useEffect(() => {
    return () => {
      clearForm();
    };
  }, []);

  const handleChange = (value: string, inputName: string) => {
    setTransfer({
      ...transfer,
      [inputName]: value,
    });
  };

  const doTransferAmount = () => {
    dispatch(transferAmountAction(transfer));
  };

  const clearForm = () => {
    setTransfer(initialState);
  };

  const cancelTransfer = () => {
    clearForm();
    navigation.jumpTo('Transferencia');
  };

  return {
    transfer,
    isTransfering,
    canTransfer,
    handleChange,
    doTransferAmount,
    cancelTransfer,
  };
};
