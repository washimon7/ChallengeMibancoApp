import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Transferencia: undefined;
  Transfer: undefined;
  Salir: undefined;
  JustTransfered: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  Root: undefined;
};

export type StackProps = NativeStackScreenProps<RootStackParamList>;
export type DrawerProps = DrawerScreenProps<RootDrawerParamList>;
