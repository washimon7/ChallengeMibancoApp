import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { COLORS } from '../../../constants/index';
import { useSignOut } from '../../../hooks/auth/useSignOut';
import { DrawerProps } from '../../../types/mainTypes';

export const SignOutScreen = (props: DrawerProps) => {
  const { isSigningOut } = useSignOut(props);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.whiteColor1 }}>
      <Spinner
        visible={isSigningOut}
        textContent={'Saliendo...'}
        textStyle={{ color: COLORS.grayColor2 }}
      />
    </View>
  );
};
