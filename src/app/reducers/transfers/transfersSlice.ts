import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transfer } from '../../../types/index';

type TransfersState = {
  lastTransfers: Transfer[];
  isGettingLastTransfers: boolean;
};

const initialState: TransfersState = {
  lastTransfers: [],
  isGettingLastTransfers: false,
};

export const transfersSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    gotLastTransfers: (
      state: TransfersState,
      action: PayloadAction<Transfer[]>,
    ) => {
      state.lastTransfers = action.payload;
    },
    setIsGettingLastTransfers: (
      state: TransfersState,
      action: PayloadAction<boolean>,
    ) => {
      state.isGettingLastTransfers = action.payload;
    },
  },
});

export const { gotLastTransfers, setIsGettingLastTransfers } =
  transfersSlice.actions;

export default transfersSlice.reducer;