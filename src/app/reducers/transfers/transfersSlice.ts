import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transfer } from '../../../types/index';

type TransfersState = {
  lastTransfers: Transfer[];
  isGettingLastTransfers: boolean;
  isTransfering: boolean;
  justTransfered: boolean;
};

const initialState: TransfersState = {
  lastTransfers: [],
  isGettingLastTransfers: false,
  isTransfering: false,
  justTransfered: false,
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
    setIsTransfering: (
      state: TransfersState,
      action: PayloadAction<boolean>,
    ) => {
      state.isTransfering = action.payload;
    },
    transferedSuccessfully: (
      state: TransfersState,
      action: PayloadAction<boolean>,
    ) => {
      state.justTransfered = action.payload;
    },
  },
});

export const {
  gotLastTransfers,
  setIsGettingLastTransfers,
  setIsTransfering,
  transferedSuccessfully,
} = transfersSlice.actions;

export default transfersSlice.reducer;
