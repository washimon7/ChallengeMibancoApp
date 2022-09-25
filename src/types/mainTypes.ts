import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Home: undefined;
  Exit: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  Root: undefined;
};

export type StackProps = NativeStackScreenProps<RootStackParamList>;
export type DrawerProps = DrawerScreenProps<RootDrawerParamList>;
