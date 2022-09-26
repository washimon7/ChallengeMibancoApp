export type User = {
  username: string;
  clientName: string;
};

export type Transfer = {
  cliente: string;
  monto: number;
  fechaoperacion: string;
};

export type TransferForm = {
  cellphoneNumber: string;
  amount: string;
};
