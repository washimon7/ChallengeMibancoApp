import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTransfersAction } from '../../app/actions/getTransfersAction';
import { useEffect } from 'react';
export const useGetTransfers = () => {
  const dispatch = useAppDispatch();
  const { lastTransfers, isGettingLastTransfers } = useAppSelector(
    state => state.transfers,
  );

  useEffect(() => {
    dispatch(getTransfersAction());
  }, []);

  return { lastTransfers, isGettingLastTransfers };
};
