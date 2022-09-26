import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transfer, TransferResponse } from '../../../types/index';

type TransfersState = {
  lastTransfers: Transfer[];
  isGettingLastTransfers: boolean;
  isTransfering: boolean;
  justTransfered: boolean;
  transferResponse: TransferResponse | null;
};

const initialState: TransfersState = {
  lastTransfers: [],
  isGettingLastTransfers: false,
  isTransfering: false,
  justTransfered: false,
  transferResponse: null,
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
    gotTransferResponse: (
      state: TransfersState,
      action: PayloadAction<TransferResponse>,
    ) => {
      state.transferResponse = action.payload;
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
  gotTransferResponse,
} = transfersSlice.actions;

export default transfersSlice.reducer;
